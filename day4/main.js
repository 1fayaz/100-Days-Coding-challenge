// Day 4
// Question 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// using  +, -, *, / signs to calculate the numbers easily.
//Question 11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["ALI", "Fayaz", "Zonain"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Question 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names1 = ["ALI", "Fayaz", "Zonain"];
for (var _i = 0, names1_1 = names1; _i < names1_1.length; _i++) {
    var name_1 = names1_1[_i];
    console.log("Hello ".concat(name_1, ",Are you free today?"));
}
