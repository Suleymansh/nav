
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navlink = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navlink.classList.add("active-menu");

  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navlink.classList.remove("active-menu");
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
});
