// JavaScript Array Methods Assignment

// Question 1: Write a JavaScript program that uses the `push()` method to add an element to an array.
let fruits = ['Apple', 'Banana'];
fruits.push('Cherry');

console.log('After push:', fruits); // Output: ['Apple', 'Banana', 'Cherry']


// Question 2: Create a JavaScript program that removes the last element from an array using the `pop()` method.
let fruitsPop = ['Apple', 'Banana', 'Cherry'];
let lastFruit = fruitsPop.pop();
console.log('Popped fruit:', lastFruit); // Output: 'Cherry'
console.log('After pop:', fruitsPop);    // Output: ['Apple', 'Banana']


// Question 3: Use the `shift()` method to remove the first element from an array.
let fruitsShift = ['Apple', 'Banana', 'Cherry'];
let firstFruit = fruitsShift.shift();
console.log('Shifted fruit:', firstFruit); // Output: 'Apple'
console.log('After shift:', fruitsShift);     // Output: ['Banana', 'Cherry']


// Question 4: Write a program that adds an element to the beginning of an array using the `unshift()` method.
let fruitsUnshift = ['Banana', 'Cherry'];
fruitsUnshift.unshift('Apple');
console.log('After unshift:', fruitsUnshift); // Output: ['Apple', 'Banana', 'Cherry']


// Question 5: Modify an array by removing and/or adding elements using the `splice()` method.
let fruitsSplice = ['Apple', 'Banana', 'Cherry'];
fruitsSplice.splice(1, 1, 'Orange'); // Remove 1 element at index 1 and add 'Orange'
console.log('After splice:', fruitsSplice); // Output: ['Apple', 'Orange', 'Cherry']


// Question 6: Use the `slice()` method to create a new array from a portion of an existing array.
let fruitsSlice = ['Apple', 'Banana', 'Cherry', 'Date'];
let newFruits = fruitsSlice.slice(1, 3); // Create a new array from index 1 to 3 (not including 3)
console.log('Sliced fruits:', newFruits); // Output: ['Banana', 'Cherry']


// Question 7: Find the index of an element in an array using the `indexOf()` method.
let fruitsIndex = ['Apple', 'Banana', 'Cherry'];
let index = fruitsIndex.indexOf('Banana');
console.log('Index of Banana:', index); // Output: 1


// Question 8: Create a new array by transforming each element in an existing array using the `map()` method.
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubled); // Output: [2, 4, 6, 8]


// Question 9: Filter elements from an array that meet a certain condition using the `filter()` method.
let numbersFilter = [1, 2, 3, 4, 5];
let evenNumbers = numbersFilter.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers); // Output: [2, 4]


// Question 10: Write a program that calculates a single value from an array using the `reduce()` method.
let numbersReduce = [1, 2, 3, 4];
let sum = numbersReduce.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum of numbers:', sum); // Output: 10
