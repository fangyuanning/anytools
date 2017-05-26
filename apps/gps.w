<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:434px;left:47px;height:auto;" onLoad="modelLoad" onModelConstructDone="modelModelConstructDone" onParamsReceive="modelParamsReceive" onunLoad="modelUnLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="gpsstatus" idColumn="prn" onCustomRefresh="gpsstatusCustomRefresh"><column label="ID" name="prn" type="Decimal" xid="xid1"></column>
  <column label="方位角" name="azimuth" type="Decimal" xid="xid2"></column>
  <column label="高度角" name="elevation" type="Decimal" xid="xid3"></column>
  <column label="信噪比" name="snr" type="Decimal" xid="xid4"></column>
  <column label="国家" name="country" type="Integer" xid="xid5"></column>
  <data xid="default1">[{&quot;prn&quot;:2,&quot;azimuth&quot;:&quot;20&quot;,&quot;elevation&quot;:&quot;30&quot;,&quot;snr&quot;:&quot;60&quot;,&quot;country&quot;:1}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="locationdata" idColumn="lat"><column label="经度" name="lat" type="Decimal" xid="xid6"></column>
  <column label="维度" name="lng" type="Decimal" xid="xid7"></column>
  <column name="accuracy" type="Decimal" xid="xid8"></column>
  <column label="偏北方向角" name="bearing" type="Decimal" xid="xid9"></column>
  <column label="速度" name="speed" type="String" xid="xid10"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="标题"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">标题</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" style="background-color:#727272;"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="locationdata" autoLoad="true" disablePullToRefresh="true">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2" style="background-color:#727272;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col x-col-fixed" xid="locationcol" style="width:60px;"><label xid="locationInfo"><![CDATA[经度:]]></label></div>
  <div class="x-col" xid="col5">
   <label xid="lat" bind-text='val("lat")'></label></div>
  <div class="x-col x-col-fixed" xid="col6" style="width:60px;">
   <label xid="label1"><![CDATA[纬度:]]></label></div>
  <div class="x-col" xid="col15">
   <label xid="label2" bind-text='val("lng")'></label></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-fixed" xid="col7" style="width:60px;">
    <label xid="label3"><![CDATA[精度:]]></label></div> 
   <div class="x-col" xid="col8">
    <label xid="label4" bind-text='val("accuracy"'></label></div> 
  <div class="x-col x-col-fixed" xid="col17" style="width:60px;">
   <label xid="label6"><![CDATA[偏向角:]]></label></div>
  <div class="x-col" xid="col16">
   <label xid="label5" bind-text='val("bearing")'></label></div></div></li></ul> </div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list3" style="height:40px;table-layout:fixed;">
   <ul class="x-list-template" xid="listTemplateUl3">
    <li xid="li3" style="height:40px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="background-color:#727272;height:40px;">
   <div class="x-col x-col-fixed tableborders" xid="col10" style="text-align:center;border-style:solid solid solid solid;border-width:thin thin thin thin;width:60px;"><span xid="span3" class="tableitem"><![CDATA[序号]]></span>
  </div>
   <div class="x-col x-col-fixed tableborders" xid="col11" style="text-align:center;"><span xid="span4" class="tableitem" style="vertical-align:middle;"><![CDATA[信号强度]]></span></div>
   <div class="x-col x-col-fixed tableborders" xid="col12" style="text-align:center;width:60px;"><span xid="span5" style="vertical-align:middle;" class="tableitem"><![CDATA[可用]]></span></div>
  <div class="x-col x-col-fixed tableborders" xid="col13" style="width:60px;text-align:center;"><span xid="span6" class="tableitem" style="text-align:center;"><![CDATA[角度]]></span></div>
  <div class="x-col x-col-fixed tableborders" xid="col14" style="width:60px;text-align:center;"><span xid="span7" class="tableitem"><![CDATA[角度]]></span></div></div></li></ul> </div><div component="$UI/system/components/justep/list/list" class="x-list" xid="gpslist" data="gpsstatus">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="background-color:#727272;height:30px;">
   <div class="x-col x-col-fixed" xid="col1" style="width:60px;"><span xid="prn" bind-text='val("prn")' style="width:30px;height:30px;"><![CDATA[]]></span>
  <img src="" alt="" xid="country" bind-attr-src=' $model.getCountryIcon( val("country"))' style="width:30px;" height="30px"></img></div>
   <div class="x-col x-col-top" xid="col2" style="height:20px;"><div class="progress" component="$UI/system/components/bootstrap/progress/progress" xid="signal" valuenow="40" textVisible="false" bind-attr-valuenow="val('snr')" valuemax="50">
   <div class="progress-bar progress-bar-success" role="progressbar" xid="progressBar1" bind-css="{'progress-bar-danger':val('snr')&lt;20}" bind-style="{width:val('snr')/2+'%'}">
    <span xid="snrvalue" bind-text='val("snr")' class="pull-right"></span><span xid="span1">0%</span></div> 
  </div>
  </div>
   <div class="x-col x-col-fixed" xid="col3" style="width:60px;"><span xid="activedgps"><![CDATA[ok]]></span></div>
  <div class="x-col x-col-fixed" xid="col4" style="width:60px;"><span xid="azimuth" bind-text='val("azimuth")'><![CDATA[1]]></span></div>
  <div class="x-col x-col-fixed" xid="col9" style="width:60px;">
   <span xid="elevation" bind-text='val("elevation")'></span></div></div>
  </li></ul> </div>
  </div>
  </div> 
</div>