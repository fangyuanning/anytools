define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var currentLang = "zh_CN";
	var langJsonData;
	var Model = function() {
	};
	Model.loadLanguage = function(relativePath, absoulatePath) {
		var url = absoulatePath;
		window.localize = this;
		if( relativePath ){
			url = require.toUrl(relativePath);
			$.ajaxSettings.async = false;
			$.getJSON(url, function(data) {
				langJsonData  = data;
			}); 
		}   
	};
	
	Model.getCurrentLanguage = function() {
	 var self = this;
                if (navigator.globalization) {
                        navigator.globalization.getPreferredLanguage(function(lang){
                                //alert(lang.value + ":" +url.getLanguage());
                                var url = new URL(window.location);
                                if (lang.value != url.getLanguage()){
                                        //self.openPage('$UI/VGR/index.w?language='+lang.value);
                                        //this.windowDialog1Open();
                                        url.setLanguage(lang.value);
                                        window.location.href = url.toString();
                                }
                        });
                }
                else {
                        //self.openBtnClick();
                        var url = new URL(window.location);
                        console.log("url ="+url.getLanguage() + " def=" + defLanguage);
                        if (url.getLanguage() != defLanguage && url.toString().indexOf(defLanguage) == -1) {
                                url.setLanguage(defLanguage);
                                url.setParam("language="+defLanguage);
                                //window.location.href = url.toString();
                        }
                        console.log("url ="+url.getLanguage() + " def=" + defLanguage);
                        console.log(url.toString().indexOf(defLanguage));
                        //
                }
		return "en";
	};
	
	Model.prototype.getLocalize = function (key)
	{
		if(langJsonData !== "" && langJsonData[key]){
			
			return langJsonData[key][currentLang];
		}
		return "nokey " + key;
	};
	
	
	return Model;
});