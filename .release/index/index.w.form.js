define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/wing/wing');
require('$model/UI2/system/components/justep/wing/child');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/anytools/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cnyyMZf';
	this._flag_='60146a2336b63fa758e9d44abeb0e641';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"en":{"define":"en","label":"英文","name":"en","relation":"en","type":"String"},"key":{"define":"key","label":"key","name":"key","relation":"key","type":"String"},"zh_CN":{"define":"zh_CN","label":"中文","name":"zh_CN","relation":"zh_CN","type":"String"}},"directDelete":false,"events":{},"idColumn":"key","limit":20,"xid":"langData"});
}}); 
return __result;});