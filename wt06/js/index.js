
//实例化
    var mySwiper = new Swiper('.swiper-container', {
       direction : 'vertical',
      onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
          console.log(1);
      },
      onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
      }
    });

//音乐
(function () {
    var music=document.querySelector("audio");
    var music_img=document.querySelector(".musicPic");
    var isPlay=true;
    music_img.addEventListener("click",function () {
        if(isPlay){
            isPlay=false;
            music.pause();
            music_img.style.background="url(img/sBtn2.png)";
            music_img.style.backgroundSize="100% 100%";
            // music_img.removeAttribute("class","musicPic_");
            $(".musicPic").removeClass("musicPic_");
        }else{
            isPlay=true;
            music.play();
            music_img.style.background="url(img/sBtn.png)";
            music_img.style.backgroundSize="100% 100%";
            // music_img.setAttribute("class","musicPic_");
            $(".musicPic").addClass("musicPic_");
        }
    })

})()
//分享
//zepto
// $(".fenxiang").tap(function(){
//     $("#share").show();
//     console.log(("#share"));
//     console.log(11);
// });
// $("#share").tap(function(){
//     $(this).hide();
// });
  
   
 //原生
  
   var fx_img=document.querySelector(".fenxiang");
   var share=document.querySelector("#share");
   fx_img.addEventListener("touchstart",function(e){
        e.preventDefault();
        share.style.display="block";
   });
   share.addEventListener("touchstart",function(e){
        e.preventDefault();
        share.style.display="none";
   });
 