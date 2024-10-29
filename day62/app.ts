// Arrow functions, the basics
// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

// It’s called “arrow functions”, because it looks like this:

// let func = (arg1, arg2, ..., argN) => expression;
// This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.

// In other words, it’s the shorter version of:

// let func1 = function(arg1, arg2, ..., argN) {
//   return expression;
// };

// ------------------------------------------------------------------------------------

// Multiline arrow functions
// The arrow functions that we’ve seen so far were very simple. They took arguments from the left of =>, evaluated and returned the right-side expression with them.

// Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).

// Like this:

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// Code structure
// Statements are delimited with a semicolon:

alert('Hello'); alert('World');
// Usually, a line-break is also treated as a delimiter, so that would also work:

alert('Hello')
alert('World')
// That’s called “automatic semicolon insertion”. Sometimes it doesn’t work, for instance:

alert("There will be an error after this message")

// [1, 2].forEach(alert)

// Most codestyle guides agree that we should put a semicolon after each statement.

// Semicolons are not required after code blocks {...} and syntax constructs with them like loops:

function f() {
  // no semicolon needed after function declaration
}

for(;;) {
  // no semicolon needed after the loop
}

// Strict mode
// To fully enable all features of modern JavaScript, we should start scripts with "use strict".

// 'use strict';


// The directive must be at the top of a script or at the beginning of a function body.

// Without "use strict", everything still works, but some features behave in the old-fashioned, “compatible” way. We’d generally prefer the modern behavior.

// Some modern features of the language (like classes that we’ll study in the future) enable strict mode implicitly.

// More in: The modern mode, "use strict".

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

typeof null == "object" // error in the language
typeof function(){} == "function" // functions are treated specially

// ---------------------------------------------------------------------------------------

// Operators
// JavaScript supports the following operators:

// Arithmetical
// Regular: * + - /, also % for the remainder and ** for power of a number.

// The binary plus + concatenates strings. And if any of the operands is a string, the other one is converted to string too:

alert( '1' + 2 ); // '12', string
alert( 1 + '2' ); // '12', string'


// ------------------------------------------------------------------------------------------

// Loops
// We covered 3 types of loops:

// 1
while (condition) {
  ...
}

// 2
do {
  ...
} while (condition);

// 3
for(let i = 0; i < 10; i++) {
  ...
}
// The variable declared in for(let...) loop is visible only inside the loop. But we can also omit let and reuse an existing variable.

// Directives break/continue allow to exit the whole loop/current iteration. Use labels to break nested loops.

// Details in: Loops: while and for.

// Later we’ll study more types of loops to deal with objects.

// ---------------------------------------------------------------------------------------------------

// Functions
// We covered three ways to create a function in JavaScript:

// Function Declaration: the function in the main code flow

function sum(a, b) {
  let result = a + b;

  return result;
}
// Function Expression: the function in the context of an expression

let sum1 = function(a, b) {
  let result = a + b;

  return result;
};
Arrow functions:

// expression on the right side
let sum2 = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum3 = (a, b) => {
  // ...
  return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2;