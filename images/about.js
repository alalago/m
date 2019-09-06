// JavaScript Document




//mobile :active	
document.addEventListener("touchstart", function() {},false);


//漢堡選單
$('.nav span').click( function(){
	$('.nav ul').slideToggle(300);
});

//CONTACT
$('#CONTACT').click( function(){
	$('.hide').slideToggle(200);
});
$('.shadow , .sayhello span').click( function(){
	$('.hide').slideToggle(0);
});

$('.sayhello').click( function(){
});
//複製Ｅmial
 function copyEmail(element){
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $(".hide button").text("COPYED!");
  $(".hide button").css('background-color','#017266');
  $("html, body").scrollTop($this.offset().top);

 }


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
	
//視窗縮放重整
 var windowWidth = $(window).width();

 $(window).resize(function(){
	 if ($(window).width() != windowWidth) {
		 windowWidth = $(window).width();
		 location.reload();
	 }
 });

