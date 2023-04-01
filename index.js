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

if(!localStorage.getItem('mode')){
    localStorage.setItem('mode', 'light');
}else if(localStorage.getItem("mode") == "dark"){
    changeDark();
    switchModes.checked = true;
    
    // moon.classList.add("reload");
    // sun.classList.add("reload");
    // slider.classList.add("reload");
}

// Toggle light/dark mode. Function adds the class "dark-mode" to all of the elements in the body of the html file
function darkMode() {
    //Saves state for light-mode/dark-mode which is good when switching between pages
    if(localStorage.getItem("mode") == "light"){
        changeDark("dark");
        localStorage.setItem('mode', "dark");

    } else {
        localStorage.setItem('mode', "light");
        changeDark("light");
    }
 }

 function changeDark(which_way){
    var elements = [
        document.getElementsByTagName("body"),
        document.getElementsByTagName("header"),
        document.getElementsByTagName("h1"),
        document.getElementsByTagName("h2"),
        document.getElementsByTagName("h3"),
        document.getElementsByTagName("h4"),
        document.getElementsByTagName("h5"),
        document.getElementsByTagName("h6"),
        document.getElementsByTagName("p"),
        document.getElementsByTagName("i"),
        document.getElementsByTagName("a"),
        document.getElementsByClassName("header")
    ]

    for(let i=0; i<elements.length; i++) {
        for(let j=0; j<elements[i].length; j++){
            if(which_way == "light"){
                elements[i][j].classList.remove("dark-mode");
            }else{
                elements[i][j].classList.add("dark-mode");
            }
        }
    }
 }