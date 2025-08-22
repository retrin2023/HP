// main.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('▶ main.js loaded');

  // フェードイン用
  const targets = document.querySelectorAll('.fade-in, .card');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  targets.forEach(el => io.observe(el));

  // Swiper.js 初期化（3枚表示×1枚ずつ切り替え）
  new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 16,
    autoplay: { delay: 3000 },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
