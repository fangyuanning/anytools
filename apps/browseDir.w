<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  </div>  
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
    <div class="x-panel-content" xid="content1">
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list3" style="height:40px;table-layout:fixed;">
   <ul class="x-list-template" xid="listTemplateUl3" style="border-style:solid solid solid solid;border-width:thin thin thin thin;">
    <li xid="li3" style="height:40px;">
     <div component="$UI/system/components/justep/row/row" class="x-row tableborders" xid="row5" style="background-color:#727272;height:40px;">
      <div class="x-col x-col-fixed" xid="col10" style="width:40px;text-align:center;border-style:solid solid solid solid;border-width:thin thin thin thin;">
       <span xid="span3">序号</span></div> 
      <div class="x-col x-col-fixed" xid="col11" style="text-align:center;border-style:solid solid solid solid;border-width:thin thin thin thin;">
       <span xid="span4">信号强度</span><div class="progress" component="$UI/system/components/bootstrap/progress/progress" xid="signal" valuenow="40" textVisible="false">
   <div class="progress-bar progress-bar-success" role="progressbar" xid="progressBar1">
    <span xid="span1">0%</span></div> </div></div> 
      <div class="x-col x-col-fixed" xid="col12" style="width:40px;text-align:center;border-style:solid solid solid solid;border-width:thin thin thin thin;">
       <span xid="span5" style="vertical-align:middle;">可用</span></div> 
      <div class="x-col x-col-fixed" xid="col13" style="width:40px;text-align:center;border-style:solid solid solid solid;border-width:thin thin thin thin;">
       <span xid="span6">角度</span></div> 
      <div class="x-col x-col-fixed" xid="col14" style="width:40px;text-align:center;border-style:solid solid solid solid;border-width:thin thin thin thin;">
       <span xid="span7">角度</span></div> </div> </li> </ul> </div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="gpslist" data="gpsstatus">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="background-color:#727272;height:40px;">
      <div class="x-col x-col-fixed" xid="col1" style="width:60px;">
       <span xid="prn" bind-text='val("prn")'></span>
       <img src="" alt="" xid="country"></img></div> 
      <div class="x-col x-col-center" xid="col2" style="height:30px;">
       <div class="progress" component="$UI/system/components/bootstrap/progress/progress" xid="progress1" valuenow="40" textVisible="false" bind-attr-valuenow="val('snr')">
        <div class="progress-bar progress-bar-success" role="progressbar" xid="progressBar2" bind-css="{'progress-bar-danger':val('snr')&lt;30}" bind-style="{width:val('snr')+'%'}">
         <span xid="span2">0%</span></div> </div> 
       <span xid="snrvalue" bind-text='val("snr")' class="pull-right"></span></div> 
      <div class="x-col x-col-fixed" xid="col3" style="width:60px;">
       <span xid="activedgps">ok</span></div> 
      <div class="x-col x-col-fixed" xid="col4" style="width:60px;">
       <span xid="azimuth" bind-text='val("azimuth")'>1</span></div> 
      <div class="x-col x-col-fixed" xid="col9" style="width:60px;">
       <span xid="elevation" bind-text='val("elevation")'></span></div> </div> </li> </ul> </div></div>
  </div> 
</div>