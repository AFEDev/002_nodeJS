console.clear();

const fs = require("fs/promises");
const { parse } = require("path");

(async () => {
  const drinksContent = await fs.readFile("./data/drinks.txt", "utf-8");

  const drinksList = drinksContent.split("\r\n");

  for (let i = 0; i < drinksList.length; i++) {
    let options = drinksList[i].split(" ");
    console.log("test", options);
  }

  console.log(drinksContent);
  console.log(drinksList);
  // console.log(drinksOptions);

  let i = 0;

  for (const drink of drinksList) {
    const drinkDetails = drink.split(" ");
    const [name, price, count] = drinkDetails;
    //let apyvarta = parseFloat(price) * parseInt(count);
    let apyvarta = +price * +count;
    console.log(
      `Pasirinkimas ${++i}:, ${drinkDetails[0]} kurio kaina yra ${
        drinkDetails[1]
      } Eu kurio apyvarta yra ${apyvarta.toFixed(2)}`
    );
    const a = 3.14159264;
    console.log(a.toFixed(2));
    const b = "584";
    const c = parseInt(b);
    console.log(typeof c);
  }
})();
