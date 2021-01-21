const splash = document.querySelector(".splash");
const logo = document.querySelector(".splash #logo");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("fade-out");
    logo.classList.add("fade-out");
  }, 2500);
});
