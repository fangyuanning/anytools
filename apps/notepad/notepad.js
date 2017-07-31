define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelActive = function(event){

	};

	Model.prototype.modelInactive = function(event){
//alert(this.comp("checkbox1"));
	};

	Model.prototype.modelModelConstruct = function(event){

	};

	Model.prototype.modelModelConstructDone = function(event){
//alert(this.comp("checkbox1"));
	};

	Model.prototype.modelLoad = function(event){
//this.comp("checkbox1").set({"checked": true});
	};

	Model.prototype.modelParamsReceive = function(event){
//alert(this.comp("checkbox1"));
	};

	Model.prototype.modelUnLoad = function(event){
//alert(this.comp("checkbox1"));
	};

	Model.prototype.checkbox1Change = function(event){

	};

	Model.prototype.okBtnClick = function(event){

	};

	Model.prototype.addBtnClick = function(event){
		justep.Shell.showPage("notedit");
	};

	Model.prototype.button1Click = function(event){
		justep.Shell.showPage("notetype");
	};
	
	Model.prototype.getFaceUrl = function(event){
		//justep.Shell.showPage("notetype");
		return "";
	};

	return Model;
});