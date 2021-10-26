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
