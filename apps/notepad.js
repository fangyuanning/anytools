define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelActive = function(event){
	alert(this.comp("checkbox1"));
		window.open("http://www.baidu.com",'_system');
	};

	Model.prototype.modelInactive = function(event){
//alert(this.comp("checkbox1"));
	};

	Model.prototype.modelModelConstruct = function(event){
//alert(this.comp("checkbox1"));
window.open("http://www.baidu.com",'_system');
	};

	Model.prototype.modelModelConstructDone = function(event){
//alert(this.comp("checkbox1"));
	};

	Model.prototype.modelLoad = function(event){
this.comp("checkbox1").set({"checked": true});
	};

	Model.prototype.modelParamsReceive = function(event){
//alert(this.comp("checkbox1"));
	};

	Model.prototype.modelUnLoad = function(event){
//alert(this.comp("checkbox1"));
	};

	Model.prototype.checkbox1Change = function(event){

	};

	return Model;
});