//轮播图
$.ajax({
    type: "get",
    url: "http://127.0.0.1:9091/api/getlunbo",
    success: function (data) {
        $('.swiper-wrapper').html('\
            <div class="swiper-slide">\
                <a href="#"><img src="'+ data[0].img + '" alt=""></a>\
            </div>\
            <div class="swiper-slide">\
                <a href="#"><img src="'+ data[1].img + '" alt=""></a>\
            </div>')

        //轮播图控制插件
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 0,
        });
    }
});

//tab栏切换
tabAjax(1, "home");
tabAjax(2, "profile");
tabAjax(3, "messages");
tabAjax(4, "settings");
function tabAjax(num, id) {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9091/api/gethometab/" + num,
        success: function (data) {
            $('#' + id + '').html(template('tab-template', data));
        }
    });
}
//导航栏模块
$('.header').find('a').eq(0).click(function () {
    $('.hong-nav').stop().slideToggle();
})
//连载漫画模块
$('.hong-nav>div>a').eq(1).click(function () {
    $('#main-box').css({
        'position': 'fixed'
    });
    $('.mask').fadeIn();
    $('.serialize').animate({
        'left': '30%'
    });
})
$('.serialize-head a:nth-of-type(1)').click(function () {
    $('.serialize').animate({
        'left': '100%'
    });
    $('.mask').fadeOut();
    $('#main-box').css({
        'position': 'relative'
    });
})
$.ajax({
    type: "get",
    url: "http://127.0.0.1:9091/api/getlianzai",
    success: function (data) {
        $('.serialize').append(template('serialize-template', data));
    }
});