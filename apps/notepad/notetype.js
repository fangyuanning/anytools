define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.getBodyHtml = function(){
		if(window.notedit)
			return window.notedit.body;
		else
			return "请勿刷新！";
	};
	
	Model.prototype.getTitle = function(){
		if(window.notedit)
			return window.notedit.title;
		else
			return "请勿刷新！";
	};
	
	Model.prototype.getIm = function(){
		if(window.notedit)
			return window.notedit.im;
		else
			return "请勿刷新！";
	};
	
	Model.prototype.getDate = function(){
		if(window.notedit)
			return window.notedit.date;
		else
			return "请勿刷新！";
	};
	
	Model.prototype.backbuttonClick = function(event){
		justep.Shell.closePage();
	};
	
	return Model;
});