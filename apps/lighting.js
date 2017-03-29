define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!cordova-plugin-flashlight");

	var Model = function(){
		this.callParent();
		document.addEventListener("backbutton", function() {
		  // pass exitApp as callbacks to the switchOff method
		  window.plugins.flashlight.switchOff(exitApp, exitApp);
		}, false);
		
		function exitApp() {
		  navigator.app.exitApp();
		}
	};


	Model.prototype.openLightClick = function(event){
	
		window.plugins.flashlight.toggle(
		  function() {}, // optional success callback
		  function() {}, // optional error callback
		  {intensity: 0.3} // optional as well, used on iOS when switching on
		);
//		window.plugins.flashlight.available(function(isAvailable) {
//		  if (isAvailable) {
//		
//		    // switch on
//		    window.plugins.flashlight.switchOn(
//		      function() {}, // optional success callback
//		      function() {}, // optional error callback
//		      {intensity: 0.3} // optional as well
//		    );
//		
//		    // switch off after 3 seconds
//		    setTimeout(function() {
//		      window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
//		    }, 3000);
//		
//		  } else {
//		    alert("Flashlight not available on this device");
//		  }
//		});
	};

	return Model;
});