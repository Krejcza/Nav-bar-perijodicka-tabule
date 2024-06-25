let hamburger = document.querySelector('.svg-ham-logo');
let menu = document.querySelector('.mobile-menu ul');
let svgCrossLogo = document.querySelector('.svg-cross-logo');

document.addEventListener('DOMContentLoaded', function() {
   let hamburger = document.querySelector('.svg-ham-logo');
   let menu = document.querySelector('.mobile-menu');

   hamburger.addEventListener('click', function(){
       menu.classList.toggle('open');
   });
});
