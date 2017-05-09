<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="gpsstatus" idColumn="prn"><column label="ID" name="prn" type="String" xid="xid1"></column>
  <column label="方位角" name="azimuth" type="String" xid="xid2"></column>
  <column label="高度角" name="elevation" type="String" xid="xid3"></column>
  <column label="信噪比" name="snr" type="String" xid="xid4"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="标题"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">标题</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="gpsstatus">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><span xid="prn" bind-text='label("prn")'></span></div>
   <div class="x-col" xid="col2"><span xid="snr" bind-text='label("snr")'></span></div>
   <div class="x-col" xid="col3"><span xid="elevation" bind-text='label("elevation")'></span></div>
  <div class="x-col" xid="col4"><span xid="azimuth" bind-text='label("azimuth")'></span></div></div></li></ul> </div></div>
  </div> 
</div>