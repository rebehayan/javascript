export const gallery = () => {
  const buttons = document.querySelectorAll(".gallery button");
  const bigImage = document.querySelector(".gallery > img");

  // 이미지 변경
  const changeImage = (button) => {
    const srcValue = button.querySelector("img").getAttribute("src");
    bigImage.setAttribute("src", srcValue);
  };

  // 이미지활성화
  const activeImage = (button) => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  };

  // 이미지초기값
  const initImage = () => {
    buttons[0].classList.add("active");
  };

  // 이벤트
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      changeImage(button);
      activeImage(button);
    });
  });

  initImage();
};
