'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named `addOne` that takes an array of numbers, and returns a new array of the numbers, incremented by 1.

Use `forEach` to loop over the input array and work with each value.  Push the new value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */

const addOne = (arr) => {
  //<solution>
  const newArr = [];

  arr.forEach(value => {
    newArr.push(value + 1);
  });

  return newArr;
  //</solution>
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named `addExclamation` that takes an array of strings, and returns a new array of the same strings with an "!" added to the end.

Use `forEach` to loop over the input array. Modify each string, and add the updated value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */

const addExclamation = (arr) => {
  //<solution>
  const newArr = [];

  arr.forEach(value => {
    newArr.push(value + '!');
  });
  return newArr;
  //</solution>
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named `allUpperCase` that takes an array of strings, and returns a new array of the strings converted to upper case.

Use `forEach` to loop over the input array. The modified strings should each be added into a local array. Return that local array.
------------------------------------------------------------------------------------------------ */

const allUpperCase = (arr) => {
  //<solution>
  const newArr = [];

  arr.forEach(value => {
    newArr.push(value.toUpperCase());
  });

  return newArr;
  //</solution>
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named `greeting` that takes in a single string and returns the string in all uppercase letters, and followed by an "!".

Then, write a function named `speaker` that takes in an array of strings and a callback function.

Use `forEach` to build a new array of strings, each string modified by the callback. Return the new array.
------------------------------------------------------------------------------------------------ */

const greeting = (word) => {
  //<solution>
  return word.toUpperCase() + "!";
  //</solution>
};

const speaker = (words, callback) => {
  //<solution>
  const newArr = [];

  words.forEach(value => {
    newArr.push(callback(value));
  });

  return newArr;
  //</solution>
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

Then, write a function named addNumbers that takes in four arguments:
  - A number to be added to an array
  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.

Return the modified array.
------------------------------------------------------------------------------------------------ */

const addValues = (arr, value) => {
  //<solution>
  arr.push(value);
  //</solution>
};

const addNumbers = (num, arr, times, callback) => {
  //<solution>
  for (let i = 0; i < times; i++) {
    callback(arr, num);
  }
  return arr;
  //</solution>
};

/* ------------------------------------------------------------------------------------------------

CHALLENGE 6

Write a function named createList that takes in an array of the current store inventory.

The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]

This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
------------------------------------------------------------------------------------------------ */

const createList = (availableItems) => {
  //<solution>
  const list = [];

  availableItems.forEach(item => {
    if (item.available) {
      list.push(item.name);
    }
  });

  return list;
  //</solution>
};

/* ------------------------------------------------------------------------------------------------
STRETCH - CHALLENGE 7

Write a function named fizzbuzz that takes in an array of numbers.

Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.

Return the resulting output array.
------------------------------------------------------------------------------------------------ */

const fizzbuzz = (arr) => {
  //<solution>
  const output = [];

  arr.forEach(num => {
    if (num % 5 === 0 && num % 3 === 0) {
      output.push('Fizz Buzz');
    } else if (num % 3 === 0) {
      output.push('Fizz');
    } else if (num % 5 === 0) {
      output.push('Buzz');
    } else {
      output.push(num);
    }
  });

  return output;
  //</solution>
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

-