<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:595px;left:858px;" onLoad="modelLoad" onunLoad="modelUnLoad"> 
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
    <div class="x-panel-content" xid="content1" style="position:relative;top:100px;">
  
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" style="vertical-align:bottom;width:100%;"><div component="$UI/system/components/justep/row/row" class="x-row x-row-center" xid="row1">
   <div class="x-col" xid="col1"></div>
   <div class="x-col" xid="col2"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="打开" xid="openLight" style="position:relative;top:50%;width:80px;vertical-align:middle;height:40px;" onClick="openLightClick">
   <i xid="i1"></i>
   <span xid="span1">打开</span></a></div>
   <div class="x-col" xid="col3"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="height:150px;">
   <div class="x-col" xid="col17"></div>
   <div class="x-col" xid="col18"></div>
   <div class="x-col" xid="col19"></div></div><div component="$UI/system/components/justep/row/row" class="x-row x-row-center" xid="row2">
   <div class="x-col" xid="col6"><input component="$UI/system/components/justep/input/range" xid="flashRange" onChange="flashRangeChange" min="2" max="20"></input>
  
  
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col7"><span xid="minHz"><![CDATA[2hz]]></span></div>
   <div class="x-col" xid="col8"><span xid="flashhz">10hz</span></div>
   <div class="x-col" xid="col9"><span xid="maxHz" style="text-align:right;"><![CDATA[20hz]]></span></div></div></div>
   <div class="x-col x-col-fixed" xid="col4" style="width:auto;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="flash" style="position:relative;top:50%;width:80px;vertical-align:middle;height:40px;" onClick="flashClick" label="闪烁">
     <i xid="i2"></i>
     <span xid="span2">闪烁</span></a> </div> 
   <div class="x-col x-col-fixed" xid="col5" style="width:auto;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="carflash" style="position:relative;top:50%;width:80px;vertical-align:middle;height:40px;" onClick="carflashClick" label="交通">
   <i xid="i3"></i>
   <span xid="span3">交通</span></a></div>
  </div>
  </li></ul> 
  </div></div>
  </div> 
</div>