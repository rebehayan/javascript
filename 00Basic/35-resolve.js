/* -------------------------------------------------------------------------- */
/*                               CallBack Error                               */
/* -------------------------------------------------------------------------- */
const sameWord = (word, callback, errorCallBack) => {
  setTimeout(() => {
    if (word !== "리베하얀") {
      errorCallBack(`${word}는 같은단어가 아닙니다.`);
      return;
    }
    console.log(word);
    callback(word);
  }, 1000);
};

sameWord(
  "리베하얀",
  (response) => {
    console.log(response);
  },
  (error) => {
    console.error(error);
  }
);

/* -------------------------------------------------------------------------- */
/*                                Promise Error                               */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                              Async Await Error                             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               Try Catch Error                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 API Promise                                */
/* -------------------------------------------------------------------------- */
// const getUser = (id) => {
//   return new Promise((resolve, reject) => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((response) => response.json())
//       .then((json) => {
//         if (!json.id) {
//           reject("아이디가 없습니다.");
//         }
//         resolve(json);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

// let loading = true;

// getUser("a")
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     loading = false;
//   });

/* -------------------------------------------------------------------------- */
/*                               API Async Await                              */
/* -------------------------------------------------------------------------- */
// const getUser = (id) => {
//   return new Promise((resolve, reject) => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((response) => response.json())
//       .then((json) => {
//         if (!json.id) {
//           reject("아이디가 없습니다.");
//         }
//         resolve(json);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

// let loading = true;
// const userInfo = async () => {
//   try {
//     const result = await getUser("dd");
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log("로딩이 완료되었습니다.");
//     loading = false;
//   }
// };
// userInfo();
