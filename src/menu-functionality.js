document.addEventListener('DOMContentLoaded', function() {
  const hamMenu = document.getElementById('ham-menu');
  const navLinks = document.getElementById('nav-links');
  const hamIcon = document.getElementById('ham-icon');

  if(hamMenu){
    hamMenu.addEventListener('click', () => {
      navLinks.classList.toggle('showMenu');
    });
  } else {
    console.log('Element with ID "ham-menu" not found');
  }

  if (hamIcon) {
      hamIcon.addEventListener('click', () => {
        hamIcon.classList.toggle('animate');
      });
  } else {
    console.log('Element with ID "ham-icon" not found');
  }
});