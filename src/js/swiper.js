const swiper = new Swiper('.my-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.btn-left',
    prevEl: '.btn-right',
  },
});
