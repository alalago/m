// JavaScript Document




//mobile :active	
document.addEventListener("touchstart", function() {},false);


//漢堡選單
$('.nav span').click( function(){
	$('.nav ul').slideToggle(300);
});


//視窗縮放重整
$(window).ready(function(){
	$(window).resize(function() {
			location.reload();
	});
});
//



var w = window.innerWidth;
var th = $(".text").get(0).offsetHeight;
var ph =$(".about .pic img").get(0).offsetHeight;

$(window).ready(function(){
	if( w <= 595){
		$(".dot2").css({"top":+(th+ph*0.8)+"px","width":+(ph/1.2)+"px","height":+(ph/1.2)+"px"});
		$(".dot3").css({"top":+(th+ph*0.4)+"px","width":+(ph/4.5)+"px","height":+(ph/4.5)+"px"});
		$(".dot4").css({"top":+(th+ph*1.45)+"px","width":+(ph/6.5)+"px","height":+(ph/6.5)+"px"});
		
		
		
	}
	
	else{}
	
});
	

