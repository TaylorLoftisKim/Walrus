$(document).ready(function()  {
  $(".clickable1").click(function() {
    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();
  });

  $(".clickable2").click(function() {
    $("#initially-hidden-otter").toggle();
    $("#initially-showing-otter").toggle();
  });
});
