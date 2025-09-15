// main.js
function initPageScripts() {
  if (typeof document === 'undefined') {
    return;
  }

  // フェードイン用（IntersectionObserver が使えない環境では即時表示）
  const targets = document.querySelectorAll('.fade-in, .card');
  if (targets.length > 0) {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      targets.forEach(el => io.observe(el));
    } else {
      targets.forEach(el => el.classList.add('visible'));
    }
  }

  // Swiper.js 初期化（3枚表示×1枚ずつ切り替え）
  if (typeof Swiper === 'function' && document.querySelector('.mySwiper')) {
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
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPageScripts);
  } else {
    initPageScripts();
  }
}

if (typeof module !== 'undefined') {
  module.exports = { initPageScripts };
}
