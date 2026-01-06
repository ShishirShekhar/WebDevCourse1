// let age = prompt("Enter your age:");

// if (age >= 18) {
//     console.log("You are eligible for admission.");
// }

// Primitive Data Types in JavaScript
let name = "Shishir"; // String data type
let age = 18; // Number data type
let country; // Undefined data type
let isEligible = false;   // Boolean data type
let city = null; // Null data type
let rollNumber = BigInt(12345678901234567890); // BigInt data type
let admissionNumber = 12345678901234567890n; // BigInt data type
let id = Symbol("id"); // Symbol data type
let random = Symbol("id"); // Symbol data type

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);
console.log("Is Eligible:", isEligible);
console.log("City:", city);
console.log("Roll Number:", rollNumber);
console.log("Admission Number:", admissionNumber);
console.log("ID:", id);
console.log("Random:", random);


// Non-primitive Data Types in JavaScript
let student1 = {
    name: "Shishir",
    age: 18,
    isEligible: true
}

let student2 = {
    name: "Alice",
    age: 20,
    isEligible: false
}

let students = [student1, student2, "Shishir", 18, true];

console.log("Student Object:", student1);
console.log("Student Name:", student2);

console.log("Student1 Name:", student1.name);

console.log("Students Array:", students);


// Type converstion in JavaScript
let myAge = "18";
console.log("My Age:", myAge + 1, typeof myAge);

myAge = Number(myAge);
console.log("My Age:", myAge + 1, typeof myAge);

let isAdult = true;
console.log("Is Adult:", isAdult, typeof isAdult);

isAdult = String(isAdult);
console.log("Is Adult:", isAdult, typeof isAdult);


let fullName = "Shishir Shekhar";
fullName = fullName + 1;
console.log("Full Name:", fullName, typeof fullName);

// Truely and Falsy values in JavaScript
let value1 = 0;
let value2 = "0";
let value3 = "1";
let value4 = "";

console.log(value1 == value2);
console.log(value1 === value2);
console.log(value1 == true);
console.log(value2 == true);
console.log(value3 == true);
console.log(value4 == true);