<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:499px;left:48px;" onActive="modelActive" onInactive="modelInactive" onModelConstruct="modelModelConstruct" onModelConstructDone="modelModelConstructDone" onLoad="modelLoad" onParamsReceive="modelParamsReceive" onunLoad="modelUnLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="notedata" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid2"></column>
  <column label="类型" name="type" type="String" xid="xid3"></column>
  <column label="标题" name="title" type="String" xid="xid4"></column>
  <column label="内容" name="content" type="String" xid="xid5"></column>
  <column label="日期" name="date" type="String" xid="xid6"></column>
  <column label="备注" name="comonent" type="String" xid="xid7"></column>
  <column label="提醒时间" name="notifytime" type="Time" xid="xid8"></column>
  <column label="心情" name="emtion" type="String" xid="xid9"></column>
  <column label="密码" name="password" type="String" xid="xid10"></column>
  <column label="重要程度" name="important" type="String" xid="xid11"></column>
  <column label="是否显示" name="show" type="Integer" xid="xid12"></column>
  <data xid="default2">[{&quot;ID&quot;:&quot;1&quot;,&quot;type&quot;:&quot;日记&quot;,&quot;title&quot;:&quot;心情不错&quot;,&quot;content&quot;:&quot;今天天气特别好，我非常高兴，非常舒服，谢谢。&quot;,&quot;date&quot;:&quot;2017-7-20&quot;,&quot;comonent&quot;:&quot;没啥&quot;,&quot;notifytime&quot;:&quot;10:20:30&quot;,&quot;emtion&quot;:&quot;2234&quot;,&quot;password&quot;:&quot;0&quot;,&quot;important&quot;:&quot;1&quot;,&quot;show&quot;:1}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="notetype" idColumn="classs"><column label="记事类型" name="classs" type="String" xid="xid1"></column>
  <data xid="default1">[{&quot;classs&quot;:&quot;收入&quot;},{&quot;classs&quot;:&quot;支出&quot;},{&quot;classs&quot;:&quot;纪念&quot;},{&quot;classs&quot;:&quot;日记&quot;}]</data></div></div>  
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
          <div class="x-titlebar-title" bind-text='window.localize.getLocalize("notepad")'></div>  
          <div class="x-titlebar-right reverse"> 
          <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="linear linear-bubble" onClick="okBtnClick" xid="okBtn">
   <i class="linear linear-bubble" xid="i1"></i>
   <span xid="span1"></span></a>
  <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="linear linear-bus" onClick="addBtnClick" xid="addBtn">
   <i class="linear linear-bus" xid="i2"></i>
   <span xid="span2"></span></a></div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-center" xid="col4"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label40" xid="labelEdit1">
   <label class="x-label" xid="label1"><![CDATA[请选择类别：]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="typeselect" bind-optionsValue="classs" bind-options="notetype" bind-labelRef='$model.notetype.ref("classs")' bind-optionsLabel="classs"></select></div></div>
   <div class="x-col x-col-fixed x-col-center" xid="col5" style="width:auto;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="修改类型" xid="button1" onClick="button1Click">
   <i xid="i3"></i>
   <span xid="span3" bind-text='window.localize.getLocalize("notepad_modtype")'>修改类型</span></a></div></div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="notedata" filter=' $row.val("content")'>
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><span xid="span4" bind-text='val("title")'></span>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-center" xid="col12"><span xid="span5" class="center-block" style="text-align:center;font-size:xx-large;" bind-text='val("title")'><![CDATA[essdofijsdofinihao ]]></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col x-col-fixed" xid="col15" style="overflow:hidden;height:60px;"><span xid="span6" style="text-align:left;font-size:medium;font-family:Arial;color:#008080;" bind-text='val("content")'><![CDATA[宋帝国囧电脑是第几个哦死几个公共ijgisjgsdjfoisdj 狗isjdoifjodijf山东覅京东ifj发电方式是的佛ijdofdoifjdoij 哦地方就测试内容大小哦是覅点击覅圣诞节山东覅技术都放假]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col16"><img src="$UI/anytools/resource/face/801f91f21f54bfb449cc9c82840aa46e.gif" alt="" xid="image1" align="middle" height="60px" style="width:60px;"></img></div>
   <div class="x-col" xid="col17"><span xid="span8"></span></div>
   <div class="x-col x-col-center" xid="col18"><span xid="span7" style="text-align:right;font-size:medium;vertical-align:middle;" bind-text='val("date")'><![CDATA[2017-7-30]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="line">
   <div class="x-col x-col-fixed x-col-center" xid="col19"><img src="" alt="" xid="image2"></img>
  </div>
   </div></div>
   </div></li></ul> </div>
  </div>
  </div> 
</div>