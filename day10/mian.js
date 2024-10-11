// Day 10
// Question 28
var age = 27;
if (age < 2) {
    console.log("YOur are a baby");
}
else if (age < 4) {
    console.log("You are a Toddler");
}
else if (age < 13) {
    console.log("You are a Kid");
}
else if (age < 20) {
    console.log("You are a Teenager");
}
else if (age < 65) {
    console.log("You are an adult");
}
else {
    console.log("You are an elder");
}
// Question 29
var favorite_fruits = ["Mango", "banana", "Dates"];
if (favorite_fruits.includes("Mango")) {
    console.log("You LOVE Mango!");
}
if (favorite_fruits.includes("Dates")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("banana")) {
    console.log("You like banana!");
}
// Question 30
var userName = ["Admin", "User22", "User33", "user44"];
userName.forEach(function (string) {
    if (string === "Admin") {
        console.log("Hello Admin, Nice to see you Again!");
    }
    else {
        console.log("Hello " + userName + ", thank you for logging in again");
    }
});
