const parent = document.querySelector(".parent");
const children = document.querySelector(".children");

parent.addEventListener("click", () => {
  console.log("parent");
});
children.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("children");
});
