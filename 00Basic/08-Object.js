// 객체생성
// 객체접근
// 선택적 체이닝
const tabData = {
  title: "제목입니다.",
  view: 1200,
  like: 5,
  lectures: 30,
  price: 20000,
};

const { title, view, like, lectures, price } = tabData;

const tabContent = document.querySelector(".tab-content");

tabContent.innerHTML = `
      <div>
        <img src="./images/001.jpg" alt="">
        <strong class="title">${title}</strong>
        <div class="info">
          <span class="view">${view.toLocaleString()}</span>
          <span class="like">${like.toLocaleString()}</span>
        </div>
        <div class="lectures">${lectures.toLocaleString()} Lectures</div>
        <div class="price">${price.toLocaleString()}원</div>
      </div>
  `;
