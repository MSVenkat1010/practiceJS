# Chapter 2 - $\color{#f0ad4e}{ Inprogress}$

# JavaScript Essentials

## Variable Declaration

In JavaScript, you can declare variables using `let`, `var`, or `const`.

```
javascript
let nr1 = 12;
var nr2 = 8;

let nr1 = 12;
var nr2 = 8;
```

`let` and `var` are both used for variables that might have a new value assigned to them somewhere in the program. The difference between `let` and `var` is complex and is related to scope. This will be discussed in depth in Chapter 12: Intermediate JavaScript. <br>

`const` is used for variables that only get a value assigned once, for example, the value of π (pi), which will not change. If you try reassigning a value declared with `const`, you will get an error:
<br>

<div style="color:white; background:black; width:50%; padding:1%">
<span >
Uncaught TypeError: Assignment to constant variable.
</span></div>

# Primitive Data Types

## String

A string is used to store a text value. It is a sequence of characters. There are different ways to declare a string:

- Double quotes
- Single quotes
- Backticks: special template strings in which you can use variables directly

```
let singleString = 'Hi there!';
let doubleString = "How are you?";

let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message);
```

<div style="color:white; background:black; width:50%; padding:1%">
<span >
Let's learn JavaScript
</span></div>

## Escape Characters

```
let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);


let str3 = "New \nline.";
let str4 = "I'm containing a backslash: \\!";
console.log(str3);
console.log(str4);
```

Output 1:<br/>
<div style="color:white; background:black; width:50%; padding:1%">
<span >
Hello, what's your name? Is it "Mike"?<br>
Hello, what's your name? Is it "Mike"?
</span></div>
<br/>
Output 2:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
New <br>
line. <br>
I'm containing a backslash: \!<br>
</span></div>

## Naming variables

### When it comes to naming variables, there are some conventions in place:

- Variables start with a lowercase letter, and they should be descriptive. If something holds an age, do not call it x, but age. This way, when you read your script later, you can easily understand what you did by just reading your code.
- Variables cannot contain spaces, but they can use underscores. If you use a space, JavaScript doesn't recognize it as a single variable.

# Number:

<p> Developers of JS decided to go for one data type to put all number types that is `number`<br/>
To be more precise, they decided to go for a <u style="background:#425254">64-bit floating-point number</u>.<br/> This means that it can store rather large numbers and both signed and unsigned numbers, numbers with decimals, and more.<br/><br/>
The number data type can also be used to represent decimals, exponentials, octal, hexadecimal, and binary numbers
</p>
<code>
let intNr = 1;<br/>
let decNr = 1.5;<br/>
let expNr = 1.4e15;<br/>
let octNr = 0o10; //octal version would be 8<br/>
let hexNr = 0x3E8;//hexadecimal version would be 1000<br/> let binNr = 0b101;//binary version would be 5</code>
<br/>

> [!TIP]<br/>
>
> - The limits of the number data type are between (2^53)-1 and -((2^53)-1).

# BigInt

<p>A BigInt data type can be recognized by the postfix n:</p><br/>
<code>let bigNr = 90071992547409920n;</code>
<br/>
<br/>

> [!TIP]<br/>
>
> - you can only operate on BigInt with other BigInts.

# Boolean

The Boolean data type can hold two values: true and false.

# Symbol

Symbol can be used when it is important that variables are not equal, even though their value and type are the same (in this case, they would both be of the symbol type). This is added as part of ES6

<code>let str1 = "JavaScript is fun!";<br/>
let str2 = "JavaScript is fun!";<br/>
console.log("These two strings are the same:", str1 === str2);<br/>
let sym1 = Symbol("JavaScript is fun!");<br/>
let sym2 = Symbol("JavaScript is fun!");<br/>
console.log("These two Symbols are the same:", sym1 === sym2);<br/></code>

<div style="color:white; background:black; width:50%; padding:1%">
<span >
These two strings are the same: true <br/>
These two Symbols are the same: false
</span></div>

# Undefined

There is special data type for a variable that has not been assigned a value. And this data type is undefined

# Null

`null` is a special value for saying that a variable is empty or has an unknown value

# To know the type of a varialble

<code>let str = "Hello";<br/>
let nr = 7;<br/>
let bigNr = 12345678901234n;<br/>
let bool = true;<br/>
let sym = Symbol("unique");<br/>
let undef = undefined;<br/>
let unknown = null;<br/><br/>
console.log("str", typeof str);<br/>
console.log("nr", typeof nr);<br/>
console.log("bigNr", typeof bigNr);<br/>
console.log("bool", typeof bool);<br/>
console.log("sym", typeof sym);<br/>
console.log("undef", typeof undef);<br/>
console.log("unknown", typeof unknown);<br/></code>

<div style="color:white; background:black; width:50%; padding:1%">
<span >
str string <br/>
nr number <br/>
bigNr bigint <br/>
bool boolean <br/>
sym symbol <br/>
undef undefined <br/>
unknown object <br/>
</span></div>

<br/>

> [!WARNING]
>
> - In the output you can see that typeof `null` returns `object`, while in fact, `null` truly is a primitive and not an `object`. This is a bug that has been there since forever and now cannot be removed due to backward compatibility problems

<h1><span style="background-color: grey">`Next topic is "Operators" at page 32`</span></h1>