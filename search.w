<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:321px;left:34px;" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="searchData" idColumn="fID">
   <column label="功能ID" name="fID" type="String" xid="xid1"></column>
  <column label="图标" name="fImageUrl" type="String" xid="xid2"></column>
  <column label="名称" name="fName" type="String" xid="xid3"></column>
  <column label="是否显示" name="fShow" type="Boolean" xid="xid4"></column>
  <column isCalculate="false" label="支持平台(1a,2i,3all)" name="support" type="Integer" xid="xid5"></column>
  <data xid="default1">[{&quot;fID&quot;:&quot;1&quot;,&quot;fImageUrl&quot;:&quot;g8.png&quot;,&quot;fName&quot;:&quot;calc&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;2&quot;,&quot;fImageUrl&quot;:&quot;f1.png&quot;,&quot;fName&quot;:&quot;lighting&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;3&quot;,&quot;fImageUrl&quot;:&quot;f10.png&quot;,&quot;fName&quot;:&quot;prize&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;4&quot;,&quot;fImageUrl&quot;:&quot;f2.png&quot;,&quot;fName&quot;:&quot;browseDir&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;5&quot;,&quot;fImageUrl&quot;:&quot;g10.png&quot;,&quot;fName&quot;:&quot;clockNotify&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;6&quot;,&quot;fImageUrl&quot;:&quot;g10.png&quot;,&quot;fName&quot;:&quot;gps&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:1},{&quot;fID&quot;:&quot;7&quot;,&quot;fImageUrl&quot;:&quot;n16.png&quot;,&quot;fName&quot;:&quot;notepad&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;8&quot;,&quot;fImageUrl&quot;:&quot;q8.png&quot;,&quot;fName&quot;:&quot;oil&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;9&quot;,&quot;fImageUrl&quot;:&quot;n17.png&quot;,&quot;fName&quot;:&quot;recordAudio&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;10&quot;,&quot;fImageUrl&quot;:&quot;f9.png&quot;,&quot;fName&quot;:&quot;recordVideo&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;11&quot;,&quot;fImageUrl&quot;:&quot;n16.png&quot;,&quot;fName&quot;:&quot;hourseCalc&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;12&quot;,&quot;fImageUrl&quot;:&quot;n16.png&quot;,&quot;fName&quot;:&quot;scan&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;13&quot;,&quot;fImageUrl&quot;:&quot;n16.png&quot;,&quot;fName&quot;:&quot;audiocallphone&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3}]</data>
  <column label="类型" name="fAppType" type="String" xid="xid6"></column></div></div>  
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
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="approw">
   <div class="x-col" xid="col1"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1" bind-text='window.localize.getLocalize("searchapplb")'><![CDATA[]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="appinput"></input></div></div>
   <div class="x-col x-col-fixed" xid="col2" style="width:auto;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-label" label="button" xid="searchAppBtn" onClick="searchAppBtnClick">
   <i xid="i1"></i>
   <span xid="span2" bind-text='window.localize.getLocalize("search")'></span></a></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="gamerow">
   <div class="x-col" xid="col5">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
     <label class="x-label" xid="label2" bind-text='window.localize.getLocalize("searchgamelb")'><![CDATA[]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="gameInput"></input></div> </div> 
   <div class="x-col x-col-fixed" xid="col4" style="width:auto;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-label" label="button" xid="searchGameBtn" onClick="searchGameBtnClick">
     <i xid="i2"></i>
     <span xid="span3" bind-text='window.localize.getLocalize("search")'></span></a> </div> </div></li></ul> </div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="resultList" data="searchData">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-center" xid="mediacol" bind-click="mediacolClick">
    <div class="media" xid="appname">
     <div class="media-left" xid="mediaLeft1">
      <a href="#" xid="a1">
       <img class="media-object" src="" alt="" xid="image1" bind-attr-src=' $model.getAppIconPath(val("fImageUrl")) ' height="40px" style="width:40px;"></img></a> </div> 
     <div class="media-body" xid="mediaBody1" style="vertical-align:middle;">
      <h4 class="media-heading" xid="h41" style="width:100%;vertical-align:middle;" bind-text='window.localize.getLocalize( val("fName"))'>Media heading</h4></div> </div> </div> 
   <div class="x-col x-col-center" xid="mediadetail">
    <span xid="appdesciption" bind-text='window.localize.getLocalize( "appdesc_"+ val("fName"))'></span></div> 
   </div></li></ul> </div></div>
  </div> 
</div>