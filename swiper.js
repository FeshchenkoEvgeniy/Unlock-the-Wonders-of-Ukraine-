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

var swiperGallery = new Swiper(".gallerySwiper", {
  slidesPerView: 1,
  breakpoints: {
    835: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 3.5,
      spaceBetween: 16,
    },
  },
  navigation: {
    nextEl: ".s-button-next",
    prevEl: ".s-button-prev",
  },
});

var swiperReviews = new Swiper(".reviewsSwiper", {
  slidesPerView: 1,
  breakpoints: {
    835: {
      slidesPerView: 2.37,
      spaceBetween: 32,
    },
    1440: {
      spaceBetween: 32,
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".s-button-next",
    prevEl: ".s-button-prev",
  },
});
