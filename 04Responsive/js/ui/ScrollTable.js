export const ScrollTable = () => {
  const tables = document.querySelectorAll(".scroll-table");

  if (!tables) {
    return;
  }

  tables.forEach((table) => {
    table.addEventListener("click", (e) => {
      e.target.classList.add("active");
    });
  });
};
