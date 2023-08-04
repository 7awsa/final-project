const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const spacer = document.querySelector(".spacer");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    spacer.classList.toggle("active");
});

