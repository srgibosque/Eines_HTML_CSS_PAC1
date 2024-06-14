export function highlightCurrentLink(){
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll('header nav ul li a');
  
  navLinks.forEach((link) => {
    if (link.href === currentUrl) {
      link.parentElement.classList.add('active');
    }
  });
}

export function expandHamMenu(){
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
}