// Type annotations with objects in TypeScript allow you to specify the types of properties that an object should have.

// Define an object type with type annotations
let person2: {
   name: string;
   age: number;
   jobTitle?: string;
   address: {
     street: string;
     city: string;
   };
 } = {
   name: "Ali",
   age: 30,
   jobTitle: "Engineer",
   address: {
     street: "4th main",
     city: "Hyderabad",
   },
 };