define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!com.anytools.cordoa.plugin.gps");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		window.plugins.GpsStatus.GetGpsStatus("gps", this.gpsStatusChange, this.gpsError);
	};
	
	Model.prototype.gpsStatusChange = function(gpsinfo){
	alert(gpsinfo);
	this.comp("gpsstatus").clear();
	
	};
	
	Model.prototype.gpsError = function(error){
		alert(error);
	};

	return Model;
});