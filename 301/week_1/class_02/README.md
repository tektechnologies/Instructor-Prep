


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






























  

 



