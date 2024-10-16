export const Comment = () => {
  const comment = document.querySelector(".comment");

  if (!comment) {
    return;
  }

  const count = () => {
    const countList = comment.querySelectorAll(".comment-list > div");
    const countText = comment.querySelector(".comment__title");
    const isCount = countList.length;
    countText.innerText = `댓글 (${isCount})`;
  };

  const textLength = () => {
    const textarea = comment.querySelector(".comment-list__sublist textarea");
    const textCount = comment.querySelector(".comment-list__sublist__count");

    textarea.addEventListener("input", (e) => {
      const isTextLength = e.target.value.length;

      textCount.innerText = isTextLength;
    });
  };

  const toggleList = () => {
    const btnToggle = comment.querySelector(".toggle");

    let isOpen = false;

    btnToggle.addEventListener("click", (e) => {
      const next = e.target.nextElementSibling;
      if (!isOpen) {
        next.style.display = "block";
      } else {
        next.style.display = "none";
      }
      isOpen = !isOpen;
    });
  };

  count();
  textLength();
  toggleList();
};
