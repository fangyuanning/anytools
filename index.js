define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	require("cordova!cordova-plugin-globalization");
	require("$UI/anytools/appVersionChecker");
	
	var Model = function() {
		this.callParent();
		this.STORE_SETTING = "AnyTools_SETTING";
		this.localizeInit();
		this.shellImpl = new ShellImpl(this, {
			contentsXid : "pages",
			wingXid : "wing",
			pageMappings : {
				"main" : {
					url : require.toUrl('./main.w')
				},
				"left":{
					url : require.toUrl('./menu/left2.w')
				},
				"search" : {
					url : require.toUrl('./search.w')
				},
				"lighting" : {
					url : require.toUrl('./apps/lighting.w')
				},
				"clockNotify" : {
					url : require.toUrl('./apps/clockNotify.w')
				},
				"gps" : {
					url : require.toUrl('./apps/gps.w')
				},
				"notepad" : {
					url : require.toUrl('./apps/notepad/notepad.w')
				},
				"notetype" : {
					url : require.toUrl('./apps/notepad/notetype.w')
				},
				"notedit" : {
					url : require.toUrl('./apps/notepad/notedit.w')
				},
				"oil" : {
					url : require.toUrl('./apps/oil.w')
				},
				"recordAudio" : {
					url : require.toUrl('./apps/prize.w')
				},
				"recordVideo" : {
					url : require.toUrl('./apps/recordVideo.w')
				},
				"calc" : {
					url : require.toUrl('./apps/calc/calc.w')
				},
				"browseDir" : {
					url : require.toUrl('./apps/browseDir.w')
				},
				"hourseCalc" : {
					url : require.toUrl('./apps/hourseCalc.w')
				},
				"prize" : {
					url : require.toUrl('./apps/prize/prize.w')
				},
				"scan" : {
					url : require.toUrl('./apps/scan.w')
				},
				"audiocallphone" : {
					url : require.toUrl('./apps/audioCallPhone.w')
				},
				"pdfviewer" : {
					url : require.toUrl('./apps/pdfviewer.w')
				},
				"webview" : {
					url : require.toUrl('./apps/webView.w')
				},
				"gameIndex" : {
					url : require.toUrl('./games/gameIndex.w')
					
				}
				
			}
		});
	};
	//所有的文字都通过绑定来动态获取，从而实现国际化
	Model.prototype.localizeInit = function() {
		window.localize = function(){};
		window.localize.language = this.loadLanguage();
		window.localize.currentLanguage = this.getCurrentLanguage();
		window.localize.getLocalize = function (key)
		{
			if(window.localize.language !== "" && window.localize.language[key]){
				
				return window.localize.language[key][window.localize.currentLanguage];
			}
			return "nokey_" + key;
		};
	};
	
	Model.prototype.loadLanguage = function() {
		var url = require.toUrl("./resource/json/language.json");
		$.ajaxSettings.async = false;
		var dataret;
		$.getJSON(url, function(data) {
			dataret = data;
		}); 
		return dataret;     
	};
	
	Model.prototype.getCurrentLanguage = function() {
	
		return "zh_CN";
	};
	

	Model.prototype.modelLoad = function(event) {
		this.loadSetting();
		this.setGlobal();
		justep.Shell.showPage("main");
		justep.Shell.loadPage("left");
	};
	
	Model.prototype.setGlobal = function() {
		window.globalmodel = {};
		window.globalmodel.index = this;
	};
	
	Model.prototype.loadSetting = function() {
		var str = localStorage.getItem(this.STORE_SETTING);
		window.anysetting = JSON.parse(str)||{};
	};
	
	Model.prototype.saveSetting = function() {
		localStorage.setItem(this.STORE_SETTING, JSON.stringify(window.anysetting));
	};
	
	Model.prototype.modelUnLoad = function(event){
		
	};


	return Model;
});