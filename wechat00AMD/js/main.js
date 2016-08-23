/**
 * Created by my on 2016/8/22.
 */

require.config({/*配置*/
    baseUrl:"js/", //指定模块的根文件夹
    paths:{  //配置项目模块的路径和别名
        jq:"lib/jquery-1.4.2",
        fle:"lib/flexible",// 别名:"路径",非AMD规范，插件
        fle_css:"lib/flexible_css",// 别名:"路径",非AMD规范，插件

        sp:"lib/swiper", // 别名:"路径"通过查看源码知道遵循AMD规范
        ani:"lib/swiper.animate1.0.2.min",// 别名:"路径"
        aud:"app/audio", //AMD这部分我们用AMD规范写的
        scr:"app/scroll", //AMD
        pre:"app/preload"//AMD这部分我们用AMD规范写的
    },
   /* shim:{ //通过shim的配置,将非AMD的写法转换为AMD写法
        'jq':{//通过查看源码我们得知遵循AMD规范,这里这样写是为了演示一遍
            exports:"jq"
        }
    }*/
});

/*定义入口并执行*/
require(["fle","fle_css","sp","aud","pre","ani","scr"],function(fle,fle_css,sp,aud,pre,ani,scr){

})