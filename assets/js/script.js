// Toggle the mobile menu when the hamburger icon is clicked
function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")

    // Toggle the 'open' class on both the menu and icon for animation
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Dark / Light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons =  document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    setDarkMode(); 
}

btn.addEventListener("click", function () {
    setTheme();
});

btn2.addEventListener("click", function () {
    setTheme();
});

function setTheme() {
    let currentTheme = document.body.getAttribute("theme");

    if (currentTheme === "dark") {
        setLightMode();
    } else {
        setDarkMode();
    }
}


