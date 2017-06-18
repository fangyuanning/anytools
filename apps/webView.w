<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:93px;left:21px;height:auto;"/> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1" height="0">
    <div component="$UI/system/components/justep/titleBar/titleBar" title="标题" xid="titleBar1" style="height:100%;">
     <div class="x-titlebar-left" xid="left2">
       
  
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" style="height:40px;">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" style="height:40px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-fixed" xid="col1" style="width:auto;"><a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}" xid="backBtn">
       <i class="icon-chevron-left" xid="i2"></i>
       <span xid="span2"></span></a></div>
   <div class="x-col x-col-center" xid="col2"><div class="search d7" xid="div1">
   <form xid="form1">
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="urlpath" valueUpdateMode="input"></input>
  </form> </div></div>
   <div class="x-col x-col-fixed" xid="col4" style="width:auto;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="gotourl" icon="linear linear-bubble" onClick="gotourlClick">
   <i xid="i4" class="linear linear-bubble"></i>
   <span xid="span4"></span></a></div></div></li></ul> </div></div> </div> </div> 
   <div class="x-panel-content" xid="content1" style="height:100%;width:100%;">
    <iframe xid="webframe" height="100%" width="100%"></iframe></div> </div></div>