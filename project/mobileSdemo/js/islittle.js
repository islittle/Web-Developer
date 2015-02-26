/*
*auth：wangfeng
*date:2015/2/26
*github:islittle
*email:islittle@outlook.com
*/ 
$(function(){
	//这里可以定义左边和右边的滑动宽度 这里点击事件用的touchstart
	var width1 = '50%';
	var width2 = '50%';
	$('.navLeft').css('width', width1);
	$('.navRight').css('width', width2);
	$('#tapLeft').on('touchstart', function(event) {
		var isZore = $('.pageBox').css('left');
		var ZoreIf = parseInt(isZore);
		if(ZoreIf == 0){
			$('.pageBox').animate({'left': width1}, 400);
		}else{
			$('.pageBox').animate({'left': '0'}, 400);
		};
	});
	$('#tapRight').on('touchstart', function(event) {
		var isZore = $('.pageBox').css('left');
		var ZoreIf = parseInt(isZore);
		if(ZoreIf == 0){
			$('.pageBox').animate({'left': '-'+width2}, 400);
		}else{
			$('.pageBox').animate({'left': '0'}, 400);
		};
	});
	$('#demo').on('touchstart', function(event) {
		$('#overlay').animate({display:'block'}, 100,function(){
			$('#dialog').addClass('animated');
		});
	});
	$('#overlay').on('touchstart',function(event){
		console.log(event.target.nodeName.toLowerCase());
		if(event.target.nodeName.toLowerCase()=='a'){
			$('#dialog').removeClass('animated');
			$('#overlay').hide();		
		}else{
			return false;
		}	
	});
})