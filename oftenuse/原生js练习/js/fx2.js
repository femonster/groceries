

// 练手二，稍微封装抽象练手一，通用性更强

function play() {
		var mydiv=document.getElementById('mydiv');
		mydiv.timer=null;
		mydiv.timer2=null;
		mydiv.onmouseover=function(){
			startmove(this,'left',0);
			changeOpacity(this,'opacity',100);

		}
		mydiv.onmouseout=function(){
			startmove(this,'left',-50);
			changeOpacity(this,'opacity',30);
		}
	}

	function startmove(element,attr,finalx){//元素，要改变的元素样式，最终目标
		 if(element.timer){clearInterval(element.timer);}
		 element.timer=setInterval(function(){
			 var mystyle=parseInt(getStyle(element,attr));
		     var speed=(finalx-mystyle)/5;
		     speed=speed>0?Math.ceil(speed):Math.floor(speed);
		     if(mystyle==finalx){//此处offsetleft可以抽象
			    clearInterval(element.timer);
		      }else{
			    element.style.left=mystyle+speed+'px';
			  }
	    },30);
	}

	function changeOpacity(element,attr,finalOp){
		var MyOpacity=parseInt(getStyle(element,attr))*100;
		if(element.timer2){clearInterval(element.timer2);}
		 var speed=0;
        if(MyOpacity<finalOp){
    	     speed=5;
          }else{
    	    speed=-5;
        }
		element.timer2=setInterval(function(){
			if(MyOpacity==finalOp){
				clearInterval(element.timer2);
			}else{
			   MyOpacity+=speed;
		       element.style.opacity=MyOpacity/100;
			}

		},30);

	}

	function addEventLoad(func){
		oldonload=window.onload;
		if(typeof window.onload!='function'){
			window.onload=func;
		}else{
			window.onload=function(){
				oldonload();
				func();
			}
		}
	}
  //获取样式
	function getStyle(element,attr){
		if(element.currentStyle){
			return element.currentStyle[attr];
		}else{
			return getComputedStyle(element,false)[attr];
		}

	}

	addEventLoad(play);