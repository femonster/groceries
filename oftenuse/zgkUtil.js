//获取参数
function GetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

    /**
     * 通过URL获取参数值
     * @param {String} name 参数的name
     */
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

// 补齐： （需要被补的字符，需要到达的长度，补的字符）
function leftpad (str, len, ch) {
  str = String(str);
  var i = -1;
  if (!ch && ch !== 0) ch = ' ';
  len = len - str.length;
  while (++i < len) {
    str = ch + str;
  }
  return str;
}

// 时间转换
function formatDate(now) {
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    return year + "-" + month + "-" + date + "   " + hour + ":" + minute;
}

// //使用方法 
//var now = new Date(); 
//var nowStr = now.format("yyyy-MM-dd hh:mm:ss"); 

Date.prototype.Format = function(fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/*
字母大小写切换
type
1:首字母大写   
2：首页母小写
3：大小写转换
4：全部大写
5：全部小写
 * */
//changeCase('asdasd',1)
//Asdasd
function changeCase(str,type)
{
    function ToggleCase(str) {
        var itemText = ""
        str.split("").forEach(
            function (item) {
                if (/^([a-z]+)/.test(item)) {
                    itemText += item.toUpperCase();
                }
                else if (/^([A-Z]+)/.test(item)) {
                    itemText += item.toLowerCase();
                }
                else{
                    itemText += item;
                }
            });
        return itemText;
    }

    switch (type) {
        case 1:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toUpperCase() + v2.toLowerCase();
            });
        case 2:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toLowerCase() + v2.toUpperCase();
            });
        case 3:
            return ToggleCase(str);
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}

//字符串循环复制
//repeatStr(str->字符串, count->次数)
//repeatStr('123',3)
//"123123123"
function repeatStr(str, count) {
    var text = '';
    for (var i = 0; i < count; i++) {
        text += str;
    }
    return text;
}

//检测字符串
//checkType('165226226326','phone')
//false
function checkType (str, type) {
    switch (type) {
        case 'email':
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'phone':
            return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
        case 'tel':
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'number':
            return /^[0-9]$/.test(str);
        case 'english':
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese':
            return /^[\u4E00-\u9FA5]+$/.test(str);
        case 'lower':
            return /^[a-z]+$/.test(str);
        case 'upper':
            return /^[A-Z]+$/.test(str);
        default :
            return true;
    }
}

//随机码（toString详解）
//count取值范围0-36

//randomNumber(10)
//"2584316588472575"

//randomNumber(14)
//"9b405070dd00122640c192caab84537"

//Math.random().toString(36).substring(2);
//"83vhdx10rmjkyb9"
function randomNumber(count){
   return Math.random().toString(count).substring(2);
}

//eg，在字符串'sad44654blog5a1sd67as9dablog4s5d16zxc4sdweasjkblogwqepaskdkblogahseiuadbhjcibloguyeajzxkcabloguyiwezxc967'中找出'blog'的出现次数。代码如下

function countStr (str,strSplit){
    return str.split(strSplit).length-1
}
//var strTest='sad44654blog5a1sd67as9dablog4s5d16zxc4sdweasjkblogwqepaskdkblogahseiuadbhjcibloguyeajzxkcabloguyiwezxc967'
//countStr(strTest,'blog')
//6


// 打乱数组
function upsetArr(arr){
    return arr.sort(function(){ return Math.random() - 0.5});
}

//数组最大值最小值
//这一块的封装，主要是针对数字类型的数组
function maxArr(arr){
    return Math.max.apply(null,arr);
}
function minArr(arr){
    return Math.min.apply(null,arr);
}

//返回数组（字符串）一个元素出现的次数
//getEleCount('asd56+asdasdwqe','a')
//3
//getEleCount([1,2,3,4,5,66,77,22,55,22],22)
//2
function getEleCount (obj, ele) {
    var num = 0;
    for (var i = 0, len = obj.length; i < len; i++) {
        if (ele == obj[i]) {
            num++;
        }
    }
    return num;
}


//cookie
//设置cookie
function setCookie(name,value,iDay){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie=name+'='+value+';expires='+oDate;
}
//获取cookie
function getCookie(name){
    var arr=document.cookie.split('; ');
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split('=');
        if(arr2[0]==name)
        {
            return arr2[1];
        }
    }
    return '';
}
//删除cookie
function removeCookie(name){
    setCookie(name,1,-1);
}


//upDigit(168752632)
//"人民币壹亿陆仟捌佰柒拾伍万贰仟陆佰叁拾贰元整"
//upDigit(1682)
//"人民币壹仟陆佰捌拾贰元整"
//upDigit(-1693)
//"欠人民币壹仟陆佰玖拾叁元整"
function upDigit(n)   
{  
    var fraction = ['角', '分','厘'];  
    var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];  
    var unit = [ ['元', '万', '亿'], ['', '拾', '佰', '仟']  ];  
    var head = n < 0? '欠人民币': '人民币';  
    n = Math.abs(n);  
    var s = '';  
    for (var i = 0; i < fraction.length; i++)   
    {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, ''); 
    } 
    s = s || '整';  
    n = Math.floor(n);  
    for (var i = 0; i < unit[0].length && n > 0; i++)   
    {  
        var p = '';  
        for (var j = 0; j < unit[1].length && n > 0; j++)   
        {  
            p = digit[n % 10] + unit[1][j] + p; 
            n = Math.floor(n / 10);
        }
        //s = p.replace(/(零.)*零$/, '').replace(/^$/, '零')+ unit[0][i] + s; 
        s = p+ unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
} 


//随机产生颜色
function randomColor(){
    //randomNumber是上面定义的函数
    //写法1
    return 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
    
    //写法2
    return '#'+Math.random().toString(16).substring(2).substr(0,6);
    
    //写法3
    var color='#';
    for(var i=0;i<6;i++){
        color+='0123456789abcdef'[randomNumber(15)];
    }
    return color;
}

//ajax
function ajaxfun(type, url, data, successFunc) {
    $.ajax({
        type: type,
        dataType: 'json',
        url: url,
        data: data,
        success: function(e) {
            successFunc(e);
        },
        error: function(e) {
            console.log(e);
        }
    });
}



//是否为移动端
function isMoblie(){
        var u = navigator.userAgent, app = navigator.appVersion,
            versions = {//移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };
        if(versions.mobile&&(versions.android||versions.iPhone||versions.iPad||versions.ios)){
            return true;
        }else{
            return false;
        }
    }


// 弹出框
function toastfun(text, delay) {
    var cssText="position: fixed;height: 100px;width: auto;background: rgba(0,0,0,.8);padding:0 100px;border-radius: 6px;z-index: 10001;top:50%;left: 50%;-webkit-transform:translate3d(-50%,-50%,0);line-height: 100px;text-align: center;font-size: 24px;color: #fff;"
    var selector = document.querySelector(".toast");
    if (selector) {
        selector.parentNode.removeChild(selector);
    }
    var domdiv = document.createElement('div');
    domdiv.className = 'toast';
    domdiv.style.cssText=cssText;
    domdiv.innerText = text;
    document.getElementsByTagName("body")[0].appendChild(domdiv);
    clearTimeout(toastTime);
    var toastTime = setTimeout(function() {
        var selector = document.querySelector(".toast");
        selector.parentNode.removeChild(selector);
    }, delay || 2000);
}


//分页
var pager = function(pagecontainer, successfun, each) {
    this.pagecontainer = pagecontainer;
    this.successfun = successfun || function() {};
    this.each = each;
    if (typeof this.pageGroup != "function") {
        pager.prototype.pageGroup = function(pageNum, pageCount) {
            if (pageCount > 5) {
                switch (pageNum) {
                    case 1:
                        this.pageIcon(1, 5, 0);
                        break;
                    case 2:
                        this.pageIcon(1, 5, 1);
                        break;
                    case pageCount - 1:
                        this.pageIcon(pageCount - 4, pageCount, 3);
                        break;
                    case pageCount:
                        this.pageIcon(pageCount - 4, pageCount, 4);
                        break;
                    default:
                        this.pageIcon(pageNum - 2, pageNum + 2, 2);
                        break;
                }
            } else {
                this.pageIcon(1, pageCount, pageNum - 1);
            }
        };
        pager.prototype.pageIcon = function(page, total, eq) {
            var myHtml = '';
            for (var i = page; i <= total; i++) {
                myHtml += '<li>' + i + "</li>";
            }
            $(this.pagecontainer + ' .page-nav ul').html(myHtml);
            $(this.pagecontainer + ' .page-nav' + " ul li").eq(eq).addClass('on');
        };

        pager.prototype.pageNav = function(now, pageCount, parUnion) {
            this.pageGroup(now, pageCount);
            var self = this;
            $(document).off('click', parUnion + ' li');
            $(document).on('click', parUnion + ' li', function() {
                var pageNum = parseInt($(this).html());
                self.pageGroup(pageNum, pageCount);
                self.pageDate.page = $(parUnion + " li.on").html();
                self.anchorAjax(self.pageDate);
            })
            $(parUnion + ' .page-jump-button').off();
            $(parUnion + ' .page-jump-button').on('click', function() {
                var num = parseInt($(parUnion + ' .page-jump-text').val());
                if (/^[1-9]\d*$/.test(num) && num <= pageCount) {
                    self.pageGroup(num, pageCount);
                } else {
                    toastfun('页数格式不对,请查看~');
                }
                self.pageDate.page = $(parUnion + ' li.on').html();
                self.anchorAjax(self.pageDate);
            })
            $(parUnion + ' .page-up').off();
            $(parUnion + ' .page-up').on('click', function() {
                var page = parseInt($(parUnion + ' li.on').html() - 1);
                if (page == 0) {
                    return;
                }
                self.pageDate.page = page;
                self.anchorAjax(self.pageDate);
            });
            $(parUnion + ' .page-down').off();
            $(parUnion + ' .page-down').on('click', function() {
                var page = parseInt($(parUnion + ' li.on').html()) + 1;
                if (page > pageCount) {
                    return;
                }
                self.pageDate.page = page;
                self.anchorAjax(self.pageDate);
            });

            $(parUnion + ' .page-first').off();
            $(parUnion + " .page-first").on('click', function() {
                if (pageCount > 5) {
                    self.pageIcon(1, 5, 0);
                } else {
                    self.pageIcon(1, pageCount, 0);
                }
                self.pageDate.page = $(parUnion + ' li.on').html();
                self.anchorAjax(self.pageDate);
            });
            $(parUnion + ' .page-last').off();
            $(parUnion + ' .page-last').on('click', function() {
                if (pageCount > 5) {
                    self.pageIcon(pageCount - 4, pageCount, 4);
                } else {
                    self.pageIcon(1, pageCount, pageCount - 1);
                }
                self.pageDate.page = $(parUnion + ' li.on').html();
                self.anchorAjax(self.pageDate);
            })

        };
        pager.prototype.pageSet = function(now, pageCount, alldata, parUnion) {
            var myNow = now || 1;
            $(parUnion).find('.page-number-now').html(myNow);
            $(parUnion).find('.page-number-total').html(pageCount);
            $(parUnion).find('.page-number-all').html(alldata);
        };
        pager.prototype.anchorAjax = function(ajaxdata) {
            this.pageDate = ajaxdata;
            this.pageDate.each = this.each;
            this.successfun(ajaxdata, this.render.bind(this));
        };
        pager.prototype.render = function(currentPage, recordCount, pageCount) {
            this.pageNav(currentPage, pageCount, this.pagecontainer + " .page-nav");
            this.pageSet(currentPage, pageCount, recordCount, this.pagecontainer + " .page-nav");
        };
    }
};


// confirmbox
function makeConfirmBtn(n, o) {
    var t = n.getElementsByTagName("div")[0];
    t.innerHTML = o.btnInfo.map(renderBtn).join(""),
    bindEvent(o, t)
}
function renderBtn(n, o) {
    return n.text = 0 != o || n.text ? n.text : "取消",
    n.text = 1 != o || n.text ? n.text : "确定",
    n.backgroundColor = 0 != o || n.backgroundColor ? n.backgroundColor : "#fff",
    n.backgroundColor = 1 != o || n.backgroundColor ? n.backgroundColor : "#009fec",
    n.textColor = 0 != o || n.textColor ? n.textColor : "#282828",
    n.textColor = 1 != o || n.textColor ? n.textColor : "#fff",
    '<div class="btn" style="background:' + n.backgroundColor + ";color:" + n.textColor + '">' + n.text + "</div>"
}
function bindEvent(n, o) {
    for (var t = o.getElementsByTagName("div"), e = 0; e < t.length; e++)
        t[e].onclick = n.btnInfo[e].callBack ? n.btnInfo[e].callBack : cancle,
        t[e].close = this.close
}
function cancle(n) {
    ("confirmBoxContainer" == n.target.id || "btn" == n.target.className) && (document.getElementById("confirmBoxContainer").remove(),
    n.stopPropagation(),
    n.preventDefault())
}
function position(n) {
    n.style.marginTop = -n.offsetHeight / 2 + "px"
}
function close() {
    document.getElementById("confirmBoxContainer").remove()
}
var ConfirmBox = function(n) {
    (!n.btnInfo || !n.btnInfo instanceof Array) && (n.btnInfo = [{}, {}]);
    var o, t, e = '<div class="body"><div id="btnContainner"></div></div></div>', r = document.createElement("div");
    r.id = "confirmBoxContainer",
    r.innerHTML = e,
    document.body.appendChild(r),
    o = r.firstChild,
    t = document.createElement("p"),
    t.className = "content",
    t.innerHTML = n.text,
    o.insertBefore(t, o.firstChild),
    r.onclick = cancle,
    makeConfirmBtn(o, n),
    position(o)
};
window.ConfirmBox = ConfirmBox;


// ES6 Number.isNaN ployfill
if(!Number.isNaN){
    Number.isNaN = function(n) {
        return n !==n;
    }
}

// ----ajax---封装

// 对对象参数的处理 
function getParams(data) {
    var arr = [];
    for (var param in data){
        arr.push(encodeURIComponent(param) + '=' +encodeURIComponent(data[param]));
    }
    console.log(arr);
    return arr.join('&');
}

// ajax封装
function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || 'json';
    options.async = options.async || true;
    var params = getParams(options.data);
    var xhr;
    if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4){
            var status = xhr.status;
            if (status >= 200 && status < 300 ){
                options.success && options.success(xhr.responseText,xhr.responseXML);
            }else{
                options.fail && options.fail(status);
            }
        }
    };
    if (options.type == 'GET'){
        xhr.open("GET",options.url + '?' + params ,options.async);
        xhr.send(null)
    }else if (options.type == 'POST'){
        xhr.open('POST',options.url,options.async);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(params);
    }
}

// ···················································
