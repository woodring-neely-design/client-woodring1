document.addEventListener('DOMContentLoaded', () => {
  addServicesExpansion();
  addNavbarScroll();
})

let addServicesExpansion = () => {
  $('#services span.title').click(function (){
    $('#services p').hide(); 
    console.log(this);
    $(this).siblings('p').show();
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
