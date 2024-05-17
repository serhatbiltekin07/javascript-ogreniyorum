//! spread--> Dağıtmak

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log("arr1 ? arr2 : ", arr1 === arr2); // false
console.log("arr1 == arr2 : ", arr1 == arr2); //false

const arr3 = [3, 4, 5];
const arr4 = [...new Set([...arr1, ...arr3])]; //[1, 2, 3, 4, 5] bunu yapmazsak şöyle çıktı verir --> [1, 2, 3,3, 4, 5] o yüzden yaptık. buna removed duplicated items
console.log("arr4", arr4);

const arr5 = [...new Set([...(arr1.length === 3 ? arr1 : []), ...arr3, 6, 7])];
console.log("arr5 :", arr5); //[1, 2, 3, 4, 5, 6, 7]

const obj1 = { name: "Oyku", surname: "Tanyeli" };
const obj2 = { ...obj1 };
console.log("obj2 :", obj2);
console.log("obj1 === obj2", obj1 === obj2); // false çünkü referansları aynı değildir
console.log("obj1 == obj2", obj1 === obj2); // false

const obj3 = { surname: "Tanyelioğlu", age: 23 };
const obj4 = { ...obj3, ...obj1, ...{ city: "Istanbul" } };
console.log("obj4 :", obj4); //{surname: 'Tanyeli', age: 23, name: 'Oyku', city: 'Istanbul'}

const obj5 = { ...(obj1.name === "Oyku" ? obj1 : {}), age: 24 };
console.log("obj5 : ", obj5);
