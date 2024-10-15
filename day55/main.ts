// DAY 54 CHALLENGE 

// Declaration
let code: string 
// Assigning value
code = "TypeScript Coding";
console.log(code);


//To be concise, we can combine the variable declaration and assignment into a single line:
let hello: string = "Hello, World!";
// Declaration        Assignment 
console.log(hello);


// We can also declare multiple variables in one line:
let user: string = "Alice", age: number = 23, message: string = "Hello";
console.log(user,age,message);


// That might seem shorter, but we don’t recommend it. For the sake of better readability, 
// please use a single line per variable.
// The multiline variant is a bit longer, but easier to read:
let user1: string = "Saif";
let age1: number = 21;
let message1: string = "Hi"; 
console.log(user1,age1,message1);


// Some people also define multiple variables in this multiline style:
let user2: string = "Adil", 
    age2: number = 32,
    message2: string = "Hi Dear";
console.log(user2,age2,message2);


// …Or even in the “comma-first” style:
let user3: string = "Moiz"
    , age3: number = 24
    , message3: string = "Hey, how are you?";
console.log(user3,age3,message3);


// We can also change it as many times as we want:

let fruit: string = "Apple";
fruit = "Grapes";    // Value Change
console.log(fruit);


let learn: string = "I am Learning TypeScript";
let messages: string;
messages = learn;

console.log(learn);    // I am Learning TypeScript
console.log(messages); // I am Learning TypeScript


// A repeated declaration of the same variable is an error:
let happy: string = "I am Happy";
// let happy: string = "Error";   (Shows Error)


// Variable Names
let userName: string = "Yasir";
let test123: string = "Hello";
let $ : number = 1;
let  _: number = 2;
console.log($ + _);

// Examples of incorrect variable names: (Shows Error)
// let 3a: string = "Karachi";      (cannot start with a digit)
// let my-name: string = "Alice";   (hyphens '-' aren't allowed in the name)


// There is a list of reserved words, which cannot be used as variable names 
// because they are used by the language itself.
// For example: let, class, return, and function are reserved.
// let let: number = 5;       // Error
// let return: number = 5;    // Error
 
// num: number = 7;  // Error



// CONSTANT
// To declare a constant (unchanging) variable, use const instead of let:

const myBirthday: string = '18.04.1982';


// TASKS 1
 let admin: string
 let namee: string

 namee = "John";
 admin = namee;
 console.log(admin);    // Outputs: John


// TASK 2
let Earth: string = "Our Planet";
let currentUser: string = "Alice";


// TASK 3
const BIRTHDAY: string = "24.07.2000";
const personAge: number = 23;
