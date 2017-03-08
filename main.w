<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" class=" grid91">  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:374px;left:535px;" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="false" xid="usedData" idColumn="fID"><column label="功能ID" name="fID" type="String" xid="xid1"></column>
  <column label="图标" name="fImageUrl" type="String" xid="xid2"></column>
  <column label="名称" name="fName" type="String" xid="xid3"></column>
  <data xid="default1">[{&quot;fID&quot;:&quot;1&quot;,&quot;fIcon&quot;:&quot;./anytools/resource/img/g8.png&quot;,&quot;fName&quot;:&quot;消防&quot;},{&quot;fID&quot;:&quot;2&quot;,&quot;fIcon&quot;:&quot;./anytools/resource/img/g8.png&quot;,&quot;fName&quot;:&quot;我是&quot;},{&quot;fID&quot;:&quot;3&quot;,&quot;fIcon&quot;:&quot;./anytools/resource/img/g8.png&quot;,&quot;fName&quot;:&quot;你好&quot;},{&quot;fID&quot;:&quot;4&quot;,&quot;fIcon&quot;:&quot;./anytools/resource/img/g8.png&quot;,&quot;fName&quot;:&quot;电灯&quot;},{&quot;fID&quot;:&quot;5&quot;,&quot;fIcon&quot;:&quot;./anytools/resource/img/g8.png&quot;,&quot;fName&quot;:&quot;空气&quot;},{&quot;fID&quot;:&quot;6&quot;,&quot;fIcon&quot;:&quot;./anytools/resource/img/g8.png&quot;,&quot;fName&quot;:&quot;笑声&quot;},{&quot;fID&quot;:&quot;7&quot;,&quot;fIcon&quot;:&quot;./anytools/resource/img/g8.png&quot;,&quot;fName&quot;:&quot;恐惧&quot;},{&quot;fID&quot;:&quot;8&quot;,&quot;fIcon&quot;:&quot;./anytools/resource/img/g8.png&quot;,&quot;fName&quot;:&quot;流量&quot;},{&quot;fID&quot;:&quot;9&quot;,&quot;fIcon&quot;:&quot;./anytools/resource/img/g8.png&quot;,&quot;fName&quot;:&quot;信仰&quot;},{&quot;fID&quot;:&quot;10&quot;,&quot;fIcon&quot;:&quot;./anytools/resource/img/g8.png&quot;,&quot;fName&quot;:&quot;幸运&quot;}]</data></div></div>
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
   <div class="x-panel-content  x-scroll-view" xid="content2" _xid="C7711AEBD9600001A9F1DB6B1E203EB0" style="top: 0px; bottom: 0px;">
    <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents" slidable="true" swipe="true" onActiveChange="contentsActiveChange">
     <div class="x-contents-content" xid="commonUseContent"><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents2">
   <div component="$UI/system/components/bootstrap/row/row" class="row grid" xid="usedRow">
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col1">
    <div class="card" xid="div24">
     
  <img src="$UI/anytools/resource/img/g8.png" alt="" xid="image1" style="width:80px;"></img><span class="title" xid="span27">下载</span>
  </div> </div> 
   </div></div></div>
     <div class="x-contents-content x-cards" xid="allContent" onActive="allContentActive">
      </div> 
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