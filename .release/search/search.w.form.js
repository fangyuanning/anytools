define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/anytools/search'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cEviUR3';
	this._flag_='9ec031eb76c755365736608fb54395ef';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAppType":{"define":"fAppType","label":"类型","name":"fAppType","relation":"fAppType","type":"String"},"fID":{"define":"fID","label":"功能ID","name":"fID","relation":"fID","type":"String"},"fImageUrl":{"define":"fImageUrl","label":"图标","name":"fImageUrl","relation":"fImageUrl","type":"String"},"fName":{"define":"fName","label":"名称","name":"fName","relation":"fName","type":"String"},"fShow":{"define":"fShow","label":"是否显示","name":"fShow","relation":"fShow","type":"Boolean"},"support":{"define":"support","label":"支持平台(1a,2i,3all)","name":"support","relation":"support","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[{\"fID\":\"1\",\"fImageUrl\":\"g8.png\",\"fName\":\"calc\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"2\",\"fImageUrl\":\"f1.png\",\"fName\":\"lighting\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"3\",\"fImageUrl\":\"f10.png\",\"fName\":\"prize\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"4\",\"fImageUrl\":\"f2.png\",\"fName\":\"browseDir\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"5\",\"fImageUrl\":\"g10.png\",\"fName\":\"clockNotify\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"6\",\"fImageUrl\":\"g10.png\",\"fName\":\"gps\",\"fShow\":\"true\",\"support\":1},{\"fID\":\"7\",\"fImageUrl\":\"n16.png\",\"fName\":\"notepad\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"8\",\"fImageUrl\":\"q8.png\",\"fName\":\"oil\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"9\",\"fImageUrl\":\"n17.png\",\"fName\":\"recordAudio\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"10\",\"fImageUrl\":\"f9.png\",\"fName\":\"recordVideo\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"11\",\"fImageUrl\":\"n16.png\",\"fName\":\"hourseCalc\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"12\",\"fImageUrl\":\"n16.png\",\"fName\":\"scan\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"13\",\"fImageUrl\":\"n16.png\",\"fName\":\"audiocallphone\",\"fShow\":\"true\",\"support\":3}]","limit":20,"xid":"searchData"});
}}); 
return __result;});