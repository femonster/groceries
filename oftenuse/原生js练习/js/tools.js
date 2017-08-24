//获取样式
/**
 * 获取到的是浏览器计算后的样式
 *
 * background -------复合样式，不要获取
 * backgroundColor----单一样式，不要用来做判断
 * 不要有空格
 * 不要获取未设置的样式：不兼容
 */

	function getStyle(obj,attr) {
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
	}
//通过class查找元素
//
function getByClass(oParent,tagName,sClass){
		var oEles=oParent.getElementsByTagName(tagName);
		var aResult=[];
		for (var i = 0; i < oEles.length; i++) {
			var arr = oEles[i].className.split(' ');
				for (var j = 0; j < arr.length; j++) {
					if (arr[j]==sClass) {
						aResult.push(oEles[i]);
						break;
					}
				}
		}
		return aResult;
	}

	//设置cookie
function setCookie(key, value, t) {
	var oDate = new Date();
	oDate.setDate( oDate.getDate() + t );
	document.cookie = key + '=' + encodeURI(value) + ';expires=' + oDate.toGMTString(); //内容编码存放
}

function getCookie(key) {
	var arr1 = document.cookie.split('; ');
	for (var i=0; i<arr1.length; i++) {
		var arr2 = arr1[i].split('=');
		if ( arr2[0] == key ) {
			return decodeURI(arr2[1]); //内容解码
		}
	}
}

function removeCookie(key) {
	setCookie(key, '', -1);
}