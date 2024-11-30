// Interface 
var ali = {
    name: "ali",
    age: 50
};
var Fayaz = {
    name: "fayaz",
    age: 23,
    greet: function (message) {
        console.log("".concat(this.name, " says:").concat(message));
    }
};
Fayaz.greet("I am not a Robot");
var userSettings = {
    theme: false,
    font: "jfeoj",
    sidebar: true,
    external: true
};
var Labrador = /** @class */ (function () {
    function Labrador() {
        this.type = "dog";
    }
    Labrador.prototype.bark = function () {
        console.log("Woof!");
    };
    return Labrador;
}());
var Labrador1 = /** @class */ (function () {
    function Labrador1() {
    }
    Labrador1.prototype.bark = function () {
        console.log("Woof!");
    };
    return Labrador1;
}());
var labrador = {
    type: "monkey",
    bark: function () {
        console.log("Woof!");
    },
};
// 4. Extensibility:
// Interface: Use when you need to define the shape of objects and also when you need to implement them in classes. They are more suitable for defining contracts that classes must adhere to.
// Type Alias: Use when you want to create custom types that can be combined using union types, intersection types, or when defining complex types.
// 5. Readability and Style:
// Interface: Preferred when defining shapes of objects, especially for public APIs, as they convey the intent clearly. They also work well with code editors' IntelliSense for auto-completion and documentation generation.
// Type Alias: Useful for defining unions, intersections, and more complex types. They are often used to give descriptive names to specific combinations of types.
