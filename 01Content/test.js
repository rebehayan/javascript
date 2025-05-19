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
  const input = document.getElementById("comment-input");
  const comment = input.value.trim(); //공백삭제
  if (comment) {
    const list = document.getElementById("comment-list");
    // list.innerHTML = list.innerHTML + `<div class="card">${comment}</div>`; //정순
    // list.innerHTML = `<div class="card">${comment}</div>` + list.innerHTML; //역순
    list.innerHTML += `<div class="card">${comment}</div>`;
    input.value = ""; //입력란비우기
  }
}

// 5. 페이지 전환 시뮬레이션
function navigate(page) {
  const pages = {
    binder: "<h3>가계약</h3><p>보험증권이 발행될 때까지의 무보험 상태를 메꾸기 위한 계약을 말한다.</p>",
    refresh:
      "<h3>갱신</h3><p>종전 보험계약의 만기때 원칙적으로 본래의 보험계약과 동일한 내용·조건(보험기간은 제외)을 가지고 새로운 보험계약을 체결하는 것을 말한다. 이 경우에는 새로운 보험증권이 발행된다.</p>",
    expiration: "<h3>만기</h3><p>정해진 보험기간이 다 경과하여 끝난 때를 말한다.</p>",
  };
  document.getElementById("pageContent").innerHTML = pages[page];
}
