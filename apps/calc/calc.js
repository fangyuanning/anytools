define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!cordova-plugin-screen-orientation");

	var Model = function(){
		this.callParent();
		
	};


	Model.prototype.modelLoad = function(event){
		this.oldOrientation = window.screen.orientation;
		cordova.plugins.screenorientation.setOrientation('landscape');
	};




	Model.prototype.modelUnLoad = function(event){
		
	};




	Model.prototype.modelInactive = function(event){
		cordova.plugins.screenorientation.setOrientation(this.oldOrientation);
	};




	Model.prototype.modelActive = function(event){
		//alert("modelActive");
	};




	return Model;
});