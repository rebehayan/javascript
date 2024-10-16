export const ThDataClone = () => {
  const ths = document.querySelectorAll(".table-type2 thead th");
  const trs = document.querySelectorAll(".table-type2 tbody tr");

  if (ths) {
    ths.forEach((th, index) => {
      let textValue = th.textContent;

      trs.forEach((tr) => {
        const tds = tr.querySelectorAll("td");
        tds[index].dataset.text = textValue;
      });
    });
  }
};
