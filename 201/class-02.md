# Class 02

## Announcements

- **Lab 05c** will be published at the end of class. It is a tutorial on working
 with CSS selectors, and will be due when the other Lab 05 assignments are due.
  It is being published early to give you flexibility and extra time to complete
   these tutorials.
- Quizes are open today with our first quiz. Take often until you get 100 percent.

---

### Brain storm: Why do we do code review? (1 minute) Why are we doing this?

    Maybe write down your answers, so that if you're called on you can just read
   your response. (Popsicle sticks.)

- It's a thing developers do.
- Learning from working code.
- Learn from new stuff you haven't seen.
- Learn more from the broken code.
- We can learn to prevent mistakes and create best practices.
- Teamwork.
- Writing code is good. This is a chance to learn how to read code better
 (which you will do).
- Learn how to debug.

---

## 10 Minutes

1. *Introduce*
   - **Learning Journals**
      - Starting today, there is a daily Learning Journal assignment in Canvas.
       The purpose of this assignment is to reflect on what you have learned today.
        These assignments are due before the following class.
   - **Quizzes**
      - Note that there will be some quiz content from time to time.
      - Keep in mind that you have unlimited re-takes on the quizzes.
      - *Two main purposes*:
        1. To get you to re-engage with the content in a different way, reinforcing
         your knowledge.
        2. To help you prepare for the Code 301 entrance exam, which you will take
         at the end of Week 3. There is a minimum threshold you must pass on that
          exam (80%). And also, that exam factors into your grade in this class.

---

## 40 Minutes

### Code Review

    - Draw out git process of creating repo for class. 
    - Why is it important?
    - Code Review options:
    - look at google tools and accessibility. 
      - Look at code and practice reading code.
      - Go through code line-by-line and have a different person explain each line.
      - Fix broken code together as a class.

![Clean code image](images/clean-code.png)

---

## Break - 10 Minutes

---

## Second Hour

## Git vs GitHub - git demo

## 30 Minutes

*Probably less than 30 more like 10. More time for code.*

- **Review HTML/CSS**
- HTML/CSS
- Start to talk about CSS. Add reset. Look at web page in browser see reset difference.
   **[https://meyerweb.com/eric/tools/css/reset/]**
- Look at the same web page in two different browsers.
- Use the reset CSS copy and paste into a style tag. And show the differences
 in the two browsers.
    - HTML heading/paragraph tags
    - HTML lists (`<ol>` & `<ul>`)
    - CSS ids/classes
        - targeting specific value (`ol` + `li` + `{}`)

---

## Demo Code for HTML

```html

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Class 2 Demo</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <header>
            <h1>Class 2</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Contact Page</li>
                    <li>About Us</li>
                </ul>
            </nav>
        </header>
        <script>
            let acceptTerms = prompt('Are you ready for something or anything
             or nothing?');
        </script>
        <main>
            <section>
                <p class="more-styles" >Are you ready?<script>document.write(acceptTerms);</script></p>
            </section>
            <p id="another-style">Where would you like to travel?</p>
            <p>How many pets do you have?</p>
            <p class="more-styles">Have you ever traveled into outer space?</p>
        </main>
        <footer>
            <nav>
                <ol>
                    <li>Careers</li>
                    <li>FAQ</li>
                </ol>
            </nav>
        </footer>
        <script src="js/app.js" ></script>
    </body>
</html>

```

---

## Demo Code for CSS

```css

/* * {
  outline: dotted;
} */

body {
  margin: 0 auto;
  width: 1000px;
                      /* red green blue opacity */
  background-color: rgba(27,  71,  218,  .5);
}
main {
  background-color: rgb(213, 245, 166);
}
header {
  margin-bottom: 10px;
}
ul li {
  display: inline;
  padding: 10px;
  background-color: rgb(85,136,212);
  border-radius: 15px;
}
ol li {
  display: inline;
  padding: 10px;
  background-color: rgb(85,136,212);
  border-radius: 15px;
}
h1 {
  background-color: hotpink;
  color: #f50efd;
  font-size: 50px;
  text-shadow:2px 2px ivory;
  margin-bottom: 20px;
}
nav {
  background-color: rgb(44,94,141);
  height: 250px;
}
section p.more-styles {
  background-color: red;
}

.more-styles {
color: white;
background-color:  #0000FF;
}

#another-style {
  border: 5px solid #00FF00;
}

footer {
  margin-top: 15px;
}
```

--- 40 Minutes

## Javascript

- Start on the white board. invision

    - Data Types **[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof]**
    - Conditionals
    - There are 2 different types of conditionals:
    - if/if....else statements
    - switch statements
    - Arrays

```js

'use strict';

// If conditional-based confirm command
let answer1 = confirm('Do you dare to begin your coding journey?');
if (answer1 === true || answer1 !== true) {
  alert('LET\'S GO ON A JOURNEY THROUGH TIME AND SPACE!');
  console.log('LET\'S GO ON A JOURNEY THROUGH TIME AND SPACE!');
} else {
  console.log('Oh. Well then.');
}

/////////////////////////////////////////////////////
// logical operator example
// let myBooleanValueTrue = true;
// let anotherBooleanValueFalse = false;
// let thirdBooleanValueTrue = true;
//else if
let myBooleanValueTrue = true;
let anotherBooleanValueFalse = false;
let thirdBooleanValueTrue = false;
//next else if
// let myBooleanValueTrue = false;
// let anotherBooleanValueFalse = false;
// let thirdBooleanValueTrue = true;
//else
// let myBooleanValueTrue = false;
// let anotherBooleanValueFalse = false;
// let thirdBooleanValueTrue = false;

if (myBooleanValueTrue && thirdBooleanValueTrue){
  alert('The && will run if both are true.');
  console.log('Both values were true.');
} else if(myBooleanValueTrue || anotherBooleanValueFalse){
  alert('The || will run if one value was true.');
  console.log('One of values was true.');
} else if(thirdBooleanValueTrue){
  alert('The 3rd value was true, so this will run.');
  console.log('thirdBooleanValueTrue was true.');
} else {
  console.log('There were no true values!');
}

//////////////////////////////////////////////////////////////////////////////

alert('Welcome to 4-Part Spaceship Repair!');
let spaceHandle = prompt('What\'s your space name?');
let spaceShipPart = prompt('What spaceship part do you need? Select a
 number between 1 and 4.');

switch (spaceShipPart) {
    case '1':
        confirm(spaceHandle + 'You need Part One?');
        console.log(spaceHandle +  ' needs part one!');
        break;
    case '2':
        confirm(spaceHandle + 'You need Part Two?');
        alert(spaceHandle + 'You will receive your part in 2-3 Lightyears.
         However long that takes! :)');
        console.log(spaceHandle +  ' needs part two!');
        break;
    case '3':
        alert('You need Part Three?');
        console.log(spaceHandle +  ' needs part three!');
        break;
    case '4':
    alert('You need Part Four?');
    console.log(spaceHandle +  ' needs part four!');
    break;

    default:
        alert('I don\'t know if your ship will ever fly again!  ¯\_(ツ)_/¯');
}
alert('Bye for now ' + spaceHandle);

```

```js

////////////////////////////////////////////////

//create an empty array
let emptyArray = [];
//Create an array full of "quiz answers" by putting the answers into the array
console.log(emptyArray);

//                 0   1   2   3   4
let quizAnswers = ['b','c','d','a','c'];
console.log(quizAnswers);

// we can even create an array of arrays!
//nested array
let nestedArray = [['yes', 'y'], ['no', 'n'],['maybe', 'maybeNot']];
console.log(nestedArray);

// this is exactly the same as the nestedArray above, except just
// formatted slightly different.
//multiline
let nestedArrayMultiLine  = [
  ['yes', 'y'],
  ['no', 'n'],
  ['maybe', 'maybeNot']
];
console.log(nestedArrayMultiLine);

////////////////////////////////////////////////////////////////////////////////////

```

---

## Break

---

## Third Hour Lab Review

```js

'use strict';
//first thing to do
console.log('This file is connected.');

//prompt our user for input data
let userName;
console.log(userName);
while (!userName) {
  userName = prompt('Enter your name!');
}

//Greet the user
alert('Hello ' + userName + '!');

//convert the input to lowerCase
let lowerCaseName = userName.toLowerCase();
console.log(lowerCaseName);

//Validate the input using conditional logic using strict equals.
if(lowerCaseName === 'craig' || lowerCaseName === 'bob') {
  alert('Welcome back to my page, ' + userName + '!');
} else {
  alert('Welcome to my page, ' + userName + '!');
}

```

---

```js

// we don't always have to commit to a specific data type
let mixedDataTypes = ['Harry', 'Potter', 10, true, 'magic'];
console.log('Mixed Data Types: ', mixedDataTypes);

let myArray = ['a', 'b', 'c'];

//Let's change the value of 'a' to 'z', using the index position

myArray[0] = 'z'; // myArray is now equal to ['z' 'b', 'c']
console.log('My Array at position 0 is ', myArray[0]);
//We can easily check if a specific index in the array is equal to specific value

let myArrayOne = ['a', 'b', 'c'];
if(myArrayOne[1] === 'b')
{
  // do something here
  console.log('This is where we add the message.', myArrayOne[1]);
}
//If we wanted to "add" an item to the end of the array, we can do so by
 using the .push() method.

let myArrayTwo = [1,2,3,4,5];
myArrayTwo.push(6);
console.log('My Array Two: ', myArrayTwo);
// myArray now is equal to [1,2,3,4,5,6]


//To remove an item from the end of an array, is a .pop().
let myArrayThree = [1,2,3,4,5];
myArrayThree.pop();
console.log('My Array Three: ', myArrayThree);
// myArray is now equal to [1,2,3,4]
```

---

```js

//Lab2 tech requirements

//  short biography
//  education history,
//  overview of your job experience,
//  goals that you may have.
//  Prompt the user a total of exactly five yes or no questions.


// The user input for the answer must accept either y/n or yes/no responses
// toUpperCase() or .toLowerCase()
// let the user know if they answered the question correctly by alerting them
// with a response.
// console.log() messages within your app then alerts


// Personalized welcome message so that I feel like I am interacting with
// the site owner.
// Ask the user their name through a prompt()

// Display that name back to the user at the start and the final message to the user.

// Your JS file must contain a 'use strict;' declaration at the top,
// And your javascript file must be linked in your html file as an external
// script file.
// Make sure that all code is cleanly written (use formatter)
// Follow the "Add, Commit, Push" process.

// Push yourself in your CSS work.
//  Experiment, try some layout feature or technique that you have not tried before
//   (maybe a sticky header
//      or sticky footer,
//      icon fonts such as FontAwesome

```
