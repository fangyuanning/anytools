define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!phonegap-plugin-barcodescanner");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelActive = function(event){
		//var me = this;
		
	};

	Model.prototype.modelLoad = function(event){
		function onSuccess(result) {
			alert(result);
		}
		
		function onError(error) {
			alert(error);
		}
		cordova.plugins.barcodeScanner.scan(onSuccess, onError);
	};

	return Model;
});