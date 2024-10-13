const counter = document.querySelector(".counter");
const buttons = document.querySelectorAll(".certification button");
const inputs = document.querySelectorAll(".certification input");

// 카운트다운 시간 (밀리초로 설정, 여기서는 11분으로 설정됨)
const Time = 11;
let countdownTime = Time * 60 * 1000; // 11분 (11분 * 60초 * 1000밀리초)

// 타이머 업데이트 함수
function updateCountdown() {
  countdownTime -= 1000; // 1초씩 감소

  // 남은 시간이 0보다 작거나 같으면 카운트다운 종료
  if (countdownTime <= 0) {
    counter.innerText = "시간 종료!";
    clearInterval(timerInterval);
    return; // return을 안주면 0이 붙은뒤에 아래 코드가 실행되서 '시간 종료!'가 안뜸
  }

  // 남은 시간 계산 (분, 초)
  let minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

  // 분과 초가 10보다 작으면 앞에 0을 붙이기
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  // 남은 시간을 HTML에 표시
  counter.innerText = `${minutes}:${seconds}`;
}

// 1초마다 카운트다운 업데이트

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    inputs.forEach((input) => {
      if (!input.value || !input.value.match(/[0-9]/g)) {
        return;
      }
    });
    if (index === 0) {
      button.setAttribute("disabled", true);
      const timerInterval = setInterval(updateCountdown, 1000);
      updateCountdown();
    }
  });
});
