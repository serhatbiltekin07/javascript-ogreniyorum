//?  -----------PROMISE-----------------

// let check = true;
// const promise1 = new Promise((resolve, reject) => {
//   if (check) {
//     resolve("Promise Başarılı");
//   } else {
//     reject("Promise Başarısız");
//   }
// });
// console.log(promise1);

// Asenkron yapıları senkrona çevirmek için yapıyoruz
// Callback lerin alternatifi
//ES6
// let check = true;
// function createPromise() {
//   return new Promise((resolve, reject) => {
//     if (check) {
//       resolve("Promise de  başarılı");
//     } else {
//       reject("Promise olmadı");
//     }
//   });
// }

// createPromise()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Her zaman çalışır");
//   });

//? PROMİSE + XMLHTTPREQUEST

function readStudents(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    try {
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      });
    } catch (error) {
      console.log("JSON da problem var");
      reject(error);
    }
    xhr.open("GET", url);
    xhr.send();
  });
}
// readStudents("students.json")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
function getUsers(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
      try {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      } catch (error) {
        reject(error);
      }
    });
    xhr.open("GET", url);
    xhr.send();
  });
}

getUsers("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => {
    //Mail atma kodlarını yazarsınız
  });
