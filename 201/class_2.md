# Programming Concepts Covered
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

**Break 10 Minutes**

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
          ```css
          section p.more-content {
            background-color: #FF0000;
          }

          .more-content {
            background-color: #0000FF;
          }

          #something-else {
            border: 5px dashed #00FF00;
          }

          ```
     - targeting specific values
     - CSS reset

# 40 Minutes
4. JavaScript
   - Data Types - **https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof**

   **Break 10 Minutes**

   - Conditionals
    * There are 2 different types of conditionals:
    * if/if....else statements
    * switch statements

   - Arrays

# 30 Minutes. 
5. Git vs GitHub
   - git demo
6. Lab Review


```js 
'use strict';

// If conditional based confirm command
var answer1 = confirm('Do you dare to begin your coding journey?');
if (answer1 === true || answer1 !== true) {
  alert('LET\'S GO ON A JOURNEY THROUGH TIME AND SPACE!');
  console.log('LET\'S GO ON A JOURNEY THROUGH TIME AND SPACE!');
} else {
  console.log('Oh. Well then.');
}

// logical operator example
var myBooleenValueTrue = true;
var anotherBooleenValueFalse = false;
var thirdBooleenValueTrue = true;

        // And = both conditions have to be true
if (myBooleenValueTrue && thirdBooleenValueTrue) {
    alert('The && will run if both conditions return true. And = both conditions have to be true');
    console.log('thirdBooleenValueTrue and thirdBooleenValur were both true')
} 
        // only one of these have to be true
else if (myBooleenValueTrue || anotherBooleenValueFalse) {
    alert('The || will run if one of the conditions return true.');
    console.log('the mybooleenValueTrue or anotherBooleenValueFalse was true!');
} 
        // only thirdBool can be true
else if (thirdBooleenValueTrue) {
    alert('The thirdBooleenValueTrue was true so this will run.');
    console.log('myBool and anotherBool were false, but thirdBool was true.');
} 
         // none of the above conditions were true
else {
  console.log('Were any of my variables true?');
}




alert('Welcome to 4 Part spaceship repair.');
var spaceHandle = prompt('What\'s your space name');
var spaceShipPart = prompt('What spaceship part do you need?, 1 through 4');

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


```





```js
// Create an empty array
var emptyArray = [];

// Create an array full of "quiz answers' by putting the values directly into a new array
var quizAnswers = ['b', 'd', 'a', 'a', 'c'];

// we can even create an array of arrays!
var nestedArray = [ ['yes', 'y'], ['no', 'n'], ['no', 'n'] ];
// this is exactly the same as the nestedArray above, except just formatted slightly different.
var multiLineArray = [
                      ['yes', 'y'],
                      ['no', 'n'],
                      ['no', 'n']
                    ];

// we don't always have to commit to one data type in an array. here is an example of a mixed data type array.
var mixedArray = ['Harry', 'Potter', 10, true, 'luxurious'];

```

```js
var myArray = ['a' 'b', 'c'];
myArray[0] = 'z'; // myArray is now equal to ['z' 'b', 'c']
//We can easily check if a specific index in the array is equal to specific value

var myArray = ['a' 'b', 'c'];
if(myArray[1] === 'b')
{
    // do something here
}
//If we wanted to "add" an item to the end of the array, we can do so by the .push() method.

var myArray = [1,2,3,4,5];
myArray.push(6);
// myArray now is equal to [1,2,3,4,5,6]
//To remove an item from the end of an array, is a .pop().

var myArray = [1,2,3,4,5];
myArray.pop();
// myArray is now equal to [1,2,3,4]
```

