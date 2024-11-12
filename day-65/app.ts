// Function

// Type annotations in TypeScript help define what kind of data functions can use for their 
//inputs and outputs. They make it easier for developers and the TypeScript compiler to know 
//what types of values functions should take and return. You can add type annotations by using 
//colons (:) within the list of parameters and after the parameter list to show the return type.

// Function to calculate the area of a rectangle
function calculateRectangleArea(long: number, width: number): number {
   return long * width;
 }
 
 // Calling the function with valid arguments
const long = 5;
const width = 3;
const area = calculateRectangleArea(long, width);
console.log(`The area of the rectangle is: ${area}`);

// ----------------------------------------------------

// Function Rest Parameter

// In TypeScript and JavaScript, a rest parameter lets a function accept any number
//  of arguments as an array. You can pass any amount of arguments to the function, and
// it will collect them into an array that you can use inside the function. You define 
// rest parameters using the spread operator (...) followed by the parameter name in the
// function's list of parameters.

// Function with a rest parameter and type annotations
function addAll(...nums: number[]): number {
   let result = 0;
   for (let i = 0; i < nums.length; i++) {
     result += nums[i];
   }
   return result;
 }
 
 // Calling the function with various numeric arguments
 console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Output: 170.5

 
//  In this code, the `addAll` function can take several numbers as inputs at once. It uses a rest
//  parameter called `...nums`, which collects these numbers and stores them in an array named `nums`.
//  The type annotation `number[]` shows that the items in the `nums` array are all numbers.

// The function includes a `for` loop that goes through the `nums` array to add up all the numbers provided.

// Pro tip: In JavaScript, using the unary plus operator (`+`) with the boolean value `true` changes it to the numeric value `1`.

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Arrow Function

// syntax: "cosnt header=()=>{}"

// An arrow function in TypeScript is a simple way to create functions using a shorter syntax than traditional function expressions.
//  People often call them "fat arrow" functions because of the => symbol. Arrow functions were introduced in ECMAScript 6 (ES6) and have 
//  become a popular way to write functions in JavaScript and TypeScript.


const addWithArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(10, 20)); // Output: 30

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Anonymous Function

// An anonymous function in TypeScript and JavaScript is a function without a name. You create it directly as an expression instead of giving it a name.
//  People often use anonymous functions to pass them as arguments to other functions or to create quick, temporary functions. They are particularly helpful 
//  when you want a small function that won't clutter the global scope with a name.

const add = function (num1: number, num2: number): number {
   return num1 + num2;
 };
 console.log(add(10, 20)); // Output: 30

 


