let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

console.log("Fruits Array:", fruits);

// console.log("I want to buy", fruits[0]);
// console.log("I want to buy", fruits[1]);
// console.log("I want to buy", fruits[2]);
// console.log("I want to buy", fruits[3]);
// console.log("I want to buy", fruits[4]);

// DRY - Don't Repeat Yourself
// for loop
for(let index=0; index<fruits.length; index++) {
    console.log("I want to buy", fruits[index]);
}
