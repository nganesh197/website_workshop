// first three variables are constant, meaning they cannot be changed or modified further down in the code
// document.querySelector() reads what is on the html page and looks for certain tags, ids, or classes and saves it to the variable.
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const navigation = document.querySelector('.header');

let showMenu = false;

// addEventListener waits for the user to do something on the webpage such as scrolling or clicking. Here when the user 
// clicks on the X mark on the mobile version of the webpage, the javascript code will add the class "open" to the navigation bar.
menuBtn.addEventListener('click', toggleMenu);

// This controls if the menu is showed or not
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