
$(document).ready(function() {
  $("#loginTrigger").click(function() {
     var h = $("body").height() + 'px';
     $(".black-overlay").css({"height":h,"visibility":"visible"});
     $(".added").css('display','block');
  });
 
  $(".closeButton").click(function() {
     $(".added").css('display','none');
     $(".black-overlay").css("visibility","hidden");
  });
});