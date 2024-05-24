const hamMenu = document.getElementById('ham-menu');
const navLinks = document.getElementById('nav-links');

hamMenu.addEventListener('click', function () {
  navLinks.classList.toggle('clicked');
});