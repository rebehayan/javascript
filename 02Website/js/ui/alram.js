export const alram = () => {
  const alramList = document.querySelectorAll("#alram li");
  const alramText = document.querySelector(".profile__alram");
  const alramCount = alramList.length;

  console.log(alramCount);
  alramText.innerText = alramCount;
};
