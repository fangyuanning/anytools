// JavaScript Document


//ȫ�ֲ���
var w_w=window.innerWidth;
var w_h=window.innerHeight;
var item_w=w_w/10;
var index=Math.floor(Math.random()*4);//�ϲ����������index
var cantouch=1;//�Ƿ���Դ���
var move=1;//����Ƿ���Ի���
var move2=1;//�ɻ�������
var move3=1;//�ɻ�������
var p_pos=[];//��������
var d_pos=[];//��ɾ����
var pos=new Array(new Array(0,0,0,0,0,0),
				  new Array(0,0,0,0,0,0),
				  new Array(0,0,0,0,0,0),
				  new Array(0,0,0,0,0,0),
				  new Array(0,0,0,0,0,0),
				  new Array(0,0,0,0,0,0),
				  new Array(0,0,0,0,0,0),
				  new Array(0,0,0,0,0,0));
				  
//��Ƶ�ļ�
 var audio_down,audio_over,audio_change;
//dom��������Ϻ�����
$(document).ready(function(e) {
	load_audio_down();
	load_audio_over();
	load_audio_change();
	//���ڸı��Сʱ
    $(window).resize(function(e) {
       	rfWin_bacpic();//��������
    });
		rfWin_bacpic();//��������
	
	listen_gesture();//���Ƽ���
	
	add_new_items();
	
	//��ť����
	restart();
});
/**
*load_audio
*@author zhangwei
*/	
function load_audio_down(){
	audio_down = document.createElement("audio");
	if (audio_down != null && audio_down.canPlayType)
	{
		audio_down.src = "resource/down.wav";
		//audio_down.play();
	}
}	
function load_audio_over(){
	audio_over = document.createElement("audio");
	if (audio_over != null && audio_over.canPlayType)
	{
		audio_over.src = "resource/over.wav";
		//audio_over.play();
	}
}
function load_audio_change(){
	audio_change = document.createElement("audio");
	if (audio_change != null && audio_change.canPlayType)
	{
		audio_change.src = "resource/change.wav";
		//audio_change.play();
	}
}

/**
*���¿�ʼ
*@author zhangwei
*/	
function restart(){
	$(".restart").click(function(){
		//location.reload();
		//���ݻ�ԭ
		index=Math.floor(Math.random()*4);//�ϲ����������index
		cantouch=1;//�Ƿ���Դ���
		move=1;//����Ƿ���Ի���
		move2=1;//�ɻ�������
		move3=1;//�ɻ�������
		p_pos=[];//��������
		d_pos=[];//��ɾ����
		pos=new Array(new Array(0,0,0,0,0,0),
					  new Array(0,0,0,0,0,0),
					  new Array(0,0,0,0,0,0),
					  new Array(0,0,0,0,0,0),
					  new Array(0,0,0,0,0,0),
					  new Array(0,0,0,0,0,0),
					  new Array(0,0,0,0,0,0),
					  new Array(0,0,0,0,0,0));
		$("#win_block").css("display","none");
		$("#lose_block").css("display","none");
		$("#box").html("");
		$("#score").text(0);
		
		//���¿�ʼ
		add_new_items();
	});//restart
}
/**
*���Ƽ���
*@author zhangwei
*/	
function listen_gesture(){
	var s_x;
	var s_y;
	var e_x;
	var e_y;
   
    $(document).on('touchstart',function(e) {
		if(!move && !cantouch)return;
      	var touch = e.originalEvent.targetTouches[0]; 
		s_x=touch.pageX;
		s_y=touch.pageY;
		$(document).on('touchmove',function(e) {
			var touch = e.originalEvent.changedTouches[0];
			e_x=touch.pageX;
			e_y=touch.pageY;
			var c_x=(e_x-s_x);
			var c_y=(e_y-s_y);
			//c_y=c_y>0?c_y:-c_y;
			if(move&&c_x*c_x+c_y*c_y>=item_w*item_w&&c_x!=0){
				if((c_y/c_x<=1) && (c_y/c_x>=-1)){
					if(c_x>0){
						//alert("R");
						move_right();
						move=0;
					}else{
						//alert("L");
						move_left();
						move=0;
					}
				}else{
					if(c_y>0){
						//alert("D");
						move_down();
						audio_down.play();
						move=0;
						cantouch=0;//��ֹ�ٴ�������ָ��
					}else{
						//alert("U");
						item_p_change();
						move=0;
					}
				}
			}
			
			if(move2&&c_x*c_x+c_y*c_y>=item_w*item_w*4&&c_x!=0){
				if((c_y/c_x<=1) && (c_y/c_x>=-1)){
					if(c_x>0){
						//alert("R");
						move_right();
						move2=0;
					}else{
						//alert("L");
						move_left();
						move2=0;
					}
				}
			}
			if(move3&&c_x*c_x+c_y*c_y>=item_w*item_w*9&&c_x!=0){
				if((c_y/c_x<=1) && (c_y/c_x>=-1)){
					if(c_x>0){
						//alert("R");
						move_right();
						move3=0;
					}else{
						//alert("L");
						move_left();
						move3=0;
					}
				}
			}
		});
		
	});
	
	$(document).on('touchend',function(e) {
		if(!cantouch)return;
		var touch = e.originalEvent.changedTouches[0];
		e_x=touch.pageX;
		e_y=touch.pageY;
		var c_x=(e_x-s_x);
		var c_y=(e_y-s_y);
		//c_y=c_y>0?c_y:-c_y;
		if(move&&c_x*c_x+c_y*c_y<2500){
			//alert("item_p_change");
			item_p_change();
			audio_down.play();
		}
		move=1;
		move2=1;
		move3=1;
	});
	
}

/**
*is_win �Ƿ�Ӯ����Ϸ
*@author zhangwei
*/	
function is_win(){
	if($(".item:contains('8')").length){
		var score=parseInt($("#score").text());
		if(!localStorage.high_score)localStorage.high_score=0;
		var high_score=parseInt(localStorage.high_score);
		if(high_score<score){
			localStorage.high_score=score;
			high_score=score;
		}
		var k=0;
		var interval8 = setInterval(function(){
			$(".item_p").css("display","none");
			var style=k%2==1?"block":"none";
			$(".item:contains('8')").css("display",style);
			console.log(k%2);
			k++;
		},300);
		setTimeout(function(){
			clearInterval(interval8);
			$("#win_block .score").text(score);
			$("#win_block .h_score span").text(high_score);
			$("#win_block").slideDown();
			audio_over.play();
			cantouch=0;//��ֹ�ٴ�������ָ��
		},3000);
		
	}
}
/**
*is_lose �Ƿ������Ϸ
*@author zhangwei
*/	
function is_lose(){
	for(var i=0;i<pos[0].length;i++){
		if(pos[pos.length-1][i]!=0){
			var ii=i;
			var score=parseInt($("#score").text());
			if(!localStorage.high_score)localStorage.high_score=0;
			var high_score=parseInt(localStorage.high_score);
			if(high_score<score){
				localStorage.high_score=score;
				high_score=score;
			}
			var k=0;
			var interval0 = setInterval(function(){
				$(".item_p").css("display","none");
				var style=k%2==1?"block":"none";
				$(".item[i="+(pos.length-1)+ii+"]").css("display",style);
				console.log(k%2);
				k++;
			},300);
			setTimeout(function(){
				clearInterval(interval0);
				$("#lose_block .score").text(score);
				$("#lose_block .h_score span").text(high_score);
				$("#lose_block").slideDown();
				audio_over.play();
				cantouch=0;//��ֹ�ٴ�������ָ��
			},3000);
			break;
		}
	}
}
/**
*������Ԫ��
*@author zhangwei
*/	
function add_new_items(){
	is_lose();
	is_win();
	//������ֵ	
	var item01=Math.floor(Math.random()*2)+1;
	var item02=Math.floor(Math.random()*2)+1;
	var item03=Math.floor(Math.random()*2)+1;
	
	var items_html='<div pi="p1" i="" change="0" del="0" class="item item'+item01+' item_l_'+index+' item_p item_p0">'+item01+'</div>'
				  +'<div pi="p2" i="" change="0" del="0" class="item item'+item02+' item_l_'+(index+1)+' item_p item_p0">'+item02+'</div>'
				  +'<div pi="p3" i="" change="0" del="0" class="item item'+item03+' item_l_'+(index+2)+' item_p item_p0">'+item03+'</div>';
	$("#box").append(items_html);
	setTimeout(function(){
		$("#box .item_p").removeClass("item_p0");
		cantouch=1;//�ָ���������ָ��
	},100);
	
	
}
/**
*move_down ���¼��صķ���
*@author zhangwei
*/	
function move_down(){
	//λ��λ��
	var ti1,ti2,ti3;
	for(var i=0;i<pos.length;i++){
		if(pos[i][index]==0){
			ti1=i;
			pos[i][index]=$(".item_p[pi=p1]").text();
			break;
		}
	}
	for(var i=0;i<pos.length;i++){
		if(pos[i][index+1]==0){
			ti2=i;
			pos[i][index+1]=$(".item_p[pi=p2]").text();
			break;
		}
	}
	for(var i=0;i<pos.length;i++){
		if(pos[i][index+2]===0){
			ti3=i;
			pos[i][index+2]=$(".item_p[pi=p3]").text();
			break;
		}
	}

	$(".item_p[pi=p1]").addClass("item_b_"+ti1);
	$(".item_p[pi=p2]").addClass("item_b_"+ti2);
	$(".item_p[pi=p3]").addClass("item_b_"+ti3);
	
	$(".item_p[pi=p1]").attr("i",""+ti1+index);
	$(".item_p[pi=p2]").attr("i",""+ti2+(index+1));
	$(".item_p[pi=p3]").attr("i",""+ti3+(index+2));
	
	$(".item_p").removeAttr("pi");
	$(".item_p").removeClass("item_p");
	
	check_items();
	//if(is_ready==1)
	//	add_new_items();
	
}
/**
*check_items 
*/	
function check_items(){
	p_pos=[];
	for(var i=0;i<pos.length;i++){
		for(var j=0;j<pos[i].length;j++){
			var tv=pos[i][j];
			if(tv===0)continue;
			//�ĸ���
			if(i==0&&j==0||i==0&&j==pos[0].length-1||i==pos.length-1&&j==0||i==pos.length-1&&j==pos[0].length-1){continue;}
			if(i==0||i==pos.length-1){
				var tv_l=pos[i][j-1];
				var tv_r=pos[i][j+1];
				if(tv_l==tv&&tv_r==tv){
					//alert(i+","+j);
					var position=""+i+j;
					var direction=0;
					p_pos.push([position,direction,tv]);
				}
			}else if(j==0||j==pos[0].length-1){
				var tv_b=pos[i-1][j];
				var tv_t=pos[i+1][j];
				if(tv_b==tv&&tv_t==tv){
					//alert(i+","+j);
					var position=""+i+j;
					var direction=2;
					p_pos.push([position,direction,tv]);
					//alert(p_pos.length+",,"+p_pos[0][0]);
				}
			}else{
				//ˮƽ����
				var tv_l=pos[i][j-1];
				var tv_r=pos[i][j+1];
				if(tv_l==tv&&tv_r==tv){
					//alert(i+","+j);
					var position=""+i+j;
					var direction=0;
					p_pos.push([position,direction,tv]);
				}
				//��ֱ����
				var tv_b=pos[i-1][j];
				var tv_t=pos[i+1][j];
				if(tv_b==tv&&tv_t==tv){
					//alert(i+","+j);
					var position=""+i+j;
					var direction=2;
					p_pos.push([position,direction,tv]);
				}
				//б��Ϊ1�ĶԽ���
				var tv_lb=pos[i-1][j-1];
				var tv_rt=pos[i+1][j+1];
				if(tv_lb==tv&&tv_rt==tv){
					//alert(i+","+j);
					var position=""+i+j;
					var direction=1;
					p_pos.push([position,direction,tv]);
				}
				//б��Ϊ-1�ĶԽ���
				var tv_lt=pos[i+1][j-1];
				var tv_rb=pos[i-1][j+1];
				if(tv_lt==tv&&tv_rb==tv){
					//alert(i+","+j);
					var position=""+i+j;
					var direction=3;
					p_pos.push([position,direction,tv]);
				}
			}
		}
	}
	if(p_pos.length==0){
		//cantouch=1;//�ָ���������ָ��
		add_new_items();
		cantouch=1;//�ָ���������ָ��
	}else{
		cantouch=0;//��ֹ��������ָ��
		merge_items();//�ϲ�����
	}
}

/**
*merge_items �ϲ�����
*@author zhangwei
*/	
function merge_items(){
	//�ָ�changeֵ
	$(".item[change=1]").attr("change",0);
	var pp;
	for(var i=0;pp=p_pos[i];i++){
		var p_row=parseInt(pp[0].substring(0,1));
		var p_col=parseInt(pp[0].substring(1,2));
		var direction=pp[1];
		var tv=parseInt(pp[2]);
		//alert(p_row+","+p_col+","+direction+","+tv);
		change_style(p_row,p_col,tv);
		
		//ɾ����Ҫɾ������
		var d_i1_row,d_i1_col,d_i2_row,d_i2_col;
		if(direction==0){
			d_i1_row=p_row;
			d_i1_col=p_col-1;
			d_i2_row=p_row;
			d_i2_col=p_col+1;
		}else if(direction==1){
			d_i1_row=p_row-1;
			d_i1_col=p_col-1;
			d_i2_row=p_row+1;
			d_i2_col=p_col+1;
		}else if(direction==2){
			d_i1_row=p_row-1;
			d_i1_col=p_col;
			d_i2_row=p_row+1;
			d_i2_col=p_col;
		}else if(direction==3){
			d_i1_row=p_row-1;
			d_i1_col=p_col+1;
			d_i2_row=p_row+1;
			d_i2_col=p_col-1;
		}
		pos[d_i1_row][d_i1_col]=0;
		pos[d_i2_row][d_i2_col]=0;
		if($(".item[i="+d_i1_row+d_i1_col+"]").attr("change")!=1)
			$(".item[i="+d_i1_row+d_i1_col+"]").attr("del",parseInt($(".item[i="+d_i1_row+d_i1_col+"]").attr("del"))+1);
		if($(".item[i="+d_i2_row+d_i2_col+"]").attr("change")!=1)
			$(".item[i="+d_i2_row+d_i2_col+"]").attr("del",parseInt($(".item[i="+d_i2_row+d_i2_col+"]").attr("del"))+1);
		
	}
	setTimeout(function(){
		audio_change.play();
		clear_items();//����
		
	},250);
	
	//return check_items();//���ϲ���
}
/**
*score �������
*@author zhangwei
*/	
function score(){
	var sum=0;
	$(".item[change=1]").each(function() {
        var s=parseInt($(this).text());
		sum+=(s-1)*3;
		//alert($(".item:contains('"+s+"')").length)
		if($(".item:contains('"+s+"')").length<2){
			if(s==3)sum+=50;
			else if(s==4)sum+=100;
			else if(s==5)sum+=300;
			else if(s==6)sum+=500;
			else if(s==7)sum+=1000;
		}else{
			sum+=s;
		}
    });
	var o_score=parseInt($("#score").text());
	$("#score").text(o_score+sum);
}
/**
*clear_items ����
*@author zhangwei
*/	
function clear_items(){
	$(".item[del!=0]").addClass("item_p0");
	setTimeout(function(){
		score();
		$(".item[del!=0]").remove();
		setTimeout(function(){
			check_items();
		},100);
	},100);
	//����pos���¼
	for(var col=0;col<pos[0].length;col++){
		for(var row=0;row<pos.length;row++){
			if(pos[row][col]==0){
				for(var j=row+1;j<pos.length;j++){
					if(pos[j][col]!=0){
						var o_row=j;
						var o_col=col;
						var p_row=row;
						var p_col=col;
						move_to(o_row,o_col,p_row,p_col);
						pos[row][col]=pos[j][col];
						pos[j][col]=0;
						break;
					}
				}
			}
		}
	}
	//cantouch=1;//�ָ���������ָ��
}

/**
*change_style ��Ԫ��ı���ʽ
*@author zhangwei
*/	
function change_style(p_row,p_col,tv){
	setTimeout(function(){
		$(".item[i="+p_row+p_col+"]").addClass("item"+(tv+1));//��������ʽ
		$(".item[i="+p_row+p_col+"]").removeClass("item"+(tv));//ɾ������ʽ
		$(".item[i="+p_row+p_col+"]").text(tv+1);//�ı�����
		pos[p_row][p_col]=tv+1;//���Ŀ��Ǻ�
		$(".item[i="+p_row+p_col+"]").attr("change","1");
		$(".item[i="+p_row+p_col+"]").attr("del","0");
	},250);
}
/**
*move_to ��Ԫ���ƶ��ķ���
*@author zhangwei
*/	
function move_to(o_row,o_col,p_row,p_col){
	setTimeout(function(){			
		//ͼ�ν������λ�ã��½�
		//$(".item[i="+o_row+o_col+"]").addClass("item_l_"+p_col);
		$(".item[i="+o_row+o_col+"]").addClass("item_b_"+p_row);
		//$(".item[i="+o_row+o_col+"]").removeClass("item_l_"+o_col);
		$(".item[i="+o_row+o_col+"]").removeClass("item_b_"+o_row);
		$(".item[i="+o_row+o_col+"]").attr("i",""+p_row+p_col);
	},100);
}
/**
*move_left ������صķ���
*@author zhangwei
*/	
function move_left(){
	if(index>0)
		index--;
	$(".item_p[pi=p1]").addClass("item_l_"+index);
	$(".item_p[pi=p2]").addClass("item_l_"+(index+1));
	$(".item_p[pi=p3]").addClass("item_l_"+(index+2));
	$(".item_p[pi=p1]").removeClass("item_l_"+(index+1));
	$(".item_p[pi=p2]").removeClass("item_l_"+(index+2));
	$(".item_p[pi=p3]").removeClass("item_l_"+(index+3));
}

/**
*move_right ������صķ���
*@author zhangwei
*/	
function move_right(){
	if(index<3)
		index++;
	$(".item_p[pi=p1]").addClass("item_l_"+index);
	$(".item_p[pi=p2]").addClass("item_l_"+(index+1));
	$(".item_p[pi=p3]").addClass("item_l_"+(index+2));
	$(".item_p[pi=p1]").removeClass("item_l_"+(index-1));
	$(".item_p[pi=p2]").removeClass("item_l_"+index);
	$(".item_p[pi=p3]").removeClass("item_l_"+(index+1));
}
/**
*item_p_change ������items����λ��
*@author zhangwei
*/	
function item_p_change(){
	$(".item_p[pi=p1]").addClass("item_l_"+(index+1));
	$(".item_p[pi=p2]").addClass("item_l_"+(index+2));
	$(".item_p[pi=p3]").addClass("item_l_"+(index));
	
	$(".item_p[pi=p1]").removeClass("item_l_"+(index));
	$(".item_p[pi=p2]").removeClass("item_l_"+(index+1));
	$(".item_p[pi=p3]").removeClass("item_l_"+(index+2));
	
	$(".item_p[pi=p3]").attr("pi","p4");
	$(".item_p[pi=p2]").attr("pi","p3");
	$(".item_p[pi=p1]").attr("pi","p2");
	$(".item_p[pi=p4]").attr("pi","p1");
}

/**
*��������
*@author zhangwei
*/	
function rfWin_bacpic(){
	var w_h=window.innerHeight;
	$("#container").css("height",w_h);
	
}

