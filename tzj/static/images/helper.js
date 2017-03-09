/** 
 * 获取url参数
 */
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r != null){
		return unescape(r[2]);
	}
	return null; //返回参数值
}

function getCookie(key){
	if(document.cookie){
		var arr1 = document.cookie.split('; ') ;
		for(var i = 0; i < arr1.length; i++){
			var arr2 = arr1[i].split('=');
			if(arr2[0] == key){
				return decodeURI(arr2[1]);
			}
		}
	}
}

function setCookie(key, value, t, domain){
   t = t ? t : 86400000;
   var d = d ? domain : '';
   var Then = new Date()
   Then.setTime( Then.getTime() + t );
   document.cookie = key + '=' +value + ';expires = ' + Then.toGMTString() + ';path = /' + ';' + d;
}

/*
 * 0.女 1.男 2.未知
 */
function getGenderByIdCardNo(idCardNo){
	var gender = 2;
	if(!idCardNo){
		return gender;
	}
	
	var length = idCardNo.length;
	switch(length){
		case 15:
			gender = parseInt(idCardNo.substr(14, 1)) % 2;
			break;
		case 18:
			gender = parseInt(idCardNo.substr(16, 1)) % 2;
			break;
		default:
			gender = parseInt(idCardNo.substr(16, 1)) % 2;
			break;
	}
	return gender;
}

function checkTradePassword(tradePassword){
	if(isNaN(tradePassword) || (tradePassword.length != 6)){
		return false;
	}
	return true;
}

/** 
 * 将数值四舍五入(保留2位小数)后格式化成金额形式 
 * 
 * @param num 数值(Number或者String) 
 * @return 金额格式的字符串,如'1,234,567.45' 
 * @type String 
 */  
function formatCurrency(num, c){
	var num;
	var cents;
	var sign;
	
	if (c != 0) {
		c = 2;
	}
	num = num.toString().replace(/\$|\,/g,'');
	if (isNaN(num)) {
		num = "0";
	}
	num = Number(num);
	sign = (num === Math.abs(num));
	num = Math.floor(num * 100 + 0.50000000001);
	cents = num % 100;
	num = Math.floor(num / 100).toString();
	if (c == 2 && cents < 10) {
		cents = ".0" + cents;
	} else if(c == 2 && cents >= 10) {
		cents = '.' + cents;
	} else {
		cents = '';
	}
	for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
  }

	return (((sign) ? '' : '-') + num + cents);
}

function getBankNo(bankNo){
	var strLength = bankNo.length;
	var newBankNo = '';
	var i = 0;
	for(i; i<strLength; i++){
		if(i < (strLength - 4)){
			newBankNo += '*';
		}else{
			newBankNo += bankNo.substr(i, 1);
		}
		if((i % 4 == 3) && i ){
			newBankNo += ' ';
		}
	}
	return newBankNo;
}

var $_GET = (function(){
	var url = window.document.location.href.toString();
	var u = url.split("?");
	if(typeof(u[1]) == "string"){
		u = u[1].split("&");
		var get = {};
		for(var i in u){
			var j = u[i].split("=");
			get[j[0]] = j[1];
		}
		return get;
	} else {
		return {};
	}
})();

//客户端类型
function getClientType()
{
	var browser={ 
		versions:function(){ 
			var u = navigator.userAgent, app = navigator.appVersion; 
			return {//移动终端浏览器版本信息 
				trident: u.indexOf('Trident') > -1, //IE内核 
				presto: u.indexOf('Presto') > -1, //opera内核 
				webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核 
				gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核 
				mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端 
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器 
				iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQ HD浏览器 
				iPad: u.indexOf('iPad') > -1, //是否iPad 
				webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部 
			}; 
		}(), 
		language:(navigator.browserLanguage || navigator.language).toLowerCase() 
	}
	
	var clientType = 'WAP';
	if(browser.versions.android){
		clientType = 'ANDROID';
	}else if(browser.versions.ios){
		clientType = 'IOS';
	}
	
	return clientType;
}