export const Login = () => {
  const form = document.querySelector(".login__form");
  const inputs = form.querySelectorAll("input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let ischecked = false;
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value) {
        console.log("아이디 또는 비밀번호를 입력하세요.");
        isValid = false;
      }
      if (input.type === "checkbox" && input.checked) {
        ischecked = true;
        console.log("로그인정보 저장");
      }
    });

    if (isValid) {
      console.log("로그인 데이터전송");
    }
  });
};
