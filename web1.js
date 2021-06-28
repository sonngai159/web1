/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggleId && navId){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* ===== SCRIPT SLICK SLIDER  WHERE 2 RIDE ===== */

$('.carousel').slick({
    dots: true,
    infinite: false,
    speed: 1500,
    arrows:false,
    slidesToShow: 4,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToScroll: 1,
    infinite:true,
    responsive: [
        {
        breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
    ]
});

/* ===== SCRIPT SLICK SLIDER  CUSTOMER SAID ===== */

$('.customer__carousel').slick({
    dots: true,
    infinite: false,
    speed: 1500,
    arrows:false,
    slidesToShow: 4,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToScroll: 1,
    infinite:true,
    responsive: [
        {
        breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
    ]
});
			
/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
