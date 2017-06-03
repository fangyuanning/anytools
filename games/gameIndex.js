define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.backClick = function(event){

	};

	Model.prototype.modelParamsReceive = function(event){
		var path = this.getContext().getRequestParameter("path");
		this.getElementByXid("gameframe").src = path;
	};

	return Model;
});