webpackJsonp([1,4],{1:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:["tapId"],data:function(){return{}},computed:{},methods:{changeTap:function(t,s){this.$router.push(s)}}}},2:function(t,s,a){var i,v;i=a(1);var l=a(3);v=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(v=i=i.default),"function"==typeof v&&(v=v.options),v.render=l.render,v.staticRenderFns=l.staticRenderFns,t.exports=i},3:function(t,s){t.exports={render:function(){var t=this,s=(t.$createElement,t._c);return s("nav",[s("a",{class:{cur:1==t.tapId},on:{click:function(s){t.changeTap(1,"/")}}},[s("i"),t._v("推荐")]),t._v(" "),s("a",{class:{cur:2==t.tapId},on:{click:function(s){t.changeTap(2,"invest")}}},[s("i"),t._v("理财")]),t._v(" "),s("a",{class:{cur:3==t.tapId},on:{click:function(s){t.changeTap(3,"fund")}}},[s("i"),t._v("资产")]),t._v(" "),s("a",{class:{cur:4==t.tapId},on:{click:function(s){t.changeTap(4,"account")}}},[s("i"),t._v("我")])])},staticRenderFns:[]}},11:function(t,s,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var v=a(2),l=i(v);s.default={data:function(){return{}},components:{foot:l.default}}},19:function(t,s,a){var i,v;i=a(11);var l=a(20);v=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(v=i=i.default),"function"==typeof v&&(v=v.options),v.render=l.render,v.staticRenderFns=l.staticRenderFns,t.exports=i},20:function(t,s){t.exports={render:function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"wrap",staticStyle:{"padding-top":"1.9rem"}},[t._m(0),t._v(" "),s("div",{attrs:{id:"Tab"}},[s("section",{staticClass:"live",staticStyle:{display:"none"}},[s("div",{staticClass:"live-box",staticStyle:{"background-color":"#f57425"}},[t._m(1),t._v(" "),s("div",{staticClass:"round",attrs:{onclick:"window.location.href='/huoqi/detail'"}},[s("p",{staticClass:"btn_p1"},[t._v("活期")]),t._v(" "),s("p",{staticClass:"about-rate"},[s("font",[t._v("6.64")]),s("span",[t._v("%")])]),t._v(" "),s("p",{staticClass:"p2"},[t._v("年化收益率")])]),t._v(" "),t._m(2)]),t._v(" "),s("p",{staticClass:"time_p",attrs:{id:"aaa"}}),t._v(" "),s("a",{staticClass:"btn_live",attrs:{id:"huoqi_buy"}},[t._v("活期存入")])]),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),s("foot",{attrs:{tapId:"2"}})])},staticRenderFns:[function(){var t=this,s=(t.$createElement,t._c);return s("section",{staticClass:"bond-tab",attrs:{id:"bond-tab"}},[s("p",{},[t._v("活期")]),t._v(" "),s("p",{staticClass:"on"},[t._v("定期")]),t._v(" "),s("p",{},[t._v("转让")]),t._v(" "),s("div",{staticClass:"point-box",staticStyle:{transform:"translate(100%, 0px)"}},[s("i",{staticClass:"point",attrs:{id:"point1"}})])])},function(){var t=this,s=(t.$createElement,t._c);return s("p",{staticClass:"tit"},[s("em",[t._v("可购份额:2,898,086份")]),t._v(" "),s("i")])},function(){var t=this,s=(t.$createElement,t._c);return s("ul",{staticClass:"live-ul"},[s("li",[s("i"),t._v(" "),s("p",[t._v("1元起存")])]),t._v(" "),s("li",[s("i"),t._v(" "),s("p",[t._v("随存随取")])]),t._v(" "),s("li",[s("i"),t._v(" "),s("p",[t._v("当天计息")])]),t._v(" "),s("li",[s("i"),t._v(" "),s("p",[t._v("全额保障")])])])},function(){var t=this,s=(t.$createElement,t._c);return s("section",{staticClass:"bondlist",staticStyle:{display:"none"},attrs:{id:"dingqiList"}},[s("div",{staticClass:"bondlist-box "},[s("div",{staticClass:"bondlist-box-list"},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("8.10"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("1"),s("em",[t._v("个月")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"1","data-num":"80","data-time":"-3100","data-money":"59017"}},[s("canvas",{attrs:{width:"204",height:"204"}}),t._v(" "),s("div",{staticClass:"p2"},[t._v("可购份额")]),t._v(" "),s("p",{},[t._v("5.9万")])])]),t._v(" "),s("a",{attrs:{href:"javascript:dia_pp();"}},[s("div",{staticClass:"eld"},[s("i",{staticClass:"ss"},[t._v("活动")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("合作平台品牌债权")]),t._v(" "),s("p",{staticClass:"p2",attrs:{onclick:""}},[t._v("活动规则")])])])]),t._v(" "),s("div",{staticClass:"bondlist-box "},[s("div",{staticClass:"bondlist-box-list",attrs:{onclick:"window.location.href=&#39;/dingqi/buy/1/20161102107&#39;"}},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("9.03"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("1"),s("em",[t._v("个月")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"0","data-num":"0","data-time":"10633","data-money":"150000"}},[s("canvas",{attrs:{width:"204",height:"204"}}),t._v(" "),s("div",{staticClass:"p1"},[t._v("倒计时")]),t._v(" "),s("p",{staticClass:"percent_0"},[t._v("02:57:13")])])]),t._v(" "),s("a",{attrs:{href:"javascript:dia_zx();"}},[s("div",{staticClass:"eld"},[s("i",{staticClass:"zx"},[t._v("专享")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("收益比普通债权高20%")]),t._v(" "),s("p",{staticClass:"p2",attrs:{onclick:""}},[t._v("产品说明")])])])]),t._v(" "),s("div",{staticClass:"bondlist-box no"},[s("div",{staticClass:"bondlist-box-list",attrs:{onclick:"window.location.href=&#39;/dingqi/buy/0/20161102098&#39;"}},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("7.47"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("1"),s("em",[t._v("个月")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"2","data-num":"100","data-time":"-3908","data-money":"0"}},[s("canvas",{attrs:{width:"204",height:"204"}}),t._v(" "),s("div",{staticClass:"p1",staticStyle:{display:"none"}},[t._v("倒计时")]),t._v(" "),s("p",{staticClass:"percent_1"},[t._v("售罄")])])])]),t._v(" "),s("div",{staticClass:"bondlist-box no"},[s("div",{staticClass:"bondlist-box-list",attrs:{onclick:"window.location.href=&#39;/dingqi/buy/0/20161102083&#39;"}},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("8.53"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("3"),s("em",[t._v("个月")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"2","data-num":"100","data-time":"-80429","data-money":"0"}},[s("canvas",{attrs:{width:"204",height:"204"}}),t._v(" "),s("div",{staticClass:"p1",staticStyle:{display:"none"}},[t._v("倒计时")]),t._v(" "),s("p",{staticClass:"percent_1"},[t._v("售罄")])])])]),t._v(" "),s("div",{staticClass:"bondlist-box no"},[s("div",{staticClass:"bondlist-box-list",attrs:{onclick:"window.location.href=&#39;/dingqi/buy/0/20160400396&#39;"}},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("10.01"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("6"),s("em",[t._v("个月")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"2","data-num":"100","data-time":"-17713229","data-money":"0"}},[s("canvas",{attrs:{width:"204",height:"204"}}),t._v(" "),s("div",{staticClass:"p1",staticStyle:{display:"none"}},[t._v("倒计时")]),t._v(" "),s("p",{staticClass:"percent_1"},[t._v("售罄")])])])])])},function(){var t=this,s=(t.$createElement,t._c);return s("section",{staticClass:"selling",staticStyle:{display:"block"}},[s("div",{staticClass:"selling-box",attrs:{id:"transferList"}},[s("div",{staticClass:"bondlist-box"},[s("div",{staticClass:"bondlist-box-list",attrs:{onclick:"window.location.href='/transfer/buy/1/T201611170057'"}},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("7.35"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("28"),s("em",[t._v("天")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"1","data-num":"1","data-money":"10010"}},[s("canvas",{attrs:{width:"225",height:"225"}}),t._v(" "),s("div",{staticClass:"p2"},[t._v("可购份额")]),t._v(" "),s("p",{},[t._v("1万")])])]),t._v(" "),s("div",{staticClass:"eld"},[s("p",{staticClass:"p3"},[t._v("个人转让")]),t._v(" "),s("p",{staticClass:"p4"},[t._v("还款方式："),s("span",[t._v("到期还本付息")])])])]),s("div",{staticClass:"bondlist-box"},[s("div",{staticClass:"bondlist-box-list",attrs:{onclick:"window.location.href='/transfer/buy/1/T201611170029'"}},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("7.34"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("91"),s("em",[t._v("天")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"1","data-num":"0","data-money":"1019"}},[s("canvas",{attrs:{width:"225",height:"225"}}),t._v(" "),s("div",{staticClass:"p2"},[t._v("可购份额")]),t._v(" "),s("p",{},[t._v("1,019")])])]),t._v(" "),s("div",{staticClass:"eld"},[s("p",{staticClass:"p3"},[t._v("个人转让")]),t._v(" "),s("p",{staticClass:"p4"},[t._v("还款方式："),s("span",[t._v("到期还本付息")])])])]),s("div",{staticClass:"bondlist-box"},[s("div",{staticClass:"bondlist-box-list",attrs:{onclick:"window.location.href='/transfer/buy/1/T201611170052'"}},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("7.31"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("27"),s("em",[t._v("天")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"1","data-num":"1","data-money":"10011"}},[s("canvas",{attrs:{width:"225",height:"225"}}),t._v(" "),s("div",{staticClass:"p2"},[t._v("可购份额")]),t._v(" "),s("p",{},[t._v("1万")])])]),t._v(" "),s("div",{staticClass:"eld"},[s("p",{staticClass:"p3"},[t._v("个人转让")]),t._v(" "),s("p",{staticClass:"p4"},[t._v("还款方式："),s("span",[t._v("到期还本付息")])])])]),s("div",{staticClass:"bondlist-box"},[s("div",{staticClass:"bondlist-box-list",attrs:{onclick:"window.location.href='/transfer/buy/1/T201611170049'"}},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("7.31"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("46"),s("em",[t._v("天")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"1","data-num":"0","data-money":"5650"}},[s("canvas",{attrs:{width:"225",height:"225"}}),t._v(" "),s("div",{staticClass:"p2"},[t._v("可购份额")]),t._v(" "),s("p",{},[t._v("5,650")])])]),t._v(" "),s("div",{staticClass:"eld"},[s("p",{staticClass:"p3"},[t._v("个人转让")]),t._v(" "),s("p",{staticClass:"p4"},[t._v("还款方式："),s("span",[t._v("到期还本付息")])])])]),s("div",{staticClass:"bondlist-box"},[s("div",{staticClass:"bondlist-box-list",attrs:{onclick:"window.location.href='/transfer/buy/1/T201611170058'"}},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("7.11"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("27"),s("em",[t._v("天")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"1","data-num":"0","data-money":"32727"}},[s("canvas",{attrs:{width:"225",height:"225"}}),t._v(" "),s("div",{staticClass:"p2"},[t._v("可购份额")]),t._v(" "),s("p",{},[t._v("3.3万")])])]),t._v(" "),s("div",{staticClass:"eld"},[s("p",{staticClass:"p3"},[t._v("个人转让")]),t._v(" "),s("p",{staticClass:"p4"},[t._v("还款方式："),s("span",[t._v("到期还本付息")])])])]),s("div",{staticClass:"bondlist-box"},[s("div",{staticClass:"bondlist-box-list",attrs:{onclick:"window.location.href='/transfer/buy/1/T201611170045'"}},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("7.00"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("45"),s("em",[t._v("天")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"1","data-num":"0","data-money":"10079"}},[s("canvas",{attrs:{width:"225",height:"225"}}),t._v(" "),s("div",{staticClass:"p2"},[t._v("可购份额")]),t._v(" "),s("p",{},[t._v("1万")])])]),t._v(" "),s("div",{staticClass:"eld"},[s("p",{staticClass:"p3"},[t._v("个人转让")]),t._v(" "),s("p",{staticClass:"p4"},[t._v("还款方式："),s("span",[t._v("到期还本付息")])])])]),s("div",{staticClass:"bondlist-box"},[s("div",{staticClass:"bondlist-box-list",attrs:{onclick:"window.location.href='/transfer/buy/1/T201611170035'"}},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("6.65"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("13"),s("em",[t._v("天")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"1","data-num":"0","data-money":"5234"}},[s("canvas",{attrs:{width:"225",height:"225"}}),t._v(" "),s("div",{staticClass:"p2"},[t._v("可购份额")]),t._v(" "),s("p",{},[t._v("5,234")])])]),t._v(" "),s("div",{staticClass:"eld"},[s("p",{staticClass:"p3"},[t._v("个人转让")]),t._v(" "),s("p",{staticClass:"p4"},[t._v("还款方式："),s("span",[t._v("到期还本付息")])])])]),s("div",{staticClass:"bondlist-box"},[s("div",{staticClass:"bondlist-box-list",attrs:{onclick:"window.location.href='/transfer/buy/1/T201611170025'"}},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("5.89"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("13"),s("em",[t._v("天")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"1","data-num":"0","data-money":"6082"}},[s("canvas",{attrs:{width:"225",height:"225"}}),t._v(" "),s("div",{staticClass:"p2"},[t._v("可购份额")]),t._v(" "),s("p",{},[t._v("6,082")])])]),t._v(" "),s("div",{staticClass:"eld"},[s("p",{staticClass:"p3"},[t._v("个人转让")]),t._v(" "),s("p",{staticClass:"p4"},[t._v("还款方式："),s("span",[t._v("到期还本付息")])])])]),s("div",{staticClass:"bondlist-box"},[s("div",{staticClass:"bondlist-box-list",attrs:{onclick:"window.location.href='/transfer/buy/1/T201611170048'"}},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("5.67"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("19"),s("em",[t._v("天")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"1","data-num":"0","data-money":"5090"}},[s("canvas",{attrs:{width:"225",height:"225"}}),t._v(" "),s("div",{staticClass:"p2"},[t._v("可购份额")]),t._v(" "),s("p",{},[t._v("5,090")])])]),t._v(" "),s("div",{staticClass:"eld"},[s("p",{staticClass:"p3"},[t._v("个人转让")]),t._v(" "),s("p",{staticClass:"p4"},[t._v("还款方式："),s("span",[t._v("到期还本付息")])])])]),s("div",{staticClass:"bondlist-box"},[s("div",{staticClass:"bondlist-box-list",attrs:{onclick:"window.location.href='/transfer/buy/1/T201611170044'"}},[s("dl",{staticClass:"con"},[s("dl",[s("p",[t._v("年化收益率")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("5.66"),s("em",[t._v("%")])])]),t._v(" "),s("dl",[s("p",[t._v("期限")]),t._v(" "),s("p",{staticClass:"p1"},[t._v("18"),s("em",[t._v("天")])])])]),t._v(" "),s("div",{staticClass:"percent",attrs:{"data-type":"1","data-num":"0","data-money":"10028"}},[s("canvas",{attrs:{width:"225",height:"225"}}),t._v(" "),s("div",{staticClass:"p2"},[t._v("可购份额")]),t._v(" "),s("p",{},[t._v("1万")])])]),t._v(" "),s("div",{staticClass:"eld"},[s("p",{staticClass:"p3"},[t._v("个人转让")]),t._v(" "),s("p",{staticClass:"p4"},[t._v("还款方式："),s("span",[t._v("到期还本付息")])])])])]),t._v(" "),s("div",{staticClass:"tab",attrs:{id:"tab_sel"}},[s("p",{staticClass:"on"},[t._v("\n                    收益率\n                    "),s("i",{staticStyle:{"-webkit-transform":"rotate(-180deg)"}})]),t._v(" "),s("p",[t._v("\n                    期限\n                    "),s("i",{staticStyle:{"-webkit-transform":"rotate(0deg)"}})]),t._v(" "),s("em")])])}]}}});
//# sourceMappingURL=1.70a23a88bf0b5fc574dc.js.map