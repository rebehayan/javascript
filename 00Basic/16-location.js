const url = window.location;
const prev = document.querySelector(".assign");
const prev2 = document.querySelector(".replace");

console.log(url);

prev.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(location.pathname);
  url.assign("16-location-next.html");
});

prev2.addEventListener("click", (event) => {
  event.preventDefault();
  url.replace("16-location-next.html");
});
