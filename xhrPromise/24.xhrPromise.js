function getData(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      console.log("readystate", request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        //başarılı
        resolve(JSON.parse(request.responseText));
      } else if (request.readyState === 4) {
        //başarısız - error
        reject(request.responseText);
      }
    });
    request.open("Get", url);
    request.send();
  });
}

const urlPost = "https://jsonplaceholder.typicode.com/posts";
getData(urlPost)
  .then(() => {
    console.log("resolve çağrıldı");
    console.log(response);
  })
  .catch((err) => {
    console.log("reject çağrıldı");
    console.log(err);
  })
  .finally(() => {
    console.log("ben herzaman buraya düşerim");
  });
