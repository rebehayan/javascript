const tween = gsap.to(".box", {
  duration: 4,
  x: 300,
  ease: "none",
  paused: true,
});

const buttons = document.querySelectorAll("button");
buttons[0].addEventListener("click", () => {
  tween.play();
});
buttons[1].addEventListener("click", () => {
  tween.pause();
}); // 일시정지
buttons[2].addEventListener("click", () => {
  tween.resume();
}); // 일시정지에서 시작
buttons[3].addEventListener("click", () => {
  tween.reverse();
}); // 역재생
buttons[4].addEventListener("click", () => {
  tween.restart();
}); // 처음부터 다시재생

fetch("./index.html")
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      console.log("네트워크오류");
    }

    return response.text();
  })
  .then((data) => {
    console.log(data);
    const div = document.createElement("div");
    div.innerHTML = data;
    document.body.append(div);
  });
