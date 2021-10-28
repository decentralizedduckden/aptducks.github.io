var navbar = document.querySelector('.navbar')
var navbarContainer = document.querySelector(".navbar-container")
var heroSection = document.querySelector(".hero-section")
var aboutSection = document.querySelector(".whowere-section")
var dinnerPlateSection = document.querySelector(".dinner-plate-section")
var roadmapSection = document.querySelector(".roadmap-section")
var faqSection = document.querySelector(".faq-section")


window.onscroll = () => {
    if (window.scrollY > 60) {
        navbar.style.top = "10px";
        if(!navbarContainer.classList.contains("navbar-scrolled-container"))
            navbarContainer.classList.add("navbar-scrolled-container")
    }
    else {
        navbar.style.top = "60px";
        if(navbarContainer.classList.contains("navbar-scrolled-container"))
            navbarContainer.classList.remove("navbar-scrolled-container")
    }
}

document.querySelector(".hamburger-open").addEventListener("click", (e) => {
    if(!document.querySelector(".hamburger-open").classList.contains("hamburger-close")){
        document.querySelector(".hamburger-open").classList.add("hamburger-close")
        document.querySelector(".navbar-ham-menu").classList.add("navbar-ham-menu-open")
    }
    else {
        document.querySelector(".hamburger-open").classList.remove("hamburger-close")
        document.querySelector(".navbar-ham-menu").classList.remove("navbar-ham-menu-open")
    }
})

document.querySelectorAll(".navbar-ham-menu p").forEach(item => {
    item.addEventListener("click", e => {
        if(document.querySelector(".hamburger-open").classList.contains("hamburger-close")){
            document.querySelector(".hamburger-open").classList.remove("hamburger-close")
            document.querySelector(".navbar-ham-menu").classList.remove("navbar-ham-menu-open")
        }
    })
})

document.querySelectorAll(".navbar-a").forEach(item => {
    item.addEventListener("click", e => {
        switch(item.id){
            case "heroScroll": 
                heroSection.scrollIntoView();
                break; 
            case "heroScrollR": 
                heroSection.scrollIntoView();
                break; 
            case "aboutScroll":
                aboutSection.scrollIntoView();
                break;
            case "aboutScrollR":
                aboutSection.scrollIntoView();
                break;
            case "roadScroll":
                roadmapSection.scrollIntoView();
                break;
            case "roadScrollR":
                roadmapSection.scrollIntoView();
                break;
            case "faqScroll":
                faqSection.scrollIntoView();
                break;
            case "faqScrollR":
                faqSection.scrollIntoView();
                break;
            default:
                return;
        }
    })
})