<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onParamsReceive="modelParamsReceive"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1">  
    <div class="x-panel-top" xid="top1" height="0">
   <div component="$UI/system/components/justep/titleBar/titleBar" title="标题" xid="titleBar1" style="height:100%;">
    <div class="x-titlebar-left" xid="left2">
     <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}" xid="backBtn">
      <i class="icon-chevron-left" xid="i2"></i>
      <span xid="span2"></span></a> </div> 
    </div> </div><div class="x-panel-content" xid="content1" style="height:100%;width:100%;"><iframe xid="gameframe" height="90%" width="100%"></iframe>
  </div>
  </div> 
</div>