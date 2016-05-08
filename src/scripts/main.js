

$(document).ready(function() {

  // for tabs
  $('.summer-tabs-menu a').click(function (event) {
    event.preventDefault();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    var tab = $(this).attr('href');
    $('.summer-tab-content').not(tab).css('display', 'none');
    $(tab).fadeIn();
  });

  // for answer radio buton
  $('input[type=radio]').click(function () {
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  })
});
