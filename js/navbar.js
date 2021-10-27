var navbar = document.querySelector('.navbar')
var navbarContainer = document.querySelector(".navbar-container");

window.onscroll = () => {
    if (window.scrollY > 60) {
        navbar.style.top = "10px";
        if(!navbarContainer.classList.contains("navbar-scrolled-container"))
            navbarContainer.classList.add("navbar-scrolled-container");
    }
    else {
        navbar.style.top = "60px";
        if(navbarContainer.classList.contains("navbar-scrolled-container"))
            navbarContainer.classList.remove("navbar-scrolled-container");
    }
}

document.querySelector(".hamburger-open").addEventListener("click", (e) => {
    if(!document.querySelector(".hamburger-open").classList.contains("hamburger-close")){
        document.querySelector(".hamburger-open").classList.add("hamburger-close");
        document.querySelector(".navbar-ham-menu").classList.add("navbar-ham-menu-open");
    }
    else {
        document.querySelector(".hamburger-open").classList.remove("hamburger-close");
        document.querySelector(".navbar-ham-menu").classList.remove("navbar-ham-menu-open");
    }
})

document.querySelectorAll(".navbar-ham-menu a").forEach(item => {
    item.addEventListener("click", e => {
        if(document.querySelector(".hamburger-open").classList.contains("hamburger-close")){
            document.querySelector(".hamburger-open").classList.remove("hamburger-close");
            document.querySelector(".navbar-ham-menu").classList.remove("navbar-ham-menu-open");
        }
    })
})