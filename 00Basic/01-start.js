const staminaIcon = "🦾";
const attackIcon = "🔪";
const shieldIcon = "📫";

// UI
const nickname = document.querySelector(".name");
const stamina = document.querySelector(".stamina");
const attack = document.querySelector(".attack");
const shield = document.querySelector(".shield");
const levelup = document.querySelector(".levelup");

stamina.dataset.icon = staminaIcon;
attack.dataset.icon = attackIcon;
shield.dataset.icon = shieldIcon;

const show = () => {
  document.body.insertAdjacentHTML("afterbegin", `<span class="show">Level Up</span>`);
  setTimeout(() => {
    document.body.firstChild.remove();
  }, 600);
};

levelup.addEventListener("click", show);
