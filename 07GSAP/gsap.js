gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = document.querySelectorAll(".section");
let currentSection = 0; // 현재 활성화된 섹션 인덱스

// 섹션 이동 함수
function goToSection(index) {
  if (index < 0 || index >= sections.length) return; // 경계값 처리

  gsap.to(window, {
    scrollTo: { y: sections[index], autoKill: false }, // ScrollToPlugin 사용
    duration: 1,
    onComplete: () => (currentSection = index), // 현재 섹션 인덱스 업데이트
  });
}

// 마우스 휠 이벤트 핸들러
window.addEventListener("wheel", (e) => {
  if (gsap.isTweening(window)) return; // 애니메이션 중에는 무시

  if (e.deltaY > 0) {
    goToSection(currentSection + 1); // 다음 섹션으로 이동
  } else {
    goToSection(currentSection - 1); // 이전 섹션으로 이동
  }
});

// 초기 스크롤 위치 설정
ScrollTrigger.create({
  trigger: sections[0],
  start: "top top",
  end: "bottom bottom",
  ease: "none",
  onEnter: () => goToSection(0), // 첫 번째 섹션으로 이동
});
