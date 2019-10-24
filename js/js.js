// JavaScript Document
$(function(){
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    }; 
	jQuery(".picScroll1").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4,trigger:"click"});
	jQuery(".picScroll2").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4,trigger:"click"});
	jQuery(".picScroll3").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4,trigger:"click"});




	var date = new Date().getFullYear();
	$(".year").text(date)
//师资团队



// $('.zg_m8con2').append($('.zg_m8con2').html());

// var Len=$('.zg_m8con2 li').outerWidth(true);

// var num=$('.zg_m8con2 li').size();

// var anum = num/2;

// var sum=0;





// $('.zg_m8con2').css({width:num*Len})

// //左右轮播

// $('.s4_right').click(function(){

//     //$('.zg_m8con2').stop(true,true);

//     if(sum>=num/2){

//         sum=0;

//         $('.zg_m8con2').css({left:0})

//     }	

//     sum++;



//     $('.zg_m8con2').animate({left:-sum*Len});

//     /*if(sum==num/2){

//         $('.shi').eq(0).addClass('shi_block').siblings().removeClass('shi_block');

//     }*/

//     if(sum>=num/2){ 

//         $('.shi').eq(0).addClass('shi_block').siblings('.shi').removeClass('shi_block');

//     }	

    

// console.log(sum);

//     $('.shi').eq(sum).addClass('shi_block').siblings('.shi').removeClass('shi_block');

//     $('.s4_lisz').eq(sum).addClass('on').siblings('.s4_lisz').removeClass('on');

        

// });	

// $('.s4_left').click(function(){

//     //$('.zg_m8con2').stop(true,true);

//     if(sum==0){

//         sum=num/2

//         $('.zg_m8con2').css({left:-sum*Len})

//     }

//     sum--;

//     $('.zg_m8con2').animate({left:-sum*Len});

//     $('.shi').eq(sum).addClass('shi_block').siblings('.shi').removeClass('shi_block');

//     $('.s4_lisz').eq(sum).addClass('on').siblings('.s4_lisz').removeClass('on');

            

// });







//     $('.zg_m8con2').on('click','li',function(){

//         sum = $(this).index();

        

//         $('.s4_szjs .shi').eq(sum).addClass('shi_block').siblings('.shi').removeClass('shi_block');

//         $(this).addClass('on').siblings('li').removeClass('on');

        

//         if(sum==0){

//             sum=num/2

//             $('.zg_m8con2').css({left:-sum*Len});

        

//             $('.shi').eq(sum).addClass('shi_block').siblings('.shi').removeClass('shi_block');

//             $('.s4_lisz').eq(anum).addClass('on').siblings('.s4_lisz').removeClass('on');

//         }

//         else if(sum>=num/2 ){

//             sum=0;

//             $('.zg_m8con2').css({left:0});

            

//             $('.shi').eq(0).addClass('shi_block').siblings('.shi').removeClass('shi_block');

//             $('.s4_lisz').eq(0).addClass('on').siblings('.s4_lisz').removeClass('on');

//         }

        

//         $('.zg_m8con2').animate({left:-sum*Len});

// console.log(sum)

//     })

});