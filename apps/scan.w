<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:506px;left:102px;" onActive="modelActive" onLoad="modelLoad" onModelConstruct="modelModelConstruct"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="scanlist" idColumn="scanurl"><column label="扫描内容" name="scanurl" type="String" xid="xid1"></column>
  <data xid="default1">[{&quot;scanurl&quot;:&quot;http://www.baidu.com&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">
  <span xid="span2" bind-text='window.localize.getLocalize("scan")'></span></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="height:100px;">
   <div class="x-col x-col-center text-success" xid="col1"><div component="$UI/system/components/justep/output/output" class="x-output" xid="address" dataType="String" style="width:100%;"></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-center" xid="col4" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="扫一扫" xid="scanBtn" onClick="scanBtnClick">
   <i xid="i4"></i>
   <span xid="span1" bind-text='window.localize.getLocalize("scan")'><![CDATA[扫一扫]]></span></a></div>
  <div class="x-col" xid="col11" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="复制" xid="copyBtn" onClick="copyBtnClick">
   <i xid="i5"></i>
   <span xid="span7">复制</span></a></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="height:100px;">
   <div class="x-col x-col-fixed x-col-center" xid="col9" style="width:auto;"><span component="$UI/system/components/justep/button/checkbox" class="x-checkbox" xid="browseCheckBox" onChange="openCheckBoxChange" label="自动打开"></span>
  <span xid="span4" bind-text='window.localize.getLocalize("autoopen")'></span></div>
   <div class="x-col x-col-center" xid="col7"><a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="openBtn" onClick="openBtnClick" label="打开">
   <i xid="i1"></i>
   <span xid="span3">打开</span></a>
  </div>
   <div class="x-col x-col-center" xid="col8"><a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="recordBtn" onClick="recordBtnClick" label="记录">
   <i xid="i2"></i>
   <span xid="span5" bind-text='window.localize.getLocalize("record")'>记录</span></a></div></div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="scanlist">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2">
     
     
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
      <div class="x-col" xid="col15">
       <div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-text=' val("scanurl")'></div></div> 
      <div class="x-col x-col-fixed x-col-center" xid="col16" style="width:auto;">
       <a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="button4" onClick="deletelineClick" label="删除">
        <i xid="i9"></i>
        <span xid="span12" bind-text='window.localize.getLocalize("delete")'>删除</span></a> 
  </div> 
  <div class="x-col x-col-fixed x-col-center" xid="col18" style="width:auto;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="openIine" onClick="openIineClick" label="打开">
    <i xid="i6"></i>
    <span xid="span8" bind-text='window.localize.getLocalize("delete")'>打开</span></a> </div></div> 
     </li> </ul> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col5"></div>
   <div class="x-col" xid="col6"><a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="clearAll" label="全部删除" onClick="clearAllClick">
   <i xid="i3"></i>
   <span xid="span6" bind-text='window.localize.getLocalize("clearall")'>全部删除</span></a></div>
   <div class="x-col" xid="col10"></div></div>
  </li></ul> </div>
  </div>
  </div> 
</div>