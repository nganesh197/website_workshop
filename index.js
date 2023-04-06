var switchModes = document.getElementById("switchModes");
// var sun = document.getElementById("sun-go");
// var slider = document.getElementById("slider");

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const navigation = document.querySelector('.header');
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() { 
    if(!showMenu){
        hamburger.classList.add('open');
        navigation.classList.add('open');
        showMenu = true;
    }else{
        hamburger.classList.remove('open');
        navigation.classList.remove('open');
        showMenu = false;
    }
}