window.__justep.__ResourceEngine.loadCss([{url: '/v_b53fb85c4107467bbb9f8966b2649c64l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_a1a8fd42bfc541739054ee63b72c19dal_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_d1a0a3d4c0f54cdaa0d4e6b93c8bd683l_zh_CNs_d_m/system/core.min.js','/v_42049b0f5025417cb9904c50952fb99al_zh_CNs_d_m/system/common.min.js','/v_0f4ed9747e4b48de8389b0bf0bff20c1l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
