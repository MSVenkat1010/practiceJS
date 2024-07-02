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


## Accessing elements
```
cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[3]);
console.log(cars[-1]);
```
Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
Toyota<br>
Renault<br>
undefined<br>
undefined<br>
</span>
</div>
We didn't assign a value to the negative or non-existent index, so when we ask for it, the value is undefined

## Overwriting elements
```
cars[0] = "Tesla";
console.log(cars[0]);
console.log(cars);
cars[3] = "Kia";

cars[-1] = "Fiat";
console.log(cars[3]);
console.log(cars[-1]);
```
Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
Tesla<br>
['Tesla', 'Renault', 'Volkswagen']<br>
Kia<br>
Fiat<br>
</span>
</div>

Ha! They suddenly exist. How is that you may wonder? We will discuss this in the next section. For now, just remember that this is not the right way to add values to the array.<br>
We will discuss the right way when we explain arrays in the Array methods section.

## Built-in length property
```
colors = ["black", "orange", "pink"]
booleans = [true, false, false, true];
emptyArray = [];
console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);
console.log("accesing last element : ",colors[colors.length - 1];)
```
Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
Length of colors: 3 <br>
Length of booleans: 4 <br>
Length of empty array: 0 <br>
accesing last element : pink<br>
</span>
</div>
<br>
So, this might seem pretty straightforward. Remember the non-existent index position we called in the previous section? Let's see what happens in this example:

```
numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);
console.log(numbers);
```
Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
6<br>
[ 12, 24, 36, <2 empty items>, 48 ]
</span>
</div>
<br>
Because we added an element, 48, at index 5, it also created 2 elements at index positions 3 and 4 containing empty values. For now, let's have a look at array methods and find out the right way to add to an array.

## Practice exercise 3.1
1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and "Apples."
2. Check your list length in the console.
3. Update "Bread" to "Bananas."
4. Output your entire list to the console.
```
let a = ["Milk","Bread","Apples"]
console.log("a=>",a)
a[1]="Bananas"
console.log("a=>",a)
```
Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
a=> (3) ['Milk', 'Bread', 'Apple']<br>
a=> (3) ['Milk', 'Bananas', 'Apple']
</span>
</div>
<br>


## Array methods
We just  saw we could add elements using new indices. This is not the proper way to do it as it is easy to make mistakes and accidentally overwrite a certain value or skip a certain index. The right way is to do this with a special method. Similarly, we can also delete elements and sort the elements in the array.

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
