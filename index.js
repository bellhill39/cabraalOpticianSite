
// navbar scroll
//minimize the code

$(".nav-home").click(function(){
  $('html , body ').animate({
    scrollTop : $("#intro").offset().top
  },1000);
});

$(".nav-pro").click(function(){
  $('html , body ').animate({
    scrollTop : $("#products").offset().top
  },1000);
});

$(".nav-lenses").click(function(){
  $('html , body ').animate({
    scrollTop : $("#lenses").offset().top
  },1000);
});

$(".nav-about").click(function(){
  $('html , body ').animate({
    scrollTop : $("#aboutUs").offset().top
  },1000);
});

$(".nav-service").click(function(){
  $('html , body ').animate({
    scrollTop : $("#testimonials").offset().top
  },1000);
});

$(".nav-contact").click(function(){
  $('html , body ').animate({
    scrollTop : $("#contactUs").offset().top
  },2000);
});

//intro div view
$("#intro").animate({opacity:1},{duration:4000});
//product div view
$("#products").animate({opacity:1},{duration:5000});
//readme button



$(".buttonabout").click(function(){
  $(".aboutUs-box").fadeToggle(2000);
  $(".storyAboutUs").fadeToggle(2000);
  $('html , body ').animate({
    scrollTop : $("#aboutUs").offset().top
  },2000);
});

// sunglass image transfer

$(".bgimage1").mouseenter(function (){
  $(this).attr("id","bgImageHide");
  $(".specS").hide();
  $(".sunG").removeClass("col-md-6");
  $(".sunG").addClass("col-md-12");
});

$(".bgimage1").mouseleave(function(){
  $(this).removeAttr("id");
  $(".specS").show();
  $(".sunG").removeClass("col-md-12");
  $(".sunG").addClass("col-md-6");
});

//spectacles image transfer

$(".bgimage2").mouseenter(function(){
  $(this).attr("id","bgImageHide");
  $(".sunG").hide();
  $(".specS").removeClass("col-md-6");
  $(".specS").addClass("col-md-12");
});

$(".bgimage2").mouseleave(function(){
  $(this).removeAttr("id");
  $(".sunG").show();
  $(".specS").removeClass("col-md-12");
  $(".specS").addClass("col-md-6");

});
