// DAY 7

// Question 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

const guestList = ["Ali", "Fayaz","Qurban Ali"]


console.log(`I am inviting ${guestList.length} to the Dinner`);


// Question 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const myCars =["Supra MK4","AMG MAYBEACH","BMW X5","Haval H6","Tank 500"];

console.log("This is a popular Car :",myCars);



// Question 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


const carStore:{carName:string,carPrice:number,carColor:string,carModel:number,carType:string,engineType:string}={
   carName:"Supra MK4",
   carPrice: 120000,
   carColor:"Black",
   carModel:2000,
   carType:"Sports Car",
   engineType:"Twin Turbo"
}
console.log(`Toyota ${carStore.carName} was released in early ${carStore.carModel}. It is a ${carStore.carType} with ${carStore.carColor}colour and it have ${carStore.engineType}V12. It costs you only around $${carStore.carPrice}.`);


