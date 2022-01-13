let x = [1, 2, 3, 4, 5, 6];

console.table(x);

const a = 5;
const b = 7;
const c = 13;

//a+b
//b+c
//c+a

console.log(`Skaiciaus ${a} ir skaiciaus ${b} suma yra lygu ${a + b}`);

const a1 = [10, 8, 2, 4];

const a2 = [1, 3, 5, 7, 9];

const a3 = [147, 258, 369, 123, 456, 789];

const vidurkis = (x) => {
  let vid = 0;
  x.forEach((element) => {
    vid += element;
  });
  return console.log(
    `Skaiciu masyvas kuri sudaro ${x.length} vidurkis yra ${vid / x.length}`
  );
};

vidurkis(a1);

// const s1 = "mike Pukuotukas";
// const s2 = "Chuck Norris";
// const s3 = "Wonder WomaN";
// const s4 = "Algimantas cekuolis";

function inicialai(pavadinimas) {
  const word = pavadinimas.split(" ");
  const vardas = word[0][0].toUpperCase();
  const pavarde = word[1][0].toUpperCase();
  console.log(
    `Legendines asmenybes ${word[0]} ${word[1]} trumpinys yra ${vardas}.${pavarde}.`
  );
}

// inicialai(s1);
// inicialai(s2);
// inicialai(s3);
// inicialai(s4);

const jonas = {
  name: "Jonas",
  surename: "Jonaitis",
  age: 99,
};

const maryte = {
  name: "Maryte",
  surename: "Marytaite",
  age: 87,
};

console.table(jonas);

// [Vardas] [Pavarde] yra [amzius] amziaus.

amzius = (vardas) => {
  console.log(`${vardas.name} ${vardas.surename} yra ${vardas.age} amziaus`);
};

amzius(jonas);
amzius(maryte);

const s1 = "mike Pukuotukas";
const s2 = "Chuck Norris";
const s3 = "Wonder WomaN";
const s4 = "Algimantas cekuolis";

const inicials = (name) => {
  const word = name.split(" ");
  const inicialsArray = [];

  for (let i = 0; i < word.length; i++) {
    word[i][0].toUpperCase();
  }
  let arrayToString = "";

  inicialsArray.forEach((letter) => {
    arrayToString += letter + ".";
  });
  console.log(`Legendines asmenybes ${name} trumpinys yra ${arrayToString}`);
};

inicials(s1);

function solution(number) {
  let a = [];

  for (let i = 1; i < number; i++) {
    if (i < 0) {
      break;
    }

    i % 3 && i % 5 ? "" : a.push(i);

    // i % 5 ? "" : a.push(i);

    //  a % 3 && a % 5 ? a.pop() : "";
    console.log(a);
  }
  return a.reduce((a, b) => a + b, 0);
}

console.log(solution(16));

function isIsogram(str) {
  const a = [];
  for (let i = 0; i < str.length; i++) {
    a.push(str[i].toLowerCase());
  }
  return new Set(a).size == a.length;
}

console.log(isIsogram("Lilas"));

//.toLowerCase()

//return new Set(a).size == a.length;

// let f = "labaslabas";

// console.log(f[2]);

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(
    (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
};

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an").length); // ['banana', 'mango', 'orange']

const strin = ["j", "g", "e", "i", "z", "f", "g", "o"];

function getCount(str) {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  vowelsCount = str.filter((str) => str.includes(vowels));

  return console.log("testinam:", vowelsCount);
}

getCount(strin);
