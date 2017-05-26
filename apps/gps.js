define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!com.anytools.cordoa.plugin.gps");
	var gpsdata;
	var locationdata;
	var oldgpsinfo;
	var locationcol;
	//var showgpsinfo;
	var gpslist;

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		gpsdata = this.comp("gpsstatus");
		locationdata = this.comp("locationdata");
		locationcol = this.getElementByXid("locationcol");
		//showgpsinfo = this.getElementByXid("showgpsinfo");
		gpslist = this.comp("gpslist");
		window.plugins.GpsStatus.GetGpsStatus("gps", this.gpsListen, this.gpsError);
		this.onTimerRefresh();
		
	};
	
	Model.prototype.onTimerRefresh = function(){
		window.plugins.GpsStatus.GetGpsStatusInfo("gps", this.gpsStatusChange, this.gpsError);
		window.plugins.GpsStatus.GetLocationInfo("gps", this.gpsLocationChange, this.gpsError);
	
	};

	Model.prototype.gpsListen = function(gpsinfo){
		
	};
	
	Model.prototype.gpsStatusChange = function(gpsinfo){
		if( gpsinfo && oldgpsinfo != gpsinfo)
		{
			oldgpsinfo = gpsinfo;
			gpsdata.clear();
			gpsdata.loadData(JSON.parse(gpsinfo));
		}
	};
	
	Model.prototype.gpsLocationChange = function(gpsinfo){
		locationdata.clear();
		locationdata.loadData(JSON.parse(gpsinfo));
	
	};
	
	Model.prototype.gpsError = function(error){
		justep.Util.hint(error);
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

	Model.prototype.gpsstatusCustomRefresh = function(event){

	};

	Model.prototype.modelUnLoad = function(event){
		this.backBtnClick(null);
	};
	
	Model.prototype.getCountryIcon = function(sign){
		if(sign == 1)
			return require.toUrl("$UI/anytools/resource/img/usa.png");
		else if(sign == 2)
			return require.toUrl("$UI/anytools/resource/img/usa.png");
		else if(sign == 3)
			return require.toUrl("$UI/anytools/resource/img/cn.png");
		else 
			return require.toUrl("$UI/anytools/resource/img/usa.png");
	};

	return Model;
});