window.__justep.__ResourceEngine.loadCss([{url: '/v_315bb301de4e4c1bb45267b3bd0d43e5l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_b1681829fcb3480abc1c766caf0d914bl_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_a5d17ee77515494394c95dc5b7fac301l_zh_CNs_d_m/system/core.min.js','/v_68629b516ea24e83883d2c5b53fd3a6al_zh_CNs_d_m/system/common.min.js','/v_046ee0aac7ff4a349c49386cef48d4f3l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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