define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.useOrginDataToggleChange = function(event){
		var setting = window.anysetting||{};
		setting.useOriginData = this.comp("useOrginDataToggle").value;
	};

	Model.prototype.modelLoad = function(event){
		var setting = window.anysetting||{};
		if( setting && setting.useOriginData)
			this.comp("useOrginDataToggle").value = setting.useOriginData;
	};

	return Model;
});