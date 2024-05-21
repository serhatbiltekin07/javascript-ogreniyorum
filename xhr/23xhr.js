// temel de bir class
function getData(url) {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    console.log("readystate", request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      console.log("response geldi");
      console.log("response", request.responseText);
    } else if (request.readyState === 4) {
      console.log("OLMADI BAŞARAMADIK");
    }
  }); //request eventlerini yakalayabilmek için de addEventListener() diye metotu var

  request.open("GET", url);
  request.send();
}

const urlPost = "https://jsonplaceholder.typicode.com/posts";
getData(urlPost);
console.log("burdayım"); // asenkron gerçekleşti
