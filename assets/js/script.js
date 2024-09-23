// Toggle the mobile menu when the hamburger icon is clicked
function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")

    // Toggle the 'open' class on both the menu and icon for animation
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}