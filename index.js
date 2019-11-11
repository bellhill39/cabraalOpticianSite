
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
$("#products").animate({opacity:1},{duration:2000});
//readme button



$(".buttonabout").click(function(){
  $(".aboutUs-box").fadeToggle(2000);
  $(".storyAboutUs").fadeToggle(2000);
  $('html , body ').animate({
    scrollTop : $("#aboutUs").offset().top
  },2000);
});

// sunglass image transfer

$(".bgimage1").click(function (){
  $(this).attr("id","bgImageHide");
  $(".specS").hide();
  $(".sunG").removeClass("col-md-6");
  $(".sunG").addClass("col-md-12");
  $(".sunBrand").animate({opacity:1},{duration:200});
  // $(".sunglassesBrands").show();
});

$(".bgimage1").mouseleave(function(){
  $(this).removeAttr("id");
  $(".specS").show();
  $(".sunG").removeClass("col-md-12");
  $(".sunG").addClass("col-md-6");
  // $(".sunglassesBrands").hide();
  $(".sunBrand").animate({opacity:0},{duration:100});

});

//spectacles image transfer

$(".bgimage2").click(function(){
  $(this).attr("id","bgImageHide").css({"background-color":"white"});
  $(".sunG").hide();
  $(".specS").removeClass("col-md-6");
  $(".specS").addClass("col-md-12");
  $(".specsBrand").animate({opacity:1},{duration:200});
});

$(".bgimage2").mouseleave(function(){
  $(this).removeAttr("id").css({"background-color":"#EFEFEF"});
  $(".sunG").show();
  $(".specS").removeClass("col-md-12");
  $(".specS").addClass("col-md-6");
  $(".specsBrand").animate({opacity:0},{duration:100});
});


// Contact Lenses transfer

$(".bgimage3").click(function(){
  $(this).attr("id","bgImageHide");
  $(".hearinG").hide();
  $(".contacT").removeClass("col-md-6");
  $(".contacT").addClass("col-md-12");
  $(".contactBrand").animate({opacity:1},{duration:200});
});

$(".bgimage3").mouseleave(function(){
  $(this).removeAttr("id");
  $(".hearinG").show();
  $(".contacT").removeClass("col-md-12");
  $(".contacT").addClass("col-md-6");
  $(".contactBrand").animate({opacity:0},{duration:100});
});

//hearing transfer

$(".bgimage4").click(function(){
  $(this).attr("id","bgImageHide").removeClass("text-white").addClass("text-black");
  $(".contacT").hide();
  $(".hearinG").removeClass("col-md-6");
  $(".hearinG").addClass("col-md-12");
  $(".hearingBrand").animate({opacity:1},{duration:200});

});

$(".bgimage4").mouseleave(function(){
  $(this).removeAttr("id").removeClass("text-black").addClass("text-white");
  $(".contacT").show();
  $(".hearinG").removeClass("col-md-12");
  $(".hearinG").addClass("col-md-6");
  $(".hearingBrand").animate({opacity:0},{duration:100});
});
