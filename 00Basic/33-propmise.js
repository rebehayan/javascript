/* -------------------------------------------------------------------------- */
/*                                   Promise                                  */
/* -------------------------------------------------------------------------- */
const first = () => {
  setTimeout(() => {
    console.log("첫번째");
  }, 1000);
};
const second = () => {
  console.log("두번째");
};

first();
second();
