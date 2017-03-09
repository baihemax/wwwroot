/**
 * Created by 李灵航 on 2017/1/31 0031.
 */
(function () {
    var x={
        init:function () {
            x.querlist();
        },
        bind:function () {
            var li1_li2=$("#Home .index ul li:eq(0)"),
                li1=$("#Home .index ul li:eq(0)"),
                li2=$("#Home .index ul li:eq(1)"),
                li3=document.querySelector("#Home .index ul li:nth-of-type(3)"),
                li4=document.querySelector("#Home .index ul li:nth-of-type(4)"),
                close=$(".close"),
                content=$("#Home .index .content"),
                blog=$("#Home .index .blog"),
                contactWay=document.querySelector("#Home .contactWay"),
                about=document.querySelector("#Home .about"),
                ContentBack=$("#Home .content .back"),
                ContentMore=$("#Home .content .more"),
                data = JSON.parse(localStorage.getItem("data")),
                tap= JSON.parse(localStorage.getItem("tap"));
            li1.on('click',function () {
                $("#Home .index ul li").css("border-bottom","2px hsla(0,0%,0%,0) solid");
                $(this).css("border-bottom","2px white solid");
                content.removeClass("dsn");
                blog.addClass("dsn");
            });
            li2.on('click',function () {
                $("#Home .index ul li").css("border-bottom","2px hsla(0,0%,0%,0) solid");
                $(this).css("border-bottom","2px white solid");
                blog.removeClass("dsn");
                content.addClass("dsn");
            })
            li4.onclick=function () {
                if(contactWay.className=="contactWay dsn" && about.className=="about dsn"){
                    contactWay.className="contactWay";
                };
            };
            li3.onclick=function () {
                if(about.className=="about dsn" && contactWay.className=="contactWay dsn"){
                    about.className="about";
                };
            };
            close.on('click',function () {
                $(this).parent().addClass('dsn');
            });
            ContentBack.on('click',function () {
                if (tap.poject!=0){
                    tap.poject-=4;
                    localStorage.setItem("tap",JSON.stringify(tap));
                    x.render();
                }else {
                    alert("已经是第一页啦");
                }
            });
            ContentMore.on('click',function () {
                if (tap.poject<data.poject.length-4){
                    tap.poject+=4;
                    localStorage.setItem("tap",JSON.stringify(tap));
                    x.render();
                }else {
                    alert("没有更多内容");
                }
            });
        },
        querlist:function () {
            $.ajax({
                url:"json/data.json",
                type:"get",
                success:function (res) {
                    localStorage.setItem("data",JSON.stringify(res));
                    var tap={poject:0,blog:0};
                    localStorage.setItem("tap",JSON.stringify(tap));
                    x.render();
                }
            });
        },
        render:function () {
            var data = JSON.parse(localStorage.getItem("data")),
                tap= JSON.parse(localStorage.getItem("tap")),
                poject=data.poject.slice(tap.poject),
                blog=data.blog.slice(tap.blog),
                pojectstr="",
                blogstr="",
                content=$("#Home .content"),
                blogMain=$("#Home .blogMian"),
                consolo='<div class="consolo">\
                <button class="back"> </button>\
                <button class="more"> </button>\
                </div>';
            for (var i=0;i<4&&poject[i]!=undefined;i++){
                pojectstr+='<a class="project" href="'+poject[i].path+'">\
                    <p class="name">'+poject[i].name+'</p>\
                    <img src="'+poject[i].photo+'">\
                    <span class="present">'+poject[i].text+'</span>\
                </a>';
            };
            for (var i=0;i<10&&blog[i]!=undefined;i++){
                blogstr+='<p><a class="blogtitle" href="'+blog[i].path+'">'+blog[i].name+'</a><span class="time">'+blog[i].time+'</span></p>'
            };
            content.html(pojectstr+consolo);
            blogMain.html(blogstr);
            x.bind();
        }
    };
    x.init();
})();