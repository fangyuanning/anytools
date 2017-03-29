<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:258px;left:750px;height:auto;"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="手电筒"
          class="x-titlebar" style="height:40px;">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">手电筒</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
  
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row x-row-center" xid="row1">
   <div class="x-col" xid="col1"></div>
   <div class="x-col" xid="col2"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="打开" xid="openLight" style="position:relative;top:50%;width:80px;vertical-align:middle;height:40px;" onClick="openLightClick">
   <i xid="i1"></i>
   <span xid="span1">打开</span></a></div>
   <div class="x-col" xid="col3"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row x-row-center" xid="row2">
   <div class="x-col" xid="col6"><div class="progress" component="$UI/system/components/bootstrap/progress/progress" xid="progress1">
   <div class="progress-bar progress-bar-success" role="progressbar" xid="progressBar1">
    <span xid="span3">0%</span></div> </div></div>
   <div class="x-col" xid="col4">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="button1" style="position:relative;top:50%;width:80px;vertical-align:middle;height:40px;" onClick="openLightClick">
     <i xid="i2"></i>
     <span xid="span2"></span></a> </div> 
   <div class="x-col" xid="col5"></div></div></li></ul> 
  </div></div>
  </div> 
</div>