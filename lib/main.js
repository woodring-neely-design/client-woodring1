const primary = '0, 65, 111';
let skip1 = false;

window.addEventListener('resize', () => {
  $("#services .column.is-5").css({ height: '' });
  let height = $("#services .column.is-5").height() + 20;
  $("#services .column.is-5").css({ height });
});

document.addEventListener('DOMContentLoaded', () => {
  addServicesExpansion();
  addNavbarScroll();

  doScroll();

  $("#services-img").bgswitcher({
    images: ['./img/crop/Lynchburg.JPG', './img/crop/Columbia.JPG', './img/crop/Ardmore.jpg'],
    loop: false,
    start: false
  });

  $("#open-gallery").click(() => $(".modal").addClass("is-active"));
  $(".modal-close").click(() => $(".modal").removeClass("is-active"));
});

let addServicesExpansion = () => {
  let height = $("#services .column.is-5").height() + 20;
  $("#services .column.is-5").css({ height });

  $('#services span.title').click(function () {
    $('#services span.title').removeClass("has-text-primary");
    $(this).addClass("has-text-primary");

    $('#services p').slideUp();
    $(this).siblings('p').slideDown();

    const idx = $('#services span.title').index($(this));
    $('#services-img').bgswitcher('select', idx);
  });
};

let addNavbarScroll = () => {
  $('a.navbar-item').click(function () {
    scrollTo($(this).attr('href'));
  });
};

let scrollTo = selector => {
  skip1 = true;
  $('html, body').animate({
    scrollTop: $(selector).offset().top - 52
  }, 1500);
};

function doScroll() {
  const dist = window.scrollY / 300.0;

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
  if (skip1) {
    skip1 = false;
    return;
  }

  lastDist = window.scrollY;
  doScroll();
});

function toWhite(rgb, amt) {
  return rgb.split(',').map(it => tween(parseInt(it), 255, amt)).join(',');
}

function tween(start, end, amt) {
  const hard = amt > 1.0 ? 1.0 : amt;
  return start + (end - start) * hard;
}