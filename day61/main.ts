// JavaScript specials
// This chapter briefly recaps the features of JavaScript that we’ve learned by now, paying special attention to subtle moments.

// Code structure
// Statements are delimited with a semicolon:

alert('Hello'); alert('World');

// --------------------------------------------------

alert('Hello')
alert('World')

// --------------------------------------------------

alert("There will be an error after this message")

[1, 2].forEach(alert)

// --------------------------------------------------

function f() {
  // no semicolon needed after function declaration
}

for(;;) {
  // no semicolon needed after the loop
}

// -----------------------------------------------------

// Strict mode
// To fully enable all features of modern JavaScript, we should start scripts with "use strict".

'use strict';

// ...

// ---------------------------------------------------------

// Variables
// Can be declared using:

// let
// const (constant, can’t be changed)
// var (old-style, will see later)
// A variable name can include:

// Letters and digits, but the first character may not be a digit.
// Characters $ and _ are normal, on par with letters.
// Non-Latin alphabets and hieroglyphs are also allowed, but commonly not used.
// Variables are dynamically typed. They can store any value:

let x = 5;
// x = "John";

// There are 8 data types:

// number for both floating-point and integer numbers,
// bigint for integer numbers of arbitrary length,
// string for strings,
// boolean for logical values: true/false,
// null – a type with a single value null, meaning “empty” or “does not exist”,
// undefined – a type with a single value undefined, meaning “not assigned”,
// object and symbol – for complex data structures and unique identifiers, we haven’t learnt them yet.
// The typeof operator returns the type for a value, with two exceptions:

typeof null == "object" // error in the language
typeof function(){} == "function" // functions are treated specially

// ---------------------------------------------------------

// Interaction
// We’re using a browser as a working environment, so basic UI functions will be:

// prompt(question, [default])
// Ask a question, and return either what the visitor entered or null if they clicked “cancel”.
// confirm(question)
// Ask a question and suggest to choose between Ok and Cancel. The choice is returned as true/false.
// alert(message)
// Output a message.
// All these functions are modal, they pause the code execution and prevent the visitor from interacting with the page until they answer.

// For instance:

let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true

// -----------------------------------------------------

// Operators
// JavaScript supports the following operators:

// Arithmetical
// Regular: * + - /, also % for the remainder and ** for power of a number.

// The binary plus + concatenates strings. And if any of the operands is a string, the other one is converted to string too:

alert( '1' + 2 ); // '12', string
alert( 1 + '2' ); // '12', string

// --------------------------------------------------------

// Loops
// We covered 3 types of loops:

// 1
while (conditions) {
  // ...
}

// 2
do {
  // ...
} while (conditions);

// 3
for(let i = 0; i < 10; i++) {
  // ...
}
// The variable declared in for(let...) loop is visible only inside the loop. But we can also omit let and reuse an existing variable.

// Directives break/continue allow to exit the whole loop/current iteration. Use labels to break nested loops.

// Details in: Loops: while and for.

// ------------------------------------------------------------

// The “switch” construct
// The “switch” construct can replace multiple if checks. It uses === (strict equality) for comparisons.

// For instance:

let age = prompt('Your age?', 18);

switch (age) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}

// -------------------------------------------------------------------

// Functions
// We covered three ways to create a function in JavaScript:

// Function Declaration: the function in the main code flow

function sum1(a, b) {
  let result = a + b;

  return result;
}
// Function Expression: the function in the context of an expression

let sum2 = function(a, b) {
  let result = a + b;

  return result;
};
// Arrow functions:

// expression on the right side
let sum22 = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum11 = (a, b) => {
  // ...
  return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2;

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// Arrow functions, the basics
// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

// It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ..., argN) => expression;

// This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.

// In other words, it’s the shorter version of:

let func = function(arg1, arg2, ..., argN) {
  return expression;
};
// Let’s see a concrete example:

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3


let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
// As you can see, (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, it evaluates the expression a + b and returns the result.


// Multiline arrow functions
// The arrow functions that we’ve seen so far were very simple. They took arguments from the left of =>, evaluated and returned the right-side expression with them.

// Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).

// Like this:

let sum3 = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum3(1, 2) ); // 3