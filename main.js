define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");


	var Model = function(){
		this.callParent();
		this.allToolsLoaded = false;
	};
	//打开左侧设置
	Model.prototype.settingBtnClick = function(event){
		justep.Shell.showLeft();
	};
	

	Model.prototype.allContentActive = function(event){
		if( this.allToolsLoaded === false){
			this.addTools("usedData","allRow",10);
			this.allToolsLoaded = true;
		}
	};
	

	Model.prototype.ownContentActive = function(event){

	};
	

	Model.prototype.contentsActiveChange = function(event){

	};
	
	
	Model.prototype.addTools = function(dataName,rowName){
        //将detail数据组件中的图片地址加载到新生成content中的img空间中
            var self=this;

            this.comp(dataName).each(function(param){
                var addContent = self.comp(rowName);
                var i = param.row.val("fID");
                var div = $("<div xid='action"+ i +"' class='col cell col-xs-3 col-sm-2 col-md-2 col-lg-1' data-bind = 'event:{click:$model._callModelFn.bind($model, OnClickApp)}' ><div class='card' xid='carddiv"+i+"'><img src='"+require.toUrl("$UI/anytools/resource/img/" +param.row.val("fImageUrl") )+"'  xid='image"+i+"' style='width:60px'></img><span class='title' xid='spantxt"+i+"'>"+ window.localize.getLocalize(param.row.val("fName")) +"</span></div></div>");
                justep.Bind.addNodes(addContent.domNode, div);

              } ); 
   
            this.comp(dataName).to(0);
	};

	Model.prototype.modelLoad = function(event){
		this.addTools("usedData","usedRow",1);
		//this.addEventListner();
	};
	
	Model.prototype.addEventListner = function(){
		//window.document.addEventListener("pause", this.OnPause);
	};
	
	Model.prototype.OnPause = function(){
		
	};
	
	Model.prototype.OnClickApp = function(event){
		var arr = event.currentTarget.id.split('_');
		var actionId = arr[1].substring(6);
		this.DoAction(actionId);
	};
	
	Model.prototype.DoAction = function(actionId){
		var actionFun = new Array();
		actionFun[1] = "calc";
		actionFun[2] = "lighting";
		actionFun[3] = "prize";
		actionFun[4] = "browseDir";
		actionFun[5] = "clockNotify";
		actionFun[6] = "gps";
		actionFun[7] = "notepad";
		actionFun[8] = "oil";
		actionFun[9] = "recordAudio";
		actionFun[10] = "recordVideo";
		actionFun[11] = "hourseCalc";

		justep.Shell.showPage(actionFun[actionId]);
	};
	

	return Model;
});