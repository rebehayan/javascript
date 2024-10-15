export const Menu = () => {
  const btnOpen = document.querySelector(".btn-menu");
  const dialog = document.querySelector(".mega");
  const btnClose = dialog?.querySelector(".btn-close"); // dialog가 없으면 실행하지 않음.

  if (!btnOpen || !dialog) {
    // 단일선택자 이므로 DOM객체를 반환하게 된다. 찾지 못하면 null 반환
    console.log("메뉴가 존재하지 않습니다.");
    return;
  }

  const openMenu = () => {
    dialog.show();
  };
  const closeMenu = () => {
    dialog.close();
    console.log(dialog);
  };

  btnOpen.addEventListener("click", openMenu);
  btnClose.addEventListener("click", closeMenu);
};
