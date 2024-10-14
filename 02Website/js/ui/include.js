import { alram } from "./alram.js";

export function includeHTML(file, target) {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        // .ok는 요청의 결과의 성공여부를 확인함 true / false
        console.log("네트워크 반응 오류");
      }
      //   console.log(response); //데이터확인
      return response.text(); // 응답을 텍스트(HTML)로 변환
    })
    .then((data) => {
      //   console.log(data); // 데이터 확인
      document.querySelector(target).innerHTML = data; // HTML 삽입
      alram();
    })
    .catch((error) => {
      console.log(error);
    });
}
