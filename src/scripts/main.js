$(document).ready(function() {
  $(".summer-tabs-menu a").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
    var tab = $(this).attr("href");
    $(".summer-tab-content").not(tab).css("display", "none");
    $(tab).fadeIn();
  });
});
