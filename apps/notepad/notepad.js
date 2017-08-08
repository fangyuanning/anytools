define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.STORE_NOTEBOOKDATA = "STORE_NOTEBOOK";
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
		window.notedit={};
		window.notedit.save = this.saveData;
		window.notedit.self = this;
		
		try{
			var appdata = JSON.parse(localStorage.getItem(this.STORE_NOTEBOOKDATA));

			if(appdata){
				this.comp("notedata").loadData(appdata);
			}
		}catch(e){
		alert(e);
		}

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
		window.notedit.title = null;
		window.notedit.body = null;
		window.notedit.im = null;
		window.notedit.id =null;
		justep.Shell.showPage("notedit");
	};

	Model.prototype.button1Click = function(event){
		//justep.Shell.showPage("notetype");
	};
	
	Model.prototype.getFaceUrl = function(event){
		//justep.Shell.showPage("notetype");
		return "";
	};
	
	Model.prototype.saveData = function(id,title,body,im){
		if(id){
			var notedata = window.notedit.self.comp("notedata");
			var row = notedata.find(["ID"],[id]);
			if(row && row.length>0){
				notedata.setValue("title",title);
				notedata.setValue("content",body);
				notedata.setValue("important",im);
			}
		}else{
			window.notedit.self.comp("notedata").add({
			"title":title,
			"content":body,
			"important":im,
			"ID":window.notedit.self.getID(),
			"date":new Date().toLocaleString()
			});	
		}
		var alldata = window.notedit.self.comp("notedata").toJson();
		localStorage.setItem(window.notedit.self.STORE_NOTEBOOKDATA, JSON.stringify(alldata));
		justep.Shell.closePage("noteedit");
		justep.Shell.showPage("notepad");
	};

	Model.prototype.row1Click = function(event){
		var row = event.bindingContext.$object;
		window.notedit.title = row.val("title");
		window.notedit.body = row.val("content");
		window.notedit.im = row.val("important");
		window.notedit.date = row.val("date");
		
		justep.Shell.showPage("notetype");
		justep.Shell.closePage();
	};
	
	Model.prototype.canShow = function(row){
		return true;
	};
	
	Model.prototype.getIM = function(txt){
		return "<font color=red>" + window.localize.getLocalize("notedit_im" + txt) + "</color>";
	};

	Model.prototype.editbtnClick = function(event){
		var row = event.bindingContext.$object;
		window.notedit.title = row.val("title");
		window.notedit.body = row.val("content");
		window.notedit.im = row.val("important");
		window.notedit.id = row.val("ID");
		
		
		justep.Shell.showPage("notedit");
		justep.Shell.closePage();
	};
	
	Model.prototype.getID = function(){
		var date = new Date();
		return date.getTime();
	};

	return Model;
});