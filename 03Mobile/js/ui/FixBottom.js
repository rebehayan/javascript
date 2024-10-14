export const FixBottom = () => {
  const fixWrap = document.querySelector(".fix-bottom");

  if (!fixWrap) {
    console.log("하단 고정버튼 없음");
    return;
  }

  const height = fixWrap.offsetHeight;
  const rem = height / 10 + "rem";

  document.body.style.setProperty("--pb", rem);
};
