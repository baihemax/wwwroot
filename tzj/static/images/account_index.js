  (function() {
   var btn_slide = 0;
   document.documentElement.addEventListener('touchmove', function(e) {
     if (btn_slide != 0) return;
     e.preventDefault();
   });

   var mobile_s_url = $("#mobile_s_url").val();
   var auth_key = getCookie('auth_key') ? getCookie('auth_key') : '';
   if (!auth_key) {
     $("#toLogin").show();
   }

   //指引弹窗
   var wino = $("#dialog_leshi"), //乐视
     closebtn = wino.find(".btn_close"),
     winodd = $("#dialog_dada"), //嗒嗒
     closebtndd = winodd.find(".btn_close");

   //乐视关弹窗
   closebtn.on("click", function() {
     wino.hide();
   });
   //嗒嗒关弹窗
   closebtndd.on("click", function() {
     winodd.hide();
   });

  function popCheckinUp(number) {
    var number = parseInt(number, 10);
    var $checkinPop = $('.checkin-pop');
    var $achievedPoints = $('#achieved-points');
    var timer = null;
    var start = 0;
    $checkinPop.show();
    numberCountUp();
    $checkinPop.on('click', ':not(.checkin-content)', function() {
      $checkinPop.hide();
    });
    function numberCountUp() {
      if ( start <= number) {
        setTimeout(function() {
          $achievedPoints.html(start++);
          numberCountUp();
        }, 50);
        return;
      }
      clearTimeout(timer);
    }
  }


   function getVoucherTotalSize() {
     loading.show();
     $.ajax({
       type: "get",
       url: "/VouchersGet/totalSize",
       dataType: "json",
       error: function(responseData) {
         loading.hide();
         var _responseData = $.parseJSON(responseData.responseText);
         if (401 == responseData.status) {
           setCookie('auth_key', '');
           $("#toLogin").show();
         } else if (_responseData.message) {
           tips.show(_responseData.message);
         } else {
           tips.show('请求超时，请检查网络！');
         }
       },
       success: function(responseData) {
         loading.hide();
         if (responseData && responseData.totalSize) {
           $("#voucherTotalSize").html('<span>' + responseData.totalSize + '</span>张').show();
         }
       }
     });
   }

   var voucherFlag = 1;
   getUserData();

   function getUserData() {
     loading.show();
     $.ajax({
       async: false,
       type: "get",
       url: "/AccountGet/user",
       dataType: "json",
       error: function(responseData) {
         loading.hide();
         var _responseData = $.parseJSON(responseData.responseText);
         if (401 == responseData.status) {
           setCookie('auth_key', '');
           $("#toLogin").show();
         } else if (_responseData.message) {
           tips.show(_responseData.message);
         } else {
           tips.show('请求超时，请检查网络！');
         }
       },
       success: function(responseData) {
         loading.hide();
         if (responseData) {
           if (!responseData.realname) {
             switch (responseData.source) {
               case 'leshi':
                 wino.show();
                 break;
               case 'dadabus':
                 winodd.show();
                 break;
               default:
                 break;
             }
           }
           btn_slide = 1;
           switch (getGenderByIdCardNo(responseData.idCardNo)) {
             case 0:
               $("#headImage").attr('src', mobile_s_url + 'v2/images/img2.jpg');
               break;
             case 1:
               $("#headImage").attr('src', mobile_s_url + 'v2/images/img1.jpg');
               break;
           }

           var name = responseData.telephone ? responseData.telephone.substring(0, 3) + "****" + responseData.telephone.substring(7) : responseData.username;
           $("#name").html(name);

           if (!responseData.realname) {
             $("#realname").show();
           }

           voucherFlag = responseData.voucherFlag;
           if (voucherFlag == 0) {
             $("#voucherRedPoint").show();
           }
           getVoucherTotalSize();
         }
       }
     });
   }
   
   var totalScore,
   todaySignStatus = 1;
   getPointsInfo();
   function getPointsInfo()
   {
		loading.show();
		$.ajax({
			async: false,
			type: "get",
			url: "/AccountGet/getPoints",
			dataType: "json",
			error: function(responseData){
				loading.hide();
				var _responseData = $.parseJSON(responseData.responseText);
				if(401 == responseData.status){
					setCookie('auth_key', '');
					window.location.href = '/account/login';
				}else if(_responseData.message){
					tips.show(_responseData.message);
				}else{
					tips.show('请求超时，请检查网络！');
				}
			},
			success: function(responseData){
				loading.hide();
				if(responseData){
					totalScore = responseData.score;
					todaySignStatus = responseData.todaySignStatus;
					if(0 == todaySignStatus){
						$("#checkin").show();
					}else{
						$("#myPoints").html('积分 '+totalScore).show();
					}
				}
			}
		});
	}
	
	//签到
	function checkin()
	{
		loading.show();
		$.ajax({
			async : false,
			type: "post",
			url: "/AccountPost/checkin",
			dataType: "json",
			error: function(responseData){
				loading.hide();
				var _responseData = $.parseJSON(responseData.responseText);
				if(401 == responseData.status){
					setCookie('auth_key', '');
					window.location.href = '/account/login';
				}else if(_responseData.message){
					tips.show(_responseData.message);
				}else{
					tips.show('请求超时，请检查网络');
				}
			},
			success: function(responseData){
				loading.hide();
				if(responseData){
					todaySignStatus = 1;
					$("#achieved-points").html(responseData.score);
					$("#to-achieve").html(responseData.nextScore);
          popCheckinUp(responseData.score);
					$("#checkin").hide();
					totalScore += responseData.score;
					$("#myPoints").html('积分 '+totalScore).show();
				}
			}
		});
	}
	
	$("#checkin").click(function(){
		if(0 == todaySignStatus){
			checkin();
		}else{
			window.location.href = '/account/checkin';
		}
	});

	$("#vouchers").click(function() {
		if (voucherFlag == 0) {
			saveFlag();
		} else {
			window.location.href = '/vouchers';
		}
	});

   function saveFlag() {
     loading.show();
     $.ajax({
       type: "post",
       url: "/MsgPost/saveFlag",
       dataType: "json",
       data: { column: 'voucher_flag' },
       error: function(responseData) {
         loading.hide();
         var _responseData = $.parseJSON(responseData.responseText);
         if (401 == responseData.status) {
           setCookie('auth_key', '');
           $("#toLogin").show();
         } else if (_responseData.message) {
           tips.show(_responseData.message);
         } else {
           tips.show('请求超时，请检查网络！');
         }
       },
       success: function(responseData) {
         loading.hide();
         if (responseData) {
           window.location.href = '/vouchers';
         }
       }
     });
   }

   $(".verifyRealname").bind(clickEvent, verifyRealname);

   function verifyRealname() {
     var noviceGuideReferer = 12;
     setCookie('noviceGuideReferer', noviceGuideReferer);
     setCookie('noviceGuideRefererUrl', '/');
     window.location.href = '/account/verifyrealname';
   }

   $("#realname").bind(clickEvent, vrealname);

   function vrealname() {
     var noviceGuideReferer = 13;
     setCookie('noviceGuideReferer', noviceGuideReferer);
     setCookie('noviceGuideRefererUrl', '/account');
     window.location.href = '/account/verifyrealname';
   }
 })();
