"use strict";

// Topic: Short Circuiting

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 12,
      close: 22,
    },
    sat: {
      open: 12,
      close: 22,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/* 
three properties of logical operator
1> use any data type
2> return any data type
3> do short circuiting/ short-circuit evaluation

Note: Javascript if find first truthy value, it returns value doesnot look other values
*/

console.log("----------------- OR Operator -----------------");
console.log(3 || "Jonas"); // Here 3 is truthy value and return 3
console.log("" || "Jonas");
//Output: Jonas
console.log(true || 0);
// Output: true
console.log(undefined || null);
// Output: null
console.log(undefined || 0 || "" || "Hello" || 23 || null);
//Output: Hello, In OR operation chain, Hello is first truthy value so it returns Hello

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log("----------------- AND Operator -----------------");

/*
In And operator, all operands must be true to produce true result.


*/

console.log(0 && "Jonas"); // Here, 0 is falsy value and Jonas is truthy value
// Output: 0

console.log(7 && "Jonas"); // Here 7 and Jonas both are truthy value and And Operator returns its last value in case of all truth operand.)
// Output: Jonas

console.log("Hello" && 23 && null && "jonas"); //Here, in null condition is false and stop the operation and give null as a result
// Output: null

//Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
