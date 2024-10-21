// Loops: while and for
// We often need to repeat actions.

// For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.

// Loops are a way to repeat the same code multiple times.

// The “while” loop
// The while loop has the following syntax:

// while (condition) {
  // code
  // so-called "loop body"
// }
// While the condition is truthy, the code from the loop body is executed.

// For instance, the loop below outputs i while i < 3:

let i1 = 0;
while (i1 < 3) { // shows 0, then 1, then 2
  alert( i1 );
  i1++;
}
// A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

// If i++ was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

// Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.

// For instance, a shorter way to write while (i != 0) is while (i):

let ii = 3;
while (ii) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( ii );
  ii--;
}
// Curly braces are not required for a single-line body
// If the loop body has a single statement, we can omit the curly braces {…}:

let i = 3;
while (i) alert(i--);

// -------------------------------------------------------------------------------


// The “do…while” loop
// The condition check can be moved below the loop body using the do..while syntax:

// do {
  // loop body
// } while (condition);
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

// For example:

let i2 = 0;
do {
  alert( i2 );
  i2++;
} while (i2 < 3);
// This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

// ----------------------------------------------------------------------------------

// The “for” loop
// The for loop is more complex, but it’s also the most commonly used loop.

// It looks like this:

// for (begin; condition; step) {
  // ... loop body ...
// }
// Let’s learn the meaning of these parts by example. The loop below runs alert(i) for i from 0 up to (but not including) 3:

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}
// Let’s examine the for statement part-by-part:

// part		
// begin	let i = 0	Executes once upon entering the loop.
// condition	i < 3	Checked before every loop iteration. If false, the loop stops.
// body	alert(i)	Runs again and again while the condition is truthy.
// step	i++	Executes after the body on each iteration.
// The general loop algorithm works like this:

// Run begin
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → ...
// That is, begin executes once, and then it iterates: after each condition test, body and step are executed.

// If you are new to loops, it could help to go back to the example and reproduce how it runs step-by-step on a piece of paper.

// Here’s exactly what happens in our case:

// for (let i = 0; i < 3; i++) alert(i)

// run begin
let i3 = 0
// if condition → run body and run step
if (i3 < 3) { alert(i3); i++ }
// if condition → run body and run step
if (i3 < 3) { alert(i3); i++ }
// if condition → run body and run step
if (i3 < 3) { alert(i3); i++ }
// ...finish, because now i == 3

// ------------------------------------------------------------------------------------

Breaking the loop
Normally, a loop exits when its condition becomes falsy.

But we can force the exit at any time using the special break directive.

For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered:

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
// The break directive is activated at the line (*) if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, alert.

// The combination “infinite loop + break as needed” is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.

// --------------------------------------------------------------------------------

Labels for break/continue
Sometimes we need to break out from multiple nested loops at once.

For example, in the code below we loop over i and j, prompting for the coordinates (i, j) from (0,0) to (2,2):

for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

alert('Done!');
We need a way to stop the process if the user cancels the input.

The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!

A label is an identifier with a colon before a loop:

labelName: for (...) {
  ...
}
The break <labelName> statement in the loop below breaks out to the label:

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');
// In the code above, break outer looks upwards for the label named outer and breaks out of that loop.

// So the control goes straight from (*) to alert('Done!').

// We can also move the label onto a separate line:

outer:
for (let i = 0; i < 3; i++) { 

 }
// The continue directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.