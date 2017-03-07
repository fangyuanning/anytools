define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};
	//打开左侧设置
	Model.prototype.settingBtnClick = function(event){
		justep.Shell.showLeft();
	};
	

	Model.prototype.allContentActive = function(event){

	};
	

	Model.prototype.ownContentActive = function(event){

	};
	

	Model.prototype.contentsActiveChange = function(event){

	};
	

	return Model;
});