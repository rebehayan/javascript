export const Addfile = () => {
  const file = document.querySelector(".file-type1");
  if (!file) {
    return;
  }

  file.addEventListener("change", (e) => {
    const name = e.target.files[0].name;
    const size = e.target.files[0].size / 1024;
    const day = new Date(e.target.files[0].lastModified);
    const next = e.target.nextElementSibling;

    console.log(e.target.files);

    next.innerHTML = `
        ${name}
        <span>
            ${size.toFixed(2)}kb 
        </span>
    `;
  }); //소수점 2자리까지 표시
};
