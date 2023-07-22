var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  breakpoints: {
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: ".s-button-next",
    prevEl: ".s-button-prev",
  },
});
