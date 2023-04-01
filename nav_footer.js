// JS code to simplify updating the navigation bar. Alternative would be to copy & paste the correct code on each page.
// Go to navigation.html to update the navigation bar
$(function(){
    $("#navigation").load("navigation.html");
});

// document.write('\
// <div class="navigation">\
//     <nav>\
//         <ul class="menu-nav">\
//             <li class="menu-nav__item">\
//                 <a href="index.html" class="menu-nav__link" id="home"> Home</a>\
//             </li>\
//             <li class="menu-nav__item">\
//                 <a href="research_areas.html" class="menu-nav__link" id="research_interest"> Research Interest</a>\
//             </li>\
//             <li class="menu-nav__item">\
//                 <a href="resume.html" class="menu-nav__link" id="resume"> Re&#769sume&#769/CV</a>\
//             </li>\
//             <li class="menu-nav__item">\
//                 <a href="publications.html" class="menu-nav__link" id="publication"> Publications</a>\
//             </li>\
//             <li class="menu-nav__item">\
//                 <a href="contact.html" class="menu-nav__link" id="contact"> Contact Me</a>\
//             </li>\
//         </ul>\
//     </nav>\
// </div>\
// ');

// $.get("navigation.html", function(data){
//     $("#navigation").replaceWith(data);
// });
// JS code to simplify updating the navigation bar. Alternative would be to copy & paste the correct code on each page.
// Go to footer.html to update the navigation bar
$.get("footer.html", function(data){
    $("#footer").replaceWith(data);
});