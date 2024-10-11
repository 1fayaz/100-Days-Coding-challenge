// Day 5
// Question 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var myCar = ["Haval H6 ", "Haval Jolion", "BMW", "Kia CarnivalS"];
myCar.forEach(function (myCar) {
    console.log("I will like to own a ".concat(myCar));
});
// Question 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Ali", "Fayaz", "Qurban Ali"];
guestList.forEach(function (guests) {
    console.log("AOA ".concat(guestList, " Would you will do Dinner with me?"));
});
// Question 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite, full-question.
var changingGuestList = ["Ali", "Fayaz", "Qurban Ali"];
var rejectedGuest = ("Qurban Ali");
console.log("".concat(rejectedGuest, ", can't come for the Dinner"));
changingGuestList.pop();
changingGuestList.forEach(function (changingGuestList) {
    console.log("AOA ".concat(guestList, " Would you will do Dinner with me?"));
});
