<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              xid="backBtn" onClick="{operation:'window.close'}"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title" bind-text='window.localize.getLocalize("notepad_modtype")'></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1" style="border-style:solid solid solid solid;border-width:thin thin thin thin;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
     <div class="x-col x-col-center" xid="col12">
      <span xid="span5" class="center-block" style="text-align:center;font-size:xx-large;background-color:#CDFF79;" bind-text="$model.getTitle()">essdofijsdofinihao</span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
     <div class="x-col x-col-fixed" xid="col15">
      <span xid="span6" style="text-align:left;font-size:medium;font-family:Arial;color:#008080;" bind-html=" $model.getBodyHtml()"><![CDATA[]]></span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="border-top-style:solid;border-top-width:thin;height:30px;">
     <div class="x-col x-col-center" xid="col16">
      <span xid="span4" bind-html=' $model.getIm()'></span></div> 
     <div class="x-col x-col-fixed x-col-center" xid="col17" style="width:auto;">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-label" xid="backbutton" icon="linear linear-license" onClick="backbuttonClick">
   <i xid="i4" class="linear linear-license" style="height:40px;width:40px;"></i>
   <span xid="span9" bind-text='window.localize.getLocalize("notedit_back")'></span></a></div> 
     <div class="x-col x-col-center" xid="col18" style="text-align:right;">
      <span xid="span7" style="text-align:right;font-size:medium;vertical-align:middle;height:20px;width:190px;" bind-text='$model.getDate()'><![CDATA[]]></span></div> </div> </div> </div></div>
  </div> 
</div>