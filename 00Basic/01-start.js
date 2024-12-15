/* -------------------------------------------------------------------------- */
/*                                    변수정의                                  */
/* -------------------------------------------------------------------------- */
const staminaIcon = "🦾";
const attackIcon = "🔪";
const shieldIcon = "📫";

/* -------------------------------------------------------------------------- */
/*                                    UI 정의                                   */
/* -------------------------------------------------------------------------- */
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
  const lvup = document.querySelector(".show");
  lvup.addEventListener("animationend", (e) => {
    e.target.remove();
  });
};

/* -------------------------------------------------------------------------- */
/*                                    이벤트실행                                */
/* -------------------------------------------------------------------------- */
levelup.addEventListener("click", show);
