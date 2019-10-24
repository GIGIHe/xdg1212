$(document).ready(function() {
    $(".wei").mouseover(function(){
         $(this).find("a").addClass("on").siblings().find("a").removeClass("on");
         $(this).find(".wei_cont").show().siblings().find(".wei_cont").hide();
     })
     $(".wei").mouseleave(function(){
         $(".wei a").removeClass("on");
         $(".wei_cont").hide();
     }) 
     
     //????ù
     $('.table_box dt').first().addClass('on');
     $('.table_box dd').first().show();
     $('.table_box02').height($('.table_box dd').first().height()+70);
     $('.table_box02').on('mouseover','dt',function(){
         $(this).addClass('on').siblings('dt').removeClass('on');
         $(this).next('dd').stop(false,true).fadeIn(400).siblings('dd').stop(false,true).hide();
         $('.table_box02').height($(this).next('dd').height()+70);
     }) 
     
     $(".lou_pic").delay(1000).animate({top:"287px"},"slow");
     
     //????????????????????????????ù
     $(".exam_infos_text li").hover(function(){
              $(this).find("img").addClass("tada").addClass("animated").siblings().find("img").removeClass("tada").removeClass("animated"); 
           },function(){
                $(".exam_infos_text li img").removeClass("tada").removeClass("animated");
               })
     
 });
 
 //??????????????????
 var msg='1shaspassed!';		
 $(document).ready(function(){
     var cs = $('.cs_box');
     var cs_close = $('.cs_close');
     function oShow(){
         cs.show();
         cs.addClass('csAnimateIn');
     }
     cs_close.click(function(){
         cs.removeClass('csAnimateIn').hide();
     });
     setTimeout(oShow,5000) //???????????????????????s  1s=1000ms ????ù5s;
 })