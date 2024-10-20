// DAY 57 TASK

// Comparisons

// We know many comparison operators from maths.

// In JavaScript they are written like this:

// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
// Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.

alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)


let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

// ------------------------------------------------------

// String comparison
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// In other words, strings are compared letter-by-letter.

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

// ---------------------------------------------------

// Comparison of different types
// When comparing values of different types, JavaScript converts the values to numbers.

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0.

alert( true == 1 ); // true
alert( false == 0 ); // true


// --------------------------------------------------------------

// Strict equality
// A regular equality check == has a problem. It cannot differentiate 0 from false:

 alert( 0 == false ); // true
// The same thing happens with an empty string:

alert( '' == false ); // true
// This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

// What to do if we’d like to differentiate 0 from false?

// A strict equality operator === checks the equality without type conversion.

// -------------------------------------------------------------------

// Comparison with null and undefined

// There’s a non-intuitive behavior when null or undefined are compared to other values.

// For a strict equality check ===
// These values are different, because each of them is a different type.

 alert( null === undefined ); // false
// For a non-strict check ==
// There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

alert( null == undefined ); // true
// For maths and other comparisons < > <= >=
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.


// -----------------------------------------------------------------

// Strange result: null vs 0
// Let’s compare null with a zero:

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
// Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.

// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.





// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------


// Conditional branching: if, '?'
// Sometimes, we need to perform different actions based on different conditions.

// To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

// The “if” statement
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

// For example:

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );
// In the example above, the condition is a simple equality check (year == 2015), but it can be much more complex.

// If we want to execute more than one statement, we have to wrap our code block inside curly braces:

if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}
// We recommend wrapping your code block with curly braces {} every time you use an if statement, even if there is only one statement to execute. Doing so improves readability.

// ----------------------------------------------------------------------------------------

// Boolean conversion
// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

// Let’s recall the conversion rules from the chapter Type Conversions:

// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
// Other values become true, so they are called “truthy”.
// So, the code under this condition would never execute:

if (0) { // 0 is falsy
//   ...
 }
// …and inside this condition – it always will:

 if (1) { // 1 is truthy
//   ...
 }
// We can also pass a pre-evaluated boolean value to if, like this:

let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
//   ...
}

// --------------------------------------------------------------

// The “else” clause
// The if statement may contain an optional else block. It executes when the condition is falsy.

// For example:

let years = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (years == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

// -----------------------------------------------------------------------

// Several conditions: “else if”
// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

// For example:

let yearly = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (yearly < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

// In the code above, JavaScript first checks year < 2015. If that is falsy, it goes to the next condition year > 2015. If that is also falsy, it shows the last alert.

// There can be more else if blocks. The final else is optional.

// ------------------------------------------------------------------------------------------------

// Conditional operator ‘?’
// Sometimes, we need to assign a variable depending on a condition.

// For instance:

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

// alert(accessAllowed);
// The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

// The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

// The syntax is:

// let result = condition ? value1 : value2;


// ---------------------------------------------------------------------------------------

// Multiple ‘?’

// A sequence of question mark operators ? can return a value that depends on more than one condition.

// For instance:

let aged = prompt('age?', 18);

let message = (aged < 3) ? 'Hi, baby!' :
  (aged < 18) ? 'Hello!' :
  (aged < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
// It may be difficult at first to grasp what’s going on. But after a closer look, we can see that it’s just an ordinary sequence of tests:

// The first question mark checks whether age < 3.
// If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon “:”, checking age < 18.
// If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon “:”, checking age < 100.
// If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon “:”, returning 'What an unusual age!'.
// Here’s how this looks using if..else:

if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

// ---------------------------------------------------------------------------------------------------------------------------------

// Non-traditional use of ‘?’

// Sometimes the question mark ? is used as a replacement for if:

let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
// Depending on the condition company == 'Netscape', either the first or the second expression after the ? gets executed and shows an alert.

// We don’t assign a result to a variable here. Instead, we execute different code depending on the condition.

// It’s not recommended to use the question mark operator in this way.

// The notation is shorter than the equivalent if statement, which appeals to some programmers. But it is less readable.

// Here is the same code using if for comparison:

let companies = prompt('Which company created JavaScript?', '');

if (companies == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}
// Our eyes scan the code vertically. Code blocks which span several lines are easier to understand than a long, horizontal instruction set.

// The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code.