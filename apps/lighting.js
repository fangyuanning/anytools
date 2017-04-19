define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!cordova-plugin-flashlight");

	var Model = function(){
		this.callParent();
		this.flashHZ = 5;
		
		document.addEventListener("backbutton", function() {
		  // pass exitApp as callbacks to the switchOff method
		  window.plugins.flashlight.switchOff(exitApp, exitApp);
		}, false);
		

	};
	
	function exitApp() {
		
	}


	Model.prototype.openLightClick = function(event){
	
		window.plugins.flashlight.toggle(
		  function() {}, // optional success callback
		  function() {}, // optional error callback
		  {intensity: 0.3} // optional as well, used on iOS when switching on
		);
	};

	Model.prototype.flashClick	 = function(event){
		if( this.FlashInt )
		{
			clearInterval(this.FlashInt);
			this.FlashInt = null;
		}
		else
		{
			this.FlashInt = setInterval(function() {
			      window.plugins.flashlight.toggle(
			  function() {}, // optional success callback
			  function() {}, // optional error callback
			  {intensity: 0.3}) // optional as well, used on iOS when switching on
			    }, 1000/this.flashHZ);
		}
	};

	Model.prototype.carflashClick = function(event){
		if( this.carFlashInt )
		{
			clearInterval(this.carFlashInt);
			this.carFlashInt = null;
		}
		else
		{
			this.carFlashInt = setInterval(function() {
			      window.plugins.flashlight.toggle(
			  function() {}, // optional success callback
			  function() {}, // optional error callback
			  {intensity: 0.3}) // optional as well, used on iOS when switching on
			    }, 100);
		}
	};

	Model.prototype.flashRangeChange = function(event){
		this.flashHZ = this.getElementByXid("flashRange").value;

		this.getElementByXid("flashhz").innerHTML = this.flashHZ + " hz";
		
		if( this.FlashInt )
		{
			clearInterval(this.FlashInt);
			this.FlashInt = setInterval(function() {
			      window.plugins.flashlight.toggle(
			  function() {}, // optional success callback
			  function() {}, // optional error callback
			  {intensity: 0.3}) // optional as well, used on iOS when switching on
			    }, 1000/this.flashHZ);
		}
	};

	Model.prototype.modelLoad = function(event){
		this.getElementByXid("flashRange").value = this.flashHZ;
		this.getElementByXid("flashhz").innerHTML = this.flashHZ + " hz";
		this.openLightClick();
	};

	Model.prototype.modelUnLoad = function(event){
		 window.plugins.flashlight.switchOff(exitApp, exitApp);
	};

	return Model;
});