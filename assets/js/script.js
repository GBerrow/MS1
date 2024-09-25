// Toggle the mobile menu when the hamburger icon is clicked
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Toggle the 'open' class on both the menu and icon for animation
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Get the mode toggle buttons from the DOM
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");

// Get all elements with the "icon" class to change their source (light/dark) dynamically
const themeIcons = document.querySelectorAll(".icon");

// Retrieve the current theme from localStorage (if the user has already selected a theme)
const currentTheme = localStorage.getItem("theme");

// If the current theme is dark, apply dark mode styles on page load
if (currentTheme === "dark") {
  setDarkMode();
}

// Add event listeners to the desktop and mobile theme toggle buttons
btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

// Function to toggle between dark and light modes
function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  // If the current theme is dark, switch to light mode; otherwise, switch to dark mode
  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

// Function to apply dark mode
function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

// Function to apply light mode
function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}
