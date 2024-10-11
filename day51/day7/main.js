// DAY 7
// Question 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestList = ["Ali", "Fayaz", "Qurban Ali"];
console.log("I am inviting ".concat(guestList.length, " to the Dinner"));
// Question 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var myCars = ["Supra MK4", "AMG MAYBEACH", "BMW X5", "Haval H6", "Tank 500"];
console.log("This is a popular Car :", myCars);
// Question 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var carStore = {
    carName: "Supra MK4",
    carPrice: 120000,
    carColor: "Black",
    carModel: 2000,
    carType: "Sports Car",
    engineType: "Twin Turbo"
};
console.log("Toyota ".concat(carStore.carName, " was released in early ").concat(carStore.carModel, ". It is a ").concat(carStore.carType, " with ").concat(carStore.carColor, "colour and it have ").concat(carStore.engineType, "V12. It costs you only around $").concat(carStore.carPrice, "."));
