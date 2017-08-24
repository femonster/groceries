
// 练手1
window.onload=function play() {
		var mydiv=document.getElementById('mydiv');
		mydiv.timer=null;
		mydiv.timer2=null;
		mydiv.alpha=30;
		mydiv.onmouseover=function(){
			startmove("mydiv",0);
			changeOpacity("mydiv",100);

		}
		mydiv.onmouseout=function(){
			startmove("mydiv",-50);
			changeOpacity("mydiv",30);
		}
	}

	function startmove(elementID,finalx){
		var myele=document.getElementById(elementID);
		 var speed=Math.ceil((finalx-myele.offsetLeft)/5);
		    if(myele.timer){clearInterval(myele.timer);}
		myele.timer=setInterval(function(){
			if(myele.offsetLeft==finalx){//此处offsetleft可以抽象
				clearInterval(myele.timer);
			}else{
				myele.style.left=myele.offsetLeft+speed+'px';
			}
		},30);
	}
	function changeOpacity(elementID,finalOp){
		var myele=document.getElementById(elementID);
		if(myele.timer2){clearInterval(myele.timer2);}
		 var speed=0;
        if(myele.alpha<finalOp){
    	     speed=5;
          }else{
    	    speed=-5;
        }
		myele.timer2=setInterval(function(){
			if(myele.alpha==finalOp){
				clearInterval(myele.timer2);
			}else{
			   myele.alpha+=speed;
		       myele.style.opacity=(myele.alpha)/100;
			}

		},30);

	}