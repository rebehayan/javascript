const key = document.querySelector(".key");

key.addEventListener("keydown", (event) => {
  console.log(event.key); // 이벤트 키확인;
  if (event.ctrlKey && event.key === "a") {
    console.log("단축키 실행");
  }
});
