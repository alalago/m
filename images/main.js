// JavaScript Document

	
//mobile :active	
document.addEventListener("touchstart", function() {},false);



//視窗縮放重整
 var windowWidth = $(window).width();

 $(window).resize(function(){
	 if ($(window).width() != windowWidth) {
		 windowWidth = $(window).width();
		 location.reload();
	 }
 });


//
w= window.innerWidth;
h= window.innerHeight;
var hw= w/2;
var hh= h/2;


  $(window).resize(function() {
    w=window.innerWidth;
    h=window.innerHeight;
	var hw= w/2;
    var hh= h/2;
  });

$(document).mouseover(function(evt){
  var pagex=evt.pageX,
      pagey=evt.pageY;

 if($(window).width() >=1024 ){	
	$(".building").css("transform","translate3d("+((pagex-hw)/100)+"%,"+((pagey-hh)/100)+"%,0)");	
	$(".green01").css("transform","translate3d("+((pagex-hw)/100)+"%,"+((pagey-hh)/100)+"%,0)");	
	$(".green02").css("transform","translate3d("+((pagex-hw)/100)+"%,"+((pagey-hh)/100)+"%,0)");	
	$(".rainbow").css("transform","translate3d("+((pagex-hw)/100)+"%,"+((pagey-hh)/100)+"%,0)");	
	$(".mypic").css("transform","translate3d("+((pagex-hw)/100)+"%,"+((pagey-hh)/100)+"%,0)");	
	$(".train").css("transform","translate3d("+((pagex-hw)/100)+"%,"+((pagey-hh)/100)+"%,0)");	
	$(".yellowline").css("transform","translate3d("+((pagex-hw)/100)+"%,"+((pagey-hh)/100)+"%,0)");	
	}
	else{}
	
});
	

  window.addEventListener('deviceorientation', function(event) {
    var alpha = event.alpha,
        beta = event.beta,
        gamma = event.gamma;
	  
	  
	  if( $(window).width() < $(window).height() ){	
		$(".building").css("transform","translate3d("+(gamma/1.5)+"%,"+((beta-5)/8)+"%,0)");	
		$(".green01").css("transform","translate3d("+(gamma/4)+"%,"+((beta-5)/8)+"%,0)");	
		$(".green02").css("transform","translate3d("+(gamma/2)+"%,"+((beta-5)/8)+"%,0)");	
		$(".rainbow").css("transform","translate3d("+(gamma/1)+"%,"+((beta-5)/8)+"%,0)");	
		$(".mypic").css("transform","translate3d("+(gamma/2)+"%,"+((beta-5)/8)+"%,0)");	
		$(".train").css("transform","translate3d("+(gamma/2)+"%,"+((beta-5)/8)+"%,0)");	
		$(".yellowline").css("transform","translate3d("+(gamma/3)+"%,"+((beta-5)/8)+"%,0)");	
	  }
  
	  else{

		  
	  }
  
  
  }, false);

  
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
 }


