// Assignment 2.4: Variables

// Declare variables
let num = 42;
let text = "Hello, World!";
let arr = [1, 2, 3];
let obj = { name: "Alex", age: 24 };

// Output variable values to the console
console.log("Number variable:", num);
console.log("String variable:", text);
console.log("Array variable:", arr);
console.log("Object variable:", obj);

let life = 100;

life = life - 50;

// Performed mathematical operations on 'let life' variables

console.log(life);

// Creating a global variable named 'globalVar' using 'let'
let globalVar = 10;

// 'globalVar' is a global variable declared with 'let' and stores the value 10

// Creating a block variable named 'blockVar' using 'let'
{
    let blockVar = 5;

    // 'blockVar' is a block-scoped variable declared with 'let' and stores the value 5
    console.log("Inside block: " + blockVar);
}

// 'blockVar' is not accessible outside the block
// Attempting to access 'blockVar' here would result in an error

// Creating a string variable named 'myString' and assigning a value to it
let myString = "Hello, World!";

// 'myString' is a string variable that stores the text "Hello, World!"
console.log("String variable value: " + myString);

// first use of const variable

const rocks = 333;

console.log(rocks);



// Create an object variable using const and assign values
const person = {
    firstName: "Alex",
    lastName: "Ox",
    age: 24
};

// You can access the values of the object and log them to the console
console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);
console.log("Age:", person.age);

// Assignment 2.4: Variables completed on 09/10/2023