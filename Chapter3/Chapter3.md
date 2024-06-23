<!-- JavaScript Multiple Values -->

# Chapter 3 JavaScript Multiple Values - $\color{#f0ad4e}{ Inprogress}$

## Creating arrays

Arrays are lists of values. These values can be of all data types and one array can even contain different data types. It is often very useful to store multiple values inside one variable; for example, a list of students, groceries, or test scores

```
arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];
```

both of the above procedure will give the array but the first type is not often used in daily life <br> in programming due to it's unexpected excecutions <br>
example:

```
arr3 = new Array(10);
arr4 = [10];
console.log(arr3);
console.log(arr4);
```

<br>
OutPut:<br>
<div style="color:white; background:black; width:50%; padding:1%">
<span >
[ <10 empty items> ] <br>
[ 10 ]
</span></div><br>
one array can even contain different data types

```
let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);
```

OutPut:<br>

<div style="color:white; background:black; width:50%; padding:1%">
<span >
string <br>
number <br>
boolean <br>
</span>
</div><br>
if you define an array using const. You can change the values of a constant array, but you cannot change the array itself.<br><br>

```
const arr = ["hi there"];
arr[0] = "new value";
console.log(arr[0]);
arr = ["nope, now you are overwriting the array"];
```

OutPut:<br>

<div style="color:white; background:black; width:50%; padding:1%">
<span >
new value <br>
TypeError: Assignment to constant variable.

</span>
</div>

## `Next topic is at page 50`

## Accessing elements

## Overwriting elements

## Built-in length property

## Practice exercise 3.1

## Array methods

## Adding and replacing elements

## Deleting elements

## Finding elements

## Sorting

## Reversing

## Practice exercise 3.2

## Multidimensional arrays

## Practice exercise 3.3

## Objects in JavaScript

## Updating objects

## Practice exercise 3.4

## Working with objects and arrays

## Objects in objects

## Arrays in objects

## Objects in arrays

## Practice exercise 3.5

## Chapter projects

## Manipulating an array

## Company product catalog

## Self-check quiz
