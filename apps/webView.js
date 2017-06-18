define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.gotourlClick = function(event){
		//var path = this.comp("urlpath").val;
		var path = $("input[xid='urlpath']").val();
		if( path.indexOf("http://")>0 || path.indexOf("https://")>0)
		alert(path);
		else
			path = "http://" + path;
		this.getElementByXid("webframe").src = path;

	};

	return Model;
});