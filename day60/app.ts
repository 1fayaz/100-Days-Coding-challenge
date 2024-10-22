// Functions
// Quite often we need to perform a similar action in many places of the script.

// For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.

// Function Declaration
// To create a function we can use a function declaration.

// It looks like this:

function showMessage() {
  alert( 'Hello everyone!' );
}
// The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses (comma-separated, empty in the example above, we’ll see examples later) and finally the code of the function, also named “the function body”, between curly braces.

function name1(parameter1, parameter2, ... parameterN) {
 // body
}
// Our new function can be called by its name: showMessage().

// For instance:

function showMessage1() {
  alert( 'Hello everyone!' );
}

showMessage1();
showMessage1();
// The call showMessage() executes the code of the function. Here we will see the message two times.

// This example clearly demonstrates one of the main purposes of functions: to avoid code duplication.

// If we ever need to change the message or the way it is shown, it’s enough to modify the code in one place: the function which outputs it.

// -----------------------------------------------------------------------------------------------------

// Local variables
// A variable declared inside a function is only visible inside that function.

// For example:

function showMessage12() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function

// ----------------------------------------------------------------------------------------

// Outer variables
// A function can access an outer variable as well, for example:

let userName1 = 'John';

function showMessage2() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John
// The function has full access to the outer variable. It can modify it as well.

// For instance:

let userName2 = 'John';

function showMessage3() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName2;
  alert(message);
}

alert( userName2 ); // John before the function call

showMessage();

alert( userName2 ); // Bob, the value was modified by the function
// The outer variable is only used if there’s no local one.

// If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:

let userName = 'John';

function showMessage4() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable

// -------------------------------------------------------------------------

// Parameters
// We can pass arbitrary data to functions using parameters.

// In the example below, the function has two parameters: from and text.

function showMessage44(from, text) { // parameters: from, text
  alert(from + ': ' + text);
}

showMessage44('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage44('Ann', "What's up?"); // Ann: What's up? (**)

// When the function is called in lines (*) and (**), the given values are copied to local variables from and text. Then the function uses them.

// Here’s one more example: we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:

function showMessage33(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage33(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann

// When a value is passed as a function parameter, it’s also called an argument.

// In other words, to put these terms straight:

// A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
// An argument is the value that is passed to the function when it is called (it’s a call time term).
// We declare functions listing their parameters, then call them passing arguments.

// In the example above, one might say: "the function showMessage is declared with two parameters, then called with two arguments: from and "Hello"".

// -------------------------------------------------------------------------------------

// Naming a function
// Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

// It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

// For instance, functions that start with "show" usually show something.

// Function starting with…

// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.
// Examples of such names:

// showMessage(..)     // shows a message
// getAge(..)          // returns the age (gets it somehow)
// calcSum(..)         // calculates a sum and returns the result
// createForm(..)      // creates a form (and usually returns it)
// checkPermission(..) // checks a permission, returns true/false
// With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.

// --------------------------------------------------------------------------------------------------------------

// Functions == Comments
// Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it’s definitely a good thing.

// A separate function is not only easier to test and debug – its very existence is a great comment!

// For instance, compare the two functions showPrimes(n) below. Each one outputs prime numbers up to n.

// The first variant uses a label:

function showPrime(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}
// The second variant uses an additional function isPrime(n) to test for primality:

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
// The second variant is easier to understand, isn’t it? Instead of the code piece we see a name of the action (isPrime). Sometimes people refer to such code as self-describing.

// So, functions can be created even if we don’t intend to reuse them. They structure the code and make it readable.

// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------

// Function expressions
// In JavaScript, a function is not a “magical language structure”, but a special kind of value.

// The syntax that we used before is called a Function Declaration:

function sayHii() {
  alert( "Hello" );
}
// There is another syntax for creating a function that is called a Function Expression.

// It allows us to create a new function in the middle of any expression.

// For example:

let sayHI = function() {
  alert( "Hello" );
};
// Here we can see a variable sayHi getting a value, the new function, created as function() { alert("Hello"); }.

// As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.

// Please note, there’s no name after the function keyword. Omitting a name is allowed for Function Expressions.

// Here we immediately assign it to the variable, so the meaning of these code samples is the same: "create a function and put it into the variable sayHi".

// In more advanced situations, that we’ll come across later, a function may be created and immediately called or scheduled for a later execution, not stored anywhere, thus remaining anonymous.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Function is a value
// Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.

// We can even print out that value using alert:

function sayHi11() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code

// Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.

// In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.

// Surely, a function is a special value, in the sense that we can call it like sayHi().

// But it’s still a value. So we can work with it like with other kinds of values.

// We can copy a function to another variable:

function sayHi2() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

// func(); // Hello     // (3) run the copy (it works)!
// sayHi(); // Hello    //     this still works too (why wouldn't it)
// Here’s what happens above in detail:

// The Function Declaration (1) creates the function and puts it into the variable named sayHi.
// Line (2) copies it into the variable func. Please note again: there are no parentheses after sayHi. If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.
// Now the function can be called as both sayHi() and func().
// We could also have used a Function Expression to declare sayHi, in the first line:

let sayHi1 = function() { // (1) create
  alert( "Hello" );
};

let funct = sayHi;
// ...
// Everything would work the same.

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Callback functions
// Let’s look at more examples of passing functions as values and using function expressions.

// We’ll write a function ask(question, yes, no) with three parameters:

// question
// Text of the question
// yes
// Function to run if the answer is “Yes”
// no
// Function to run if the answer is “No”
// The function should ask the question and, depending on the user’s answer, call yes() or no():

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
// In practice, such functions are quite useful. The major difference between a real-life ask and the example above is that real-life functions use more complex ways to interact with the user than a simple confirm. In the browser, such functions usually draw a nice-looking question window. But that’s another story.

// The arguments showOk and showCancel of ask are called callback functions or just callbacks.

// The idea is that we pass a function and expect it to be “called back” later if necessary. In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer.

// We can use Function Expressions to write an equivalent, shorter function:

function asks(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

asks(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
// Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.

// Such code appears in our scripts very naturally, it’s in the spirit of JavaScript.

// -----------------------------------------------------------------------------------

// Function Expression vs Function Declaration
// Let’s formulate the key differences between Function Declarations and Expressions.

// First, the syntax: how to differentiate between them in the code.

// Function Declaration: a function, declared as a separate statement, in the main code flow:

// Function Declaration
function sum2(a, b) {
  return a + b;
}
// Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:

// Function Expression
let sum3 = function(a, b) {
  return a + b;
};
// The more subtle difference is when a function is created by the JavaScript engine.

// A Function Expression is created when the execution reaches it and is usable only from that moment.

// Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

// Function Declarations are different.

// A Function Declaration can be called earlier than it is defined.

// For example, a global Function Declaration is visible in the whole script, no matter where it is.

// That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

// And after all Function Declarations are processed, the code is executed. So it has access to these functions.

// For example, this works:

// sayHi("John"); // Hello, John

function sayHii1(name) {
  alert( `Hello, ${name}` );
}
// The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it.

// …If it were a Function Expression, then it wouldn’t work:

sayHii1("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
// Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.

// Another special feature of Function Declarations is their block scope.

// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

// For instance, let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime. And then we plan to use it some time later.

// If we use Function Declaration, it won’t work as intended:

let age1 = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome3() {
    alert("Greetings!");
  }

}

// ...use it later
welcome3(); // Error: welcome is not defined

// That’s because a Function Declaration is only visible inside the code block in which it resides.

// Here’s another example:

let age = 16; // take 16 as an example

if (age < 18) {
  welcome4();               // \   (runs)
                           //  |
  function welcome4() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome5() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome5(); // Error: welcome is not defined

// What can we do to make welcome visible outside of if?

// The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

// This code works as intended:

let age2 = prompt("What is your age?", 18);

let welcome1;

if (age2 < 18) {

  welcome1 = function() {
    alert("Hello!");
  };

} else {

  welcome1 = function() {
    alert("Greetings!");
  };

}

welcome1(); // ok now

// Or we could simplify it even further using a question mark operator ?:

let age3 = prompt("What is your age?", 18);

let welcome2 = (age3 < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now