<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"
    style="height:auto;left:187px;top:249px;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="langData" idColumn="key"><column label="key" name="key" type="String" xid="xid1"></column>
  <column label="中文" name="zh_CN" type="String" xid="xid2"></column>
  <column label="英文" name="en" type="String" xid="xid3"></column></div></div>  
  <div component="$UI/system/components/justep/wing/wing" class="x-wing" xid="wing"
    display="push"> 
    <div class="x-wing-left" xid="left"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" title="设置" style="width:100%;" bind-text="window.localize.getLocalize('shop')"> 
        <div class="x-titlebar-left" xid="div2"/>  
        <div class="x-titlebar-title" xid="div3">设置</div>  
        <div class="x-titlebar-right reverse" xid="div4"/> 
      </div> 
    </div>  
    <div class="x-wing-content" xid="content1"> 
      <div class="x-wing-backdrop" xid="div1"/>  
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="pages" slidable="true" wrap="false"><div class="x-contents-content" xid="main" style="height:100%;"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="mainContainer" src="./main.w"></div></div></div> 
    </div>  
    </div> 
</div>