# Chapter 2 - $\color{#1FB42A}{DONE}$

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

# Operators

## Addition

```
let nr1 = 12;
let nr2 = 14;
let result1 = nr1 + nr2;

let str1 = "Hello ";
let str2 = "addition";
let result2 = str1 + str2;
```

<br>
The output for the result1 and result2 :
<br>
<br>

<div style="color:white; background:black; width:50%; padding:1%">
<span >
26 <br>
Hello addition
</span>
</div>

## Subraction

```
let nr1 = 20;
let nr2 = 4;
let str1 = "Hi";
let nr3 = 3;
let result1 = nr1 - nr2;
let result2 = str1 - nr3;
console.log(result1, result2);
```

<br>
OutPut:<br>
<div style="color:white; background:black; width:50%; padding:1%">
<span >
16 NaN
</span>
</div>

## Multiplication

```
let nr1 = 15;
let nr2 = 10;
let str1 = "Hi";
let nr3 = 3;
let result1 = nr1 * nr2;
let result2 = str1 * nr3;
console.log(result1, result2);
```

<br>
OutPut:<br>
<div style="color:white; background:black; width:50%; padding:1%">
<span >
150 NaN
</span>
</div>

## Division

```
let nr1 = 30;
let nr2 = 5;
let result1 = nr1 / nr2;
console.log(result1);
```

<br>
OutPut:<br>
<div style="color:white; background:black; width:50%; padding:1%">
<span >
6
</span>
</div>

## Exponentiation

```
let nr1 = 2;
let nr2 = 3;
let result1 = nr1 ** nr2;
console.log(result1);
```

<br>
OutPut:<br>
<div style="color:white; background:black; width:50%; padding:1%">
<span >
8
</span>
</div>

## Modulus

```
let nr1 = 10;
let nr2 = 3;
let result1 = nr1 % nr2;
console.log(`${nr1} % ${nr2} = ${result1}`);
let nr3 = 8;
let nr4 = 2;
let result2 = nr3 % nr4;
console.log(`${nr3} % ${nr4} = ${result2}`);
let nr5 = 15;
let nr6 = 4;
let result3 = nr5 % nr6;
console.log(`${nr5} % ${nr6} = ${result3}`);
```

<br>
OutPut:<br>
<div style="color:white; background:black; width:50%; padding:1%">
<span >
10 % 3 = 1<br> 8%2= 0<br> 15 % 4 = 3<br>
</span>
</div>

## Unary Operators: increment and decrement

```
let nr1 = 4;
nr1++;
console.log(nr1);
let nr2 = 4;
nr2--;
console.log(nr2);
```

<br>
OutPut:<br>
<div style="color:white; background:black; width:50%; padding:1%">
<span >
5 <br>
3
</span>
</div>

## PreFix and Postfix Operators

### Postfix:

The postfix gets executed after sending the variable through, and then after that, the operation gets executed.

```
let nr = 2;
console.log(nr++);
console.log(nr);
```

OutPut:<br>

<div style="color:white; background:black; width:50%; padding:1%">
<span >
2 <br>
3
</span>
</div>

### Prefix:

The prefix gets executed before sending the variable through, and often this is the one you will need

```
let nr = 2;
console.log(++nr);
```

OutPut:<br>

<div style="color:white; background:black; width:50%; padding:1%">
<span >
3
</span>
</div>

### Exercise:

```
let nr1 = 4;
let nr2 = 5;
let nr3 = 2;
console.log(nr1++ + ++nr2 * nr3++);

```

OutPut:<br>

<div style="color:white; background:black; width:50%; padding:1%">
<span >
16
</span>
</div>

## Combining the Operators

The operations between the parentheses have the highest precedence. After that, the order of the operations takes place based on the type of operation (highest precedence first) and if they are of equal precedence, they take place from left to right

Here is a single table with all the provided data, formatted in Markdown:

| Symbol        | Operation                         | Example                   |
| ------------- | --------------------------------- | ------------------------- |
| `(...)`       | Grouping                          | `(x + y)`                 |
| `**`          | Exponentiation                    | `x ** y`                  |
| `--`, `++`    | Prefix increment/decrement        | `--x`, `++y`              |
| `*`, `/`, `%` | Multiplication, Division, Modulus | `x * y`, `x / y`, `x % y` |
| `+`, `-`      | Addition, Subtraction             | `x + y`, `x - y`          |

## Practice exercise 2.3:

Write some code to calculate the hypotenuse of a triangle using the Pythagorean theorem when given the values of the other two sides. The theorem specifies that the relation between the sides of a right-angled triangle is a^2 + b^2 = c^2.
You can use prompt() to get the value for a and b. Write code to get the value from the user for a and b. Then square the values of both a and b before adding them together and finding the square root. Print your answer to the console.

```
let a = prompt("Please insert value for 'a' ")
let b = prompt("Please insert value for 'b' ")
c = ((a ** 2) + (b ** 2)) ** 1/2
console.log(c)
```

a=1 b=1
<br>
<br>
OutPut:<br>

<div style="color:white; background:black; width:50%; padding:1%">
<span >
1.4142135623730951
</span>
</div>

## Assignment Operators

```
let x = 2;
x += 2;
console.log(x)
x -= 2;
console.log(x)
x *= 6;
console.log(x)
x /= 3;
console.log(x)
x **= 2;
console.log(x)
x %= 3;
console.log(x)
```

OutPut:<br>
<div style="color:white; background:black; width:50%; padding:1%">
<span >
4<br>
2<br>
12<br>
3<br>
16<br>
1<br>
</span>
</div>

## Comparision Operators
```
let x = 5;
let y = "5";
console.log(x == y); // loose equality
console.log(x === y); // strict equality
console.log(x != y);
console.log(x !== y);
y = 6;
console.log(y > x);
console.log(x > y);
console.log(y > y);
console.log(y >= y);
console.log(y < x);
console.log(x < y);
console.log(y < y);
console.log(y <= y);

```
OutPut:<br>
<div style="color:white; background:black; width:50%; padding:1%">
<span >
true<br>
false<br>
false<br>
true<br>
true<br>
false<br>
false<br>
true<br>
false<br>
true<br>
false<br>
true<br>
</span>
</div>

## Logical Operators
```
let x = 1;
let y = 2;
let z = 3;
console.log(x < y && y < z);
console.log(x > y && y < z);
console.log(x > y || y < z);
console.log(x > y || y > z);
x = false;
console.log(!x);
let x = 1;
let y = 2;
console.log(!(x < y));
```
OutPut:<br>
<div style="color:white; background:black; width:50%; padding:1%">
<span >
true<br>
false<br>
true<br>
false<br>
true<br>
false
</span>
</div>

# Chapter project - $\color{#1FB42A}{DONE}$
Miles-to-kilometers converter <br>
BMI calculator <br>
refer Chapter 2 index.js
