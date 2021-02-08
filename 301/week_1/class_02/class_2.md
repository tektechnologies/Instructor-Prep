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
html```
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
 float: left;  <!-- doesnt change display property  -->
  <!-- we could try display: inline-block;   turns them into inline and block so that they take up height and width -->
  height: 25px;
  width: 100px;
}
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

```

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

//STRETCH - CHALLENGE 7

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

```

### Demonstrate the solution code for CSS layouts.
### Point out the proper use of SMACSS principles
### Whiteboard out other ways of marking this up with styles














# Shred Talk -  Variables: Value vs. Reference
- **Why**
To understand the difference between the two.
 In Call by value, a copy of the variable is passed.
 In Call by reference, a variable itself is passed. 
 In Call by value, actual and formal arguments will be created in different memory locations. 
 In Call by reference actual and formal arguments will be created in the same memory location.
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

# Second Break 10 minutes. 
# MVC

- **Why** (5 min)
  - It is a design pattern used in JavaScript applications
  - It will help you build better applications
  - Separation of concerns
- **What** (10 min)
  - We can break apart an application into three parts:
    - Model: this would be like a constructor function or a database
    - View: this would be the part the user views
    - Controller: this is the server, which we will cover later
- **How** (10 min)
  - Draw this out on a whiteboard for the students.
  - This is a great time to incorperate the WRRC.
  - You can mention a broad overview of what a server is but tell the students that we will talk about it later.



### jQuery
# Discuss delegation 
### jQuery saves us time and effort
- jquery is a javascript library. 
- created in 2006. 
- using css selectors in your javascript. 
## Takes care of all browser idiosyncrasies

- **Why** (5 min)
    - $ = Money
    - jQuery saves us time and effort
    - Simple syntax
# Common API

- Ajax is a set of web development techniques using many web technologies on the client side to create asynchronous web applications.
- this is how we go out and fetch some data to use in our site. 
- inside the ajax function 
```js 
   
```
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
    - What Selector works?
    - DOM Objects
- **What** (10 min)
  - 2 Principle ways to interact
    - `$("selector").method()`
    - `$.jQueryMethod()`
  - Dive into how these types of function calls operate.
    - Syntax looks similar to Vanilla
    - Break them down
- **How** (30 min)

- so we can let jquery do the work for us. 
- lets look at using a template
- walk through html css and then jquery to display html. 
- using clone of template. 
```html 
   <div class="dog-template">
       <h2></h2>
       <img src="/" />
       </div>

```
```js 

Dog.prototype.render = function(container){
 let $container = $(container);
 let $template = $container.find('.dog-template');
 let $dog = $template.clone(); 
//we have to remove our template class after we clone it 
//$dog.removeClass('dog-template');
 $dog.find('h2').text(this.name);
 $dog.find('img').attr('src', this.image_url);
 $container.append($dog);


}
```
- idea of templating will come up again and again. 
- best practice is to avoid building with html in js especially with variables. 
- static html is not so bad. 
- you can chain methods. 

  - Demo on jQuery Selectors and Events
  - Demo on jQuery reading a file
- **Experimentation and Discovery Ideas**
  - Refactor between Vanilla and jQuery to get students correlating
  - Prompt them for ideas and build an app with them interactively
  - Optional: Build out the `jquery-diy` (get) mini library with the class to see if they can figure out how jQuery was created.
    - This is fun and very informative, but not a learning objective
    - It's great if you have a class that's above average and wants to dive in deep

## Lab Notes
- This is the first time students will see User Acceptance Tests in the `LAB.md` files. Spend about ten minutes discussing UAT when discussing the lab assignment towards the end of lecture.
# Lab Intro. 
Labs 2 and 3 go together and partners will be the same. 
- go through lab in canvas. 
- Show target of what it could look like solution code. 
# Passing an array into a function. 
Code Challenge Start as a pair and then work in your own repos, and work through solution on a white board, and figure out what the challenge is asking for.
- look to see what the tests are doing. 



