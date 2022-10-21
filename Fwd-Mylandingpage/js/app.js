// declaring global variables
const navBar = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

addSections = () => {
    for (let sec of sections) {
        part = document.createElement("li");
        part.innerHTML = `<li> <a href="#${sec.id}" data-nav="${sec.id}" class= "menu__link">
         ${sec.dataset.nav} </a> </li>`
        navBar.appendChild(part);
    }
};
addSections();

// GetBoundingClientRect to check the active section
window.onscroll = function() {
    document.querySelectorAll("section").forEach(function(active) {
        if (
            active.getBoundingClientRect().top >= -350 &&
            active.getBoundingClientRect().top <= 150
        ) {
            active.classList.add("your-active-class");
        } else {
            active.classList.remove("your-active-class");
        }
    });
};

// using scrollintoview to navigate between the sections smothly
navBar.addEventListener("click", (toItem) => {
    toItem.preventDefault();
    if (toItem.target.dataset.nav) {
        document
            .getElementById(`${toItem.target.dataset.nav}`)
            .scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        setTimeout(() => {
            location.hash = `${toItem.target.dataset.nav}`
        }, 150);
    }
})

// ScrollToTop button 
const btnToTop = document.getElementById("GoTop");
btnToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});