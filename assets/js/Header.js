const newTab = (link) => {
  const linkTag = document.querySelector(".blank");
  linkTag.setAttribute("href", link);
};

const viewMobild = () => {
  const frame = document.querySelector("iframe");
  const button = document.querySelector(".btn-mobile");
  button.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "모바일 보기":
        frame.style.width = 360 + "px";
        e.target.textContent = "웹 보기";
        break;
      case "타블렛 보기":
        frame.style.width = 720 + "px";
        e.target.textContent = "모바일 보기";
        break;
      case "웹 보기":
        frame.removeAttribute("style");
        e.target.textContent = "타블렛 보기";
        break;
    }
  });
};

export const Header = () => {
  const gnb = document.querySelector("#gnb");
  const links = gnb.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      newTab(link);
    });
  });

  viewMobild();
};
