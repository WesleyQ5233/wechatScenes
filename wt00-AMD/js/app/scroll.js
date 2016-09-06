/**
 * Created by my on 2016/8/22.
 */
/*图片轮播模块*/
define(["ani","sp"],function(ani,sp){

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        /* loop:'true',*///使用这个时最好要给每个页面的元素结构 单独添加个class 不然容易出现混乱
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })
})
