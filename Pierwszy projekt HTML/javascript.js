function setVw() {
  let vw = document.documentElement.clientWidth / 100;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}

setVw();
document.addEventListener('DOMContentLoaded', setVw);
window.addEventListener('resize', setVw);

function setVh() {
  let vh = window.innerHeight / 100;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVh();
document.addEventListener('DOMContentLoaded', setVh);
window.addEventListener('resize', setVh);
