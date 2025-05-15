// 2. 상품 상세 보기
function showProduct(type) {
  const products = {
    macbook: "맥북은 애플의 노트북입니다. 고성능과 디자인을 자랑합니다.",
    ipad: "아이패드는 태블릿으로, 다양한 창작활동에 적합합니다.",
  };
  document.getElementById("product-detail").innerHTML = products[type];
}

// 3. 알림 메시지
function showAlert(message) {
  const box = document.getElementById("alertBox");
  box.innerHTML = `<div class="alert">${message}</div>`;
  setTimeout(() => (box.innerHTML = ""), 3000);
}

// 4. 댓글 작성
function addComment() {
  const input = document.getElementById("commentInput");
  const comment = input.value.trim();
  if (comment) {
    const list = document.getElementById("commentList");
    list.innerHTML += `<div class="card">${comment}</div>`;
    input.value = "";
  }
}

// 5. 페이지 전환 시뮬레이션
function navigate(page) {
  const pages = {
    home: "<h3>홈</h3><p>환영합니다! 여기는 홈 페이지입니다.</p>",
    about: "<h3>소개</h3><p>이 사이트는 교육용으로 만들어졌습니다.</p>",
    contact: "<h3>문의</h3><p>문의는 help@example.com 으로 주세요.</p>",
  };
  document.getElementById("pageContent").innerHTML = pages[page];
}
