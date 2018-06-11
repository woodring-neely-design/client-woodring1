const primary = '0, 65, 111';
let skip1 = false;

document.addEventListener('DOMContentLoaded', () => {
  addServicesExpansion();
  addNavbarScroll();

  doScroll();

  $("#services-img").bgswitcher({
    images: ['./photos/Lynchburg.JPG', './photos/Columbia.JPG', 
      './photos/Ardmore.jpg'],
    loop: false,
    start: false
  });

  $("#open-gallery").click(() => $(".modal").addClass("is-active"))
  $(".modal-close").click(() => $(".modal").removeClass("is-active"))
});



let addServicesExpansion = () => {
  $('#services span.title').click(function (){
    $('#services p').hide(); 

    $('#services span.title').removeClass("has-text-primary");
    $(this).addClass("has-text-primary");

    $(this).siblings('p').show();
    const idx = $('#services span.title').index($(this));
    $('#services-img').bgswitcher('select', idx);
  });
}

let addNavbarScroll = () => {
  $('a.navbar-item').click(function(){
    scrollTo($(this).attr('href'));
  });
}

let scrollTo = (selector) => {
  skip1 = true;
  $('html, body').animate({
    scrollTop: $(selector).offset().top - 52
  }, 1500);
}

function doScroll() {
  const dist = window.scrollY / 300.0;
  console.log(dist);

  /*
  const backgroundColor = `rgba(255, 255, 255, ${dist})`;
  const borderColor = `rgba(${primary}, ${dist})`;
  const borderBottom = `2px solid  ${borderColor}`;

  setTimeout(() =>
    $('nav').css({backgroundColor, borderBottom}),
    30);
    */
}

$(window).scroll(() => {
  if(skip1) {
    skip1 = false
    return
  }


  lastDist = window.scrollY;
  doScroll();
});

function toWhite(rgb, amt) {
  return rgb
    .split(',')
    .map((it) => tween(parseInt(it), 255, amt))
    .join(',');
}

function tween(start, end, amt) {
  const hard = (amt > 1.0)?1.0:amt;
  console.log(hard);
  return start + (end - start) * hard;
}
