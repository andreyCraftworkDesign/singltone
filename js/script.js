
$(function() {
  $('a[data-target^="anchor"]').bind('click.smoothscroll' , function() {
    let target = $(this).attr('href'),
     bl_top = $(target).offset().top;
     $('body, html').animate({scrollTop: bl_top} , 900);
     return false;
  })
 });

$(document).ready(function(){
  $('.navbar-toggler').click(function () {
    $(this).toggleClass('hidden');
    });
  });
