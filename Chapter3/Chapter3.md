<!-- JavaScript Multiple Values -->

# Chapter 3 JavaScript Multiple Values - $\color{#1FB42A}{DONE}$

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
```
favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
console.log(favoriteFruits)
```
Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
["grapefruit", "orange", "lemon","tangerine"]
</span>
</div>
<br>

if you would want to add elements at a certain index? You can use the splice() method

```
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);
```

Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
[<br>
  'circle',<br>
  'triangle',<br>
  'square',<br>
  'trapezoid',<br>
  'rectangle',<br>
  'pentagon'<br>
]
</span>
</div>
<br>

### Add another array to your array
```
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);
```

Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
  [ 1, 2, 3, 4, 5, 6 ] <br>
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
</span>
</div>
<br>


## Deleting elements
### Removing the last element is done with pop():

```
arr8.pop();
```

Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
[ 1, 2, 3, 4, 5, 6, 7, 8 ]
</span>
</div>
<br> 

### Deleting the first element can be done with shift()
```
 arr8.shift();
```
Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
[ 2, 3, 4, 5, 6, 7, 8 ]
</span>
</div>
<br> 
We specify the index from where we want to start deleting, and then the number of elements we want to delete.

```
arr8.splice(1, 3);
```
Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
[ 2, 6, 7, 8 ]
</span>
</div>
<br> 
If you do not wish to change any of the later indices, you can also use the operator delete

```
delete arr8[0];
```
Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
  [ <1 empty item>, 6, 7, 8 ]
</span>
</div>
<br> 


## Finding elements
### If you want to check whether a value is present in an array, you can use the find()
```
arr8 = [ 2, 6, 7, 8 ];
let findValue = arr8.find(function(e) { return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);
```
Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
  6 undefined
</span>
</div>
<br> 

### Often, you do not only want to find the element, but you want to know what position it is on. This can be done with the indexOf() method

```
arr8 = [ 2, 6, 7, 8 ];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);
```
Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
 1 -1
</span>
</div>
<br>

### If you want to find the next occurrence of the specified number, you can add a second argument to indexOf(), specifying from which position it should start searching:
```
arr8 = [ 2, 6, 7, 8 ];
let findIndex3 = arr8.indexOf(6, 2);
```
Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
 -1
</span>
</div>
<br>
In this case, the value of findIndex3 will be -1, because 6 cannot be found starting from index 2.

### The last occurrence can also be found. This is done with the lastIndexOf() method:

```
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
```
Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
 4
</span>
</div>
<br>

## Sorting
There is also a built-in method for sorting arrays. It sorts numbers from small to high and strings A-Z.

```
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
let ages = [18, 72, 33, 56, 40];
ages.sort();
```
Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
   [ 'Alicia', 'Bert', 'Fatiha', 'James', 'Maria' ]
   [ 18, 33, 40, 56, 72 ]
</span>
</div>
<br>

## Reversing
The elements of the array can be reversed by calling the built-in method, reverse(), on an array. It puts the last element first, and the first element last. It does not matter whether the array is sorted or not; it just reverses the order.

```
names.reverse();
```

  Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
  [ 'Maria', 'James', 'Fatiha', 'Bert', 'Alicia' ]
</span>
</div>
<br>

## Practice exercise 3.2
1. Create an empty array to use as a shopping list.
2. Add Milk, Bread, and Apples to your list.
3. Update "Bread" with Bananas and Eggs.
4. Remove the last item from the array and output it into the console.
5. Sort the list alphabetically.
6. Find and output the index value of Milk.
7. After Bananas, add Carrots and Lettuce.
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.
11. Your final list should look like this:
```
let shoppingList = [];
shoppingList.push('Milk','Bread','Apples')
console.log(shoppingList)
shoppingList.splice(1,1,'Bananas','Eggs')
console.log(shoppingList)
shoppingList.pop()
console.log(shoppingList)
shoppingList.sort()
shoppingList.indexOf('Milk')
console.log(shoppingList)
shoppingList.splice(shoppingList.indexOf('Bananas')+1 , 0 ,'Carrots','Lettuce')
let beverages = ['Juice' , 'Pop']
shoppingList = shoppingList.concat(beverages)
shoppingList = shoppingList.concat(beverages)
shoppingList.lastIndexOf('Pop')
console.log(shoppingList)

```
  Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
[<br>
  'Bananas', 'Carrots',<br>
  'Lettuce', 'Eggs',<br>
  'Milk',    'Juice',<br>
  'Pop',     'Juice',<br>
  'Pop'<br>
]
</span>
</div>
<br>

## Multidimensional arrays
```
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];
let value1 = arrOfArrays[0][1]; // 2.
let value2 = arrOfArrays[2][2]; // 9. 
arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
let middleValue = arrOfArraysOfArrays[1][1][1]; // 5.

```

  Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
[<br>
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],<br>
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],<br>
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]<br>
]<br>
</span>
</div>
<br>

## Practice exercise 3.3
1. Create an array containing three values: 1, 2, and 3.
2. Nest the original array into a new array three times.
3. Output the value 2 from one of the arrays into the console.
```
let arr = [1,2,3]
let bigArr = [arr, arr, arr]
console.log(bigArr[1][1]); //2
console.log(bigArr[0][1]); //2
console.log(bigArr[2][1]); //2
```

## Objects in JavaScript & Updating objects
```
let dog = { dogName: "JavaScript",
            weight: 2.4,
            color: "brown",
            breed: "chihuahua",
            age: 3,
            burglarBiter: true
};
let dogColor1 = dog["color"]; // "brown"
let dogColor2 = dog.color; //"brown"

dog["color"] = "blue";
dog.weight = 2.3;

console.log(dog);

variable = "breed";
console.log(dog[variable]); //chihuahua

dog[variable] = "dachshund";
console.log(dog["breed"]);// dachshund

```
  Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
{ dogName: "JavaScript",
            weight: 2.3,
            color: "blue",
            breed: "chihuahua",
            age: 3,
            burglarBiter: true
};
chihuahua
dachshund
</span>
</div>
<br>



## Practice exercise 3.4
1. Create a new myCar object for a car. Add some properties, including, but not limited to, make and model, and values for a typical car or your car. Feel free to use booleans, strings, or numbers.
2. Create a variable that can hold the string value color. This variable containing a string value color can now be used to reference the property name within myCar. Then, use the variable within the square bracket notation to assign a new value to the color property in myCar.
3. Use that same variable and assign a new property string value to it, such as forSale. Use the bracket notation once again to assign a new value to the forSale property to indicate whether the car is available for purchase.
4. Output make and model into the console.
5. Output the value of forSale into the console

```
const myCar = {
    make: "Toyota",
    model: "Camry",
    tires: 4,
    doors: 4,
    color: "blue",
    forSale: false
};
let propColor = "color";
myCar[propColor] = "red";
propColor = "forSale";
myCar[propColor] = true;
console.log(myCar.make + " " + myCar.model); // Toyota Camry
console.log(myCar.forSale); //true
```
## Objects in objects
```
let company = { companyName: "Healthy Candy",
                activity: "food manufacturing",
                address: {
                  street: "2nd street",
                  number: "123",
                  zipcode: "33116",
                  city: "Miami",
                  state: "Florida"
},
                yearOfEstablishment: 2021
              };
company.address.zipcode = "33117";
company["address"]["number"] = "100";
```

## Arrays in objects
```
company = { companyName: "Healthy Candy",
                activities: ["food manufacturing",
"improving kids' health", "manufacturing toys"],
                address: {
                  street: "2nd street",
                  number: "123",
                  zipcode: "33116",
                  city: "Miami",
                  state: "Florida"
                },
                yearOfEstablishment: 2021
              };
  let activity = company.activities[1];
```

## Objects in arrays
```
let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
}, {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
  }];
  let streetName = addresses[0].street;
```
## Objects in arrays in objects
```
  company = { companyName: "Healthy Candy",
                    activities: [ "food manufacturing",
"improving kids' health",
"manufacturing toys"],
                    address: [{
                      street: "2nd street",
                      number: "123",
                      zipcode: "33116",
                      city: "Miami",
                      state: "Florida"
                    },
                    {
                      street: "1st West avenue",
                      number: "5",
                      zipcode: "75001",
                      city: "Addison",
                      state: "Texas"
}],
                    yearOfEstablishment: 2021
                  };
let streetName = company.address[0].street;
```

## Practice exercise 3.5
1. Create an object named people that contains an empty array that is called friends.
2. Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console.

```
const people = {friends:[]};
const friend1 = {first: "Laurence", last: "Svekis", id: 1};
const friend2 = {first: "Jane", last: "Doe", id: 2};
const friend3 = {first: "John", last: "Doe", id: 3};
people.friends.push(friend1, friend2, friend3);
console.log(people);

```
  Output:
<div style="color:white; background:black; width:50%; padding:1%">
<span >
{<br>
  friends: [<br>
    { first: 'Laurence', last: 'Svekis', id: 1 },<br>
    { first: 'Jane', last: 'Doe', id: 2 },<br>
    { first: 'John', last: 'Doe', id: 3 }<br>
  ]<br>
}<br>
</span>
</div>
<br>

## Chapter projects

## Manipulating an array
Take the following array:
```
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
```
Manipulate your array using various methods, such as pop(), push(), shift(), and unshift(), and transform it into the following:<br>
  ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]<br>
You can take the following steps, or adopt your own approach:<br>
• Remove the first item and the last item.<br>
• Add FIRST to the start of the array.<br>
• Assign hello World to the fourth item value.<br>
• Assign MIDDLE to the third index value.<br>
• Add LAST to the last position in the array.<br>
• Output it to the console.<br>
```
let theList = ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
theList.pop();
theList.shift();
theList.unshift("FIRST");
theList[3] = "hello World";
theList[2] = "MIDDLE";
theList.push("LAST");
console.log(theList); // [ 'FIRST', 'Svekis', 'MIDDLE', 'hello World', 'LAST' ]
```

## Company product catalog
In this project, you will implement a data structure for a product catalog and create queries to retrieve data.
1. Create an array to hold an inventory of store items.
2. Create three items, each having the properties of name, model, cost, and quantity.
3. Add all three objects to the main array using an array method, and then log the inventory array to the console.
4. Access the quantity element of your third item, and log it to the console. Experiment by adding and accessing more elements within your data structure.

```
const inventory = [];
const item3 = {
    name: "computer",
    model: "imac",
    cost: 1000,
    qty: 3
}
const item2 = {
    name: "phone",
    model: "android",
    cost: 500,
    qty: 11
}
const item1 = {
    name: "tablet",
    model: "ipad",
    cost: 650,
    qty: 1
}
inventory.push(item1, item2, item3);
console.log(inventory);
/*
[
  { name: 'tablet', model: 'ipad', cost: 650, qty: 1 },
  { name: 'phone', model: 'android', cost: 500, qty: 11 },
  { name: 'computer', model: 'imac', cost: 1000, qty: 3 }
]
*/
console.log(inventory[2].qty); // 3
```
## Self-check quiz
1. Can you use const and update values within an array?<br>
A. Yes. You can reassign values within an array declared with const, but cannot redeclare the array itself.
2. Which property in an array gives the number of items contained in the array?<br>
A. length
3. What is the output in the console?
```
const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));
console.log(myArr1.indexOf(3));
```
4. How do you replace the second element in an array myArr = [1,3,5,6,8,9,15] with the value 4?
A.

```
const myArr = [1,3,5,6,8,9,15];
myArr.splice(1,1,4);
console.log(myArr);
```
5. What is the output in the console?
```
const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);// undefined
```
6. What is the output in the console?
```
const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]); // undefined
```