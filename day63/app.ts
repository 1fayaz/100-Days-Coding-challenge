// DAY 63


let myNumberExOne: number = 42;
let myStringExOne: string = "Hello, TypeScript";

console.log("My Number Is:", myNumberExOne);
console.log("My String Is:", myStringExOne);

// ------------------------------------------------------------------

let myNumberExTwo: number;
let myStringExTwo: string;

myNumberExTwo = 42;
myStringExTwo = "Hello, TypeScript";

console.log("My Number Is:", myNumberExTwo);
console.log("My String Is:", myStringExTwo);

// -------------------------------------------------------------------

// dynamic type determination

let greeting = "Hello, world!";
console.log(greeting);

// -------------------------------------------------------------------

// Any Type

// 
// Now, regarding the any type, it's a special type in TypeScript that can represent any type of value. When a variable is assigned the any type, it essentially tells the TypeScript compiler to disable type checking for that variable, allowing it to hold values of any type.

let myVariable: any = 42;
myVariable = "Hello, TypeScript";
console.log(myVariable)

// In this case, myVariable can be assigned a number or a string or any other type without any type checking.

// Loss of Type Safety:
// Reduced Code Reliability:
// Maintenance Challenges:
// Interferes with Tooling: