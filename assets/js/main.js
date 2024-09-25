/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
          nav = document.getElementById(navId)
          
          if (toggle && nav) {
            toggle.addEventListener('click', () => {
              nav.classList.toggle('show')
            }
            )
          }
        }
        showMenu('nav-toggle','nav-menu')


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
      navMenu = document.querySelector('#nav-menu')


   function linkAction() {
    navMenu.classList.remove('show')
   } 
   navLink.forEach(n => {
     n.addEventListener('click', linkAction)
   }); 
 /*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[Id]')

function scrollActive() {
    const scrollY = window.pageYOffset;
    const sections = document.querySelectorAll('section'); // Assuming you have 'section' elements to track

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // You can adjust the offset as needed
        const sectionId = current.getAttribute('id');
        const menuLink = document.querySelector(".nav__menu a[href*=" + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            menuLink.classList.add('active-link');
        } else {
            menuLink.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*=============== CHANGE SCROLL HEADER ===============*/ 

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  //when the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW SCROLL UP ===============*/
/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
