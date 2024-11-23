// ENUMS


// Enums are the way of deafining the constant values of options or categories.

// Enums allow us to create a new data type using predefined,related values.


enum Days {
   Sunday,
   Monday,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
   Saturday
}
 
const today: Days = Days.Wednesday;
 
console.log(`Today is ${Days[today]}`);
 