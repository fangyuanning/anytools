define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
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
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"comonent":{"define":"comonent","label":"备注","name":"comonent","relation":"comonent","type":"String"},"content":{"define":"content","label":"内容","name":"content","relation":"content","type":"String"},"date":{"define":"date","label":"日期","name":"date","relation":"date","type":"String"},"emtion":{"define":"emtion","label":"心情","name":"emtion","relation":"emtion","type":"String"},"important":{"define":"important","label":"重要程度","name":"important","relation":"important","type":"String"},"notifytime":{"define":"notifytime","label":"提醒时间","name":"notifytime","relation":"notifytime","rules":{"time":true},"type":"Time"},"password":{"define":"password","label":"密码","name":"password","relation":"password","type":"String"},"show":{"define":"show","label":"是否显示","name":"show","relation":"show","rules":{"integer":true},"type":"Integer"},"title":{"define":"title","label":"标题","name":"title","relation":"title","type":"String"},"type":{"define":"type","label":"类型","name":"type","relation":"type","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","initData":"[{\"ID\":\"1\",\"type\":\"日记\",\"title\":\"心情不错\",\"content\":\"今天天气特别好，我非常高兴，非常舒服，谢谢。\",\"date\":\"2017-7-20\",\"comonent\":\"没啥\",\"notifytime\":\"10:20:30\",\"emtion\":\"2234\",\"password\":\"0\",\"important\":\"1\",\"show\":1}]","limit":20,"xid":"notedata"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"classs":{"define":"classs","label":"记事类型","name":"classs","relation":"classs","type":"String"}},"directDelete":false,"events":{},"idColumn":"classs","initData":"[{\"classs\":\"收入\"},{\"classs\":\"支出\"},{\"classs\":\"纪念\"},{\"classs\":\"日记\"}]","limit":20,"xid":"notetype"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});