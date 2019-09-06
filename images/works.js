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
	

