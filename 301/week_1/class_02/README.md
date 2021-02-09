# Good Day Happy Day
--- 
## Agenda 
- Warm Up Code
 - We will do this every morning, with the intent that we review the concepts previously covered to help enforce those learnings as well to get a look at some of the type of code we will see in 401 
- Code Review
- Shred Talk our Code Challenge - Variables: Value vs. Reference
- Lookin at Lab - jQuery Selectors and Events

# Warm-Up Exercise 
Predict how this code will be rendered on the page. Draw the outcome in the blank space below. What would you change?
- https://css-tricks.com/snippets/css/clear-fix/

***Break into groups and give them 8 minutes.*** 
## index.html
```html
<div>
<!-- Not all divs have height in them  -->
  <ul> <!--is still block level with default margin but has zero height has a padding and a margin to deal with.-->
   <!-- adding margin left or right to space these out -->
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    the three floated items is what is giving us 
  </ul>
</div>
```
## styles.css
```css
div {
  border: 10px solid yellow;
}

li { 
  border: 1px solid red;
 float: left;  /** doesnt change display property */
  /** we could try display: inline-block; 
    turns them into inline and block so that they take up height and width */
  height: 25px;
  width: 100px;
}
```
```
```
## End Warm up Exercise
--- 

# Code Review

## This is the first time students will see User Acceptance Tests in the LAB.md files. Spend about ten minutes discussing UAT when discussing the lab assignment towards the end of lecture.
### Show some answers to questions 3 and 4 from code Challenge 

```js

//CHALLENGE 1
const addOne = (arr) => {
  //<solution>
  const newArr = [];

  arr.forEach(value => {
    newArr.push(value + 1);
  });

  return newArr;
  //</solution>
};



//CHALLENGE 2
const addExclamation = (arr) => {
  //<solution>
  const newArr = [];

  arr.forEach(value => {
    newArr.push(value + '!');
  });
  return newArr;
  //</solution>
};

//CHALLENGE 3

const allUpperCase = (arr) => {
  //<solution>
  const newArr = [];

  arr.forEach(value => {
    newArr.push(value.toUpperCase());
  });

  return newArr;
  //</solution>
};


//CHALLENGE 4

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

//CHALLENGE 5

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


//CHALLENGE 6
//Dont forget to look at the test to see what we will be doing, instead of having to refactor //what we think it might be. 
- So lets verify by testing the actual return. 
const createList = (availableItems) => {
  //<solution>
  const list = [];
  // we can declare as a const because it is not reassigned, we could have used let as well with no increase in the cost system resources.
//this array is the same not by what is inside of it but the water bottle example. 
//we could start the    fruitObject
availableItems.forEach((value, index, array) => {
   //this chuck is a valid js thing what is it. it is a function, the for each takes a function as its parameter.
   //the value is comprised of what? An object. It is made up of key value attributes. 
  });
  //Next iteration of for each 
availableItems.forEach(fruitObject => {
    if (fruitOject.available === true) {
      //run first to see test fail
      //list.push(fruitOject);
      list.push(fruitOject.name);
    }
  });
//Final refactor. 
  availableItems.forEach(item => {
    if (item.available) {
      list.push(item.name);
    }
  });

  return list;
  //return ['apples','pears','bananas'];
  //</solution>
};

//STRETCH - CHALLENGE 7

const fizzbuzz = (arr) => {
  // we can console.log('arr from line 171 'arr); to see in the test results. 
           // update to number, 
  const fizzCallBack = (value, index, array) => {
        if(number %  3 === 0){
          outputArray.push('fizz');
        }else if(number % 5 === 0){
              outputArray.push('buzz');
              //we have to move this so that it checks these conditions first, then check the other conditions. 
        }else if(number % 3 === 0 && number % 5 === 0){
            outputArray.push('fizz buzz');
        }else {
          outputArray.push(number);
        }
  };
arr.forEach(fizzCallback);
console.log(outputArray);
return outputArray;
};// this closes the example 

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
// Questions:  callback function is within the fizz buzz function. 
// if we define outside the forEach does not build anything. Because we dont have access to that array. 
// outputArray and the callback function need to be within the same scope and have access to the same variables. 
// defined and can be called in one of two ways. 
//anytime we do inline with the forEach or 
//as a named variable / or named function
```

### Demonstrate the solution code for CSS layouts.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Document</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/modules.css">
  </head>
  <body>
   <main>
     <section>A</section>
     <section>B</section>
     <section>C</section>
     <section>D</section>
     <section>E</section>
     <section>F</section>
     <section>G</section>
     <section>H</section>
     <section>I</section>
   </main>
  </body>
</html>

```
- 
- base.css 
```css
* {
display: flex;
justify-content: center;
align-items: center;
} 
/* will align everything in the center */

```
- Add some color in the modules good place for colors
modules.css
```css
section {
  background-color: #ccc;
  border: 1px solid #999;
}

/* Now lets look at layout */
```

- layout.css

```css
section:nth-child(1){
  height: 75px;
}
section:nth-child(2){
  height: 150px;
}
section:nth-child(3) section:nth-child(4){
  height: 125px;
}
/* in float based layout how should we squarify them? */
/* so we could do 50% and then how do make them live next to one another use float */
section:nth-child(5) section:nth-child(6) section:nth-child(7) section:nth-child(8){
  height: 250px;
  width: 50%
  float: left;
}
section:nth-child(9){
  height: 80px;
}



```

# Mobile view done now we need to make the desktop view. 
- in the layout.css

```css

@media(min-width: 768px){

  body{
    width: 960px;
    /* how do I center the entire web page */
    margin: 0 auto;
  }

/* which will make it larger when it expands */

section:nth-child(1){
  height: 100px;
}
section:nth-child(2){
  float: left;
  height: 600px;
  width: 200px;
}
section:nth-child(3) section:nth-child(4){
  
  height: 200px;
  width: 380px;
}
/* in float based layout how should we squarify them? */
/* so we could do 50% and then how do make them live next to one another use float */
section:nth-child(5) section:nth-child(6) section:nth-child(7) section:nth-child(8){
  width: 190px;
}
section:nth-child(9){
  height: 150px;
  width: 760px;
}
} /** close the media query */
```
### Point out the proper use of SMACSS principles
- 
### Whiteboard out other ways of marking this up with styles
- Look at Code Fellow Solution Code. 



### jQuery
# Discuss delegation 

- **Why** (5 min)
    - $ = Money
    - jQuery saves us time and effort
    - Simple syntax
### jQuery saves us time and effort
- jquery is a javascript library. 
- does several things very well, namely manipulating the dom. 
- it is not a core or best practice language, and it is being replaced by REact which we will look at in 401
- 96% of all site on line that have javascript librarys have jquery. 
- drap and drop type functionality type of jquery is being utilized, however no one is managing those features they just work, so no need for a dev for that. 
- secondary set of tools is that it can go out on to the internet and request data. 
- it does an http request and it goes and fetches things, which is a part of jquery, 
- easy to use popular,
- but its large and is going out of style. 
- created in 2006. 
- using css selectors in your javascript. 
- Go to jquery .com 
- jquery uses cdn, and what does that do. ? 
- allows use to increase the speed of our library usage, by us not having to store the code locally and have users "ask" for that library from us.
---
## Takes care of all browser idiosyncrasies
# Common API
- Ajax is a set of web development techniques using many web technologies on the client side to create asynchronous web applications.
- this is how we go out and fetch some data to use in our site. 
- inside the ajax function 
- ajax is  static method a property on the jquery object, jquery is a function for jquery object , we dont make an instance of a jquery. 
- $.get is an ajax get. 
- $.get('data.json').then(...)  will try and figure out your data type this is an ajax get.
- I do not like rendering html in the page appending raw html to my page.
- injecting, in the json file. 
- ```js 
      "name": "<script>alert('hi')</script>"; //  is extrodinarily unsafe. 
   ``` 
    - Takes care of all browser idiosyncrasies
    - Which browser?
    - browser makers then added selectAll, queryselector.All
    - so browsers copied some of those jquery behaviors as time went on. 
    - jquery would also hide the ugly stuff browsers used to do. 
    - changed the way we listen to events. In 201 we have addEventListener(), so then in jquery, we say handle all of it. 
    - still runs on 80% of the web, not a lot of new design, but easier than react. 
    - there are people who know jquery and dont know javascript, we want you to be javascript developers who know jquery. 

    ---
## Open VS Code 
1. create html
2. add cdn to html
3. open in the browser and see the cdn code
4. use minified. 

- Main thing we like to do with jquery is manipulate the DOM and to get stuff
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Jquery Practice</h1>
  <ul>
    <li>Ginger</li>
    <li>Snowdrop</li>
    <li>Pier</li>
    <li>RatCat</li>
    <li>CatDog</li>
  </ul>

  <p>Pets are awesome</p>

  <button id="clicky">Click Me</button>
  <button>Don't click me</button>

  <script src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="app.js"></script>
</body>
</html>

```
- Question: load in a javascript file should I do that before or after, need to load before. so we have it. 

- We should add in the class lint.rc
- it will tell us that we have a $ sign definded. 

```js

'use strict';

// Getting stuff with JQuery
// getters
// getters always return jquery objects, if you console.log them they look like S.fn.init(9)
// all jquery variables should be defined with a $. This is only for readability
//jquery uses the same targets as css so we can 
const $h1Element = $('h1');
console.log($h1Element);

const vanillaH1Element = document.getElementsByTagName('H1')[0];
console.log(vanillaH1Element);

const h1Text = $h1Element.text(); // jquery get the text
const vanillaText = vanillaH1Element.textContent; // vanilla get the text 
// .textContent(vanilla) is a property of DOM elements it is static and we can just read it so we can always update the property. 
// .text() (jQuery) is a method that has to go find the text

console.log(h1Text);

console.log($('p').text());




//jQuery Setters
//is the same function but when we give it new information it becomes a setter. 
// change things on the page(set their value to something)
$h1Element.text('OMG we changed the h1 with $.text(\'some text\')');


//in the console. set the ul text
//$('ul').text('pet');

// .text() is BOTH a getter and a setter depending on if we pass it an argument
//jquery cheetsheet google it. 
//as far as modify we use the attributes or manipulation we can use as getters and setters. 
//look at attr documentation  

// .attr
// .attr(attribute), .attr(attribute, newValue)
//type this  $('button:first-of-type').attr('id')); then console log.
                          //button:first-child its like the seventh. 
console.log('Button id', $('button:first-of-type').attr('id'));
//this updates the button id look at the inspector. 
//being able to read the text and change it will be apart of today's lab. 
$('button:first-of-type').attr('id', 'Jquery Did this to me');


// now---------------------lets look at this -----

console.log($('body').html());
// vanilla : .innerHTML
// $('body').html('<h1>This is all that is left!</h1>');
// $('body').html('');

//so we select the thing and then we update it. 

const doTheThing = event => console.log(event);
// /second argument is a call back function 
$('button').on('click', doTheThing);

/*
vanilla js 
const button = document.getElementById('button1');
button.addEventListener('click', doTheThing);
*/


//go to break here.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

```

# Break Message and Agenda for last hour of class. 
- 4 things after break 
1. How to build things with jquery.
2. Constructor function for our objects and then put that objects on the page. 
3. Then put those objects on to the page from a file. 
---
- start with shred talk 
4. then we will do our shred talk for our code challenge for the day. 


# Shred Talk -  Variables: Value vs. Reference
- **Why**
To understand the difference between the two.
 In Call by value, a copy of the variable is passed.
 In Call by reference, a variable itself is passed. 
 In Call by value, actual and formal arguments will be created in different memory locations. 
 In Call by reference actual and formal arguments will be created in the same memory location.


- In repl.it 
```js 
let a = 7;
let b = a;
//no nothing about one another after this assignment
let c = b;
let d = c; 
   
console.log(a,b,c,d);
b = 5000; //this deletes the 7 in b and replaces it with 5000

console.log(a,b,c,d);

// What are your predictions for the outcome
// 7, 5000, 7, 7
// 7,7,7,7
// 7, 5000, 5000, 5000
// 5000, 5000, 5000, 5000

// javascript primitive values are passed as the value not the original entity 
// when we change one variable, only onevariable changes because the rest are unrelated
// unique 
//primitives in js are numbers, strings, booleans, undefined, NaN, null
// the equal sign is not changing a 7 to 5000  

const z = ['cat'];
const y = z;
const x = y;
const w = x;
//when passing non primitives like objects and arrays, they are passed by reference and never contain the original they always point at the original so when the original is modified they all see the changes. 
console.log(z,y,x,w);
y.push('dog');
y.push('llama');
console.log(z,y,z,w);


//then
let z = ['cat'];
let y = z;
let x = y;
let w = x;
//when passing non primitives like objects and arrays, they are passed by reference and never contain the original they always point at the original so when the original is modified they all see the changes. 
console.log(z,y,x,w);
y.push('dog');
y.push('llama');
console.log(z,y,z,w);


//it has changed just one, the equal sign operator sets the variable, so if all our hands are on the cup but we tell it to point to a new cup and the rest are still pointing to the original 
x = ['dragon', 'unicorn'];
//if we do x . push x is pointing to this new array if we comment line 542 out it would add monkey to the previous array. 
x.push('monkey');
console.log(z,y,z,w);

// equal sign changes things right?  LAST EXAMPLE -----------------------------


//we are changing the value stored in the array, 
z[0] = 'Spartan';
console.log(z);
console.log(y);
console.log(x);
console.log(w);


// so if we change a key in an object it will effect all the objects where as if I reassign the object it just changes it for that one object. 

//object example. 

const doggo = {
  name: 'nova',
  cool: true,
  eats: 'kibble'
}

const dog1 = doggo;
const dog2 = dog1;

console.log(doggo);
console.log(dog1);
console.log(dog2);
// use dot notation or object access notation
doggo.name = 'catdog';
doggo['cool'] = 'mega cool;

console.log(doggo);
console.log(dog1);
console.log(dog2);

```
- **What**
# Overview
Let's consider the humble variable. While you've surely used variables extensively in your code, today we will explore some nuances of how they work in JavaScript. 

Behold a simple line of code:

```javascript
let age = 48; // I'm 48, I'm != old! 
```

What is happening here? How would you describe it in plain English to someone not familiar with programming?

You might say (or you might even have been told) that "age" is like a bucket, and we put the number `37` in to that bucket. Later, we might change what's in the bucket. 

But that analogy breaks down pretty quickly if we think about what's really happening. 

The variable itself is not actually holding any information. It's more like a sign post, indicating where (in computer memory) to find the value in question. If we need to change it, we alter what it's pointing to, and assign it to indicate a new value. 

Remember, the `=` in JavaScript is the "assignment operator", that sets a label (a variable) to point at a specific value. 

When you `assign` a literal value to a new variable, three things happen under the hood:

1. A certain amount of memory is allocated to hold the value.
1. The value is placed into that particular spot in memory.
1. The variable is set to point to that spot in memory.

But what happens when you assign a value that is already held in memory, to a new variable? The JavaScript interpreter has to make a choice. It can do one of 2 things:

1. It could simply set that new variable to point to the same spot in memory.
1. Or... it could repeat the process above: set aside more memory, copy in the value, and point the new variable to that spot.

These are often referred to, respectively, as "pass by reference" (because the location reference is transferred to the new variable), or "pass by value" (because a new value is added to memory, and indicated by the new variable). 

The first option here, pass by reference, is pretty efficient! No additional memory required, and it's just one step, instead of 3 steps. Yay! Additionally, assigning one variable to another would give us 2 different ways to access or change the same value. 

But the second option gives us more flexibility. If we pass by value, every time we assign a variable to another variable, we have a new copy, that can be independently modified. The price we pay for this flexibility is all the additional memory required to store all those copies. 

SO! How does JavaScript decide which method to use? 

```javascript
let newVar = existingVar; // WHAT WILL JAVASCRIPT DO?? Assign a reference? Or a new copy? 
```

Well, it decides based on what kind of value is being assigned. 

1. If the value is large, complicated, or could change its memory footprint, it's assigned by reference, so no copy has to be made. The new variable points to the same place in memory as the source variable. 
1. If the value is unchangeable (immutable), fixed size, and easy to store, it's assigned by copy. The new variable points to a new spot in memory, that contains a fresh copy of the source value. We call this "assigned by value".

Thankfully, JavaScript only has a small handful of common data types, so we can make a short list to keep track. They exist in just two categories:

* Primitive types: booleans, numbers, strings, ...
* Objects: Arrays, functions, and of course object literals, or custom types (instantiated with `new`), ...

Have you guessed? 

Primitive types are always passed by value, and Object types are always passed by reference. 

Let's look at some examples. 

```javascript
let line1 = "Where now?" // The string literal is immutable. The variable `line1` points to it.

let line2 = line1 // The string is copied to a new location in memory. The variable `line2` points to the new string. 

line1 = line1 + " Who now? When now?" // A new string is created. `line1` is adjusted to point at the new string.

console.log(line1) // "Where now? Who now? When now?"
console.log(line2); // Has not changed, is still its own copy of "Where now?"
```

But if we work with Object types, it's a different story... 

```javascript
let obj1 = { bradbury: "It was a pleasure to burn."}; // Allocate, populate, assign. 
let obj2 = obj1; // Simply point obj2 to the same spot in memory that holds obj1

obj1.vonnegut = "All this happened, more or less." // Modify the object by adding a new property

// Behold! The changes are reflected in obj2!! 
console.log(obj2); // {bradbury: "It was a pleasure to burn", vonnegut: "All this happened, more or less."}
```

Special attention should be paid to function calls. When an argument is passed in to a function, it is assigned as a parameter in that function's code. Think of it as lining up each argument with each parameter, connected with an assignment operator. 

```javascript
function appendZero(list) {
  list.push(0); // We can modify the array passed in directly! No return value needed! 
}

let a = [1, 2, 3, 4];
appendZero(a) // Passing this variable, is like saying `list = a`, so it's passed to the function by REFERENCE

console.log(a) // [1, 2, 3, 4, 0] It now has the modification, changed from within the function. 
```
## References and Resources
* [MDN - JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
* [Grasp "By Reference", "By Value" in JavaScript](https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
#  Paste in slack for the students. 
### Video for value vs REF.
- https://www.youtube.com/watch?v=8lVbQYfS0Rg&list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k&index=2
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.


# Start a new jquery website 
- jquery has the ability to use templates, so we can build out some raw code to refactor it from there. 

```html
<!-- Any thing is red is an attribute -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="reset.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Some Dogs</h1>
<!-- Add after demo of showing clones on page this is for the filter. -->
  <button>Only Show Clifford</button>

  <section>
    <!-- Templates -->
  </section>

  <ul>
    <li>
      <h2>Ginger</h2>
      <!-- add absolute path  with the forward slash -->
      <img src="/ginger.JPG" alt="Ginger playing">
      <p>Ginger playing</p>
    </li>
    <!-- <li>
      <h2>Ginger</h2>
      <img src="/ginger.JPG" alt="Ginger playing">
      <p>Ginger playing</p>
    </li>
    <li>
      <h2>Ginger</h2>
      <img src="/ginger.JPG" alt="Ginger playing">
      <p>Ginger playing</p>
    </li> -->
  </ul>
  


  <script src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="app.js"></script>
</body>
</html>


```


```css

img {
  width: 200px;
}
li {
  float: left;
}

/* li:first-child {
  display:none;
} */
```


```js


'use strict';

// const $dogClone = $('li').clone(); // get all the li, take the first
// console.log($dogClone);

//what was the vanilla js way of doing this?
//when doing this it checks the clone and sees it there and does not continue to add new dogs. 
// we are cloning the amount that was left, intented behavior it selects all instead of just the first one. instead of grabbing all of them 

// $('ul').append($dogClone);

// const $dogClone2 = $('li').clone(); // only get the first li
// $('ul').append($dogClone2);

// const $dogClone3 = $('li').clone(); // only get the first li
// $('ul').append($dogClone3);


//--------------------------------------------refactor------------------------
// const $dogClone = $('li').clone()[0]; // get all the li, take the first
//can do either way in lab but the [0] may be better for a list that will grow. 

// const $dogClone2 = $('li:first-child').clone(); // only get the first li
// $('ul').append($dogClone2);
// const $dogClone3 = $('li:first-child').clone(); // only get the first li
// $('ul').append($dogClone3);



function Dog (name, url, hobby){
  this.name = name;
  this.image_url = url;
  this.hobbies = hobby;
}


// not an arrow function because we want access to contextual this. 

Dog.prototype.render = function(){
  const $dogClone2 = $('li:first-child').clone(); // only get the first li
  // Goal: target the h2 of the cloned li
  // getter method .find();
  // `.find()` === `$()` except it only looks inside the object we call it on



  const $h2 = $dogClone2.find('h2');
  $h2.text(this.name);
  const $img = $dogClone2.find('img');
  //remember how we set the id in the getter and setter
  $img.attr('src', this.image_url);
  $img.attr('alt', this.hobbies);
  $dogClone2.find('p').text(this.hobbies);





  $('ul').append($dogClone2);
};

// const odie = new Dog('Odie', '/ginger.JPG', 'Annoying Garfield');
// const lassie = new Dog('Lassie', '/ginger.JPG', 'Saving Jimmy from the well');



//Add the css to hide the template. 


// odie.render();
// lassie.render();
// vanilla put on page: .append or .appendChild


//Last Part of Demo ------------------------------------------------------------------------------


// Retrieving from an outside source Copy Me::
// $.ajax('/data.json').then(stuffThatComesBack => {
//   console.log(stuffThatComesBack);
// });


//why we use the .then() method with ajax. 
// const allTheStuff = $.ajax('/data.json');
// console.log(allTheStuff);


//pass in call back function the stuffThatComesBack
$.ajax('/data.json').then(stuffThatComesBack => {
  console.log(stuffThatComesBack);

  // Code that needs the stuff from the other file belongs here

  // take the stuff that came back and put it through my constructor and then render it all

  const dogs = [];

// stuffThatComesBack.forEach((value, index, array ) => {
  stuffThatComesBack.forEach((dog) => {
    dogs.push(new Dog(dog.name, dog.image_url, dog.hobbies));
  });
  //see what our data looks like now, they are now apart of the Dog object and we can use the prototype.
  console.log(dogs);

  dogs.forEach(dog => { dog.render(); });

  // dogs.forEach(dog => {
  //   dog.render();
  //   dog.render();
  //   dog.render();
  //   dog.render();
  //   dog.render();
  //   dog.render();
  //   dog.render();
  // });
});


//Look at Lab Technical Requirements. 
//Look at Solution for tomorrow. an example. 



// Clicking and 'filtering'
$('button').on('click', () => { // In today's lab you need to filter only the images with the specific keyword
  //goal is to only show The Clifford li

  // get rid of the other ones
  // iterate and check if the name is clifford
  // if the name is clifford : render

  // OR

  // target all the list items and hide them
  // target the one with an h2 with text of 'clifford' and show it
  $('li').hide();
  // console.log($li:contains(Clifford));
  $('li:contains(Clifford)').show();




// in the lab the filter has one extra layer to it
// so that you can choose the others and  check which one we are filtering by not just clifford
});


```

## Lab Notes
- This is the first time students will see User Acceptance Tests in the `LAB.md` files. Spend about ten minutes discussing UAT when discussing the lab assignment towards the end of lecture.
# Lab Intro. 
Labs 2 and 3 go together and partners will be the same. 
- go through lab in canvas. 
- Show target of what it could look like solution code. 

# Passing an array into a function. 
Code Challenge Start as a pair and then work in your own repos, and work through solution on a white board, and figure out what the challenge is asking for.
- look to see what the tests are doing.






























  

 



