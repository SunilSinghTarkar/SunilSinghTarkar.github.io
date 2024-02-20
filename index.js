let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector("#nav-menu");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};


      

document.getElementById('resume-link-1').addEventListener("click", () => {
  console.log("Script file loaded successfully");
  window.open("https://drive.google.com/file/d/12KBH112njcu8D8PsreS4_mR99cVrwhyb/view?usp=sharing", "_blank");
});

