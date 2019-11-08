
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

//readme button

// $(".buttonabout").click(function(){
//   $("#aboutUs h1, .aboutUs-box").fadeToggle(2000);
//   $(".storyAboutUs").fadeToggle(2000);
//   $('html , body ').animate({
//     scrollTop : $("#aboutUs").offset().top
//   },2000);
// });

$(".buttonabout").click(function(){
  $(".aboutUs-box").fadeToggle(2000);
  $(".storyAboutUs").fadeToggle(2000);
  $('html , body ').animate({
    scrollTop : $("#aboutUs").offset().top
  },2000);
});
