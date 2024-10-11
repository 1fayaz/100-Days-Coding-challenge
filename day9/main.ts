// Day 9

// Question 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of green, yellow, or red. full-question.


// Version that passes:
let alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points!");
}

// Version that fails (no output):
alien_color = "red";
if (alien_color == "green") {
  
}

//Question 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain. full-question.


alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien");
} else {
  console.log("You just earned 10 points");
}


alien_color = "yellow";
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points!");
}

// Question 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain. - If the alien is green, print a message that the player earned 5 points, full-question


alien_color = "green";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}





              