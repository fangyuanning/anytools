<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:592px;left:811px;height:auto;" onLoad="modelLoad" onunLoad="modelUnLoad" onInactive="modelInactive" onActive="modelActive"> 
  </div>  
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
          <div class="x-titlebar-title"><span xid="span2" bind-text='window.localize.getLocalize("calc")'></span></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
  
  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   
   <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents" slidable="true" swipe="true" >
   <div class="x-contents-content x-scroll-view" xid="normal">
    <iframe src="./basecalc.html" xid="iframe2" width="100%" height="100%"></iframe></div> 
   </div></div></div>
  </div> 
</div>