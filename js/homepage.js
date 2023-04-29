//Begining of homepage javascript
//Navbar toggle visibility
const NavBarToggle = navbar.querySelector("#navbar-toggle");

const navbarMenu = document.querySelector("#navbar-menu");

const navbarLinksContainer = navbarMenu.querySelector(".navbar-links")

let isNavbarExpanded = NavBarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    NavBarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

NavBarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);