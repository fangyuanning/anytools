define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/panel/panel');
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
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"功能ID","name":"fID","relation":"fID","type":"String"},"fImageUrl":{"define":"fImageUrl","label":"图标","name":"fImageUrl","relation":"fImageUrl","type":"String"},"fName":{"define":"fName","label":"名称","name":"fName","relation":"fName","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[{\"fID\":\"1\",\"fIcon\":\"./anytools/resource/img/g8.png\",\"fName\":\"消防\"},{\"fID\":\"2\",\"fIcon\":\"./anytools/resource/img/g8.png\",\"fName\":\"我是\"},{\"fID\":\"3\",\"fIcon\":\"./anytools/resource/img/g8.png\",\"fName\":\"你好\"},{\"fID\":\"4\",\"fIcon\":\"./anytools/resource/img/g8.png\",\"fName\":\"电灯\"},{\"fID\":\"5\",\"fIcon\":\"./anytools/resource/img/g8.png\",\"fName\":\"空气\"},{\"fID\":\"6\",\"fIcon\":\"./anytools/resource/img/g8.png\",\"fName\":\"笑声\"},{\"fID\":\"7\",\"fIcon\":\"./anytools/resource/img/g8.png\",\"fName\":\"恐惧\"},{\"fID\":\"8\",\"fIcon\":\"./anytools/resource/img/g8.png\",\"fName\":\"流量\"},{\"fID\":\"9\",\"fIcon\":\"./anytools/resource/img/g8.png\",\"fName\":\"信仰\"},{\"fID\":\"10\",\"fIcon\":\"./anytools/resource/img/g8.png\",\"fName\":\"幸运\"}]","limit":20,"xid":"usedData"});
}}); 
return __result;});