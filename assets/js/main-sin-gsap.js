const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector ('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll ('.menu-nav__item');


let showMenu = false;
// var tl = gsap.timeline({paused: true});

// tl.to(nav,{visibility: 'visible'}).to(menuNav,{ y:0}).to(navItem, {
//     duration: 0.5, 
//     x: 0, 
//     stagger:0.25
//   });

  

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
    // debugger;
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        
        // tl.play();
        for( let i=0; i < navItem.length; i++){
            navItem[i].animate([
                // keyframes
                { transform: 'translateX(150vw)' },
                { transform: 'translateX(0)' }
              ], {
                // timing options
                duration: 1000,
                iterations: 1,
                stagger: 2500 * ({i}+1),
                
              });
            //navItem[i].attributes.add(a);
        }
        // navItem.forEach((item,i) => {
            
        //     item.classList.add('open')
        // })

        showMenu = true;
    } else {
        
        
        // tl.reverse();
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        
        navItem.forEach(item => item.classList.remove('open'))

        showMenu = false;
    }
}