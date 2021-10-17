const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector ('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll ('.menu-nav__item');


let showMenu = false;
var tl = gsap.timeline({paused: true});

tl.to(nav,{visibility: 'visible'}).to(menuNav,{duration: 0.2, y:0}).to(navItem, {
    duration: 0.3, 
    x: 0, 
    y: 0,
    stagger:0.5
  });

  

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
    if(!showMenu){
        hamburger.classList.add('open');
        // nav.classList.add('open');
        //menuNav.classList.add('open');
        // gsap.to(navItem,{duration: 1,x:0,stagger:0.25})
        tl.play();
        
        // navItem.forEach((item,i) => {
            
        //     item.classList.add('open')
        // })

        showMenu = true;
    } else {
        
        
        tl.reverse();
        hamburger.classList.remove('open');
        // nav.classList.remove('open');
        // menuNav.classList.remove('open');
        
        // navItem.forEach(item => item.classList.remove('open'))

        showMenu = false;
        
    }
}


var acc = document.querySelectorAll(".skills__group");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}