/**
 * Created by 李灵航 on 2017/2/4.
 */
/******************获取浏览器名称和版本方法**********/
function getBrowserInfo(){
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var re =/(msie|firefox|chrome|opera|version).*?([\d.]+)/;
    var m = ua.match(re);
    Sys.browser = m[1].replace(/version/, "'safari");
    Sys.ver = m[2];
    return Sys;
};
/******************IE8以下版本浏览器提示*********************/
function StopIe() {
    var sys = getBrowserInfo();
    if (sys.browser=="msie"&&sys.ver<12){
        location.href="IE.html";
    }
};