define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/anytools/main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cB7FBJn';
	this._flag_='e7bfb13c6dd6a875ba43bd3e151ad791';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"功能ID","name":"fID","relation":"fID","type":"String"},"fImageUrl":{"define":"fImageUrl","label":"图标","name":"fImageUrl","relation":"fImageUrl","type":"String"},"fName":{"define":"fName","label":"名称","name":"fName","relation":"fName","type":"String"},"fShow":{"define":"fShow","label":"是否显示","name":"fShow","relation":"fShow","type":"Boolean"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[{\"fID\":\"1\",\"fImageUrl\":\"g8.png\",\"fName\":\"calc\",\"fShow\":\"true\"},{\"fID\":\"2\",\"fImageUrl\":\"f1.png\",\"fName\":\"lighting\",\"fShow\":\"true\"},{\"fID\":\"3\",\"fImageUrl\":\"f10.png\",\"fName\":\"prize\",\"fShow\":\"true\"},{\"fID\":\"4\",\"fImageUrl\":\"f2.png\",\"fName\":\"browseDir\",\"fShow\":\"true\"},{\"fID\":\"5\",\"fImageUrl\":\"g10.png\",\"fName\":\"clockNotify\",\"fShow\":\"true\"},{\"fID\":\"6\",\"fImageUrl\":\"g10.png\",\"fName\":\"gps\",\"fShow\":\"true\"},{\"fID\":\"7\",\"fImageUrl\":\"n16.png\",\"fName\":\"notepad\",\"fShow\":\"true\"},{\"fID\":\"8\",\"fImageUrl\":\"q8.png\",\"fName\":\"oil\",\"fShow\":\"true\"},{\"fID\":\"9\",\"fImageUrl\":\"n17.png\",\"fName\":\"recordAudio\",\"fShow\":\"true\"},{\"fID\":\"10\",\"fImageUrl\":\"f9.png\",\"fName\":\"recordVideo\",\"fShow\":\"true\"},{\"fID\":\"11\",\"fImageUrl\":\"n16.png\",\"fName\":\"hourseCalc\",\"fShow\":\"true\"},{\"fID\":\"12\",\"fImageUrl\":\"n16.png\",\"fName\":\"scan\",\"fShow\":\"true\"},{\"fID\":\"13\",\"fImageUrl\":\"n16.png\",\"fName\":\"audiocallphone\",\"fShow\":\"true\"}]","limit":20,"xid":"usedData"});
}}); 
return __result;});