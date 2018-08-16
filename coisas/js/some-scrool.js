$(window).scroll(function(){
    $("header").css("opacity", 1 - $(window).scrollTop() / 1000);
});

$(".scroll").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500);
});

/*
$(window).scroll(example);

function example(){
	var tempScrollTop = $(window).scrollTop();
	console.log(tempScrollTop.toString());
}*/

/*$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(this).scrollTop();
		console.log(scroll);
		if (scroll > 1120){
			$('.textasso').removeClass('fadeOut');
			$('.textasso').addClass('fadeInUp');
		}
		if(scroll > 1900 || scroll < 1100){
			$('.textasso').removeClass('fadeInUp');
			$('.textasso').addClass('fadeOut');
		}
	});	
});*/