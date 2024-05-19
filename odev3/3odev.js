const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// Ödev 1
//1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(
  "e:",
  e,
  "pi:",
  pi,
  "gravity:",
  gravity,
  "humanBodyTemp:",
  humanBodyTemp,
  "waterBoilingTemp:",
  waterBoilingTemp
);

//2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries;
console.log("fin:", fin, "est:", est, "sw:", sw, "den:", den, "nor:", nor);

//3.Destructure the rectangle object by its properties or keys.
const { width, height, area, perimeter } = rectangle;
console.log(
  "width:",
  width,
  "height:",
  height,
  "area:",
  area,
  "perimeter:",
  perimeter
);
// Ödev2

//1.Iterate through the users array and get all the keys of the object using destructuring
for (const { name, scores, skills, age } of users) {
  console.log("name:", name, "scores:", scores, "skills:", skills, "age:", age);
  console.log("*******************************************");
}

//2.Find the persons who have less than two skills
console.log("-----------------------------------------------");
const skills1 = users.filter((users) => users.skills.length <= 2);
console.log(skills1);
console.log("-----------------------------------------------");

//ödev3
//1.Tüm ülkelerin adını,başkentini, nüfusunu ve dillerini yazdıran ülkeler nesnesine destructuring işlemi uygulayın
const country = {
  name: "Turkey",
  capital: "Ankara",
  populations: 84339067,
  language: "Turkish",
};
const { name, capital, populations, language } = country;
console.log(
  "name:",
  name,
  "capital:",
  capital,
  "populations:",
  populations,
  "language:",
  language
);

//2.Küçük bir geliştirici, öğrenci adını, becerilerini ve puanını okunması kolay olmayabilecek diziler halinde yapılandırır.Aşağıdaki dizi adını ada, beceriler dizisini becerilere, puan dizisini puanlara, JavaScript puanını jsScore'a ve React puanını React değişkenine tek bir satırda destructuring işlemi uygulayın.
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [ad, skills, jsScore, reactScore] = student;
console.log(
  "ad:",
  ad,
  "skills:",
  skills,
  "jsScore:",
  jsScore,
  "reactScore:",
  reactScore
);

//3.Diziyi bir structure nesnesine dönüştürebilen convertArrayToObject adlı bir fonksiyon yazın.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
function convertArrayToObject(array) {
  return array.map((item) => {
    const [name, skills, scores] = item;
    return [name, skills, scores];
  });
}
console.log(convertArrayToObject(students));

//4.Öğrenci nesnesini orijinal nesneyi değiştirmeden newStudent'e kopyalayın.Yeni nesnede aşağıdakini ekleyin?
//  -frontEnd beceri setlerine seviye 8 ile Bootstrap ekleyin
//  -backEnd beceri setlerine 9. seviye Express'i ekleyin
//  -dataBase beceri setlerine seviye 8 ile SQL ekleyin
//  -dataScience beceri setlerine seviye olmadan SQL ekleyin

const student1 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
const newStudent = { ...student1 };
newStudent.skills.frontEnd = [
  ...newStudent.skills.frontEnd,
  { skill: "Bootstrap", level: 8 },
];
newStudent.skills.backEnd = [
  ...newStudent.skills.backEnd,
  { skill: "Express", level: 9 },
];
newStudent.skills.dataBase = [
  ...newStudent.skills.dataBase,
  { skills: "SQL", level: 8 },
];
newStudent.skills.dataScience = [...newStudent.skills.dataScience, "SQL"];

console.log("student1:", student1);
