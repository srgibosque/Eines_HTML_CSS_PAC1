export function likeButtons(){
  const likeBtns = document.querySelectorAll('.songs .song span');
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
}