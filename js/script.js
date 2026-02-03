const swiper = new Swiper(".skillSwiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  loop: true,

  speed: 6000, // càng lớn → chạy càng mượt & chậm
  freeMode: true,
  freeModeMomentum: false,

  autoplay: {
    delay: 0, // QUAN TRỌNG: không dừng
    disableOnInteraction: false,
  },

  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 6 },
  },
});

// Hover thì dừng băng chuyền
const swiperEl = document.querySelector(".skillSwiper");

swiperEl.addEventListener("mouseenter", () => {
  swiper.autoplay.stop();
});

swiperEl.addEventListener("mouseleave", () => {
  swiper.autoplay.start();
});
