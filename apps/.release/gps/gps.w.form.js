define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/anytools/apps/gps'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cBzui6r';
	this._flag_='2a1400a8bde94c4bf413a9ec9d19d864';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"azimuth":{"define":"azimuth","label":"方位角","name":"azimuth","relation":"azimuth","type":"String"},"elevation":{"define":"elevation","label":"高度角","name":"elevation","relation":"elevation","type":"String"},"prn":{"define":"prn","label":"ID","name":"prn","relation":"prn","type":"String"},"snr":{"define":"snr","label":"信噪比","name":"snr","relation":"snr","type":"String"}},"directDelete":false,"events":{},"idColumn":"prn","limit":20,"xid":"gpsstatus"});
}}); 
return __result;});