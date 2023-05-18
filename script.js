const nav= document.querySelector(".nav");
const navMenu= document.querySelector(".nav-menu");

nav.addEventListener("click",()=>{
    nav.classList.toggle("active");
    navMenu.classList.toggle("active");
})