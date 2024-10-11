// day 6 
// Question 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner, full-question.
var guestList = ["Ali", "Fayaz", "Qurban Ali"];
console.log("We got a bigger dinner table 😊");
guestList.unshift("Farhan Ahmed");
guestList.splice(2, 0, "Zunaian");
guestList.push("Sajid Ali");
guestList.forEach(function (guestList) {
    console.log("Hello ".concat(guestList, " will you attend the dinner with me?"));
});
// Question 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests, full-question.
console.log("Aloss, the table wont come on time for dinner and I have only space for two guests.😟");
while (guestList.length > 2) {
    var remeoveGuests = guestList.pop();
    console.log("sorry, ".concat(remeoveGuests, " You are not invited for dinner."));
}
guestList.forEach(function (guestList) {
    console.log("".concat(guestList, " You are invited for the dinner."));
});
// Question 18
// Seeing the World: Think of at least five places in the world you’d like to visit. - Store the locations in a array. Make sure the array is not in alphabetical order, full-question.
var bucketListPlaces = ["Makkah", "Medina", "Karbala", "Dubai", "Germany", "Pakistan"];
console.log("Original Order:", bucketListPlaces);
console.log("Alphabetical Order:", bucketListPlaces.sort());
console.log("Reverse Alphabetical Order:", bucketListPlaces.sort().reverse());
console.log("Original order:", bucketListPlaces);
bucketListPlaces.reverse();
console.log("Reversed order:", bucketListPlaces);
bucketListPlaces.reverse();
console.log("Original order:", bucketListPlaces);
bucketListPlaces.sort();
console.log("Alphabetical order:", bucketListPlaces);
bucketListPlaces.reverse();
console.log("Reverse alphabetical order:", bucketListPlaces);
