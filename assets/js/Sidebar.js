const mobileSize = 1280;
const removeClass = (array) => {
  array.forEach((a) => a.classList.remove("active"));
};

export const Sidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  const gnb = document.querySelector("#gnb");
  const toggle = document.querySelector(".toggle");
  const links = gnb.querySelectorAll("a");
  const current = sessionStorage.getItem("src");
  const details = sidebar.querySelectorAll("details");
  let isActive = false;

  // popover 열림
  sidebar.show();

  links.forEach((link) => {
    // 빈메뉴 삭제
    if (!link.getAttribute("href")) {
      link.parentElement.remove();
      return;
    }

    link.addEventListener("click", (e) => {
      if (window.innerWidth < mobileSize) {
        sidebar.hide();
      }

      removeClass(links);
      e.target.classList.add("active");
      sessionStorage.setItem("src", e.target.getAttribute("href"));
    });
  });

  toggle.addEventListener("click", () => {
    if (!isActive) {
      sidebar.close();
    } else {
      sidebar.show();
    }
    isActive = !isActive;
  });

  // 반응형 사이드바
  const resizeSidebar = () => {
    if (window.innerWidth < mobileSize) {
      sidebar.close();
    } else {
      sidebar.showModal();
    }
  };

  // 현재 위치활성화
  const currentDetails = () => {
    if (!current) return;

    links.forEach((link) => {
      const linkText = link.textContent.toLocaleLowerCase();

      if (current.includes(linkText)) {
        details.forEach((detail) => detail.removeAttribute("open"));

        const parentDetail = link.closest("details");
        if (parentDetail) {
          parentDetail.setAttribute("open", true);
        }
      }
    });
  };

  currentDetails();
  resizeSidebar();
  window.addEventListener("resize", resizeSidebar);
};
