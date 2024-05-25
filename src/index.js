const currentUrl = window.location.href;
const navLinks = document.querySelectorAll('header nav ul li a');
const likeBtns = document.querySelectorAll('.songs .song span');

navLinks.forEach((link) => {
  if (link.href === currentUrl) {
    link.parentElement.classList.add('active');
  }
});

likeBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let isLiked = e.target.innerText === 'favorite_border'? true : false;

    if(isLiked){
      e.target.textContent = 'favorite';
      isLiked = true;
    } else {
      e.target.textContent = 'favorite_border';
      isLiked = false;
    }
  });
});