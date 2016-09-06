(function () {
    var music = document.querySelector('.music');
    var audio = document.querySelector('audio');
    music.addEventListener("click",function () {
        if(audio.paused){
            music.style.animationPlayState = 'running';
            this.style.backgroundPosition = '0 0';
            audio.play();
        }else{
            audio.pause();
            music.style.animationPlayState = 'paused';
            this.style.backgroundPosition = '100% 0';
        }
    });
    var mySwiper = new Swiper ('.swiper-container', {
        "direction":"vertical",
        "loop":true,
        "pagination":".swiper-pagination",
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })
})();