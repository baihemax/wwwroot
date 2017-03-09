   //浏览器信息   
  var ua = navigator.userAgent.toLowerCase();
  var clickEvent = "tap";

  if(ua.indexOf("mobile")==-1){ clickEvent = "click"; }  

  //weixin
  function weixin(){
	  var header = document.getElementsByTagName('header')[0];
	  if(header != "undefined" && ua.match("micromessenger")){
		  header.style.cssText = 'height:0; overflow:hidden; border:none; font-size:0;';
	  }
  }
  
  //创建loading
  createLoading();
  function createLoading(){
	  var loading_html = document.createElement('div');
	  loading_html.className = 'loading';
	  loading_html.id = 'loading';
	  loading_html.innerHTML = '<p><i></i><span>提示信息</span></p>';
	  document.body.appendChild(loading_html);	  
  }
  
  //创建tips
  createTips();
  function createTips(){
	  var tips_html = document.createElement('div');
	  tips_html.className = 'dialog';
	  tips_html.id = 'dialog';
	  tips_html.innerHTML = '<div class="dialog-Box" id="dialogBox"><p class="p1">提示</p><p class="p2">请输入用户名请输入用户名</p><a>确定</a></div>';
	  document.body.appendChild(tips_html);	  
  }  
  //创建tips2
  createTips2();
  function createTips2(){
	  var tips_html2 = document.createElement('div');
	  tips_html2.className = 'dialog2';
	  tips_html2.id = 'dialog2';
	  tips_html2.innerHTML = '<div class="dialog-Box" id="dialogBox2"><p class="p1"></p><p class="p2">请输入用户名请输入用户名</p><a>取消</a><a>确定</a></div>';
	  document.body.appendChild(tips_html2);	  
  }
    
  //创建tips3
  createTips3();
  function createTips3(){
	  var tips_html = document.createElement('div');
	  tips_html.className = 'dialog';
	  tips_html.id = 'dialog5';
	  tips_html.innerHTML = '<div class="dialog-Box" id="dialogBox5"><p class="p1">提示</p><p class="p2">请输入用户名请输入用户名</p><a>立即下载APP</a></div>';
	  document.body.appendChild(tips_html);	  
  }
  //提示信息 闭包 bz标示点击关闭按钮关赛季弹窗时是否需要触发回调1为需要调发，0为不触发
  function tip(id,box,call){
	  var dia = gid(id);
	  var dia_Box = gid(box);
	  var p2 = dia_Box.getElementsByTagName('p')[1];
	  var btn = dia.getElementsByTagName('a')[1] || dia.getElementsByTagName('a')[0] ;
	  var callbz=call||0
	  if(dia.getElementsByTagName('a')[1]){
		var btn0 = dia.getElementsByTagName('a')[0]; 
		btn0.index = 0;
		btn0.callbz = callbz;
	  }
	  var fn = null;  //回调函数
	  
	  function delay_show(){
		   dia.style.opacity = '1';
		   dia_Box.style.cssText = 'transform: translateY(-60%) scale(1); -webkit-transform: translateY(-60%) scale(1);';
	  }
	  
	  function delay_hide(){
		  dia.style.display = 'none';
		  p2.innerHTML = '';
		  if(this.index!==0 || this.callbz!==0){
		  	 fn && fn(this.callbz);
		  }
	  }
	  
	  return {
		  show : function(str,endFn){
			  if(dia.style.display == 'block') return;
			  dia.style.display = 'block';
			  str = str || '';
			  p2.innerHTML = str;
			  fn = endFn;
			  window.setTimeout(delay_show,25);
			  btn.addEventListener(clickEvent,this.hide,false);  //如果是这样绑定---不会多次绑定函数
			  if(btn0){
				  btn0.addEventListener(clickEvent,this.hide,false);
			  }
		  },
		  hide : function(){
			  var _this = this;
			  dia.style.opacity = 0;
			  dia_Box.style.cssText = ' transform: translateY(-60%) scale(0.4); -webkit-transform: translateY(-60%) scale(0.4);';
			  window.setTimeout(function(){
				  delay_hide.call(_this);  
			  },400) 
		  } 
	  }
  }
  var tips = tip('dialog','dialogBox');
  var tips2 = tip('dialog2','dialogBox2');
  var tips3 = tip('dialog5','dialogBox5');

  //是否锁屏
  var proTime = Math.floor(new Date().getTime()/1000);  
  var curTime = 0;
  var disTime = 0;
  setInterval(function(){
	  curTime = Math.floor(new Date().getTime()/1000);
	  disTime = curTime - proTime;
	  proTime++;	
	  if(disTime>1){
		  //重新加载数据

				  
	  }
  },1000);	

  //加载提示  
	function Loading(){
		this.obj = null;
	}
	Loading.prototype = {
		constructor : Loading,
		init : function(id){
			this.obj = gid(id);
		},
		show : function(str){
			if(!str){
			   str = '数据加载中';  
			}
			this.obj.getElementsByTagName('span')[0].innerHTML = str;
			this.obj.style.display = 'block';
		},
		hide : function(){
			this.obj.style.display = 'none';
		}
	}
	var loading = new Loading();
	loading.init('loading');
  
  //滑到页面底部
  var Page = (function(){
	  return{
		  scrollBottom : function(endFn){	  
			  window.onscroll = function(){
				  var top = document.body.scrollTop || document.documentElement.scrollTop;
				  var pageh = document.documentElement.scrollHeight ;
				  var timer;
				  var h = document.documentElement.clientHeight;  //页面的可视高
					 if( top+h - pageh >= 0 ){
						clearInterval(timer)
					    timer = setTimeout(function(){
							 endFn && endFn();	
						},500);
					 } 
			  }
		  }
	  }
  })();
  
  //数字增加
  function Numincrease(opt){  //num 保留多少位
  	  this.settings = {
		 'num' : 2,
		 'str' : '' 
	  }
	  extend(this.settings,opt);
	  this.obj = gid(opt.id);
	  this.num = this.settings.num;
	  this.timer = null; 
	  this.str = this.settings.str;  
  }
  Numincrease.prototype = {
  	  constructor : Numincrease,
	  moveup : function(){
		 var _this = this; 
		 var time = 0;
	     var str = this.obj.innerHTML;
		 var num = parseFloat(str.replace(/[\u4e00-\u9fa5\：\,]/g,'')); 
		 this.obj.innerHTML = 0;
		 this.timer = setInterval(function(){
			 time++;
			 if(_this.str!=''){
			 	_this.obj.innerHTML = '万份收益:'+_this.fmoney(num*(0.05*time),_this.num)+'元'; 
			 }else{
			 	_this.obj.innerHTML = _this.fmoney(num*(0.05*time),_this.num);
			 }
			 if(time>=20){
				clearInterval(_this.timer); 
			 }
		  },50)
	  },
	  fmoney :function(s, n){
		   n = n > 0 && n <= 20 ? n : 0;   
		   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
		   var l = s.split(".")[0].split("").reverse(),   
		   r = s.split(".")[1];   
		   t = "";   
		   for(i = 0; i < l.length; i ++ )   
		   {   
			  t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
		   }   
		   return t.split("").reverse().join("") + "." + r; 
	  }
  }

	//detail
	function detailFun(){
		var detailLeftTime = gid('detailLeftTime');
		var detailBtn = gid('detailBtn');
		if(detailLeftTime == null || detailBtn == null){ return false; }
		
		var times = parseInt(detailLeftTime.getAttribute("data-time"));
		var url = detailBtn.getAttribute("data-url");
		if(times > 0){
			detailBtn.className = "btn";
			detailBtn.href = url;
			detailBtn.innerHTML = "立即购买";
		}
	}
	
	//detailAccount
	function detailAccount(){
		var detailLeftTime = gid('detailLeftTime');
		var detailBtn = gid('detailBtn');
		if(detailLeftTime == null || detailBtn == null){ return false; }
		var time = parseInt(detailLeftTime.getAttribute("data-time"));
		
		var percentElement = document.getElementsByClassName("percent")[0];
	
		//account
		var timeout;
		function accountTime(){
			if(disTime>1){
				//延迟了
			   time = time - disTime;	
			   proTime = curTime;		  
			}else{
			   time--;
			}
			var hour = toTwo(Math.floor(time/3600));
			var minute = toTwo(Math.floor(time%3600/60));
			var second = toTwo(time%60);
			detailLeftTime.setAttribute("data-time",time);
			
			var percentTime = parseInt(percentElement.getAttribute("data-time"));
			var percentType = parseInt(percentElement.getAttribute("data-type"));
			if(percentTime > 0){
				detailLeftTime.innerHTML = "剩余时间：待发布";
			}else if(percentType == 2 || percentType == 3 || time<0 ){
				detailBtn.className = "btn disabled";
				detailBtn.href = "javascript:void(0);";
				detailBtn.innerHTML = "已结束";
				detailLeftTime.innerHTML = "剩余时间：已结束";
				clearTimeout(timeout);
			}else{
				detailLeftTime.innerHTML = "剩余时间："+hour+"时"+minute+"分"+second+"秒";
			}
			if(time >= 1){
				timeout = setTimeout(accountTime,1000);
			}
		}
		accountTime();
	}

  //倒计时 countdown
  var countdown = function(obj,time,more){
	  var hour = '',
	  	  minute = '',
		  seconde = '',
		  p = '';
	  return {
		 init : function(){
			var _this = this;
			clearInterval(obj.timer);
		 	obj.timer = setTimeout(function(){
				_this.count();	
			},100);	 
		 },
	     count : function(){
			  var _this = this;
			  if(disTime>1){
				  //延迟了
				 time = time - disTime;	
				 proTime = curTime;		  
			  }else{
			 	 time--;
			  }
			  hour = this.toTwo(Math.floor(time/3600));
			  minute = this.toTwo(Math.floor(time%3600/60));
			  second = this.toTwo(time%60);
			
			  if(more==true){ //首页
				  obj.innerHTML = hour+'小时'+minute+'分'+second+'秒';
			  }else{ 
			  	  obj.setAttribute("data-time",time);	
				  p = obj.getElementsByTagName('p')[0];		
				  p.innerHTML = hour +':'+ minute+':'+ second;
				  
			  }
			  if(time > 0){
				  clearTimeout(obj.timer);
				  obj.timer = setTimeout(function(){
					 _this.count();	
				  },1000);
			  }else{
				  clearTimeout(obj.timer);
				  obj.setAttribute("data-type",1);
				  obj.setAttribute("data-num",0);
				  if(more==true){
					obj.innerHTML = '立即购买';  
				  }
				  drawcircle();
				  detailFun();	
			  }				  
		 },
		 toTwo : function(m){
		  	return m<10 ? '0'+m : ''+ m;	 
		 }
	  }
  }

  //画圆
  function drawcircle(){
    var percent = document.getElementsByClassName('percent');
	var len = percent.length;
	for(var i=0; i<len; i++){
		var obj = percent[i];
		var canvas = obj.getElementsByTagName('canvas')[0];
		if(obj.getElementsByTagName('p').length!=0){
			var p = obj.getElementsByTagName('p')[0];
		}else{
			return;	
		}
		var type = obj.getAttribute('data-type');
		var num = obj.getAttribute('data-num');
		var time = obj.getAttribute('data-time');
		var color = '#e2e2e2';
		
		if(type == 1){
			p.className = '';
			p.innerHTML = '抢购';
			color = '#31b8e8';
		}else if(type == 2){
			p.innerHTML = '售罄';
			p.className = 'percent_2';
		}else if(type == 3){
			p.innerHTML = '结束';
			p.className = "percent_2";
		}else if(type == 0){
			color = '#31b8e8';
			p.className = "percent_0";
			countdown(obj,time).init();
		} 
			
		new Percent2({
		  'obj' : canvas,
		  'num' : num 	
		}).draw().drawbg(color);
	}
  }
		
  //画圆
	function Percent(opt){
		this.settings = {
			color1 : '#eaeaea',  //外圈默认条
			color2 : '#aae8fe',	 //外圈进度条
			borderwidth : 0.08
		}
		extend(this.settings,opt);
		this.obj = this.settings.obj;
		this.num = parseInt(this.settings.num);
		this.color1 = this.settings.color1;
		this.color2 = this.settings.color2;
		this.borderwidth = this.settings.borderwidth; 
	}
	Percent.prototype = {
	  	constructor : Percent,
		draw : function(){
			var w = this.obj.offsetWidth;
			var h = this.obj.offsetHeight;
			this.obj.width = w;
			this.obj.height = h;
			this.border = parseInt(w*this.borderwidth);
			this.radius = w/2 - this.border;
			this.ctx = this.obj.getContext('2d');

			//清空画布
			this.ctx.clearRect(0,0,w,h);
			
			//百分比圆			
			this.ctx.beginPath();
			this.ctx.strokeStyle = this.color1;
			this.ctx.lineWidth = this.border;
			this.ctx.arc(this.radius+this.border,this.radius+this.border,this.radius+this.border/2,0,2*Math.PI,false);
			this.ctx.stroke();
			this.ctx.closePath();
			
			this.ctx.beginPath();
			this.ctx.strokeStyle = this.color2;
			this.ctx.lineWidth = this.border;
			this.ctx.arc(this.radius+this.border,this.radius+this.border,this.radius+this.border/2,-0.5*Math.PI,(-0.5+this.num*0.02)*Math.PI,false);
			this.ctx.stroke();
			this.ctx.closePath();
			
			return this;	
		}
	}

  //bondlist
	function Percent2(opt){
		Percent.call(this,opt);
	}
	inheritPrototype(Percent2,Percent);
	Percent2.prototype.drawbg = function(color){
		this.ctx.beginPath();
		this.ctx.fillStyle = color;
		this.ctx.arc(this.radius+this.border,this.radius+this.border,this.radius,0,2*Math.PI,false);
		this.ctx.fill();
		this.ctx.closePath();
		if(this.num == 100){
			this.ctx.beginPath();
			this.ctx.strokeStyle = this.color1;
			this.ctx.lineWidth = this.border;
			this.ctx.arc(this.radius+this.border,this.radius+this.border,this.radius+this.border/2,-0.5*Math.PI,(-0.5+this.num*0.02)*Math.PI,false);
			this.ctx.stroke();
			this.ctx.closePath();
		}
	}
	
  function toTwo(m){
	  return m<10 ? '0'+m : ''+ m;	
  }

	
  //清空输入框
  var Input = function(obj){
	  obj.onkeyup = function(){
		  if(this.value!==''){
			  $(this).next().show();	
		  }else{
			  $(this).next().hide();
		  }
	  }
	  $(obj).next().on(clickEvent,function(){
		  obj.value = '';
		  $(this).hide();
	  },false)	
  } 
  var clearForm = function(){
	 var inp = document.getElementsByClassName('inp');
	 for(var i=0; i<inp.length; i++){
		Input(inp[i].getElementsByTagName('input')[0]);
	 }
  }
 
 //footerTip
 var footerTip = (function(){
	var instance;
	var html = '<p>没有更多了</p>';
	var div = document.createElement('div');
	div.className = 'footerTip';
	div.id = 'footerTip';
	div.style.display = 'block';
	var flag = 0;

	return{
		show : function(str){
			div.innerHTML = html;
			flag = 1;
			if(str == 0){  //没有数据的
				div.innerHTML = '<p>暂无记录呦~</p><img src="images/register/zhan1.png">';
				div.className = 'footerTip footer_no';
			}
			document.getElementsByClassName('wrap')[0].appendChild(div);
			
		},
		hide : function(){
			if(flag==0) return;
			document.getElementsByClassName('wrap')[0].removeChild(div);
			flag = 0;		
		}
	}
	
 })();
 
 
 //detailAccount(); 
 //drawcircle();	
 try{  
 
  	  clearForm(); 		  
	  //weixin();

	  window.onresize = drawcircle;
	  
  }catch(e){console.log(e)};


  //获取ID
  function gid(v){
	 return document.getElementById(v);  
  }
  //组件用到的覆盖属性	
  function extend(obj1,obj2){ //obj2的属性 覆盖 obj1的属性
	  for(var attr in obj2){
		 obj1[attr] = obj2[attr];  
	  }
  }  
  
  //prototype 
  function inheritPrototype(obj1,obj2){
	 var prototype = object(obj2.prototype);
	 prototype.constructor = obj2.prototype;
	 obj1.prototype = prototype;  
  }
   
  function object(o){
	var F = function(){};
	F.prototype = o;
	return new F();  	  
  }
