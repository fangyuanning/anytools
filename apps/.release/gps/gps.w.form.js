define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/bootstrap/progress/progress');
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
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"azimuth":{"define":"azimuth","label":"方位角","name":"azimuth","relation":"azimuth","rules":{"number":true},"type":"Decimal"},"country":{"define":"country","label":"国家","name":"country","relation":"country","rules":{"integer":true},"type":"Integer"},"elevation":{"define":"elevation","label":"高度角","name":"elevation","relation":"elevation","rules":{"number":true},"type":"Decimal"},"prn":{"define":"prn","label":"ID","name":"prn","relation":"prn","rules":{"number":true},"type":"Decimal"},"snr":{"define":"snr","label":"信噪比","name":"snr","relation":"snr","rules":{"number":true},"type":"Decimal"}},"directDelete":false,"events":{"onCustomRefresh":"gpsstatusCustomRefresh"},"idColumn":"prn","initData":"[{\"prn\":2,\"azimuth\":\"20\",\"elevation\":\"30\",\"snr\":\"60\",\"country\":1}]","limit":20,"xid":"gpsstatus"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"accuracy":{"define":"accuracy","name":"accuracy","relation":"accuracy","rules":{"number":true},"type":"Decimal"},"bearing":{"define":"bearing","label":"偏北方向角","name":"bearing","relation":"bearing","rules":{"number":true},"type":"Decimal"},"lat":{"define":"lat","label":"经度","name":"lat","relation":"lat","rules":{"number":true},"type":"Decimal"},"lng":{"define":"lng","label":"维度","name":"lng","relation":"lng","rules":{"number":true},"type":"Decimal"},"speed":{"define":"speed","label":"速度","name":"speed","relation":"speed","type":"String"}},"directDelete":false,"events":{},"idColumn":"lat","limit":20,"xid":"locationdata"});
}}); 
return __result;});