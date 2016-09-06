window.onload=function(){
    (function(){
        var timer1;
        var timer2;
        var timer4;
        var swiper= new Swiper('.swiper-container',{
            'direction':'vertical',
            'pagination':'.swiper-pagination',

            onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function(swiper){
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                switch(swiper.activeIndex){

                    case 7:
                        clearTimeout(timer1);
                        clearTimeout(timer2);
                        clearTimeout(timer4);
                        timer1=setTimeout(function(){
                            document.getElementById('box8_nianxin').style=" animation: flash 1s linear 0s infinite";
                            clearTimeout(timer1);
                            clearTimeout(timer2);
                            clearTimeout(timer4);
                        },2500);

                        break;
                    case 8:
                        clearTimeout(timer1);
                        clearTimeout(timer2);
                        clearTimeout(timer4);
                        timer1=setTimeout(function(){
                            document.getElementById('box9_nianxin').style=" animation: flash 1s linear 0s infinite";
                            clearTimeout(timer1);
                            clearTimeout(timer2);
                            clearTimeout(timer4);
                        },2500);

                        break;
                    case 9:

                        clearTimeout(timer1);
                        clearTimeout(timer2);
                        clearTimeout(timer4);
                        timer2=setTimeout(function(){
                            document.getElementById('box10_nianxin1').style=" animation: flash 1s linear 0s infinite";
                            document.getElementById('box10_nianxin2').style=" animation: flash 1s linear 0s infinite";
                            clearTimeout(timer1);
                            clearTimeout(timer2);
                            clearTimeout(timer4);
                        },2000);
                        break;
                    case 10:
                        clearTimeout(timer1);
                        clearTimeout(timer2);
                        clearTimeout(timer4);
                        timer2=setTimeout(function(){
                            document.getElementById('box11_zw').style=" animation: flash 1s linear 0s infinite";
                            document.getElementById('box11_yuexin2').style=" animation: flash 1s linear 0s infinite";
                            clearTimeout(timer1);
                            clearTimeout(timer2);
                            clearTimeout(timer4);
                        },2000);
                        break;
                    case 11:
                        clearTimeout(timer1);
                        clearTimeout(timer2);
                        clearTimeout(timer4);
                        timer2=setTimeout(function(){
                            document.getElementById('box12_word4').style=" animation: flash 1.1s linear 0s infinite";

                            clearTimeout(timer1);
                            clearTimeout(timer2);

                        },3700);
                        timer4=setTimeout(function(){
                            document.getElementById('box12_word5').style=" animation: flash 1.1s linear 0s infinite";
                            clearTimeout(timer1);
                            clearTimeout(timer2);
                            clearTimeout(timer4);
                        },3900);
                        break;
                    case 12:
                        clearTimeout(timer1);
                        clearTimeout(timer2);
                        clearTimeout(timer4);
                        timer2=setTimeout(function(){
                            document.getElementById('box13_yuexin').style=" animation: flash 1s linear 0s infinite";

                            clearTimeout(timer1);
                            clearTimeout(timer2);
                            clearTimeout(timer4);
                        },2500);
                        break;

                }
            }
        });
        var ad=document.getElementById('ad');
        var yinfu = document.getElementById('yinfu');
        var yinbiao=document.getElementById('yinbiao');
        yinfu.onclick=function(){

            if(ad.paused)
            {
                ad.play();
                yinfu.style.animationPlayState='running';
                yinbiao.style.background=' url("../image/yinfu.gif") no-repeat';
            }
            else
            {
                ad.pause();
                yinfu.style.animationPlayState='paused';
                yinbiao.style.background="transparent";

            }

        }

    })()


}

