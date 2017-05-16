define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!com.anytools.cordoa.plugin.gps");
	var gpsdata;
	var oldgpsinfo;
	var locationcol;

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		gpsdata = this.comp("gpsstatus");
		locationcol = this.getElementByXid("locationcol");
		window.plugins.GpsStatus.GetGpsStatus("gps", this.gpsListen, this.gpsError);
		this.onTimerRefresh();
		
	};
	
	Model.prototype.onTimerRefresh = function(){
		window.plugins.GpsStatus.GetGpsStatusInfo("gps", this.gpsStatusChange, this.gpsError);
		window.plugins.GpsStatus.GetLocationInfo("gps", this.gpsLocationChange, this.gpsError);
	
	};

	Model.prototype.gpsListen = function(gpsinfo){
		alert("gpsListen" + gpsinfo);
	};
	
	Model.prototype.gpsStatusChange = function(gpsinfo){
		if( gpsinfo && oldgpsinfo != gpsinfo)
		{
			oldgpsinfo = gpsinfo;
			gpsdata.clear();
			gpsdata.loadData(gpsinfo);
		}
	};
	
	Model.prototype.gpsLocationChange = function(gpsinfo){
		if( gpsinfo )
			locationcol.innerHTML = gpsinfo;
	
	};
	
	Model.prototype.gpsError = function(error){
		alert("error: " + error);
	};

	Model.prototype.backBtnClick = function(event){
		window.plugins.GpsStatus.Close("",function(){}, function(){});
		justep.Shell.closePage();
		
	};

	Model.prototype.modelModelConstructDone = function(event){
		this.onTimerRefresh();
	};

	Model.prototype.modelParamsReceive = function(event){

	};

	return Model;
});