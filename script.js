window.addEventListener('scroll', function() {
   let originalNav = document.querySelector('.nav-origin');
   let stickyNav = document.querySelector('.nav-floating');
   let scrollPosition = window.scrollY || document.documentElement.scrollTop;

   if (scrollPosition > originalNav.offsetHeight) {
       stickyNav.classList.add('active');
   } else {
       stickyNav.classList.remove('active');
   }
});
