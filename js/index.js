//乐语弹窗
function openWin() {
    window.open('http://chat.looyuoms.com/chat/chat/p.do?c=20002134&f=10071643&g=10068659&site=15890&refer=biaoji&loc=biaoji', '', 'height=500, width=800,top=200, left=300,  toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
};

window.onload=function(){
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
    })

// 分类的遮罩层
    $('.majors').children('ul').find('.active').children('.mask').hide();
    $('.majors').on('click','li',function(){

        $(this).children('.mask').slideUp();
        $(this).siblings().children('.mask').show();
    })


}