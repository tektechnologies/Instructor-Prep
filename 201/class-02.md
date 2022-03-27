# First Hour

# Announcements
- **Lab 05c** will be published at the end of class. It is a tutorial on working with CSS selectors, and will be due at the time the other Lab 05 assignments are due. It is being published early to give you flexibility and extra time to complete these tutorials.
### Brain storm why do we do code review, 1 minute, why are we doing this? 
- Maybe write down your answers so that if your called on you can just read your response. (popsicle sticks.)

#### Reasons 
- its a thing developers do
- learning from working code
- learn from new stuff you haven't seen
- learn more from the broken code
- we can learn to prevent mistakes and create best practices. 
- team work. 
- writing code is good, this is a chance to learn how to read code better (which you will do)
- how to debug

# 10 Minutes
1. Introduce
   - Learning Journals  Starting today, there is a daily Learning Journal assignment in      Canvas. The purpose of this assignment is to reflect on what you have learned today. These assignments are due before the following class.
   - Quizzes
   - Note that there will be some quiz content from time to time. 
   - Keep in mind that you have unlimited re-takes on the quizzes.
   - Two main purposes:
      1. To get you to re-engage with the content in a different way, reinforcing your knowledge.
      1. To help you prepare for the Code 301 entrance exam, which you will take at the end of Week 3. There is a minimum threshold you must pass on that exam (80%), and also, that exam factors into your grade in this class.

# 40 Minutes
2. Code Review
    - Why is it important?
    - Code Review options:
      - Look at code and practice reading code
      - Go through code line-by-line and have a different person explain each line
      - Fix broken code together as a class.



















### Take Break 10 Minute
# Second Hour


# 30 Minutes.  Probably less than 30 more like 10. More time for code.
5. Git vs GitHub
   - git demo


# 30 Minutes
3. Review of HTML/CSS
   - HTML/CSS
   - Start to talk about css.  Add reset . look at web page in browser see reset diff.
   **https://meyerweb.com/eric/tools/css/reset/**
   - Look at the same web page in two different browsers. 
   - Use the reset css copy and paste into a style tag. And show the differences in the two browsers. 
     - HTML heading/paragraph tags
     - HTML lists (`<ol>` & `<ul>`)
     - CSS ids/classes
        * targeting specific value (ol li {})
     - targeting specific values
     - CSS reset



# Demo Code for HTML 


```HTML
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
            let acceptTerms = prompt('Are you ready for something or anything or nothing?');
        </script>
        <main>
            <section>
                <p class="more-styles" >Are you ready?<script>document.write(acceptTerms);</script></p>
            </section>
            <p id="another-style">Where would you like to travel?</p>
            <p>How many pets do you have?</p>
            <p class="more-styles">Have you ever traveled into outter space.</p>

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



# Demo Code for CSS

```css
/* * {
    outline: dotted;
} */

body {
    margin: 0 auto;
    width: 1000px;
                     /*    red  green blue  opacity */
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



# 40 Minutes
4. JavaScript
   - Data Types - **https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof**

   - Conditionals
    * There are 2 different types of conditionals:
    * if/if....else statements
    * switch statements

   - Arrays


```js 
'use strict';

// If conditional based confirm command
let answer1 = confirm('Do you dare to begin your coding journey?');
if (answer1 === true || answer1 !== true) {
  alert('LET\'S GO ON A JOURNEY THROUGH TIME AND SPACE!');
  console.log('LET\'S GO ON A JOURNEY THROUGH TIME AND SPACE!');
} else {
  console.log('Oh. Well then.');
}

/////////////////////////////////////////////////////
// logical operator example
// let myBooleenValueTrue = true;
// let anotherBooleenValueFalse = false;
// let thirdBooleenValueTrue = true;
//else if
let myBooleenValueTrue = true;
let anotherBooleenValueFalse = false;
let thirdBooleenValueTrue = false;
//next else if
// let myBooleenValueTrue = false;
// let anotherBooleenValueFalse = false;
// let thirdBooleenValueTrue = true;
//else
// let myBooleenValueTrue = false;
// let anotherBooleenValueFalse = false;
// let thirdBooleenValueTrue = false;

if (myBooleenValueTrue && thirdBooleenValueTrue){
  alert('The && will run if both are true');
  console.log('both values were true');
} else if(myBooleenValueTrue || anotherBooleenValueFalse){
  alert('The || will run if both are true');
  console.log('one of values was true');
} else if(thirdBooleenValueTrue){
  alert('the 3rd value was tru so this will run');
  console.log('thirdBooleenValueTrue was true');
} else {
  console.log('There were no true values');
}

//////////////////////////////////////////////////////////////////////////////


alert('Welcome to 4 Part spaceship repair.');
let spaceHandle = prompt('What\'s your space name');
let spaceShipPart = prompt('What spaceship part do you need?, 1 through 4');

// convert the variable of color to lower case and evaluate it
switch (spaceShipPart) {
    case '1':
        console.log('This is Part One.');
        break;
    case '2':
        confirm(spaceHandle + 'you need Part Two?');
        alert(spaceHandle + 'You will recieve your part in two to three light years.');
        console.log('your favorite color was blue!');
        break;
    case '3':
        alert('This is Part Three.');
        console.log('your favorite color was blue!');
        break;
    case '4':
    alert('This is Part Four.');
    console.log('your favorite color was blue!');
    break;

    default:
        alert('i don\'t know if your ship will ever fly again?,  ¯\_(ツ)_/¯');
}
alert('Bye for now ' + spaceHandle);

```



```js

/////////////////////////////////////////////////////////////////////////////////////////

//create an empty array
let emptyArray = [];
//Create an array full of "quiz answers" by putting the answers into the array
console.log(emptyArray);

//                 0   1   2   3   4
let quizAnswer = ['b','c','d','a','c'];
console.log(quizAnswer);

// we can even create an array of arrays!
//nested array
let nestedArray = [['yes', 'y'], ['no', 'n'],['maybe', 'maybeNot']];
console.log(nestedArray);

// this is exactly the same as the nestedArray above, except just formatted slightly different.
//multiline
let nestedArrayMultiLine  = [
  ['yes', 'y'],
  ['no', 'n'],
  ['maybe', 'maybeNot']
];
console.log(nestedArrayMultiLine);

/////////////////////////////////////////////////////////////////////////////////////////

```



### Take Break 10 Minute
# Third Hour

6. Lab Review

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
alert('Hello ' + userName);

//convert the input to lowerCase
let lowerCaseName = userName.toLowerCase();
console.log(lowerCaseName);

//Validate the input using conditional logic using strict equals.
if(lowerCaseName === 'craig' || lowerCaseName === 'bob') {
  alert('Welcom back to my page, ' + userName);
} else {
  alert('Welcome new user to my page.');
}

```


```js

// we don't always have to commit to a specific data type
let mixedDataTypes = ['Harry', 'Potter', 10, true, 'magic'];
console.log('Mixed Data Types',mixedDataTypes);


let myArray = ['a', 'b', 'c'];
myArray[0] = 'z'; // myArray is now equal to ['z' 'b', 'c']
console.log('My Array at position 0',myArray[0]);
//We can easily check if a specific index in the array is equal to specific value

let myArrayOne = ['a', 'b', 'c'];
if(myArrayOne[1] === 'b')
{
  // do something here
  console.log('This is where we add the message', myArrayOne[1]);
}
//If we wanted to "add" an item to the end of the array, we can do so by the .push() method.

let myArrayTwo = [1,2,3,4,5];
myArrayTwo.push(6);
console.log('My Array Two', myArrayTwo);
// myArray now is equal to [1,2,3,4,5,6]
//To remove an item from the end of an array, is a .pop().

let myArrayThree = [1,2,3,4,5];
myArrayThree.pop();
console.log('My Array Three',myArrayThree);
// myArray is now equal to [1,2,3,4]



```

```js

//Lab2 tech requirements

//  short biography
//  education history,
//  overview of your job experience,
//  goals that you may have.
//  Prompt the user a total of exactly five yes or no questions.


// The user input for the answer must accept either y/n or yes/no responses 
// toUpperCase() or .toLowerCase()
// let the user know if they answered the question correctly by alerting them with a response.
// console.log() messages within your app then alerts


// personalized welcome message so that I feel like I am interacting with the site owner.
// Ask the user their name through a prompt()

// Display that name back to the user at the start and the final message to the user.

// Your JS file must contain a 'use strict' declaration at the top, 
// and your javascript file must be linked in your html file as an external script file.
// Make sure that all code is cleanly written use formatter
// Follow the Add, Commit, Push process. 

// Push yourself in your CSS work.
//  Experiment, try some layout feature or technique that you have not tried before
//   (maybe a sticky header
//      or sticky footer, 
//      icon fonts such as FontAwesome

```






















