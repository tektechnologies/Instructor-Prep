'use strict';
console.log('The js file is connected.');

//global variable
let userPoints = 0;

alert('Hello, and welcome to the Guessing Game.');

let user = prompt('What is your name?');
let userName = user.toLowerCase();
console.log(userName);

// THE USER VARIABLE
// - string
// - null
// " " empty

//If the user is empty string or null, keep asking them for their name.

// while(user === ' ' || user === null){
// do something.
//  }


//SHORTER VERSION
// while(!user) {
//   user = prompt('what is your name, Please, provide it now!');
// }

//////////////////////////////////////////

//Control flow, in javascript

// if(condition){......}
// if(condition){....} else {.......}
// if(condition){.....} else if(second condition) {....} else {.....}
// if(condition){.....} else if(second condition) {....} else if (thirdCondition) {.....} else {.......}



// COMPARISON OPERATORS
/**
      <  - less than.
      >  - great than
      <  - less than or equal to
      >= - great then or equal to

      == - kinda equals
      != - kinda not equals

      strict check for exact data types to be the same
      === - strictly equals
      !== - strictly not equals


*/

// 1.
//This is the NOT EQUALS  comparison operator
if(user !== 'craig'){
  console.log('craig? ', user);
  alert('You are not the lower case craig we were looking for.');
}
alert('Hello, ' + userName + ' ready to play the game?');




// 2.
// USER POINTS
let answer = prompt('Is my favorite food popcorn?, Please type yes or no.').toLowerCase();
console.log('Food answer: ', answer);
//Check user input to add points for the game
if(answer === 'no' || answer === 'n' ) {
  alert('You are right popcorn is not my favorite.');
  //userPoints = userPoints + 1;
  userPoints += 1;
  console.log('this is the user point total', userPoints);
} else {
  alert('Popcorn is gross!, you get no points.');
  console.log('this is the user point total', userPoints);
}





// 3.
// LOOPS
// How long would it take to print the numbers 0 to 100 using console.log?
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Use a loop to run code many times
console.log('While loops require a starting variable, in this case a variable set to 0');
let count = 0;

console.log('This code will run the loop as long as the variable above is less than or equal to 50');
while(count <= 50) {
  console.log('while loop count starts at 0: ',count);
  count = count + 5;
}
console.log('While loops need an expression to change the starting variable, in this case we are increasing the value by 5 each time the loop runs');
// This loop counts down from 50 to 0, decreasing by -2 each time
count = 50;
while(count >= 40) {
  console.log('while loop count starts 50: ',count);
  count = count - 2;
}

/**  multi line comment.
          WHILE LOOPS  will run until a condition is true or truthy, or not true!!

          while(condition){

              something has to change
          }

          let i = 0;
          while(i < value){
            count our iterations or times through the loop
            i += 1;
            i++;
            i = i + 1
          }

          DO WHILE
          do {
            here code runs first and always then the condition is checked.
            }
             while(condition)

*/


let newUser;
do {
  newUser = prompt('A New User Name?');
  console.log('New User Name', newUser);
} while (!newUser);
console.log(newUser);


let zenTime;
do {
  zenTime = prompt('Is today good?');
  zenTime = zenTime && zenTime.toUpperCase();

  if (zenTime) { // or zenTime == null or zenTime === null
    zenTime = zenTime.toUpperCase();
  }
  console.log('Good?', zenTime);

} while (zenTime !== 'N' && zenTime !== 'Y');

console.log('zenTime', zenTime);


/*

      Evaluating Comparisons
      Type coercion, weak typing, truthy/falsy
      falsy values are :
      - 0
      - null
      - NaN
      - ''
      - undefined
      - false


      truthy values. ==== everything else.

      Logical Operators
      - (craig === 'instructor' || 'teacher')    => will not Work


      Combining conditions:
      - Not: !
      - And: &&
      - Or:  ||

      // - (craig === 'instructor' || craig === 'teacher')

      Short-circuiting:
      - If we know the answer from the first expression, don't evaluate the second expression
        Logical operators work from left -> right, and stop as soon as they get a result. When they stop, they return whatever value stopped them, so we can write logical expressions that return a value other than true or false. This can be used to set default values.


        let name1 = 'Dan';
        let name2 = '';
        let userName1 = (name1 || 'unknown'); -> userName = 'Dan'
        let userName2 = (name2 || 'unknown'); -> userName2 = 'unknown'


      Any existing value is considered truthy, so we can use a conditional to check whether something exists:
*/
let a = 10;
let obj = {};

if (a) {
  console.log('a exists');
}

if (a && obj) {
  console.log('they both exist');
}





/*
    More loop stuff:
    - break means stop looping
    - continue means skip the rest of this iteration, go back to beginning

    for( setUP    condition  change variable){
        add code to do stuff
    }

    for (let counter = <initial value>; <stop condition>; <increment>) {
  //do stuff
}
*/

let names = [ 'Keith', 'Kevin' ];
for (let i = 0; i < names.length; i++) {
  console.log(i, names[i]);
}



for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('keep going past this number 2.');
    continue;
  }
  if(i === 4){
    console.log('this is now breaking the loop.');
    break;
  }
  console.log('the variable i: ', i);
}



// 4.
// review arrays

let foodsILike = ['tatertots', 'chips', 'popcorn', 'kale'];
console.log(foodsILike);

//use a loop to traverse through an array

for(let x = 0; x < foodsILike.length; x++){
  console.log('for loop doing work ', foodsILike[x]);
}
// lots of different array methods.
foodsILike.push('swiss chard');
console.log('array push', foodsILike);

//pop  removes elements
let popArrayElement = foodsILike.pop();
console.log('array after the pop():', foodsILike);
console.log('array pop', popArrayElement);


//shift array to remove from the front.
let shiftArray = foodsILike.shift();
console.log('unshift of array first element', shiftArray);
console.log('shiftArray ', foodsILike);


// yes, js lets you do this (having an array of different data types). don't do it.
let mixedUpArray = ['yeehaw', 42, true, ['yo'], {}];
console.log('mixedUpArray ', mixedUpArray);

// unshift adds elements to the front of the array
foodsILike.unshift('spinach');
console.log('unshift', foodsILike);

// indexOf tells you the index of an element in the array; returns -1 if not found
let index = foodsILike.indexOf('popcorn');
console.log(index);
// on your own: check out splice




let str;
let value = prompt('Number?');


switch (value) {
case 1:
case '1':
  str = 'One';
  console.log('before break string 1', str);
  break;
case 2:
case '2':
  str = 'Two';
  console.log('before break string 2', str);
  break;
default:
  str = value.toString();
  break;
}
console.log('switch number: ', str);










