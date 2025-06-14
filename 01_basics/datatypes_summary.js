//Primitive data types
// Number
let num1 = 10; // number
let num2 = 20; // number
let sum = num1 + num2; // addition
console.log("Sum:", sum); // Output: Sum: 30
// String
let str1 = "Hello"; // string
let str2 = "World"; // string
let concatenatedString = str1 + " " + str2; // concatenation
console.log("Concatenated String:", concatenatedString); // Output: Concatenated String: Hello World
// Boolean
let bool1 = true; // boolean
let bool2 = false; // boolean
let logicalAnd = bool1 && bool2; // logical AND
console.log("Logical AND:", logicalAnd); // Output: Logical AND: false
// Undefined
let undefinedVar; // undefined
console.log("Undefined Variable:", undefinedVar); // Output: Undefined Variable: undefined
// Null
let nullVar = null; // null
console.log("Null Variable:", nullVar); // Output: Null Variable: null
// Symbol
let symbol1 = Symbol("description"); // symbol
console.log("Symbol:", symbol1); // Output: Symbol: Symbol(description)
// BigInt
let bigIntVar = BigInt(12345678901234567890); // BigInt
console.log("BigInt Variable:", bigIntVar); // Output: BigInt Variable: 12345678901234567890n


//Non-primitive data types
// Object
let obj = {
    name: "John",
    age: 30,
    isStudent: false
}; // object
console.log("Object:", obj); // Output: Object: { name: 'John', age: 30, isStudent: false }
// Array
let arr = [1, 2, 3, 4, 5]; // array
console.log("Array:", arr); // Output: Array: [ 1, 2, 3, 4, 5 ]
// Function
function greet(name) {
    console.log(`Hello, World! ${name}`); // function
}
greet("raj"); // Output: Hello, World!
