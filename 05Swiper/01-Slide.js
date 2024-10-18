import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const data = [
  {
    slideTitle: "제목입니다.1",
    slideText: "정보입니다.",
  },
  {
    slideTitle: "제목입니다.2",
    slideText: "정보입니다.",
  },
  {
    slideTitle: "제목입니다.3",
    slideText: "정보입니다.",
  },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

swiperWrapper.innerHTML = data
  .map((item) => {
    return `
    <div class="swiper-slide">
      <h2>${item.slideTitle}</h2>
      <p>${item.slideText}</p>
    </div>
  `;
  })
  .join("");

let swiper = new Swiper(".swiper", {
  // loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
