alert("Hi from different file!")
// *Writing JavaScript code
let a = 10 // I assigned value 10 to variable "a"
console.log(a);
/* MultiLine comment
 * 
 * The Above console.log will print the value in a.
 * Such that we can see that value in the browser's console.
 * 
 */
//* Prompt
let promptStore = prompt("Hi please enter a anything")
alert(`you have entered: "${promptStore}"`)

//* Random numbers
console.log(Math.random())
// 0.014626941406713723

console.log(Math.random())
// 0.014477549496935804
/**
 * This number will be a decimal between 0 and 1. If we want a number between 0 and
 * 100, we can multiply it by 100, like this:
 */
console.log(Math.random() * 100);
 // 34.16252889054952
  console.log(Math.random() * 100);
// 0.7687219597265482
  console.log(Math.random() * 100);
// 95.14635377858937
/**
 * 
 *  If we don't want to have a decimal result, we can use the Math.floor
 *  function on it, which is rounding it down to the nearest integer:
 * 
 */
console.log(Math.floor(Math.random() * 100));
 //15
console.log(Math.floor(Math.random() * 100));
//44
console.log(Math.floor(Math.random() * 100));
// 31


