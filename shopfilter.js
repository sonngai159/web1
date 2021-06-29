const selected= document.querySelector(".selected");
const box2 = document.querySelector(".box2");

selected.addEventListener("click", () => {
    box2.classList.toggle("show");
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('box-2')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));