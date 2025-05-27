import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

import Swiper from "swiper/bundle";

import "swiper/css/bundle";

new Swiper(".bannerSwiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".banner-pagination",
    clickable: true,
  },
});

new Swiper(".rj-swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 12,

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
