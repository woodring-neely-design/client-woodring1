document.addEventListener('DOMContentLoaded', () => {
  addServicesExpansion();
  addNavbarScroll();

  $("#services").bgswitcher({
    images: ['./img/construction-3331438_1920.jpg', './img/Construction_Entrance.JPG', 
      './img/1024px-Rebar_worker.jpg'],
    loop: false
  });
})


let addServicesExpansion = () => {
  $('#services span.title').click(function (){
    $('#services p').hide(); 

    $(this).siblings('p').show();
    const idx = $('#services span.title').index($(this));
    $('#services').bgswitcher('select', idx);
  });
}

let addNavbarScroll = () => {
  $('a.navbar-item').click(function(){
    scrollTo($(this).attr('href'));
  });
}

let scrollTo = (selector) => {
  $('html, body').animate({
    scrollTop: $(selector).offset().top
  }, 1500);
}
