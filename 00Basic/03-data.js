const nameValue = 123;
const levelValue = "LEVEL UP";
const staminaValue = 12555;
const attackValue = 88766;
const shieldValue = 28745;

const staminaIcon = "🦾";
const attackIcon = "🔪";
const shieldIcon = "📫";

const image = "./images/character.webp";

// UI
const type = document.querySelector(".type");
const nickname = document.querySelector(".name");
const stamina = document.querySelector(".stamina");
const attack = document.querySelector(".attack");
const shield = document.querySelector(".shield");
const character = document.querySelector(".character img");
const levelup = document.querySelector(".levelup");

nickname.innerText = nameValue;
stamina.innerText = staminaValue;
attack.innerText = attackValue;
shield.innerText = shieldValue;
levelup.innerText = levelValue;

stamina.dataset.icon = staminaIcon;
attack.dataset.icon = attackIcon;
shield.dataset.icon = shieldIcon;

character.setAttribute("src", image);

const myType = () => {
  const type = typeof nameValue;
  alert(type);
  console.log(type);
};

const show = () => {
  document.body.insertAdjacentHTML("afterbegin", `<span class="show">${typeof nameValue}</span>`);
  console.log(typeof nameValue);
  setTimeout(() => {
    document.body.firstChild.remove();
  }, 600);
};

// 타입확인
levelup.addEventListener("click", show);
