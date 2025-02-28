// Day-72

// Generics

// Generics in TypeScript represent an advanced feature that facilitates the creation of reusable code by allowing the specification of a type as a parameter to another type, which may include classes, interfaces, or functions. This capability provides developers with the flexibility to avoid explicitly defining the type in every instance. Instead, generics enable the utilization of various types without the necessity of resorting to the `any` type, thereby promoting type safety and code clarity.
// The main advantages of using Generics include:

// Code Reusability: You can use the same code with different types without rewriting it.
// Enhanced Safety: Generics help detect potential errors at compile time rather than runtime.
// Dealing with Multiple Types: Generics allow you to work with a variety of types without specifying a particular type.


// Generics can be used in TypeScript to create:

// Generic Classes.
// Generic Functions.
// Generic Interfaces.
// Generic Methods.

function returnType<T>(val: T): T {
   return val;
}
  
// Usage of the generic function with different types
const numValue: number = returnType<number>(100);
const strValue: string = returnType<string>("Elzero");
const boolValue: boolean = returnType<boolean>(true);
const arrValue: number[] = returnType<number[]>([1, 2, 3, 4]);

console.log(`Number Value: ${numValue}`);
console.log(`String Value: ${strValue}`);
console.log(`Boolean Value: ${boolValue}`);
console.log(`Array Value: ${arrValue}`);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// In TypeScript, generics facilitate the management of multiple types through the use of union types or intersection types. This functionality allows for the development of code that is both flexible and versatile, accommodating a diverse range of data types. Let us examine these two approaches in detail:

// Generic Function `returnTypeEx`
function returnTypeEx<T>(val: T): T {
   return val;
 }
 
 console.log(returnTypeEx<number>(100)); // Returns: 100 (number)
 console.log(returnTypeEx<string>("Elzero")); // Returns: "Elzero" (string)
 
 // Arrow Function with Generics `returnTypeArrowSyntax`
 const returnTypeArrowSyntax = <T>(val: T): T => val;
 
 console.log(returnTypeArrowSyntax<number>(100)); // Returns: 100 (number)
 console.log(returnTypeArrowSyntax<string>("Elzero")); // Returns: "Elzero" (string)
 
 // Generic Function `testType`
 function testType<T>(val: T): string {
   return `The Value Is ${val} And Type Is ${typeof val}`;
 }
 
 console.log(testType<number>(100));
 // Returns: "The Value Is 100 And Type Is number"
 
 console.log(testType<string>("Elzero"));
 // Returns: "The Value Is Elzero And Type Is string"
 
 // Generic Function `multipleTypes`
 function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
   return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
 }
 
 console.log(multipleTypes<string, number>("Osama", 100));
 // Returns: "The First Value Is Osama And Second Value 100"
 
 console.log(multipleTypes<string, boolean>("Elzero", true));
 // Returns: "The First Value Is Elzero And Second Value true"

//  ----------------------------------------------------------------------------------------------------------------------------------

// Generics Classes
// Generics in classes allow you to create flexible and reusable class structures that can work with a variety of data types, enhancing code flexibility and type safety.

// In this example, we'll explore generics in classes using the User class as an example:


// Generic Class `User`
class User<T = string> {
   constructor(public value: T) {}
 
   // Method that takes a message of type `T` and displays it along with the `value` property
   show(msg: T): void {
     console.log(`${msg} - ${this.value}`);
   }
 }
 
 // Creating an instance of `User` with a specific type parameter (string)
 let userOne = new User<string>("Elzero");
 console.log(userOne.value); // Outputs: "Elzero"
 userOne.show("Message"); // Outputs: "Message - Elzero"
 
 // Creating an instance of `User` with a type parameter that can be a number or a string
 let userTwo = new User<number | string>(100);
 console.log(userTwo.value); // Outputs: 100
 userTwo.show("Message"); // Outputs: "Message - 100"

//  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 
// **Type Safety: Generics and Interfaces**

// Generics in classes and interfaces facilitate the development of reusable and type-safe data structures capable of accommodating diverse data types. This enhancement significantly improves code flexibility and maintainability. The following example will demonstrate how the Collection class can be implemented with various item types while maintaining type safety. This exploration will focus on the application of generics in both classes and interfaces to construct a versatile Collection class.


// Interface definitions for Book and Game
interface Book {
  itemType: string;
  title: string;
  isbn: number;
}

interface Game {
  itemType: string;
  title: string;
  style: string;
  price: number;
}

// Generic Class `Collection`
class Collection<T> {
  public data: T[] = [];

  // Method to add an item of type `T` to the collection
  add(item: T): void {
    this.data.push(item);
  }
}

// Creating an instance of `Collection` with type parameter `Book`
let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);

// Creating an instance of `Collection` with type parameter `Game`
let itemTwo = new Collection<Game>();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
 