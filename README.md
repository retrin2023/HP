<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>RETRIN株式会社｜動く喜び、広がる「美」と「健康」</title>
  <link rel="stylesheet" href="css/style.css?v=1" />
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-papc1Z+3R+0tY2k9hxZj+GRZ/0x1l+1b1j6dx/lQeJ+QXKsiMnYI+4b3+6O0S+ZQFvuKqhzfbDWLRpQ6XW2vIg=="
    crossorigin="anonymous" referrerpolicy="no-referrer"/>
  <!-- Swiper.js CSS -->
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
</head>
<body class="antialiased text-gray-800">

<!-- ヘッダー -->
<header class="bg-white shadow-sm">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between">
    <a href="#" class="inline-block">
      <img src="assets/images/logo-concept.png" alt="RETRIN ロゴ" class="h-10">
    </a>
    <nav class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
      <a href="company.html" class="text-blue-600 font-medium transition-transform transform hover:-translate-y-1 hover:scale-110 hover:text-blue-800">
        会社情報
      </a>
      <a href="#services" class="text-blue-600 font-medium transition-transform transform hover:-translate-y-1 hover:scale-110 hover:text-blue-800">
        サービス
      </a>
      <a href="event-list.html" class="text-blue-600 font-medium transition-transform transform hover:-translate-y-1 hover:scale-110 hover:text-blue-800">
        イベント一覧
      </a>
      <a href="#contact" class="text-blue-600 font-medium transition-transform transform hover:-translate-y-1 hover:scale-110 hover:text-blue-800">
        お問い合わせ
      </a>
    </nav>
  </div>
</header>

<!-- ヒーロー動画 -->
<section id="hero-video" class="relative w-full h-[80vh] md:h-screen overflow-hidden">
  <video
    class="absolute top-1/2 left-1/2 w-auto h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
    src="assets/videos/hero.mp4"
    autoplay muted loop playsinline
  ></video>
  <div class="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
  <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-2 sm:px-4">
    <img src="assets/images/logo-concept1.png" alt="RETRIN ロゴ" class="h-20 sm:h-32 mb-4" />
   <a href="event-list.html"
   class="px-4 py-2 sm:px-6 sm:py-3 text-xl sm:text-2xl rounded-md transition underline decoration-yellow-400 decoration-2 underline-offset-2 bg-white/10 hover:bg-white/20">
  イベント一覧はこちら
</a>
  </div>
</section>

<!-- おすすめイベント（カルーセル） -->
<section id="carousel" class="bg-white py-12 sm:py-16 px-2 sm:px-4 md:px-8">
  <div class="max-w-screen-xl mx-auto text-center">
    <h2 class="text-xl sm:text-2xl md:text-[2rem] font-bold mb-6 sm:mb-8 inline-block border-b-4 border-[#FFD600] pb-2">
      おすすめイベント
    </h2>
    <div class="swiper mySwiper relative">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="event1.html">
            <img src="assets/images/slide1.jpg"
                 alt="イベント1"
                 class="w-full rounded-xl mx-auto transform transition-transform hover:-translate-y-2 hover:scale-105"
            >
          </a>
        </div>
        <div class="swiper-slide">
          <a href="event2.html">
            <img src="assets/images/slide2.jpg"
                 alt="イベント2"
                 class="w-full rounded-xl mx-auto transform transition-transform hover:-translate-y-2 hover:scale-105"
            >
          </a>
        </div>
        <div class="swiper-slide">
          <a href="event3.html">
            <img src="assets/images/slide3.jpg"
                 alt="イベント3"
                 class="w-full rounded-xl mx-auto transform transition-transform hover:-translate-y-2 hover:scale-105"
            >
          </a>
        </div>
        <div class="swiper-slide">
          <a href="event4.html">
            <img src="assets/images/slide4.jpg"
                 alt="イベント4"
                 class="w-full rounded-xl mx-auto transform transition-transform hover:-translate-y-2 hover:scale-105"
            >
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!-- オリジナル矢印ボタン -->
      <div class="swiper-button flex items-center justify-center text-2xl font-bold bg-white bg-opacity-70 rounded-full w-12 h-12 shadow hover:bg-yellow-300 hover:text-white transition absolute left-2 top-1/2 -translate-y-1/2 z-10">
        &#60;
      </div>
      <div class="swiper-button flex items-center justify-center text-2xl font-bold bg-white bg-opacity-70 rounded-full w-12 h-12 shadow hover:bg-yellow-300 hover:text-white transition absolute right-2 top-1/2 -translate-y-1/2 z-10">
        &#62;
      </div>
    </div>
  </div>
</section>

<!-- コンセプト -->
<section id="concept" class="bg-white py-12 sm:py-16 px-2 sm:px-4 md:px-8">
  <div class="max-w-screen-xl mx-auto text-center">
    <h2 class="text-xl sm:text-2xl md:text-[2rem] font-bold mb-6 sm:mb-8 inline-block border-b-4 border-[#FFD600] pb-2">コンセプト</h2>
    <img
      src="assets/images/concept-image.jpg"
      alt="会社コンセプト"
      class="mx-auto mb-6 rounded-lg shadow-md w-full max-w-3xl h-40 sm:h-56 md:h-80 object-cover"
    />
    <p class="text-sm sm:text-base leading-relaxed">
      <br>
      動く喜び、広がる「美」と「健康」。<br>
      RETRIN株式会社は、“動く喜び”を通じて人々の健やかな美と健康を日常に広げることを使命としています。<br>
      スポーツ大会やイベントの企画・制作・運営から、高精度な記録計測サービス、さらに大会用機材のレンタルまで、ワンストップでご提供。子どもからアスリート、企業のチームビルディングまで、あらゆるニーズに応じた最適なスポーツ体験を創出し、参加者一人ひとりの達成感と感動が、地域・企業・コミュニティに新たな活力と笑顔をもたらします。
    </p>
  </div>
</section>

<!-- 事業内容 -->
<section id="services" class="bg-white py-12 sm:py-16 px-2 sm:px-4 md:px-8">
  <div class="max-w-screen-xl mx-auto text-center">
    <h2 class="text-xl sm:text-2xl md:text-[2rem] font-bold mb-6 sm:mb-8 inline-block border-b-4 border-[#FFD600] pb-2">事業内容</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div class="shadow-lg rounded-2xl p-4 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition">
        <img 
          src="assets/images/service-1.png" 
          alt="イベント企画" 
          class="w-full h-40 sm:h-64 object-cover rounded-lg mb-4 mx-auto" 
        />
        <div class="flex flex-col items-center mb-4">
          <i class="fas fa-calendar-alt text-2xl text-blue-600 mb-2"></i>
          <h3 class="text-base sm:text-lg font-semibold">スポーツ大会・イベント企画・運営</h3>
        </div>
        <ul class="text-xs sm:text-sm leading-relaxed list-disc list-inside space-y-1 mx-auto">
          <li>キッズからアスリート、企業CSRまで対応</li>
          <li>会場設営・進行管理・安全対策を一貫サポート</li>
        </ul>
      </div>
      <div class="shadow-lg rounded-2xl p-4 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition">
        <img 
          src="assets/images/service-2.png" 
          alt="レンタル" 
          class="w-full h-40 sm:h-64 object-cover rounded-lg mb-4 mx-auto" 
        />
        <div class="flex flex-col items-center mb-4">
          <i class="fas fa-bullhorn text-2xl text-blue-600 mb-2"></i>
          <h3 class="text-base sm:text-lg font-semibold">レンタル</h3>
        </div>
        <ul class="text-xs sm:text-sm leading-relaxed list-disc list-inside space-y-1 mx-auto">
          <li>ワンストップで揃う豊富なラインナップ</li>
          <li>柔軟＆最適なプラン設計によるコスト効率化</li>
        </ul>
      </div>
      <div class="shadow-lg rounded-2xl p-4 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition">
        <img 
          src="assets/images/service-3.png" 
          alt="記録計測" 
          class="w-full h-40 sm:h-64 object-cover rounded-lg mb-4 mx-auto" 
        />
        <div class="flex flex-col items-center mb-4">
          <i class="fas fa-camera-retro text-2xl text-blue-600 mb-2"></i>
          <h3 class="text-base sm:text-lg font-semibold">記録計測</h3>
        </div>
        <ul class="text-xs sm:text-sm leading-relaxed list-disc list-inside space-y-1 mx-auto">
          <li>高精度＆リアルタイムデータ配信</li>
          <li>柔軟＆充実のデータサービス</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- お問い合わせ -->
<section id="contact" class="bg-white py-12 sm:py-16 px-2 sm:px-4 md:px-8">
  <div class="max-w-screen-xl mx-auto text-center">
    <h2 class="text-xl sm:text-2xl md:text-[2rem] font-bold mb-6 sm:mb-8 inline-block border-b-4 border-[#FFD600] pb-2">お問い合わせ</h2>
    <form
      action="https://retrin.co.jp/api/contact.php"
      method="POST"
      autocomplete="on"
      class="max-w-lg mx-auto space-y-4 sm:space-y-6"
    >
      <input type="hidden" name="subject" value="RETRINお問い合わせ" />
      <div>
        <label for="name" class="block mb-2 font-medium">お名前</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="例：山田 太郎"
          required
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
      <div>
        <label for="email" class="block mb-2 font-medium">メールアドレス</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="例：taro@example.com"
          required
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
      <div>
        <label for="message" class="block mb-2 font-medium">お問い合わせ内容</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition w-full"
      >
        送信する
      </button>
    </form>
    <script>
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact form');
    const resultBox = document.createElement('div');
    resultBox.className = 'mt-4 text-center';
    form.after(resultBox);

    form.addEventListener('submit', async e => {
      e.preventDefault();
      resultBox.textContent = '送信中…';

      try {
        const res = await fetch(form.action, {
          method: form.method,
          body: new FormData(form)
        });
        const data = await res.json();

        if (res.ok && data.status === 'OK') {
          // 成功メッセージ
          resultBox.innerHTML = '<p class="text-green-600 font-semibold">お問い合わせを受け付けました。ありがとうございました！</p>';
          form.reset();
        } else {
          // サーバー側エラー or バリデーションエラー
          const msg = data.error || '通信エラーが発生しました。';
          resultBox.innerHTML = `<p class="text-red-600 font-semibold">エラー：${msg}</p>`;
        }
      } catch (err) {
        resultBox.innerHTML = '<p class="text-red-600 font-semibold">ネットワークエラーが発生しました。</p>';
        console.error(err);
      }
    });
  });
</script>
  </div>
</section>

<!-- フッター -->
<footer class="bg-gray-100 py-8">
  <div class="max-w-screen-xl mx-auto text-center">
    <p class="text-xs sm:text-sm text-gray-600">© 2023–2025 RETRIN株式会社</p>
    <div class="mt-4 space-x-4">
      <a href="#" class="text-gray-600 hover:text-blue-600 transition"><i class="fab fa-twitter"></i></a>
      <a href="#" class="text-gray-600 hover:text-blue-600 transition"><i class="fab fa-facebook"></i></a>
      <a href="#" class="text-gray-600 hover:text-blue-600 transition"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
</footer>

<!-- Swiper.js -->
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<!-- Swiper 初期化 -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.mySwiper', {
      loop: true,
      slidesPerView: 1, // ← モバイルは1枚表示
      spaceBetween: 16,
      autoplay: { delay: 3000 },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2, // タブレット
        },
        1024: {
          slidesPerView: 3, // PC
        }
      }
    });
  });
</script>
</body>
</html>
