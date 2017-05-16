<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:434px;left:47px;height:auto;" onLoad="modelLoad" onModelConstructDone="modelModelConstructDone" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="gpsstatus" idColumn="prn"><column label="ID" name="prn" type="Integer" xid="xid1"></column>
  <column label="方位角" name="azimuth" type="String" xid="xid2"></column>
  <column label="高度角" name="elevation" type="String" xid="xid3"></column>
  <column label="信噪比" name="snr" type="String" xid="xid4"></column>
  <column label="国家" name="country" type="Integer" xid="xid5"></column>
  <data xid="default1">[{&quot;prn&quot;:2,&quot;azimuth&quot;:&quot;20&quot;,&quot;elevation&quot;:&quot;30&quot;,&quot;snr&quot;:&quot;60&quot;,&quot;country&quot;:1}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="标题"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">标题</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col6"><label xid="label2"><![CDATA[定位信息:]]></label></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="locationcol"><label xid="locationInfo"><![CDATA[]]></label></div></div></li></ul> </div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="gpsstatus">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-fixed" xid="col1" style="width:auto;"><span xid="prn" bind-text='val("prn")'><![CDATA[]]></span>
  <img src="" alt="" xid="country"></img></div>
   <div class="x-col" xid="col2"><span xid="snr" bind-text='val("snr")'><div class="progress" component="$UI/system/components/bootstrap/progress/progress" xid="signal" bind-value=' val("snr")'>
   <div class="progress-bar progress-bar-success" role="progressbar" xid="progressBar1">
    <span xid="span1">0%</span></div> </div></span></div>
   <div class="x-col x-col-fixed" xid="col3" style="width:auto;"><span xid="elevation" bind-text='val("elevation")'></span></div>
  <div class="x-col x-col-fixed" xid="col4" style="width:auto;"><span xid="azimuth" bind-text='val("azimuth")'></span></div></div></li></ul> </div>
  </div>
  </div> 
</div>