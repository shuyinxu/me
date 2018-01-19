$(document).ready(function() {
  $('.links').click(function(){
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 800);
    return false;
});


$('#about_link').on('click', function(){
  // $("#first").fadeOut(1000);
  $('#graphic_design_work').hide();
    $('#projectspage').hide();
  $("#aboutpage").css("display", "block");

  $("html, body").stop().animate({
        scrollTop: $('#aboutpage').offset().top
    }, 600);

  console.log("tf");


})

$('#graphic').on('click', function(){
  // $("#first").fadeOut(1000);
  $('#aboutpage').hide();
  $('#projectspage').hide();

  $("#graphic_design_work").css("display", "block");

  $("html, body").stop().animate({
        scrollTop: $('#graphic_design_work').offset().top
    }, 600);


  console.log("tf");


})

$('#projects_link').on('click', function(){
  // $("#first").fadeOut(1000);
  $('#aboutpage').hide();
  $('#graphic_design_work').hide();
  $("#projectspage").css("display", "block");

  $("html, body").stop().animate({
        scrollTop: $('#projectspage').offset().top
    }, 600);




})

// $( "#about_image_top" ).mouseenter(function() {
//   $( "#about_image" ).show();
// });
//
//   var el = $('#aboutpage');
//     var top_of_window = $(window).scrollTop();
//     var bottom_of_object = el.offset().top + el.outerHeight();
//     var bottom_of_window = $(window).scrollTop() + $(window).height();
//     if (top_of_window < bottom_of_object && bottom_of_window > top_of_object) {
//       $('#aboutpage').show();
//     } else {
//       $('#aboutpage').hide();
//     }

  $('#biapp').on('click', function(){
    // $("#first").fadeOut(1000);
    $$("#cartfinddiv").css("display", "block");



    $("html, body").stop().animate({
          scrollTop: $('#cartfinddiv').offset().top
      }, 600);

    $('#projectspage').hide();



  })

    $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 500) {
      $('#arrow').show();
    } else {
      $('#arrow').hide();
    }
    console.log("hepl");
  });




})
