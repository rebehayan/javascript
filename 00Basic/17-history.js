const history = window.history;

console.log(history);

const button = document.querySelectorAll("button");

button[0].addEventListener("click", () => {
  console.log(history);
});

button[1].addEventListener("click", () => {
  history.back();
  console.log("뒤로가기");
});

button[2].addEventListener("click", () => {
  history.forward();
  console.log("앞으로가기");
});

button[3].addEventListener("click", () => {
  history.go(2);
  console.log("n번째 이동");
});

button[4].addEventListener("click", () => {
  history.scrollRestoration == "manual";
  console.log("스크롤 유지");
});

button[5].addEventListener("click", () => {
  history.scrollRestoration == "auto";
  console.log("스크롤 초기화");
});

button[6].addEventListener("click", () => {
  history.pushState({ color: "orange" }, "", "/#next5");
  console.log("히스토리에 상태 추가");
});

button[7].addEventListener("click", () => {
  history.replaceState({ number: 100 }, "", "/#next6");
  console.log("현재 히스토리에 상태 덮어쓰기");
});
