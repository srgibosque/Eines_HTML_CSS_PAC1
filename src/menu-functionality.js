const hamMenu = document.getElementById('ham-menu');
const navLinks = document.getElementById('nav-links');
// const hamIcon = document.getElementById('ham-icon');

hamMenu.addEventListener('click', () => {
  navLinks.classList.toggle('showMenu');
});

// hamIcon.addEventListener('click', () => {
//   hamIcon.classList.toggle('animate')
// });