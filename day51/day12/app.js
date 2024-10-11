//Day 12
// Question 34
var favPizza = ["Fajita", "Creme", "Cheeze"];
for (var i = 0; i < favPizza.length; i++) {
    console.log(favPizza[i]);
}
//Question 35
var animalsPet = ["dog", "cat", "parrot"];
animalsPet.forEach(function (animal) {
    console.log("I have ".concat(animalsPet, " as a pet ."));
});
//Question 36
function make_shirt(size, message) {
    console.log("Size of T-Shirt is".concat(size, " and the message \"").concat(message, "\" printed on it"));
}
make_shirt("Small", "Herry Pottar");
