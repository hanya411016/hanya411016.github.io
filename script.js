var s = skrollr.init();
// document.body.id = "skrollr-body";
$(window).scroll(function(evt){
  if($(window).scrollTop() > 0)
    $(".navbar").removeClass("navbar-top");
  else
    $(".navbar").addClass("navbar-top");
})