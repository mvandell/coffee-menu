const coffeeMenu = require("./coffee_data");
const drinks = coffeeMenu.map(element => element.name); //all drinks
console.log(drinks);

const cheapDrinks = coffeeMenu.filter(drink => drink.price <= 5); //drinks for 5 or less
console.log(cheapDrinks);

const evenDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0); //even priced drinks
console.log(evenDrinks);

const allDrinks = coffeeMenu.reduce((total, currentDrink) => total+currentDrink.price,0);//total of all drinks
console.log("The total of all the drinks is $" + allDrinks);

const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal === true); //seasonal drinks
console.log(seasonalDrinks);

//seasonal drinks "with imported beans"