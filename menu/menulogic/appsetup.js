define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.useOrginDataToggleChange = function(event){
		window.anysetting.useOriginData = this.comp("useOrginDataToggle").value;
		this.onSettinChange();
	};

	Model.prototype.modelLoad = function(event){
		if( window.anysetting && window.anysetting.useOriginData)
			this.comp("useOrginDataToggle").set({checked:window.anysetting.useOriginData});
	};
	
	Model.prototype.onSettinChange = function(){
		window.globalmodel.index.saveSetting();
	};
	return Model;
});