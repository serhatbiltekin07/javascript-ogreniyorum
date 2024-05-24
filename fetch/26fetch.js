function getData(url) {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      return response;
    });
}
const urlPost = "https://jsonplaceholder.typicode.com/posts";
getData(urlPost).then((response) => {
  console.log("Then:", response);
});
async function getPosts() {
  const responseAwait = await getData(urlPost);
  console.log("async:", responseAwait);
}
getPosts();

const hpUrl = "https://api.potterdb.com/v1/characters";
async function getHarryPotter(params) {
  const hp = await getData(hpUrl);
  console.log(hp);
}
getHarryPotter();
