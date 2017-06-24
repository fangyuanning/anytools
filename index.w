<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"
    style="height:auto;top:505px;left:92px;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="langData" idColumn="key"><column label="key" name="key" type="String" xid="xid1"></column>
  <column label="中文" name="zh_CN" type="String" xid="xid2"></column>
  <column label="英文" name="en" type="String" xid="xid3"></column></div></div>  
  <div component="$UI/system/components/justep/wing/wing" class="x-wing" xid="wing"
    display="push"> 
    <div class="x-wing-left" xid="left"> 
      </div>  
    <div class="x-wing-content" xid="content1"> 
      <div class="x-wing-backdrop" xid="div1"/>  
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="pages" slidable="true" wrap="false"><div class="x-contents-content" xid="main" style="height:100%;"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="mainContainer" src="./main.w"></div></div></div> 
    </div>  
    </div> 
</div>