const currentUrl = window.location.href;

const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach((link) => {
  if (link.href === currentUrl) {
    link.parentElement.classList.add('active');
  }
});