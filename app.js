// ----------------- SCROLL TOP

const scrollTop = document.querySelector('#scroll_top');

scrollTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});
window.addEventListener('scroll', () => {
    if(window.scrollY > 620){
        scrollTop.style.display = "block";
    } else if(window.scrollY <= 620) {
        scrollTop.style.display = "none"
    }
});


// ----------------- COPY MAIL

const copyMail = document.querySelector('#copy_mail');
const mail     = 'Matthieu.audo.56@gmail.com';
const copied   = document.querySelector('#mail_copied')

copyMail.addEventListener('click', () => {
    navigator.clipboard.writeText(mail);
    copied.style.display = "block";
    
    setTimeout(function(){
        copied.style.display = "none"
    },5000);
    
});


//  ---------------- POINTER FOLLOW

const mouseFollow = document.querySelector('#mouse_follow');

document.body.onpointermove = function(e) {
    let pageX = e.pageX;
    let pageY = e.pageY;

    mouseFollow.animate({
        left: pageX + 'px',
        top: pageY + 'px',
    }, {
        duration: 2000,
        fill: 'forwards'
    });
};


// ----------------- CREATIVITY RANDOM LETTER

const letters = "abcdefghijklmnopqrstuvwxyz";

document.querySelector('#header_span').onmouseover = e => {
    
    let iterations = 0;

    const interval = setInterval(() => {
    e.target.innerText = e.target.innerText.split("")
    .map((letter, index) => { 
    
    if(index < iterations) {
        return e.target.dataset.value[index];
    }
    
    return letters[Math.floor(Math.random() * 26)]
    })
    .join("");

    if(iterations >= e.target.dataset.value.length) clearInterval(interval);

    iterations += 1 / 3;

    },30)
};

//  ------------------------------- NAV

const burger = document.querySelector('#icon_burger');
const navBurger = document.querySelector('#nav_burger');
const menuList = document.querySelectorAll('.a_nav');



burger.addEventListener('click', () => {
    navBurger.style.display = "block";
});


menuList.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        navBurger.style.display = "none";
    });
});
