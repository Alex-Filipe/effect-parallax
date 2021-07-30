/*Efeito do Header*/
const headerWindow = document.querySelector('header')
window.addEventListener('scroll', function decreaseWindow() {
  if (window.scrollY > 60) {
    headerWindow.classList.add('header_fixed')
  } else {
    headerWindow.classList.remove('header_fixed')
  }
})

/*Parallax*/
$(document).ready(function(){
  $('.parallax').parallax();
});
