const openMenu = document.querySelector(".burger");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector("menu");
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

/***** Open/close nav-menu *****/

openMenu.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
closeMenu.addEventListener("click", () => {
  menu.style.visibility = "collapse";
});

/***** carousel *****/

next.addEventListener("click", () => {
  slides.forEach((slide) => {
    slidesWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slidesWidth;
  });
  console.log("clicked");
});

prev.addEventListener("click", () => {
  slides.forEach((slide) => {
    slidesWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slidesWidth;
  });
  console.log("clicked");
});
