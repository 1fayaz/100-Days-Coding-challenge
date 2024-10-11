//day 11
//Question 31
var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
}
//Question 32
var current_Name = ["User22", "User33", "User44"];
var new_User = ["User1", "User2", "User3", "User4", "User5"];
new_User.forEach(function (newUser) {
    if (current_Name.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(new_User, " will need to enter a new UserName."));
    }
    else {
        console.log("".concat(new_User, " is avaliable."));
    }
});
//Question 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var others = "th";
    if (number === 1) {
        others = "st";
    }
    else if (number === 2) {
        others = "nd";
    }
    else if (number === 3) {
        others = "rd";
    }
    console.log("".concat(number).concat(others));
});
