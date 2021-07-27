$(document).ready(function(){
    function t(){var t=$(".headstart").height();$(window).scrollTop()>=t?$(".headstart").addClass("scrolled"):$(".headstart").removeClass("scrolled")}t(),$(window).scroll(function(){t()}),$(".hamburger, .avoid").on("click",function(){$(window).width()<992&&setTimeout(function(){$(".menulist").slideToggle(300),$("body").toggleClass("opened")},0)}),$(".header-stopper").on("click",function(){$(window).width()<992&&setTimeout(function(){$(".menulist").slideToggle(300),$("body").toggleClass("opened")},0)}),$(".header ul li a").on("click",function(){console.log("a"),$(window).width()<992&&setTimeout(function(){$(".menulist").slideToggle(300),$("body").toggleClass("opened")},0)}),$(".read-more").on("click",function(){var t=$(this).data("target");$(this).toggleClass("active"),$(t).toggleClass("active")}),$(".tab-content .left-icon .glyphicon, .tab-content .right-icon .glyphicon").on("click",function(){var t=$(this).data("target");$(t).toggleClass("active").toggleClass("in");t=$(t).index()+1;$("#domain"+t).addClass("active");t=$(this).data("parent");$(t).toggleClass("active").toggleClass("in");t=$(t).index()+1;$("#domain"+t).removeClass("active")}),$(".domain .image-container").on("click",function(){var t,e;$(window).width()<768&&(t=$(this).data("target"),$(t).addClass("active").addClass("in"),e=$(this).data("hide"),$(e).removeClass("active").removeClass("in"),$("html, body").animate({scrollTop:$(t).offset().top-15},2e3))})

    var min_w = 300;
    var vid_w_orig;
    var vid_h_orig;
    $(function() {
        vid_w_orig = parseInt($('video').attr('width'));
        vid_h_orig = parseInt($('video').attr('height'));
        $(window).resize(function () { fitVideo(); });
        $(window).trigger('resize');
    });
    function fitVideo() {
        $('#video-viewport').width($('.fullsize-video-bg').width());
        $('#video-viewport').height($('.fullsize-video-bg').height());
        var scale_h = $('.fullsize-video-bg').width() / vid_w_orig;
        var scale_v = $('.fullsize-video-bg').height() / vid_h_orig;
        var scale = scale_h > scale_v ? scale_h : scale_v;
        if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};
        $('video').width(scale * vid_w_orig);
        $('video').height(scale * vid_h_orig);
        $('#video-viewport').scrollLeft(($('video').width() - $('.fullsize-video-bg').width()) / 2);
        $('#video-viewport').scrollTop(($('video').height() - $('.fullsize-video-bg').height()) / 2);
    };


    if($("#banner-slider").length){
        var bannerslider = new Swiper('#banner-slider .swiper-container', {
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            grabCursor: true,
            loop: true,
            autoplay: {
                delay: 3000,
            },
            speed: 1000
        });
    }
});