/**
 * Dropout 3D navbav 
 */
function start() {
  const root = document.querySelector(".DN-root");
  const links = document.querySelector(".DN-links");
  const nav = document.querySelector(".DN-nav");

  /* style the links */
  const linkHeight = 100 / links.children.length + '%';

  Array.from(links.children).forEach((link, i) => {
    const color = `col${i % 2}`;

    const orig = i % 2 ? 'left' : 'right';

    const rotAmt = i % 2 ? '-100%' : '100%';
    const rot = `translate(${rotAmt}, 0)`;

    link.classList.add(color);
    link.style.width = '100%';
    link.style.height = linkHeight;
    link.style.transform = rot;
    link.style.transformOrigin = orig;
  });

  /* add handlers */
  root.onclick = () => expand(root, nav, links);
}

function expand(root, nav, links) {
  nav.style.display = 'none';

  links.style.position = 'absolute';
  links.style.bottom = '0';
  links.style.top = '0';
  links.style.width = '100%';

  Array.from(links.children).forEach((k, i) => {
    setTimeout(() => k.classList.add('opened'), i * 200);
  });

  //root.style.display = "none";
}

document.addEventListener("DOMContentLoaded", start);