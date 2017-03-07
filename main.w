<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" class=" grid91">  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:374px;left:535px;"><div component="$UI/system/components/justep/data/data" autoLoad="false" xid="usedData" idColumn="fID"><column label="功能ID" name="fID" type="String" xid="xid1"></column>
  <column label="图标" name="fIcon" type="String" xid="xid2"></column>
  <column label="名称" name="fName" type="String" xid="xid3"></column>
  <data xid="default1">[{&quot;fID&quot;:&quot;1&quot;,&quot;fIcon&quot;:&quot;&quot;,&quot;fName&quot;:&quot;消防&quot;},{&quot;fID&quot;:&quot;2&quot;,&quot;fName&quot;:&quot;我是&quot;},{&quot;fID&quot;:&quot;3&quot;,&quot;fIcon&quot;:&quot;&quot;,&quot;fName&quot;:&quot;你好&quot;},{&quot;fID&quot;:&quot;4&quot;,&quot;fName&quot;:&quot;电灯&quot;},{&quot;fID&quot;:&quot;5&quot;,&quot;fName&quot;:&quot;空气&quot;},{&quot;fID&quot;:&quot;6&quot;,&quot;fName&quot;:&quot;笑声&quot;},{&quot;fID&quot;:&quot;7&quot;,&quot;fName&quot;:&quot;恐惧&quot;},{&quot;fID&quot;:&quot;8&quot;,&quot;fName&quot;:&quot;流量&quot;},{&quot;fID&quot;:&quot;9&quot;,&quot;fName&quot;:&quot;信仰&quot;},{&quot;fID&quot;:&quot;10&quot;,&quot;fName&quot;:&quot;幸运&quot;}]</data></div></div>
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
     <div class="x-contents-content" xid="commonUseContent"><div class="x-panel-content" xid="content">
   <div component="$UI/system/components/bootstrap/row/row" class="row grid" xid="row1">
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col1">
    <div class="card" xid="div24">
     <i class="icon-android-download" style="color: rgb(153, 196, 18);" xid="i26"></i>
     <span class="title" xid="span27">下载</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col2">
    <div class="card" xid="div25">
     <i class="icon-android-alarm" style="color:#FF8080;" xid="i27"></i>
     <span class="title" xid="span28">时钟</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col3">
    <div class="card" xid="div26">
     <i class="icon-android-battery" style="color:#FF8000;" xid="i28"></i>
     <span class="title" xid="span29">电池电量</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col4">
    <div class="card" xid="div27">
     <i class="icon-android-call" style="color: rgb(153, 196, 18);" xid="i29"></i>
     <span class="title" xid="span30">电话</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col5">
    <div class="card" xid="div28">
     <i class="icon-android-camera" style="color:#C0C0C0;" xid="i30"></i>
     <span class="title" xid="span31">相机</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col6">
    <div class="card" xid="div29">
     <i class="icon-android-lightbulb" style="color:#FF8040;" xid="i31"></i>
     <span class="title" xid="span32">手电筒</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col21">
    <div class="card" xid="div30">
     <i class="icon-android-locate" style="color:#0080FF;" xid="i32"></i>
     <span class="title" xid="span33">指南针</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col22">
    <div class="card" xid="div31">
     <i class="icon-android-location" style="color:#FF8080;" xid="i33"></i>
     <span class="title" xid="span34">地图</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col23">
    <div class="card" xid="div32">
     <i class="icon-android-mail" style="color:#FF8000;" xid="i34"></i>
     <span class="title" xid="span35">电子邮件</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col24">
    <div class="card" xid="div33">
     <i class="icon-android-microphone" style="color: rgb(153, 196, 18);" xid="i35"></i>
     <span class="title" xid="span36">录音机</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col25">
    <div class="card" xid="div34">
     <i class="icon-android-playstore" style="color:#0080FF;" xid="i36"></i>
     <span class="title" xid="span37">视频</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col26">
    <div class="card" xid="div35">
     <i class="icon-android-search" style="color:#000000;" xid="i37"></i>
     <span class="title" xid="span38">放大镜</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col27">
    <div class="card" xid="div36">
     <i class="icon-android-share" style="color:#0080FF;" xid="i38"></i>
     <span class="title" xid="span39">分享</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col28">
    <div class="card" xid="div37">
     <i class="icon-android-trash" style="color: rgb(153, 196, 18);" xid="i39"></i>
     <span class="title" xid="span40">回收站</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col29">
    <div class="card" xid="div38">
     <i class="icon-android-wifi" style="color:#FF80C0;" xid="i40"></i>
     <span class="title" xid="span41">WLAN</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col30">
    <div class="card" xid="div39">
     <i class="icon-heart" style="color:#FF8080;" xid="i41"></i>
     <span class="title" xid="span42">收藏</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col31">
    <div class="card" xid="div40">
     <i class="icon-clipboard" style="color:#FF8000;" xid="i42"></i>
     <span class="title" xid="span43">便签</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col32">
    <div class="card" xid="div41">
     <i class="icon-cloud" style="color:#8BBBCD;" xid="i43"></i>
     <span class="title" xid="span44">云</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col33">
    <div class="card" xid="div42">
     <i class="icon-ios7-musical-notes" style="color:#8000FF;" xid="i44"></i>
     <span class="title" xid="span45">音乐</span></div> </div> 
   <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col34">
    <div class="card" xid="div43">
     <i class="icon-film-marker" style="color: rgb(153, 196, 18);" xid="i45"></i>
     <span class="title" xid="span46">摄像机</span></div> </div> </div></div></div>
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
     </div> </div></div></div>
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