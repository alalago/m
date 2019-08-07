// JavaScript Document

	
//mobile :active	
document.addEventListener("touchstart", function() {},false);


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
	$(".building").css("transform","translate3d("+(gamma/2)+"%,"+((beta-5)/8)+"%,0)");	
	$(".green01").css("transform","translate3d("+(gamma/2)+"%,"+((beta-5)/8)+"%,0)");	
	$(".green02").css("transform","translate3d("+(gamma/2)+"%,"+((beta-5)/8)+"%,0)");	
	$(".rainbow").css("transform","translate3d("+(gamma/2)+"%,"+((beta-5)/8)+"%,0)");	
	$(".mypic").css("transform","translate3d("+(gamma/2)+"%,"+((beta-5)/8)+"%,0)");	
	$(".train").css("transform","translate3d("+(gamma/2)+"%,"+((beta-5)/8)+"%,0)");	
	$(".yellowline").css("transform","translate3d("+(gamma/2)+"%,"+((beta-5)/8)+"%,0)");	

  }, false);




