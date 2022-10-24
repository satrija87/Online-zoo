/*---------burger--------*/
let buttonOpen = document.querySelector(".menu-button");
let buttonClosed = document.querySelector(".burger-cross");
let buttonMenu = document.querySelectorAll(".burger_nav-link");
const menu = document.querySelector(".burger-menu");
let overlay = document.querySelector(".overlay");

buttonOpen.addEventListener("click", openMenu);
buttonClosed.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function openMenu() {
  overlay.classList.add("active");
  menu.classList.add("active");
}

function closeMenu() {
  overlay.classList.remove("active");
  menu.classList.remove("active");
}

buttonMenu.forEach((el) => el.addEventListener("click", closeMenu));

/*--------------popup------------*/
let buttonOpenPopup = document.querySelector(".button-testimonials");
let butttonClosePopup = document.querySelector(".review-cross");
let popup = document.querySelector(".pop-up-review");

buttonOpenPopup.addEventListener("click", openPopup);
butttonClosePopup.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

function openPopup() {
  overlay.classList.add("active");
  popup.classList.add("active");
}

function closePopup() {
  overlay.classList.remove("active");
  popup.classList.remove("active");
}

/*-----------------testimonials-review---------*/
const review = document.querySelectorAll(".review");
const cross = document.querySelector(".testimonials-cross-review");

review.forEach((el) =>
  el.addEventListener("click", function () {
    el.classList.add("review-active");
    overlay.classList.add("active");
    cross.classList.add("active");
    overlay.addEventListener("click", function () {
      el.classList.remove("review-active");
      cross.classList.remove("active");
    });
    cross.addEventListener("click", function () {
      el.classList.remove("review-active");
      cross.classList.remove("active");
    });
  })
);
const testBar = document.querySelector(".progress-bar");
const testSlider = document.querySelector(".testomonials-reviews");

// const testBlockContainer = document.querySelector('.test-block-container')
// const testBlockCard = document.querySelector('.test-block-card')

if (document.documentElement.clientWidth >= 1599) {
  testBar.max = "7";
  testStep = 25.3;
} else if (
  document.documentElement.clientWidth < 1599 &&
  document.documentElement.clientWidth >= 1440
) {
  testBar.max = "8";
  testStep = 33.6;
} else if (
  document.documentElement.clientWidth < 1440 &&
  document.documentElement.clientWidth >= 1280
) {
  testBar.max = "8";
  testStep = 34.2;
} else if (
  document.documentElement.clientWidth < 1280 &&
  document.documentElement.clientWidth >= 1000
) {
  testBar.max = "8";
  testStep = 34.3;
}
function nextSlide() {
  testSlider.style["transform"] = `translateX(-${testBar.value * testStep}%)`;
}

testBar.addEventListener("input", nextSlide);

// function testimonialsSlider() {
//   if (window.innerWidth <= 1600 && window.innerWidth >= 1440) {
//     testimonialsReviews.style.transform = `translateX(-${bar.value * 300}px)`;

//   }
//   if (window.innerWidth < 1440 && window.innerWidth >= 1280) {
//     testimonialsReviews.style.transform = `translateX(-${bar.value * 25.3}%)`;
//   }
//   if (window.innerWidth < 1280 && window.innerWidth >= 1000) {
//     testimonialsReviews.style.transform = `translateX(-${bar.value * 34.1}%)`;
//   }
// }
// bar.addEventListener("input", testimonialsSlider);
