export const copy = async () => {
  const copyItems = document.querySelectorAll(".copy");

  copyItems.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerText = "복사";
    btn.classList.add("btn-copy");
    item.prepend(btn);
  });

  const button = document.querySelectorAll(".btn-copy");
  button.forEach((element) => {
    element.addEventListener("click", () => {
      const target = element.nextElementSibling;
      if (!target) {
        console.log("복사할 대상이 없습니다.");
        return;
      }
      const content = target.outerHTML; // HTML 포함해서 복사

      navigator.clipboard
        .writeText(content) // 비동기API
        .then(() => {
          element.innerText = "복사됨!";
          element.classList.add("active"); // CSS처리용

          // 1초뒤 초기화
          setTimeout(() => {
            element.classList.remove("active");
            element.innerText = "복사";
          }, 1000);
        })
        .catch((err) => console.error("복사 실패:", err));
    });
  });
};
