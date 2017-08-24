	function getStyle(obj,attr) {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj,false)[attr];
		}
	}
	function getClass(oParent,sClass){
		var oEles=oParent.getElementsByTagName('*');
		var aResult=[];
		for (var i = 0; i < oEles.length; i++) {
			if (oEles[i].className==sClass) {
				aResult.push(oEles[i]);
			}
		}
		return aResult;
	}

	function startmove(obj,attr,iend){

	if(obj.timer){clearInterval(obj.timer);}
	obj.timer=setInterval(function(){
		if (attr=='opacity') {
			var iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
		} else {
			var iCur=parseInt(getStyle(obj,attr));
		}
		var iSpeed=(iend- iCur)/8;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		if (iCur==iend) {
			clearInterval(obj.timer);
		} else {
			if (attr=='opacity') {
				obj.style[attr]=(iCur+iSpeed)/100;
			} else {
				obj.style[attr]=iCur+iSpeed+'px';
			}

		}

	},30);
}