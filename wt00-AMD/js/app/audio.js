/**
 * Created by my on 2016/8/22.
 */
define(["jq"],function(){/*音乐播放暂停模块*/
    var audio = document.querySelector("audio");
    var music = document.querySelector("#music");
    music.addEventListener("click", function () {
        if(audio.paused){
            audio.play();
            music.style.animationPlayState = "running";//
        }else {
            audio.pause();
            music.style.animationPlayState ="paused";
        }
    })
})