<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" class=" grid91">  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:374px;left:535px;" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="usedData" idColumn="fID"><column label="功能ID" name="fID" type="String" xid="xid1"></column>
  <column label="图标" name="fImageUrl" type="String" xid="xid2"></column>
  <column label="名称" name="fName" type="String" xid="xid3"></column>
  <column label="是否显示" name="fShow" type="Boolean" xid="xid4"></column>
  <column isCalculate="false" label="支持平台(1a,2i,3all)" name="support" type="Integer" xid="xid5"></column>
  <data xid="default1">[{&quot;fID&quot;:&quot;1&quot;,&quot;fImageUrl&quot;:&quot;g8.png&quot;,&quot;fName&quot;:&quot;calc&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;2&quot;,&quot;fImageUrl&quot;:&quot;f1.png&quot;,&quot;fName&quot;:&quot;lighting&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;3&quot;,&quot;fImageUrl&quot;:&quot;f10.png&quot;,&quot;fName&quot;:&quot;prize&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;4&quot;,&quot;fImageUrl&quot;:&quot;f2.png&quot;,&quot;fName&quot;:&quot;browseDir&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;5&quot;,&quot;fImageUrl&quot;:&quot;g10.png&quot;,&quot;fName&quot;:&quot;clockNotify&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;6&quot;,&quot;fImageUrl&quot;:&quot;g10.png&quot;,&quot;fName&quot;:&quot;gps&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:1},{&quot;fID&quot;:&quot;7&quot;,&quot;fImageUrl&quot;:&quot;n16.png&quot;,&quot;fName&quot;:&quot;notepad&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;8&quot;,&quot;fImageUrl&quot;:&quot;q8.png&quot;,&quot;fName&quot;:&quot;oil&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;9&quot;,&quot;fImageUrl&quot;:&quot;n17.png&quot;,&quot;fName&quot;:&quot;recordAudio&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;10&quot;,&quot;fImageUrl&quot;:&quot;f9.png&quot;,&quot;fName&quot;:&quot;recordVideo&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;11&quot;,&quot;fImageUrl&quot;:&quot;n16.png&quot;,&quot;fName&quot;:&quot;hourseCalc&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;12&quot;,&quot;fImageUrl&quot;:&quot;n16.png&quot;,&quot;fName&quot;:&quot;scan&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3},{&quot;fID&quot;:&quot;13&quot;,&quot;fImageUrl&quot;:&quot;n16.png&quot;,&quot;fName&quot;:&quot;audiocallphone&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="allAppData" idColumn="fID">
   <column label="功能ID" name="fID" type="String" xid="column1"></column>
  <column label="图标" name="fImageUrl" type="String" xid="column2"></column>
  <column label="名称" name="fName" type="String" xid="column3"></column>
  <column label="是否显示" name="fShow" type="Boolean" xid="column4"></column>
  <column isCalculate="false" label="支持平台(1a,2i,3all)" name="support" type="Integer" xid="column5"></column>
  <column label="是否添加到常用" name="addcommon" type="Boolean" xid="xid6"></column>
  <column label="大类" name="fClassName" type="String" xid="xid7"></column>
  <data xid="default2">[{&quot;fID&quot;:&quot;1&quot;,&quot;fImageUrl&quot;:&quot;g8.png&quot;,&quot;fName&quot;:&quot;calc&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3,&quot;addcommon&quot;:&quot;true&quot;},{&quot;fID&quot;:&quot;2&quot;,&quot;fImageUrl&quot;:&quot;f1.png&quot;,&quot;fName&quot;:&quot;lighting&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3,&quot;addcommon&quot;:&quot;true&quot;},{&quot;fID&quot;:&quot;3&quot;,&quot;fImageUrl&quot;:&quot;f10.png&quot;,&quot;fName&quot;:&quot;prize&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3,&quot;addcommon&quot;:&quot;true&quot;},{&quot;fID&quot;:&quot;4&quot;,&quot;fImageUrl&quot;:&quot;f2.png&quot;,&quot;fName&quot;:&quot;browseDir&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3,&quot;addcommon&quot;:&quot;true&quot;},{&quot;fID&quot;:&quot;5&quot;,&quot;fImageUrl&quot;:&quot;g10.png&quot;,&quot;fName&quot;:&quot;clockNotify&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3,&quot;addcommon&quot;:&quot;true&quot;},{&quot;fID&quot;:&quot;6&quot;,&quot;fImageUrl&quot;:&quot;g10.png&quot;,&quot;fName&quot;:&quot;gps&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:1,&quot;addcommon&quot;:&quot;true&quot;},{&quot;fID&quot;:&quot;7&quot;,&quot;fImageUrl&quot;:&quot;n16.png&quot;,&quot;fName&quot;:&quot;notepad&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3,&quot;addcommon&quot;:&quot;true&quot;},{&quot;fID&quot;:&quot;8&quot;,&quot;fImageUrl&quot;:&quot;q8.png&quot;,&quot;fName&quot;:&quot;oil&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3,&quot;addcommon&quot;:&quot;true&quot;},{&quot;fID&quot;:&quot;9&quot;,&quot;fImageUrl&quot;:&quot;n17.png&quot;,&quot;fName&quot;:&quot;recordAudio&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3,&quot;addcommon&quot;:&quot;true&quot;},{&quot;fID&quot;:&quot;10&quot;,&quot;fImageUrl&quot;:&quot;f9.png&quot;,&quot;fName&quot;:&quot;recordVideo&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3,&quot;addcommon&quot;:&quot;false&quot;},{&quot;fID&quot;:&quot;11&quot;,&quot;fImageUrl&quot;:&quot;n16.png&quot;,&quot;fName&quot;:&quot;hourseCalc&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3,&quot;addcommon&quot;:&quot;false&quot;},{&quot;fID&quot;:&quot;12&quot;,&quot;fImageUrl&quot;:&quot;n16.png&quot;,&quot;fName&quot;:&quot;scan&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3,&quot;addcommon&quot;:&quot;true&quot;},{&quot;fID&quot;:&quot;13&quot;,&quot;fImageUrl&quot;:&quot;n16.png&quot;,&quot;fName&quot;:&quot;audiocallphone&quot;,&quot;fShow&quot;:&quot;true&quot;,&quot;support&quot;:3,&quot;addcommon&quot;:&quot;false&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="classData" idColumn="fClassName"><column label="大类" name="fClassName" type="String" xid="xid8"></column>
  <data xid="default3">[{&quot;fClassName&quot;:&quot;calc&quot;},{&quot;fClassName&quot;:&quot;other&quot;}]</data></div></div>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-card x-full" xid="panel1">
   <div class="x-panel-top" xid="top1" visible="true">
    <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
     <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="settingBtn" icon="glyphicon glyphicon-menu-hamburger" onClick="settingBtnClick">
   <i xid="i1" class="glyphicon glyphicon-menu-hamburger"></i>
   <span xid="span1"></span></a></div>
     <div class="x-titlebar-title" xid="title1">
  <span xid="span2" bind-text='window.localize.getLocalize("anytools")'></span></div>
     <div class="x-titlebar-right reverse" xid="right1"></div></div> </div> 
   <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel">
   <div class="x-panel-content  x-scroll-view" xid="content2" _xid="C7711AEBD9600001A9F1DB6B1E203EB0" style=" bottom: 0px;">
    <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents" slidable="true" swipe="true" onActiveChange="contentsActiveChange">
     <div class="x-contents-content  x-scroll-view" xid="commonUseContent"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView2">
   
   
   <div component="$UI/system/components/bootstrap/row/row" class="row grid" xid="usedRow">
   </div></div></div>
     <div class="x-contents-content  x-scroll-view" xid="allContent" onActive="allContentActive" onactive="allContentActive">
      <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="appClassList" data="classData">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/list/list" class="x-list" xid="listAllApp" data="allAppData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-center" xid="col1"><div class="media" xid="appname">
   <div class="media-left" xid="mediaLeft1">
    <a href="#" xid="a1">
     <img class="media-object" src="" alt="" xid="image1" bind-attr-src=' $model.getAppIconPath(val("fImageUrl")) ' height="40px" style="width:40px;"></img></a> </div> 
   <div class="media-body" xid="mediaBody1">
    <h4 class="media-heading" xid="h41" style="width:100%;" bind-text='window.localize.getLocalize( val("fName"))'>Media heading</h4></div> </div></div>
   <div class="x-col x-col-center" xid="col4">
   <span xid="appdesciption" bind-text='window.localize.getLocalize( "appdesc_"+ val("fName"))'></span></div><div class="x-col x-col-fixed x-col-center" xid="col3" style="width:auto;"><a component="$UI/system/components/justep/button/button" class="btn btn-link" label="button" xid="btnaddapp">
   <i xid="i2"></i>
   <span xid="span3" bind-text=' $model.getAddCommonBtnName(val("addcommon"))'></span></a></div>
  </div></li></ul> </div></li></ul> </div></div></div> 
     <div class="x-contents-content x-content-on-left x-content-on-remoting-sibling" xid="enjoyContent">
      <div component="$UI/system/components/bootstrap/carousel/carousel" class="x-carousel carousel" xid="carousel1" style="height:288px;" interval="4" auto="true">
       <ol class="carousel-indicators" xid="ol1" style="margin-bottom:20px;"></ol>
       <div role="listbox" component="$UI/system/components/justep/contents/contents" active="0" slidable="true" wrap="true" swipe="true" routable="false" xid="contents1" class="x-contents carousel-inner" style="height:100%;">
        <div class="x-contents-content" xid="page1" style="height:100%;background-color:#009fde;">
         <div style="height:100%;background-repeat:no-repeat;background-position:center;background-image:url(./images/1.png);" xid="div4"></div></div> 
        <div class="x-contents-content" xid="page2" style="height:100%;background: -webkit-linear-gradient(top, #62B326, #52AC26);">
         <div style="height:100%;background-repeat:no-repeat;background-position:center;background-image:url(./images/2.png);" xid="div5"></div></div> 
        <div class="x-contents-content" xid="page3" style="height:100%;background: -webkit-linear-gradient(top, #2F75C8, #281C9A);">
         <div style="height:100%;background-repeat:no-repeat;background-position:center;background-image:url(./images/3.png);" xid="div6"></div></div> </div> </div> </div> 
     <div class="x-contents-content x-cards" xid="ownContent" onActive="ownContentActive"></div>
     </div> 
  </div></div></div>
   <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup1" selected="commonUseBtn">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="菜单" xid="commonUseBtn" icon="icon-beer" target="commonUseContent">
    <i xid="i5" class="icon-beer"></i>
    <span xid="span6" bind-text='window.localize.getLocalize("normal_use")'>菜单</span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" xid="allBtn" icon="icon-ios7-cart" label="全部" target="allContent">
    <i xid="i6" class="icon-ios7-cart"></i>
    <span xid="span7" bind-text=' window.localize.getLocalize("all")'>全部</span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="订单" xid="enjoyBtn" icon="icon-ios7-copy" target="enjoyContent">
    <i xid="i7" class="icon-ios7-copy"></i>
    <span xid="span8" bind-text='window.localize.getLocalize("enjoy")'><![CDATA[娱乐]]></span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="我的" xid="ownBtn" icon="icon-person" target="ownContent">
    <i xid="i8" class="icon-person"></i>
    <span xid="span9" bind-text='window.localize.getLocalize("mine")'>我的</span></a> </div></div></div></div>