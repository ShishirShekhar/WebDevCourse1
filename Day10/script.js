let shopping = [
    "Milk",     // 0 index
    "Eggs",     // 1 index
    "Bread",    // 2 index
    "Butter"    // 3 index
];

console.log("Shopping List:", shopping);

console.log("First Item:", shopping[0]);
console.log("Second Item:", shopping[1]);

shopping[1] = "soya";

console.log("Updated Shopping List:", shopping);

console.log("Number of Items in Shopping List:", shopping.length);

shopping.push("Cheese");
console.log("After Adding Cheese:", shopping);

let lastElement = shopping.pop();
console.log("After Removing Last Item:", shopping);
console.log("Removed Item:", lastElement);

shopping.unshift("Juice");
console.log("After Adding Juice at Beginning:", shopping);

let firstElement = shopping.shift();
console.log("After Removing First Item:", shopping);
console.log("Removed Item:", firstElement);

let indexOfBread = shopping.indexOf("Bread");
console.log("Index of Bread:", indexOfBread);

let indexOfFox = shopping.indexOf("Fox");
console.log("Index of Fox (not found):", indexOfFox);

shopping.push("Milk");
console.log("After Adding Another Milk:", shopping);

console.log("First Index of Milk:", shopping.indexOf("Milk"));
console.log("Last Index of Milk:", shopping.lastIndexOf("Milk"));

let subArray = shopping.slice(1, 4);
console.log("Sub-array from index 1 to 3:", subArray);

shopping.splice(2, 2, "Whole Grain Bread");
console.log("After Replacing Item at Index 2:", shopping);


// add 2 arrays
let fruits = ["Apple", "Banana", "Orange"];
let vegetables = ["Carrot", "Broccoli", "Spinach"];

let groceries = shopping.concat(fruits, vegetables);
console.log("Combined Groceries List:", groceries);

// join array elements into a string
let groceryString = groceries.join("-");
console.log("Grocery List as String:", groceryString);

// split string back into array
let groceryArray = groceryString.split("-");
console.log("String Split Back into Array:", groceryArray);

// sort
groceries.sort();
console.log("Sorted Groceries List:", groceries);

// reverse
groceries.reverse();
console.log("Reversed Groceries List:", groceries);

let newShoppping = shopping;
newShoppping.push("Apples");

console.log("Original Shopping List:", shopping);
console.log("New Shopping List:", newShoppping);

// To avoid this, we can create a copy of the array
let anotherShopping = shopping.slice();
anotherShopping.push("Bananas");

console.log("Original Shopping List after copying:", shopping);
console.log("Another Shopping List after adding Bananas:", anotherShopping);

let yetAnotherShopping = [...shopping];
yetAnotherShopping.push("Grapes");

console.log("Original Shopping List after spread operator:", shopping);
console.log("Yet Another Shopping List (Spread Operator):", yetAnotherShopping);

// multi-dimensional arrays
let scales = [1, 2, 3];
console.log("Scales Array:", scales);

let allList = [
    ["tomato", "potato", "onion"],
    ["apple", "banana", "grapes"],
]

console.log("All List (2D Array):", allList);

let allShopping = [
    fruits,
    vegetables
];

console.log("All Shopping (2D Array):", allShopping);

console.log("First Fruit:", allShopping[0][0]);
console.log("Second Vegetable:", allShopping[1][1]);

allShopping[0][1] = "Mango";
console.log("Updated All Shopping (2D Array):", allShopping);

