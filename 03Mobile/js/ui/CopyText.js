export const CopyText = async () => {
  const selector = document.querySelector(".copy");

  if (!selector) {
    return;
  }

  selector.addEventListener("click", () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => console.log("복사되었습니다!"))
      .catch((err) => console.error("복사 실패:", err));
  });
};
