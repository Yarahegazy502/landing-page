

var sections=document.querySelectorAll("section");
// build the nav
var navUl=document.getElementById("navbar__list");
var links = document.querySelectorAll('.navbar__menu ul li a');
console.log(navUl);
// bulid navbar links
sections.forEach((sec)=>{
    // console.log(sec.id);
    var navItem=`<li><a href="#${sec.id}" data-nav="${sec.id}" class="nav-link">${sec.dataset.nav}</a></li>`;
    navUl.insertAdjacentHTML("beforeend",navItem);
//    console.log( sec.getBoundingClientRect());
})

// Add class 'active' to section when near top of viewport
// remove all active class
// var removeActiveClass=(s)=>{
//     s.classList.remove("your-active-class");
// }
// var addActiveClass=(con,s)=>{
// if(con){
//     s.classList.add("your-active-class");
// }}
var offset=(e)=>{
    return Math.ceil(e.getBoundingClientRect().top>=0)
}

// onscroll
document.onscroll=()=>{
    sections.forEach((sec)=>{
        if(offset(sec)){
            // check if section have active class or not
            if(!sec.classList.contains("your-active-class")){
                // add active class
                sec.classList.add("your-active-class");
            }else{
                // remove active class
                sec.classList.remove("your-active-class");
            }
        }
    
    });
}

// Scroll to anchor ID using scrollTO event

// ==

// links.forEach((link) => {
//     link.addEventListener('click', () => {
//         sections.forEach((sec)=>{
//             sec.addEventListener("click",sectionScroll(link));})
//     });
// });

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


