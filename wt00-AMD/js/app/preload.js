/**
 * Created by my on 2016/8/22.
 */
/*打开首页时模拟预加载模块*/
define(["fle","fle_css"],function(ani,sp){ //调用非amd写的框架

    setTimeout(function () {
        $("#loading").css({"display":"none"}).siblings().animate({"opacity":"1"},1000);
        $("#music").css({"display":"block"});
        $("#audio")[0].play();
    },2000)

})
