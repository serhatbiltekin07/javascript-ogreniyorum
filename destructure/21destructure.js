const arr1 = [1, 2, 3, 4, 5];
// const a = arr1[0];
// const b = arr1[1];
// const c = arr1[2];
// const d = arr1[3];
// const e = arr1[4];

const [, cino, , , oyku] = arr1; //destructure yaptık
console.log(cino, oyku); //2 5

function useState(initialValue) {
  return [initialValue, () => {}];
}
const [sumValue, setSumValue] = useState(10);
console.log(sumValue, setSumValue); //10 () => {} çıktısı verir

const obj1 = { name: "Oyku", surname: "Tanyeli" };
const { name: isim, surname: soyisim } = obj1;
console.log(isim, soyisim); //Oyku Tanyeli

function Button({ title, children, onClick, ...otherProps }) {
  console.log(title, children, onClick);
  console.log(otherProps.color, otherProps.onHover); //red () => {}
}
Button({
  title: "Click Me",
  onClick: () => {},
  children: "Hello",
  color: "red",
  onHover: () => {},
}); //Click Me Hello () => {}

//asekron-senkron, xhr, promise,async,fetch
