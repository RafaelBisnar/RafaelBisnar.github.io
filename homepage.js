const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".bar");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});