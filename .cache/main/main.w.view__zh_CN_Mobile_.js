window.__justep.__ResourceEngine.loadCss([{url: '/v_03cab0fc22094ea7bd66131aec4e7e2fl_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_5c91d799bb6a4a73a93310450e75fc8bl_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_2448ebb2dd834ccaa6e1bb084de03c9al_zh_CNs_d_m/system/components/comp2.min.js','/v_87ee645159934448ada6bc7d8a3e3415l_zh_CNs_d_m/system/core.min.js','/v_1cac34d9bd3f45be8124d99f342389cbl_zh_CNs_d_m/system/common.min.js','/v_99609fcf073e4848b5a3d13807d7375al_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/button/checkbox');
require('$model/UI2/system/components/justep/row/row');
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
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"功能ID","name":"fID","relation":"fID","type":"String"},"fImageUrl":{"define":"fImageUrl","label":"图标","name":"fImageUrl","relation":"fImageUrl","type":"String"},"fName":{"define":"fName","label":"名称","name":"fName","relation":"fName","type":"String"},"fShow":{"define":"fShow","label":"是否显示","name":"fShow","relation":"fShow","type":"Boolean"},"support":{"define":"support","label":"支持平台(1a,2i,3all)","name":"support","relation":"support","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[{\"fID\":\"1\",\"fImageUrl\":\"g8.png\",\"fName\":\"calc\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"2\",\"fImageUrl\":\"f1.png\",\"fName\":\"lighting\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"3\",\"fImageUrl\":\"f10.png\",\"fName\":\"prize\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"4\",\"fImageUrl\":\"f2.png\",\"fName\":\"browseDir\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"5\",\"fImageUrl\":\"g10.png\",\"fName\":\"clockNotify\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"6\",\"fImageUrl\":\"g10.png\",\"fName\":\"gps\",\"fShow\":\"true\",\"support\":1},{\"fID\":\"7\",\"fImageUrl\":\"n16.png\",\"fName\":\"notepad\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"8\",\"fImageUrl\":\"q8.png\",\"fName\":\"oil\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"9\",\"fImageUrl\":\"n17.png\",\"fName\":\"recordAudio\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"10\",\"fImageUrl\":\"f9.png\",\"fName\":\"recordVideo\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"11\",\"fImageUrl\":\"n16.png\",\"fName\":\"hourseCalc\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"12\",\"fImageUrl\":\"n16.png\",\"fName\":\"scan\",\"fShow\":\"true\",\"support\":3},{\"fID\":\"13\",\"fImageUrl\":\"n16.png\",\"fName\":\"audiocallphone\",\"fShow\":\"true\",\"support\":3}]","limit":20,"xid":"usedData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"addcommon":{"define":"addcommon","label":"是否添加到常用","name":"addcommon","relation":"addcommon","type":"Boolean"},"fClassName":{"define":"fClassName","label":"大类","name":"fClassName","relation":"fClassName","type":"String"},"fID":{"define":"fID","label":"功能ID","name":"fID","relation":"fID","type":"String"},"fImageUrl":{"define":"fImageUrl","label":"图标","name":"fImageUrl","relation":"fImageUrl","type":"String"},"fName":{"define":"fName","label":"名称","name":"fName","relation":"fName","type":"String"},"fShow":{"define":"fShow","label":"是否显示","name":"fShow","relation":"fShow","type":"Boolean"},"support":{"define":"support","label":"支持平台(1a,2i,3all)","name":"support","relation":"support","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[{\"fID\":\"1\",\"fImageUrl\":\"g8.png\",\"fName\":\"calc\",\"fShow\":\"true\",\"support\":3,\"addcommon\":\"true\",\"fClassName\":\"calc\"},{\"fID\":\"2\",\"fImageUrl\":\"f1.png\",\"fName\":\"lighting\",\"fShow\":\"true\",\"support\":3,\"addcommon\":\"true\",\"fClassName\":\"other\"},{\"fID\":\"3\",\"fImageUrl\":\"f10.png\",\"fName\":\"prize\",\"fShow\":\"true\",\"support\":3,\"addcommon\":\"true\",\"fClassName\":\"other\"},{\"fID\":\"4\",\"fImageUrl\":\"f2.png\",\"fName\":\"browseDir\",\"fShow\":\"true\",\"support\":3,\"addcommon\":\"true\",\"fClassName\":\"other\"},{\"fID\":\"5\",\"fImageUrl\":\"g10.png\",\"fName\":\"clockNotify\",\"fShow\":\"true\",\"support\":3,\"addcommon\":\"true\",\"fClassName\":\"other\"},{\"fID\":\"6\",\"fImageUrl\":\"g10.png\",\"fName\":\"gps\",\"fShow\":\"true\",\"support\":1,\"addcommon\":\"true\",\"fClassName\":\"other\"},{\"fID\":\"7\",\"fImageUrl\":\"n16.png\",\"fName\":\"notepad\",\"fShow\":\"true\",\"support\":3,\"addcommon\":\"true\",\"fClassName\":\"other\"},{\"fID\":\"8\",\"fImageUrl\":\"q8.png\",\"fName\":\"oil\",\"fShow\":\"true\",\"support\":3,\"addcommon\":\"true\",\"fClassName\":\"other\"},{\"fID\":\"9\",\"fImageUrl\":\"n17.png\",\"fName\":\"recordAudio\",\"fShow\":\"true\",\"support\":3,\"addcommon\":\"true\",\"fClassName\":\"other\"},{\"fID\":\"10\",\"fImageUrl\":\"f9.png\",\"fName\":\"recordVideo\",\"fShow\":\"true\",\"support\":3,\"addcommon\":\"false\",\"fClassName\":\"other\"},{\"fID\":\"11\",\"fImageUrl\":\"n16.png\",\"fName\":\"hourseCalc\",\"fShow\":\"true\",\"support\":3,\"addcommon\":\"false\",\"fClassName\":\"other\"},{\"fID\":\"12\",\"fImageUrl\":\"n16.png\",\"fName\":\"scan\",\"fShow\":\"true\",\"support\":3,\"addcommon\":\"true\",\"fClassName\":\"other\"},{\"fID\":\"13\",\"fImageUrl\":\"n16.png\",\"fName\":\"audiocallphone\",\"fShow\":\"true\",\"support\":3,\"addcommon\":\"false\",\"fClassName\":\"other\"}]","limit":20,"xid":"allAppData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fCheckBox":{"define":"EXPRESS","label":"是否显示","name":"fCheckBox","relation":"EXPRESS","type":"Boolean"},"fClassName":{"define":"fClassName","label":"大类","name":"fClassName","relation":"fClassName","type":"String"}},"directDelete":false,"events":{},"idColumn":"fClassName","initData":"[{\"fClassName\":\"calc\",\"fCheckBox\":\"false\"},{\"fClassName\":\"other\",\"fCheckBox\":\"true\"}]","limit":20,"xid":"classData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"游戏ID","name":"fID","relation":"fID","type":"String"},"fImageUrl":{"define":"fImageUrl","label":"图标路径","name":"fImageUrl","relation":"fImageUrl","type":"String"},"fName":{"define":"fName","label":"游戏名字","name":"fName","relation":"fName","type":"String"},"fSrcPath":{"define":"fSrcPath","label":"游戏路径","name":"fSrcPath","relation":"fSrcPath","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[{\"fID\":\"1\",\"fSrcPath\":\"games/Justdo/Index.html\",\"fImageUrl\":\"g8.png\",\"fName\":\"Justdo\"},{\"fID\":\"2\",\"fSrcPath\":\"games/Justdo/Index.html\",\"fImageUrl\":\"g8.png\",\"fName\":\"test\"},{\"fID\":\"3\",\"fSrcPath\":\"games/Justdo/Index.html\",\"fImageUrl\":\"g8.png\",\"fName\":\"game\"},{\"fID\":\"4\",\"fSrcPath\":\"games/Justdo/Index.html\",\"fImageUrl\":\"g8.png\",\"fName\":\"gogo\"},{\"fID\":\"5\",\"fSrcPath\":\"games/Justdo/Index.html\",\"fImageUrl\":\"g8.png\",\"fName\":\"soga\"}]","limit":20,"xid":"gameData"});
}}); 
return __result;});
