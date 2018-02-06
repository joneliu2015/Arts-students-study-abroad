//乐语弹窗
function openWin() {
    window.open('http://chat.looyuoms.com/chat/chat/p.do?c=20002134&f=10071643&g=10068659&site=15890&refer=biaoji&loc=biaoji', '', 'height=500, width=800,top=200, left=300,  toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
};

window.onload = function () {
    var data;
    $.ajax({
        dataType:'json',
        url:"data.json",
        data:data,
        type:"get",
        success:function(data,key){
            var datas=data;
            console.log(data);
            for(var key in datas){};
            // 专业分类点击事件
            
            $('.majors>ul>li').hover(
                function(e){
                    if($(this).hasClass('active')){
                        $(this).children(".deng").show();
                        $(this).siblings().children(".deng").hide()
                    }else{
                        $(this).children(".deng").fadeIn(300);
                        // $(this).siblings().children(".deng").fadeOut(200);
                        $(this).children(".mask").css("background","rgba(0, 0, 0, .3)");
                        $(this).siblings().children(".mask").css("background","rgba(0, 0, 0, .5)");
                        $(this).children(".deng").stop(true,true);
                        $(this).siblings().children(".deng").stop(true,true);
                    }
                        
                },function(e){
                    if($(this).hasClass('active')){
                        $(this).children(".deng").show();
                        $(this).siblings().children(".deng").hide();
                    }else{
                        $(this).children(".mask").css("background","rgba(0, 0, 0, .5)");
                        $(this).siblings().children(".mask").css("background","rgba(0, 0, 0, .5)");
                        $(this).children(".deng").fadeOut(200);
                        // $(this).siblings().children(".deng").fadeOut(200);
                        $(this).children(".deng").stop(true,true);
                        $(this).siblings().children(".deng").stop(true,true);
                    }
                    
            }

            );
            $('body').on("click",".majors>ul>li",function(e){
                console.log("好好学习");
                
                console.log($(this).index());
                // 给当前项的兄弟元素加上阴影，给当前项去除阴影。
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
                $(this).find('.mask').slideUp();
                $(this).children(".deng").show();
                $(this).siblings().find('.mask').show();
                $(this).siblings().children(".deng").hide()
                 //获取当前tab中鼠标停在的table栏的索引  
                var majorIndex=$(this).index();
                // 取出所有数据中当前专业类目数据
                var majorData=data[majorIndex];
                console.log(majorData);
                // 由于取出的是对象，所以遍历key，求出它的value,并赋值给新变量
                for(var key in majorData){
                    console.log(majorData[key]);
                    var majorDataA=majorData[key]
                }
                // 当国家项被点击时
                $('body').on('click','.countries>li',function(){
                    console.log($(this));
                    
                        $(this).siblings().removeClass("selected");
                        $(this).addClass("selected")
                   
                    
                    $('.articles').html("");
                    console.log("天天向上");
                    // var countryIndex=$(this).index();
                    // console.log(countryIndex);
                    // var countryData=majorData
                    // 由于json数据结构的原因，此处不能用数组的index绑定，所以用id绑定。
                   var countryId=$(this).attr('id');
                   console.log(countryId)
                //    得到每个国家的数据
                    var countryData=majorDataA[countryId];
                    console.log(countryData);
                    // 遍历当前国家项的数据
                    $.each(countryData,function(index,item){
                        console.log(countryData[index]);
                        console.log(countryData[index].professional);
                        // 为国家项数据设置一个新变量
                        var countryDataIndex=countryData[index];
                        console.log(countryDataIndex.professional);
                        // 将国家项数据转为对象
                        var OBJ={
                            items:countryDataIndex
                        };
                        console.log(OBJ);
                        // 将对象写入模板引擎并赋值给result变量
                        var result=template("template",OBJ);
                        console.log(countryDataIndex.university);
                   
                        $(".articles").append(result);
                    })
                   
                    

                })
            $('#Americia').trigger('click');       
                
              
            })
            $('.art').trigger('click');




        }
    })






























    // “返回顶部按钮”显示隐藏
    var clientHeight = document.documentElement.clientHeight;
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= clientHeight) {
            $('.toTop').show();
        } else {
            $('.toTop').hide();
        }
    };
    //点击返回顶部
    $(".toTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });
    //底部二维码显示效果
    $('.wechat').mouseenter(function () {
        $('.qrwechat').show()
    });
    $('.weibo').mouseenter(function () {
        $('.qrweibo').show()
    })
    $('.wechat').mouseleave(function () {
        $('.qrwechat').hide()
    });
    $('.weibo').mouseleave(function () {
        $('.qrweibo').hide()
    });

    // 分类的遮罩层
    $('.majors').children('ul').find('.active').children('.mask').hide();
    $('.majors').on('click', 'li', function () {

        $(this).children('.mask').slideUp();
        $(this).siblings().children('.mask').show();
    })



}