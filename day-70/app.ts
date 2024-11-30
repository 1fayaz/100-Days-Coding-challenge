// Interface 

// An interface in TypeScript defines a contract or blueprint for the structure of an object, specifying the properties, methods, and their types. It establishes essential rules that an object must follow to be valid.

// Shape Definition: Interfaces clarify an object's structure, including property names, types, and whether they are optional or required.

// Contract: Objects or classes that adopt an interface commit to implementing its defined structure and methods.

// Type Checking: TypeScript ensures that objects meet the interface's requirements, catching errors early.

// Code Clarity: Interfaces enhance clarity by documenting expected properties, aiding in understanding and effective use of objects.

interface person{
   name: string,
   age: number
}

let ali:person = {
   name:"ali",
   age: 50
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Interface Method and parameters

// In TypeScript, an interface can define not only the structure of an object but also the signature of functions or methods that objects adhering to the interface should have. This allows you to specify not just the properties but also the methods and their parameters and return types that should be present in objects implementing the interface.

interface person2{
   name:string,
   age: Number,
   greet(message?:string):void
}

const Fayaz:person2 = {
   name:"fayaz",
   age:23,
   greet(message:string) {
      console.log(`${this.name} says:${message}`);
      
   }
}

Fayaz.greet("I am not a Robot");


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Reopen the interface and use Cases

// interface reopening in TypeScript is a valuable technique for gradually building and extending interfaces as your project grows, promoting modularity and code organization. It enables you to create versatile, flexible, and consistent object structures.

interface settings{
   readonly theme:boolean,
   font: string
}

interface settings{
   sidebar:boolean
}

interface settings {
   external: boolean
}

let userSettings :settings ={
   theme: false,
   font:"jfeoj",
   sidebar: true,
   external:true
}


// ------------------------------------------------------------------------------------------------------------------------------------------------
//  Interface vs. Type Aliases

// they both gives same features as defining custom data structuredClone,and types. But they have some differences for usage and their capabilities.

// 1. Declaration Syntax:

// Interface: Declared using the {interface} keyword.

interface Person3 {
   name: string;
   age: number;
}

// Type Alias: Declared using the type keyword.

type PersonAlias= {
  name: string;
  age: number;
};interface AnimalExInterface {
  type: string;
}

interface Dog extends AnimalExInterface {
  bark(): void;
}

class Labrador implements Dog {
  type: string = "dog";
  bark() {
    console.log("Woof!");
  }
}

// 2. Extending and Implementing:

// Interface: Can be extended by other interfaces using the extends keyword and implemented by classes using the implements keyword.


interface Animal {
  type: string;
}

interface Dog extends Animal {
  bark(): void;
}

class Labrador1 implements Dog {
  type: "dog";
  bark() {
    console.log("Woof!");
  }
}

// Type Alias: Cannot be extended or implemented directly. However, you can achieve similar results using intersection types.

type AnimalExType = {
  type: string;
};

type Monkey = AnimalExType & {
  bark(): void;
};

const labrador: Monkey = {
  type: "monkey",
  bark() {
    console.log("Woof!");
  },
};

// 4. Extensibility:

// Interface: Use when you need to define the shape of objects and also when you need to implement them in classes. They are more suitable for defining contracts that classes must adhere to.
// Type Alias: Use when you want to create custom types that can be combined using union types, intersection types, or when defining complex types.

// 5. Readability and Style:

// Interface: Preferred when defining shapes of objects, especially for public APIs, as they convey the intent clearly. They also work well with code editors' IntelliSense for auto-completion and documentation generation.

// Type Alias: Useful for defining unions, intersections, and more complex types. They are often used to give descriptive names to specific combinations of types.


