(function(){       
	var btn_slide = 0;
	document.documentElement.addEventListener('touchmove', function (e) {
		if( btn_slide != 0 ) return;
		e.preventDefault();  
	});
	
	var auth_key = getCookie('auth_key') ? getCookie('auth_key') : '';
	if(!auth_key){
		$("#toLogin").show();
	}
	
	var bankFlag = 0;
	var activityFlag = 0;
	
	var telephoneFlag = 0;
	var realnameFlag = 0;
	var bankFlag = 0;
	var tradePwdFlag = 0;
	var activityFlag = 0;
	
	getAccountData();
	getFundData();
	getUserData();
	function getAccountData(){
		loading.show();
		$.ajax({
			type: "get",
			url: "/FundGet/account",
			dataType: "json",
			error: function(responseData){
				loading.hide();
				var _responseData = $.parseJSON(responseData.responseText);
				if(401 == responseData.status){
					setCookie('auth_key', '');
					$("#toLogin").show();
				}else if(_responseData.message){
					tips.show(_responseData.message);
				}else{
					tips.show('请求超时，请检查网络！');
				}
			},
			success: function(responseData){
				loading.hide();
				if(responseData){
					activityFlag = responseData.activeExpAmount ? 0 : 1;
					btn_slide = 1;
					
					$("#num1").html(responseData.allInterestAmount);
					$("#num2").html(responseData.fundTotalAmount);
					$("#num3").html(responseData.balanceAmount);
					$("#next7dayReceiveAmount").html('未来7天内到账本息金额:'+formatCurrency(responseData.next7dayReceiveAmount)+'元');
					$("#transferNextSenvenDaysReceive").html('未来7天内到账本息金额:'+formatCurrency(responseData.transferNextSenvenDaysReceive)+'元');
					
					numAnimate();
				}
			}
		});
	}
	
	function getUserData(){
		loading.show();
		$.ajax({
			async : false,
			type: "get",
			url: "/FundGet/user",
			dataType: "json",
			error: function(responseData){
				loading.hide();
				var _responseData = $.parseJSON(responseData.responseText);
				if(401 == responseData.status){
					setCookie('auth_key', '');
					$("#toLogin").show();
				}else if(_responseData.message){
					tips.show(_responseData.message);
				}else{
					tips.show('请求超时，请检查网络！');
				}
			},
			success: function(responseData){
				loading.hide();
				if(responseData){					
					$("#investDays").html('您在投之家投资第 '+responseData.investDays+' 天');
					
					telephoneFlag = responseData.telephone ? 1 : 0;
					realnameFlag = responseData.realname ? 1 : 0;
					tradePwdFlag = responseData.tradePwd ? 1 : 0;
					bankFlag = responseData.bankNo ? 1 : 0;
				}
			}
		});
	}
	
	function getFundData(){
		loading.show();
		$.ajax({
			type: "get",
			url: "/HuoqiGet/info",
			dataType: "json",
			error: function(responseData){
				loading.hide();
				var _responseData = $.parseJSON(responseData.responseText);
				if(401 == responseData.status){
					setCookie('auth_key', '');
					$("#toLogin").show();
				}else if(_responseData.message){
					tips.show(_responseData.message);
				}else{
					tips.show('请求超时，请检查网络！');
				}
			},
			success: function(responseData){
				loading.hide();
				if(responseData){
					$("#fundRate").html('年化收益率:'+responseData.rate+'%');
				}
			}
		});
	}	
	
	/*数字效果*/
	function numAnimate(){
		for(var i=1; i<4; i++){ 
			new Numincrease({
				'id' : 'num'+i
			}).moveup();
		}
	}
	
	//充值要先实名认证
	$("#recharge").bind(clickEvent,function(){
		var noviceGuideReferer = 5;
		if(!realnameFlag){
			tips2.show('请先实名认证', function(){
				setCookie('noviceGuideReferer', noviceGuideReferer);
				setCookie('noviceGuideRefererUrl', '/fund');
				window.location.href = '/account/verifyrealname';
			});
			return false;
		}else if(!telephoneFlag){
			tips2.show('请先认证手机', function(){
				setCookie('noviceGuideReferer', noviceGuideReferer);
				setCookie('noviceGuideRefererUrl', '/fund');
				window.location.href = '/account/verifytelephone';
			});
			return false;
		}else if(!tradePwdFlag){
			tips2.show('请先设置交易密码', function(){
				setCookie('noviceGuideReferer', noviceGuideReferer);
				setCookie('noviceGuideRefererUrl', '/fund');
				window.location.href = '/account/settradepassword';
			});
			return false;
		}else{
			window.location.href = '/fund/rechargeselect';
		}
	});
	
	//提现要先实名认证
	$("#withdraw").bind(clickEvent,function(){
		var noviceGuideReferer = 6;
		if(!realnameFlag){
			tips2.show('请先实名认证', function(){
				setCookie('noviceGuideReferer', noviceGuideReferer);
				setCookie('noviceGuideRefererUrl', '/fund');
				window.location.href = '/account/verifyrealname';
			});
			return false;
		}else if(!telephoneFlag){
			tips2.show('请先认证手机', function(){
				setCookie('noviceGuideReferer', noviceGuideReferer);
				setCookie('noviceGuideRefererUrl', '/fund');
				window.location.href = '/account/verifytelephone';
			});
			return false;
		}else if(!tradePwdFlag){
			tips2.show('请先设置交易密码', function(){
				setCookie('noviceGuideReferer', noviceGuideReferer);
				setCookie('noviceGuideRefererUrl', '/fund');
				window.location.href = '/account/settradepassword';
			});
			return false;
		}else if(!bankFlag){
			tips2.show('请先绑定银行卡', function(){
				setCookie('noviceGuideReferer', noviceGuideReferer);
				setCookie('noviceGuideRefererUrl', '/fund');
				window.location.href = '/account/bindBankcard';
			});
			return false;
		}else{
			window.location.href = '/fund/withdraw';
		}
	});
})();