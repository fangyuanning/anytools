window.__justep.__ResourceEngine.loadCss([{url: '/v_162957090a894ea09aa0040f1578d71dl_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_9cec5bf619454a0e9be6686a7b4fdd8cl_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_ff87715c4eb94c0cb7d3c8f39bfb0fd1l_zh_CNs_d_m/system/core.min.js','/v_e7d226a5be494a269a0b5d882ec7595fl_zh_CNs_d_m/system/common.min.js','/v_31657933c30248c0b7ad1dd934c7dd0fl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
var __parent0=require('$model/UI2/anytools/apps/notepad/notepad'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cE3MNvu';
	this._flag_='803cc8e1c908d7e283c3387e81ec9606';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"comonent":{"define":"comonent","label":"备注","name":"comonent","relation":"comonent","type":"String"},"content":{"define":"content","label":"内容","name":"content","relation":"content","type":"String"},"date":{"define":"date","label":"日期","name":"date","relation":"date","type":"String"},"emtion":{"define":"emtion","label":"心情","name":"emtion","relation":"emtion","type":"String"},"important":{"define":"important","label":"重要程度","name":"important","relation":"important","type":"String"},"notifytime":{"define":"notifytime","label":"提醒时间","name":"notifytime","relation":"notifytime","rules":{"time":true},"type":"Time"},"show":{"define":"show","label":"是否显示","name":"show","relation":"show","rules":{"integer":true},"type":"Integer"},"title":{"define":"title","label":"标题","name":"title","relation":"title","type":"String"},"type":{"define":"type","label":"类型","name":"type","relation":"type","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","initData":"[{\"ID\":\"1\",\"type\":\"日记\",\"title\":\"心情不错\",\"content\":\"今天天气特别好，我非常高兴，非常舒服，谢谢。\",\"date\":\"2017-7-20\",\"comonent\":\"没啥\",\"notifytime\":\"10:20:30\",\"emtion\":\"2234\",\"password\":\"0\",\"important\":\"1\",\"show\":1}]","limit":20,"xid":"notedata"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"classs":{"define":"classs","label":"记事类型","name":"classs","relation":"classs","type":"String"}},"directDelete":false,"events":{},"idColumn":"classs","initData":"[{\"classs\":\"收入\"},{\"classs\":\"支出\"},{\"classs\":\"纪念\"},{\"classs\":\"日记\"}]","limit":20,"xid":"notetype"});
}}); 
return __result;});
