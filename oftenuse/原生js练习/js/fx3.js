// 练手三，进一步封装，适合更多样式的动画，使用一个定时器

function play() {
		var mydiv=document.getElementById('mydiv');
		mydiv.onmouseover=function(){
			startmove(this,{'left':0,'opacity':100});
		}
		mydiv.onmouseout=function(){
			startmove(this,{'left':-50,'opacity':30});
		}
	}

	function startmove(element,json){//元素，{要改变的元素样式，最终目标}
      var timer=null;
      element.timer=setInterval(function(){
      var mystyle=0;
      for(attr in json){
      	if(attr=="opacity"){
      		mystyle=parseFloat(getStyle(element,attr))*100;
      	}
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