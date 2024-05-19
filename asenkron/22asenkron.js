function asenkron() {
  setTimeout(() => {
    console.log("asenkron");
  }, 5000);
}
function senkron() {
  console.log("senkron");
}

asenkron();
senkron();
