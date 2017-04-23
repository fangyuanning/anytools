define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!phonegap-plugin-barcodescanner");
	require("cordova!com.verso.cordova.clipboard");
	
	var Model = function(){
		this.callParent();
		this.STORE_LIST = "anytools.scan.list";
		this.STORE_SETTING = "anytools.scan.set";
		
	};

	Model.prototype.modelActive = function(event){
		//var me = this;
		
	};

	Model.prototype.modelLoad = function(event){

		this.beginScan();
		this.comp("browseCheckBox").set({"checked": this.autoLoad});
		
		
	};
	
	Model.prototype.beginScan = function(event){
		var me = this;
		function onSuccess(result) {
		
			//me.comp("scanlist").newData({"scanurl": result.text});
			me.comp('address').set({"value": result.text});
			me.currentUrl = result.text;
			if(me.autoLoad){
				me.onScanResult(result.text);
			}
		}
		
		function onError(error) {
			justep.Util.hint(error);
		}

		cordova.plugins.barcodeScanner.scan(onSuccess, onError);
	};

	Model.prototype.openCheckBoxChange = function(event){
		this.autoLoad = this.comp("browseCheckBox").get("checked");
		alert(this.autoLoad);
		localStorage.setItem(this.STORE_SETTING, "{\"autoOpen\":" + this.autoLoad + "}");
		
	};

	Model.prototype.recordBtnClick = function(event){
		if(this.currentUrl){
			if( !this.comp("scanlist").find("scanurl", this.currentUrl) ){
				this.comp("scanlist").newData({scanurl: this.currentUrl});
			}
		}
		
	};

	Model.prototype.openBtnClick = function(event){
		if(this.currentUrl){
			this.onScanResult(this.currentUrl);
		}else{
			justep.Util.hint(window.localize.getLocalize("openNull"));
		}
	};

	Model.prototype.modelModelConstruct = function(event){
		var setting = JSON.parse(localStorage.getItem(this.STORE_SETTING));
		if(setting != null && setting.hasOwnProperty("autoOpen")){
			this.autoLoad = setting.autoOpen;
		}else{
			this.autoLoad = false;
		}
		//this.comp("browseCheckBox").set({"checked": this.autoLoad});
		
	};
	
	Model.prototype.onScanResult = function(url){
		window.open( url,'_system');
	};

	Model.prototype.deletelineClick = function(event){
		var me = this;
		var row = event.bindingContext.$object; 
		setTimeout(10,function(){
			me.comp("scanlist").remove(row);
		});
		
	};

	Model.prototype.clearAllClick = function(event){
		this.comp("scanlist").clear();
		localStorage.setItem(this.STORE_LIST, "");
	};

	Model.prototype.copyBtnClick = function(event){
		if(this.currentUrl){
			cordova.plugins.clipboard.copy(this.currentUrl,function(evt){
					justep.Util.hint("复制成功！");
				});
		}
	};

	Model.prototype.scanBtnClick = function(event){
		this.beginScan();
	};

	return Model;
});