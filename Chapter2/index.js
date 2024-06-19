//JavaScript Essentials

firstname1 = "Maaike";
x1 = 2;

// above code will work in normal js but this is not recommended while doing actual coding we need to declare them with speacial keywords
// like with let, var, or const
let nr1 = 12;
var nr2 = 8;

/** let and var are both used for variables that might have a new value assigned
 *  to them somewhere in the program. The difference between let and var is complex. It is related to scope.
 * Will discuss in depeth in Chapter 12: Intermediate JavaScript
*/
const PI = 3.14159;
/** 
 * const is used for variables that only get a value assigned once— 
 * for example, the value of pi, which will not change. 
 * If you try reassigning a value declared with const, you will get an error:
 * This will result in the following output:
 * Uncaught TypeError: Assignment to constant variable.
 * 
 */

//Heading Primitive data types
// Topic: String
/** 
A string is used to store a text value. It is a sequence of characters. There are different ways to declare a string:
• Double quotes
• Single quotes
• Backticks: special template strings in which you can use variables directly
 */
let singleString = 'Hi there!';
let doubleString = "How are you?";

let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message)
// Let's learn JavaScript


// Topic: Escape characters
let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);
/*
Hello, what's your name? Is it "Mike"?
Hello, what's your name? Is it "Mike"?
*/
let str3 = "New \nline.";
let str4 = "I'm containing a backslash: \\!";
console.log(str3);
console.log(str4);
/*
New
line.
I'm containing a backslash: \!
*/