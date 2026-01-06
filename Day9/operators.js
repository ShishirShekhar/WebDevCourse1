let num1 = 2;
let num2 = 2;

console.log("Num1:", num1);
console.log("Num2:", num2);

// Arithmetic Operators
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num2 - num1);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num2 / num1);
console.log("Modulus:", num2 % num1);
console.log("Exponentiation:", num1 ** num2);

// Assignment Operators
let a = 5;
console.log("Initial a:", a);

a = a + 3;
console.log("After a = a + 3:", a);

a += 3;
console.log("After a += 3:", a);

// Comparison Operators
console.log("a == 11:", a == "11"); // true
console.log("a === 11:", a === "11"); // false
console.log("a === 11:", a === 11); // true
console.log("a != 11:", a != "11"); // false
console.log("a !== 11:", a !== "11"); // true
console.log("a > 10:", a > 10); // true
console.log("a < 10:", a < 10); // false
console.log("a >= 11:", a >= 11); // true
console.log("a <= 10:", a <= 10); // false

// Logical Operators
let isAdult = true;
let hasID = false;

console.log("isAdult:", isAdult); 
console.log("hasID:", hasID);

if (isAdult) {
    console.log("Person is an adult.");
}

if (!isAdult) {
    console.log("Person is not an adult.");
}

if (hasID) {
    console.log("Person has ID.");
}

if (!hasID) {
    console.log("Person does not have ID.");
}

if (isAdult || hasID) {
    console.log("Person might be allowed.");
}

if (isAdult && hasID) {
    console.log("Person is allowed.");
}

// Increment and Decrement Operators
let x = 0;
console.log("Initial x:", x);

console.log("After x++:", x++);
console.log("Value of x now:", x);

console.log("After ++x:", ++x);
console.log("Value of x now:", x);

console.log("After x--:", x--);
console.log("Value of x now:", x);

console.log("After --x:", --x);
console.log("Value of x now:", x);


console.log(typeof num1);

let age = 17;
let result = age >= 18 ? "Adult" : "Not Adult";
console.log(result);