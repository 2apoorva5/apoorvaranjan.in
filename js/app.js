$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots',
        autoplay: true
    });

    let hamburger = document.querySelector('.hamburger');
    let closemenu = document.querySelector('.closemenu');
    let mobileNavMenu = document.querySelector('.mobile-nav-menu');
    let menu1 = document.querySelector('.menu1');
    let menu2 = document.querySelector('.menu2');
    let menu3 = document.querySelector('.menu3');
    let menu4 = document.querySelector('.menu4');
    let menu5 = document.querySelector('.menu5');
    let menu6 = document.querySelector('.menu6');

    hamburger.addEventListener('click', function(){
        mobileNavMenu.classList.add('openmenu');
    });

    closemenu.addEventListener('click', function(){
        mobileNavMenu.classList.remove('openmenu');
    });

    menu1.addEventListener('click', function(){
        mobileNavMenu.classList.remove('openmenu');
    });

    menu2.addEventListener('click', function(){
        mobileNavMenu.classList.remove('openmenu');
    });

    menu3.addEventListener('click', function(){
        mobileNavMenu.classList.remove('openmenu');
    });

    menu4.addEventListener('click', function(){
        mobileNavMenu.classList.remove('openmenu');
    });

    menu5.addEventListener('click', function(){
        mobileNavMenu.classList.remove('openmenu');
    });

    menu6.addEventListener('click', function(){
        mobileNavMenu.classList.remove('openmenu');
    });
});