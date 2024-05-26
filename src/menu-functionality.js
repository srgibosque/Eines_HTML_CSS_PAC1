document.addEventListener('DOMContentLoaded', function() {
  const hamMenu = document.getElementById('ham-menu');
  const navLinks = document.getElementById('nav-links');
  const hamIcon = document.querySelector('.hamburger-icon');

  if(hamMenu){
    hamMenu.addEventListener('click', () => {
      navLinks.classList.toggle('showMenu');
      hamIcon.classList.toggle('animate');
    });
  } else {
    console.log('Element with ID "ham-menu" not found');
  }
});