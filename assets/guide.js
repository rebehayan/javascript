// const details = document.querySelectorAll("details");
// const links = document.querySelectorAll("a");

// // 현재 열린 details의 위치를 배열로 저장하는 함수
// const getOpenDetailsIndexes = () => Array.from(details).map((detail) => detail.hasAttribute("open"));

// // details 상태를 복원하는 함수
// const restoreDetailsState = (openDetailsState) => {
//   if (!openDetailsState) return; // 저장된 상태가 없으면 아무것도 안 함

//   openDetailsState.forEach((isOpen, index) => {
//     if (details[index]) {
//       if (isOpen) {
//         details[index].setAttribute("open", "");
//       } else {
//         details[index].removeAttribute("open");
//       }
//     }
//   });
// };

// // 페이지 이동 시 details 상태를 localStorage에 저장
// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     const openDetailsState = getOpenDetailsIndexes();
//     localStorage.setItem("openDetailsState", JSON.stringify(openDetailsState));
//   });
// });

// // 페이지 로드 시 localStorage에서 상태를 가져와 복원
// document.addEventListener("DOMContentLoaded", () => {
//   const storedState = JSON.parse(localStorage.getItem("openDetailsState"));
//   restoreDetailsState(storedState);
// });

// // 히스토리 탐색 시 popstate 이벤트로 상태 복원
// window.addEventListener("popstate", () => {
//   const storedState = JSON.parse(localStorage.getItem("openDetailsState"));
//   restoreDetailsState(storedState);
// });

const Tab = (id) => {
  const config = {
    tabID: id,
    className: "active",
  };
  const { className, tabID } = config;

  const tabs = document.querySelectorAll(`[data-tab=${tabID}] [data-tab-item]`);
  const tabContents = document.querySelectorAll(`[data-tab-contents=${tabID}] [data-tab-content]`);

  if (tabID == null) {
    console.log("탭아이디를 넣어주세요.");
    return;
  }
  if (typeof tabID != "string") {
    console.log(typeof tabID);

    console.log("Tab ID는 String이어야 합니다.");
    return;
  }

  // NodeLIst는 유사배열이므로 length를 사용하여 검사한다.
  if (tabs.length === 0 || tabContents.length === 0) {
    console.log("현재 페이지에 탭이 존재하지 않습니다.");
    return;
  }

  // 탭닫기
  const closeTab = () => {
    tabs.forEach((tab) => {
      tab.classList.remove(className);
    });
  };

  // 탭열기
  const openTab = (event) => {
    event.target.classList.add(className);
  };

  // 탭콘텐츠 열기
  const openContent = (index) => {
    tabContents.forEach((content, contentIndex) => {
      if (index === contentIndex) {
        content.classList.add(className);
      }
    });
  };

  // 탭콘텐츠 닫기
  const closeContent = () => {
    tabContents.forEach((content) => {
      content.classList.remove(className);
    });
  };

  // 초기셋팅
  const init = () => {
    tabs[0].classList.add(className);
    tabContents[0].classList.add(className);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
      closeTab();
      openTab(event);
      closeContent();
      openContent(index);
    });
  });

  init();
};

Tab("tab");
