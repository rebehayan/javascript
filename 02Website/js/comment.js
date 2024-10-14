export const comment = () => {
  const form = document.querySelector(".comment");
  const text = document.querySelector(".comment__write textarea");
  const list = document.querySelector(".comment__list");

  let textContent = "";

  const clearText = () => {
    text.value = "";
  };
  const deleteComment = (e) => {
    e.target.closest("li").remove();
  };

  text.addEventListener("change", (e) => {
    const textValue = e.target.value;
    console.log(textValue);

    textContent = textValue;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (textContent === "") {
      alert("댓글내용을 입력해주세요.");
      return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <div class="avatar">
            <img src="../images/@avatar.png" alt="" />
        </div>
        <div class="comment__info">
            <div class="comment__name">Chwwwl8007</div>
            <div class="comment__date">2020.12.23. 14:34</div>
            <div class="comment__btn">
            <button type="button">댓글쓰기</button>
            <button type="button" class="btn-delete">글삭제</button>
            </div>
            <div class="comment__content">
            ${textContent}
            </div>
        </div>
    `;
    li.querySelector(".btn-delete").addEventListener("click", deleteComment);

    list.append(li);

    textContent = "";
    clearText();
  });
};
