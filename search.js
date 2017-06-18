define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
		var partenW = window.parent;
        var parentDiv = partenW.document.getElementById('ContextMainId');                    //父窗口中定义的div
        this.parentModel = partenW.justep.Bind.contextFor(parentDiv).$model;  
	};

	Model.prototype.modelParamsReceive = function(event){

	};
	
	Model.prototype.getAppIconPath = function(namePath){
		return require.toUrl("$UI/anytools/resource/img/" + namePath );
	};

	Model.prototype.mediacolClick = function(event){         
        this.parentModel.DoGameAction("games/Justdo/Index.html");  //父窗口model中定义的函数
	};

	Model.prototype.searchAppBtnClick = function(event){
		var txt = this.comp("appinput").val();
		if( txt && txt.length > 0){
			this.parentModel.searchAppAndGame(txt,"app");
		}
	};

	Model.prototype.searchGameBtnClick = function(event){
		var txt = this.comp("gameinput").val();
		if( txt && txt.length > 0){
			this.parentModel.searchAppAndGame(txt,"game");
		}
	};

	return Model;
});