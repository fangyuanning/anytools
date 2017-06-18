define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");


	var Model = function(){
		this.callParent();
		this.allToolsLoaded = false;
		this.STORE_APPCLASSDATA = "STORE_APPCLASSDATA";
		this.STORE_COMMONCLASSDATA = "STORE_COMMONCLASSDATA";
	};
	//打开左侧设置
	Model.prototype.settingBtnClick = function(event){
		justep.Shell.showLeft();
	};
	

	Model.prototype.allContentActive = function(event){
//		if( this.allToolsLoaded === false){
//			this.addTools("usedData","allRow",10);
//			this.allToolsLoaded = true;
//		}
	};
	

	Model.prototype.ownContentActive = function(event){

	};
	

	Model.prototype.contentsActiveChange = function(event){

	};
	
	
	Model.prototype.addTools = function(dataName,rowName){
        //将detail数据组件中的图片地址加载到新生成content中的img空间中
        var self=this;
        var addContent = self.comp(rowName);
        var childs = addContent.domNode.childNodes; 
		for(var i = childs.length - 1; i >= 0; i--){ 
			addContent.domNode.removeChild(childs[i]); 
		}
        this.comp(dataName).each(function(param){
	        var i = param.row.val("fID");
	        var div = $("<div xid='action"+ i +"' class='col cell col-xs-3 col-sm-2 col-md-2 col-lg-1' data-bind = 'event:{click:$model._callModelFn.bind($model, OnClickApp)}' ><div class='card' xid='carddiv"+i+"'><img src='"+require.toUrl("$UI/anytools/resource/img/" +param.row.val("fImageUrl") )+"'  xid='image"+i+"' style='width:60px'></img><span class='title' xid='spantxt"+i+"'>"+ window.localize.getLocalize(param.row.val("fName")) +"</span></div></div>");
	            justep.Bind.addNodes(addContent.domNode, div);
	
	    } ); 
   
        this.comp(dataName).to(0);
	};
	
	Model.prototype.addGames = function(dataName,rowName){
        //将detail数据组件中的图片地址加载到新生成content中的img空间中
        var self=this;
        var addContent = self.comp(rowName);
        var childs = addContent.domNode.childNodes; 
		for(var i = childs.length - 1; i >= 0; i--){ 
			addContent.domNode.removeChild(childs[i]); 
		}
        this.comp(dataName).each(function(param){
	        var i = param.row.val("fID");
	        var div = $("<div xid='action"+ i +"' class='col cell col-xs-3 col-sm-2 col-md-2 col-lg-1' data-bind = 'event:{click:$model._callModelFn.bind($model, OnClickGame)}' ><div class='card' xid='carddiv"+i+"'><img src='"+require.toUrl("$UI/anytools/resource/img/" +param.row.val("fImageUrl") )+"'  xid='image"+i+"' style='width:60px'></img><span class='title' xid='spantxt"+i+"'>"+ window.localize.getLocalize(param.row.val("fName")) +"</span></div></div>");
	            justep.Bind.addNodes(addContent.domNode, div);
	
	    } ); 
   
        this.comp(dataName).to(0);
	};

	Model.prototype.modelLoad = function(event){
		this.loadDataStore();
		this.updateUsedData();
		this.updateGameData();
		//this.addEventListner();
	};
	
	Model.prototype.updateUsedData = function(){
		this.addTools("usedData","usedRow",1);
	};
	
	Model.prototype.updateGameData = function(){
		this.addGames("gameData","gameRow",1);
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
	
	Model.prototype.OnClickGame = function(event){
		var arr = event.currentTarget.id.split('_');
		var actionId = arr[1].substring(6);
		var row = this.comp("gameData").find(["fID"], actionId);
		justep.Shell.showPage("games/gameIndex.w?path=" +row[0].val("fSrcPath"));

	};
	
	Model.prototype.DoGameAction = function(srcpath){
		justep.Shell.showPage("games/gameIndex.w?path=" + srcpath);
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
		actionFun[12] = "scan";
		actionFun[13] = "audiocallphone";
		actionFun[14] = "pdfviewer";
		actionFun[15] = "webview";

		justep.Shell.showPage(actionFun[actionId]);
	};
	
	Model.prototype.getAppIconPath = function(namePath){
		return require.toUrl("$UI/anytools/resource/img/" + namePath );
	};
	
	Model.prototype.getAddCommonBtnName = function(val){
		if( val == "true" ){
			return window.localize.getLocalize("delete");
		}
		else{
			return window.localize.getLocalize("add");
		}
	};
	

	Model.prototype.mediacolClick = function(event){
		var row = event.bindingContext.$object;
		this.DoAction(row.val("fID"));
	};
	

	Model.prototype.mediadetailClick = function(event){
		var row = event.bindingContext.$object;
		this.DoAction(row.val("fID"));
	};
	

	Model.prototype.showCheckChange = function(event){
		var row = event.bindingContext.$object;
		row.val("fCheckBox",event.source.value.toString());
	};
	
	Model.prototype.loadDataStore = function(){
		try{
			var appdata = JSON.parse(localStorage.getItem(this.STORE_APPCLASSDATA));
			var commondata = JSON.parse(localStorage.getItem(this.STORE_COMMONCLASSDATA));
			if(appdata)
				this.comp("allAppData").loadData(appdata);
			if(commondata){
				this.comp("usedData").loadData(commondata,false);
			}
		}catch(e){
		alert(e);
		}
		
	};
	
	Model.prototype.saveDataStore = function(){
		var alldata = this.comp("allAppData").toJson();
		localStorage.setItem(this.STORE_APPCLASSDATA, JSON.stringify(alldata));
		alldata = this.comp("usedData").toJson();
		localStorage.setItem(this.STORE_COMMONCLASSDATA, JSON.stringify(alldata));
	};
	
	
	

	Model.prototype.btnaddappClick = function(event){
		var row = event.bindingContext.$object;
		if( row.val("addcommon") == "true" ){
			row.val("addcommon","false");
			var uData = this.comp("usedData");
			var delrow = uData.find(["fID"],[row.val("fID")]);
			
			var confirmDelete = uData.confirmDelete;
			var directDeleteMode = uData.directDeleteMode;
			try{
			 uData.confirmDelete = false;
			 uData.directDeleteMode = true;
			 uData.deleteData(delrow);
			}finally{
			  uData.confirmDelete = confirmDelete;
			  uData.directDeleteMode = directDeleteMode;
			}
			justep.Util.hint(window.localize.getLocalize("deletetocomon_succ"));
			
		}else{
			row.val("addcommon","true");
			this.comp("usedData").add(
			{
			"fID":row.val("fID"),
			"fImageUrl":row.val("fImageUrl"),
			"fName":row.val("fName"),
			"fShow":row.val("fShow"),
			"support":row.val("support")
			}
			);
			
			justep.Util.hint(window.localize.getLocalize("addtocomon_succ"));
		}
		this.updateUsedData();
		this.saveDataStore();
	};
	

	Model.prototype.searchbtnClick = function(event){
		justep.Shell.showPage("search");

	};
	
	Model.prototype.searchAppAndGame = function(key,type){
		if( type == "app"){
		
		}else{
		
		}
	};
	

	return Model;
});