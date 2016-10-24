$(window).ready(function() {
    var d;var c=0;function b(){$("#slide_three .warp .point span").removeClass("visible");$("#slide_three .warp .fig img").fadeOut("slow")
    }$("#slide_three .warp .point span").click(function() {
        if($("#slide_three .warp .fig img").is(":animated")){return
        }

        if(c==$(this).index()) {
            return
        }

        else {
            clearInterval(d);b();$(this).addClass("visible");c=$(this).index();$($("#slide_three .warp .fig img")[$(this).index()]).fadeIn("slow",a())
        }});$("#slide_three .warp #left").click(function() {
        if($("#slide_three .warp .fig img").is(":animated")){return
        }

        clearInterval(d);c--;if(c==-1) {
            c=4
        }

        b();$($("#slide_three .warp .fig img")[c]).fadeIn("slow",a());$($("#slide_three .warp .point span")[c]).addClass("visible")
    });$("#slide_three .warp #right").click(function() {
        if($("#slide_three .warp .fig img").is(":animated")){return
        }

        clearInterval(d);c++;if(c==5) {
            c=0
        }

        b();$($("#slide_three .warp .fig img")[c]).fadeIn("slow",a());$($("#slide_three .warp .point span")[c]).addClass("visible")
    });

    function a() {
        d=setInterval(function(){c++;if(c==5){c=0
        }

            b();$($("#slide_three .warp .fig img")[c]).fadeIn();$($("#slide_three .warp .point span")[c]).addClass("visible")
        },2000)
    }
    a();
    (function(){
        var num = 0;
        $(".cut li").each(function(index,ele) {
            $(this).css("left",560/5*index);
            $(this).find("div").css("background-position",-560/5*index + "px 0");
            $(this).css("transition-delay",index*0.2+"s");
        })

        $(".cut .next").on("click",function() {
            num--;
            $(".cut li").css("transform","rotateX("+num*90+"deg)");

        })
        //淡心尧加的
        var timer=null;
        timer = setInterval(function() {
            num--;
            $(".cut li").css("transform","rotateX("+num*90+"deg)");

        }, 2000)
        //淡心尧加的
        $(".cut .prev").on("click",function() {
            num++;
            $(".cut li").css("transform","rotateX("+num*90+"deg)");
        })
    })();
});
$(function(){
    $('.box #keyWord').keyup(function(e){
        var kd = $('.box #keyWord').val();
        var url ='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+kd;
        querySUG(url);
    });
    $(".box").on("mouseleave",function(){
        document.getElementById('list').innerHTML = '';
    });
});
function querySUG(url){
    document.getElementById('list').innerHTML = '';
    $.ajax({
        type : "get",
        async: true,
        url : url,
        dataType : "jsonp",
        jsonp: "cb",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
        jsonpCallback:"callback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名(类似：jQuery1102016820125747472048_1450147653563(["zhangsan", "lisi", "wangwu"]);)
        success : function(data){
            var tag = '<ul>';
            for(var i=0;i<data.s.length;i++){
                tag += '<li>'+data.s[i]+'</li>';
            }
            tag += '</ul>';
            $('.box #list').html(tag).show();
            $('.box #list').find('.box li').hover(function(){
                $(this).css('background','lightGreen');
            },function(){
                $(this).css('background','lightGray');
            });
        },
        error:function(){
            console.log('fail');
        }
    });
}