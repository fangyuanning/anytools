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
	
	
	Model.prototype.addUsed = function(){
        //将detail数据组件中的图片地址加载到新生成content中的img空间中
            var self=this;
            var i = 99;
 var addContent = self.comp('usedRow');
                   for(var j=0; j<10; j++)
                   {
                    var div = $("<div xid='col"+i+"' class='col cell col-xs-3 col-sm-2 col-md-2 col-lg-1'><div class='card' xid='carddiv"+i+"'><img src='"+require.toUrl("$UI/anytools/resource/img/g8.png")+"'  xid='image"+i+"' style='width:80px'></img><span class='title' xid='spantxt"+i+"'>下载</span></div></div>");
                    justep.Bind.addNodes(addContent.domNode, div);
                    i = i+1;
                    }
            this.comp('usedData').each(function(param){
            alert("99");
                    var addContent = self.comp('usedRow');
                    alert(addContent);
                    var div = $("<div xid='col"+i+"' class='col cell col-xs-3 col-sm-2 col-md-2 col-lg-1'><div class='card‘ xid='carddiv"+i+"'><img src='"+Model.prototype.toUrl(param.row.val("fImageUrl"))+"'  xid='image"+i+"' class='m-img' style='width:80px'></img><span class='title' xid='spantxt"+i+"'>下载</span></div></div>");
                    justep.Bind.addNodes(addContent.domNode, div);
                    
            this.comp("usedData").to(0);
        });
	};

	Model.prototype.modelLoad = function(event){
		this.addUsed();
	};

	return Model;
})