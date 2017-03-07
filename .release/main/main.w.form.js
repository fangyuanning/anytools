define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
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
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"功能ID","name":"fID","relation":"fID","type":"String"},"fIcon":{"define":"fIcon","label":"图标","name":"fIcon","relation":"fIcon","type":"String"},"fName":{"define":"fName","label":"名称","name":"fName","relation":"fName","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[{\"fID\":\"1\",\"fIcon\":\"\",\"fName\":\"消防\"},{\"fID\":\"2\",\"fName\":\"我是\"},{\"fID\":\"3\",\"fIcon\":\"\",\"fName\":\"你好\"},{\"fID\":\"4\",\"fName\":\"电灯\"},{\"fID\":\"5\",\"fName\":\"空气\"},{\"fID\":\"6\",\"fName\":\"笑声\"},{\"fID\":\"7\",\"fName\":\"恐惧\"},{\"fID\":\"8\",\"fName\":\"流量\"},{\"fID\":\"9\",\"fName\":\"信仰\"},{\"fID\":\"10\",\"fName\":\"幸运\"}]","limit":20,"xid":"usedData"});
}}); 
return __result;});