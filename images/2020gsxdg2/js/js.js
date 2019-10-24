// JavaScript Document
$(function(){
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    }; 
	jQuery(".picScroll1").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:3,trigger:"click"});
});