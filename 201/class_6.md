
## Today's Agenda
1. Announcements
2. Code Review of lab 5A (using template literals)
3. Lecture. JavaScript Objects
4. Introduce Salmon Cookies. (Finish each lab before moving forward.)

# Announcements 
- Read asignments will be close throughout the week if you did not complete them, I can open on Fridays, let me know. 
- This week we will have one on one meetings. 
- Cover feedback information from week one. 
 
# What we will work on today. 
- Translate a real-world problem domain into a code model.
- Browser represents an HTML document as an object that can be manipulated with JavaScript.
- We Use JavaScript to dynamically render array data into the site page from the DOM
- Demonstrate an understanding of how object literals are structured in JavaScript
- how to access and reassign values/functionality to their properties and methods
- Demonstrate an understanding of how dot notation and bracket notation are used to access/reassign properties and methods in JavaScript objects.

## Code Review
  - Demonstrate how to solve the problems from the lab.
  - This is also their first exposure to callbacks, so
  - point out that the inner function will evaluate first, then be used as an argument to the outer function, as in the `sumAndMultiply` and `sumArray` functions.
  
## Template Literals
A smaller topic for today is the introduction of ES6 template literals. Let us look at how to refactor the concatenation from week 1 lab 5a into template literals.

# Open up the homework lab 5a. 

### Problem 2
1. What data type is our return statement?  //A
2. What are at index 0 and index 1. 
3. What is going on with that string.
4. Instead of single qoutes and plus sign
5. Use back tics, by the one key.
6. Using dollar sign and curly braces to pull in those variables.
7. Template literal: use backticks instead of single qoutes.  
8. Using backticks alert me as a dev that something weird is about to happen. If I am writing a regular string, I will just write it as a string.   
9. The template literal does make things shorter and more readable and I can more easily see what the out come of the line will be. 

#### start with this problem
```
function multiply(a,b){
    return [a * b, `The product of ${a} and ${b} is ${a * b}. `];
}
```
# Console Log Demo 
- sum(4,7) returns an array
- sum(4,7) + 11 returns a string value with the sum answer concating to the 11. 
    Looking like 11.11
- var ans = sum(4,7);
- ans.push(12)
- returns, the array with 12 at the end. 

- If I wanted to get the first element out of this array what would I do?
- ans[0] give me the first thing out of that array.
- we could do this -
- sum(3,7)[0] - this is the number ten. Which we can now use as an argument to another sum. 
- So sum(sum(3,7)[0], 5);
- Will give us sum(10,5) === 15 ===[15]

- So we start out small and build up to get the answer we are looking for. 
- When I call sum it always returns an array with the number at the first elements and the string which is th second position number 1. 
- So if we put in a one it will return the string. I can access the element using the bracket notation. 

- So, I can also sum(sum(3,7)[0], 5)[0] can grab back the next step value in the console, and now I have a value that I was looking for, now I am ready to add some code. 
- So I can follow the same pattern in the mulitply functions and get the first element back from the array. 
- multiply(multiply(a,b)[0], c)[0];

### Problem 3

// TODO: Write your code here
```
function sumAndMultiply(a,b,c){ //eslint-disable-line
  var theSum = sum(sum(a, b)[0] ,c)[0];
  console.log(theSum);
  var product = multiply(a, multiply(b,c)[0])[0];

  return [theSum, product, `${a} and ${b} and ${c} sum to ${sumAnswer}. `,

  `The product of ${a} and ${b} and ${c} is {product}.  `];  
  return [theSum, product, message1, message2];
}
```

# The What is that game.
# //////////////////////////////////

- multiply(a, multiply(b,c)[0])[0];
- ---------------------------------
- data type of a, b, multiply. 
- a is a parameter passed in a  Number and b too. 
- multiply is a function 
- b and c are Numbers. 
- they are together an array, with a num and a string. 
- [0] gives us the number out of the array. 
- c is also a number 

- object is always a good answer because everything in javascript is an object, but multiply returns an array. 

- so the second multiply function that returns an array, has a [0] that just returns the number. 

#  this ends the code review. 
# /////////////////first break.///////////////////////
 
## Domain modeling (30 min)
# What is the hardest thing about writing code?
- There are many common answers to this question:
1. Learning a new technology
2. Naming things
3. Testing your code
4. Debugging
5. Fixing bugs
6. Making software maintainable

# Domain Modeling
 [HERE](https://www.scaledagileframework.com/domain-modeling/).
- Domain Modeling is a way to describe real world entities and their relationships between them. How do we store that data in a way that makes sense. 
- We can take a problem domain and extract from them system requirements by determining what entities are involved and the relationships required. 
- The system architect is usually the one responsible for domain modeling and emulates it through drawings that highlight the "verbs" of each action that takes place within the system and how it links in the overall data flow. 
- Domain modeling allows stakeholders and development teams to better understand the needs of the application and what components/entities are required. 
- The real world is a messy place.  Many of the problem domains we face as programmers are difficult to understand and look completely different depending on your viewpoint. Which is why diverse teams of developers are considered more valuable than(old white guy white fall ways)
- As programmers, we also are often not given complete information about the problem domain, so we don’t even have the information we need to understand it.
#### programmer experience
- Can it be easy? 
- "I was essentially given the entire problem domain in the form of a spec that was clear and unambiguous.  I was easily able to learn that problem domain and because of it, I was able to write the code very easily as well." 

- What can we do about it?
If understanding the problem domain is the hardest part of programming and you want to make programming easier, you can do one of two things:
### Make the problem domain easier
1. Get better at understanding the problem domain.
2. You can often make the problem domain easier by cutting out cases and narrowing your focus to a particular part of the problem.

It ultimately comes down to how the problem is organized and defined. It is important to stress that there is no substitute for good planning, and that if a problem seems too big to effectively define, then it needs to be broken down more. There are two articles on this subject, [one by a former Code Fellows instructor (Ryan Sobol)](https://github.com/codefellows/domain_modeling#domain-modeling) and another by [a tech education entrepreneur](https://simpleprogrammer.com/2013/07/15/understanding-the-problem-domain-is-the-hardest-part-of-programming/). It's a good time to talk about some business parts of the tech industry and the basic economics of how people get paid to do this work.
#### Lets look at some links. 

- Arrays 
1. Store multiple pieces of data
2. access data with square brackets. 
3. data has index (number) and the index in arrays start at 0. 
4. idices give us order 


## Built-in Objects
1. String, Array, Document, Math

## Object literal notation (30 min)
# Lecture Notes   Draw these
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

var person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
    };
-----------------------------------------------------------------------------
### Objects Literal (do what for us) - store multiple pieces of data 
1. Access data w/square brackets or dot notation. 
2. Store multiple pieces of data 
3. data has a key and a value, 
    - keys are strings.
    - no order, just keys. 
    - Keys have a one way direction. 
    - We look up values by there keys.

### What do Curly Braces allow us to do?
1. store code block within a function. 
2. They also allows to wrap our if statements to control our logic rules. 
3. And now we will use them with our objects. 

## Accessing Properties & Calling Methods
1. accessing properties
   1. dot notation
   2. bracket notation - w/string, outside variable. multi-word keys
1. calling methods
   1. `objectName.method();`
   2. methods declared in context of an object must be called in that context, so calling `method();` gives an error

## JavaScript Objects

var person = {
    name: 'Craig Barkley'
}

person.name
person['name']
- Both return the same value. 
- In general I use dot notation, but there are some times when you want to use the string.

1. bracket notation that does work vs. dot notation that does not. 

person['first-person-location'] = 'Work';
- Uncaught ref error.  

### JS is looking at the dashes as subtraction.
- So, we cant access with dot notation. 
- Camel casing is nice here as well, so that dot notation is still a viable way to access property values. 

2. Using bracket notation is useful when I look up values through a variable. 
var keyIwantToLookUp = 'name';

person.keyIWantToLookUp //undefined
person[keyIWantToLookUp] 
- I can use this variable here, because the bracket notation expects a string and that is what we get from the var keyIWantToLookUp, when saved in a variable some where. 

# Add another key/value pair. 

var person = {
    name: 'Craig Barkley',
    age: 47
}
person // shows name and age. 
# ------------------------------------------------------------------------------------------------------------------------------Start to use the code fellows demo lab code------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------
# move from console to a js file. 
- Build out scaffolding, test links. 
- Add object, then add more properties. 
# Play the Game what are these things? 

- Save an image URL of a Person. Put each on there own line. 
- When defining multiple key value pairs, 
- We have stored strings, numbers, but we  can also store an array, and a function
```
- description: ['young','old','funny']
```
- comma vs ; at end of the k/v pairs. 
- Data Type of person is an object. 
- Access an array with bracket notation and a number. 

<!-- ##  ASK what is this its a function and what does it return. 
```
person.description[1].length or .toUpperCase() the whole thing is a function. 

```
- toUpperCase() is a function that returns a string value.
 -->

## Repeat here that an object is.....
- In JavaScript, an object is an entity that contains properties that describe state and behavior of the object. 
- Properties that describe behavior are also called methods. 
 
<!-- 
### JavaScript is what we call an object-based language. (There is a difference.)
- https://www.google.com/search?q=object+based+language+vs+object+oriented+language&rlz=1C5CHFA_enUS862US862&oq=object-based+language.+vs+object+oriented+&aqs=chrome.1.69i57j0l7.8303j0j7&sourceid=chrome&ie=UTF-8

Just about everything in JavaScript is an object. 
# We create objects directly through a template (we will get to this later), and not through classes, like other languages. 

## Classes are still used in JavaScript but are not touched on in 201.  -->


# Basic Object talk done. Now that we have an object lets add to it. 

When accessing the properties of the object, there are two different ways to do so, dot notation and bracket notation. 

Dot notation is the more common and popular approach to accessing the properties of an object. Dot notation is specifying the object directly and calling the name of the property through a dot `.`. The reason this is preferred over bracket is because it is easier to read and less verbose. 

[HERE](https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781) 








--------------------------------------------------
# There are two ways for creating an object in JavaScript that we will cover in 201:
1. Object literals 
2. Instantiating objects with the new keyword through a constructor function
# We are going to focus on object literals today and will talk about constructor functions tomorrow. 

### Object Literals
Object literals are the simplest way to create a JS object. The syntax for it is mostly based off of key/value pairs. This means that when you create your object, you define the properties (keys) of an object, you must also give it a value.


# Object Literals -  HUH? 
  goal with JS objects is to model real-life entities that have characteristics (properties) and behaviors (methods). 
  - describe properties as nouns,
  - values as adjectives,
  - methods as verbs.

<!-- Here is an example of what a JS object looks like:

```js
var person = {
	name: "Craig Barkley",
	age: 47,
	computerScientist: true,
    education: ['Southern Illinois University', 'DeltaV']
}; 
```-->

#### Note a few things about the object:
1. We create objects the same way we create variables. We start out with the declaration of the variable followed by the data we are setting the value too. 
2. The full object value is encapsulated with curly braces `{}`
3. Each set of data in the object is known as a property. This is showcased through a key/value pair. The "key" is the name of the property, and the "value" is the value stored in the property. For example, the `name` property is the key, and the value of `"Craig Barkley"` is the value. This means that within the object, the "name" of the person is "Craig Barkley". The same thing is true for the key `age`. The key is `age` the value is `47`. 
4. After every property, if there is another one to follow, we end with a comma `,`.
5. Properties can store any valid javascript value, even other objects.  

<!-- 
```js
console.log(person.name) // Craig Barkley
console.log(person.age) // 47
console.log(person.education) // Southern Illinois University, DeltaV
``` -->
# Methods in an object. 
Methods in an object are the behaviors/actions of an object. For example, our `person` object should be able to actually "do" things, not just hold properties. Our `person` should be able to...walk. This means we should give our person this capability. We do this through what we call methods. At first sight, methods look like properties. That is because they are, method is the name we give to "properties" that have the values of functions. Here is an example, using our `person` from above:

```js
//Contextual this looks inside the object to get the value from the object.
//Looks for global variables but not key/value pairs in an object
// A method is just a function of an object that we call on that object. 

var education = ['a','b','c'];

var personOne = {
	name: 'Craig Barkley',
	age: 47,
	computerScientist: true,
    education: ['Southern Illinois University', 'DeltaV', 'SWIC', 'JJC'],
    code: function() {
      console.log('I am coding now!....');
    // return education[0];
    // return this.education[0];
     return this.education[
         Math.floor(Math.random() * this.education.length) 
         ];
  }
 };
```
- Show contextual this working.

#### Contextual 'this'
The term `this` is a bit tricky to understand at first.  `this` is directly talking about whatever object is currently being manipulated. 
# scoped accessor. 

## this
1. complicated!
1. changes based on context.
1. when calling a method in the context of an object, `this = the object`


<!-- ```js
var personTwo = {
	name: 'Bob TestUser',
	age: 20,
	computerScientist: true,
    education: ['UofI', 'CF', 'UCLA', 'NIU'],
    code: function() {
        console.log('Bob\'s schools are different.);
     return this.education[
         Math.floor(Math.random() * this.education.length) 
         ];
  }
 };
``` -->


- The first thing we can notice about or newly added method is that it is an anonymous function. 
- This means that there is no "name" to the function, just simply an associated property. 

If we wanted to "call" this method within our object, we would simply call it by first specifying the object, then the name of the method. 

```js

person.code(); // output: is console log and a school.

```
<!-- #### Adding new props

When adding NEW property methods, we will use the `=` instead of the `.` because we are assigning a value to the object. Example
```js
person.serviceBranch = 'United States AirForce';
```
As a result, `person` now has a newly added property named `serviceBranch` with a value of `United States AirForce`. -->
<!-- 
## Modifying Objects
1. adding new properties, methods
	1. use `=` instead of `:` because we're assigning a value

```javascript
sam.employer = {
  name: 'Code Fellows',
  location: 'Seattle'
};

sam.logName = function() {
	console.log(this.firstName + ' ' + this.lastName);
};
``` -->

# Start Lab after last Break. 

So, last week we used prompts and alerts for creating a dynamic interface with the users who visit our site, this is not the most desired way to communicate information to an audience, so this week we are going to add in some useful ways to make our page more dynamic. 





## The DOM (30 min)

### Steps
1. Make a JavaScript reference (a variable) to the parent element
1. Create the child element we want to add and save it as a variable
1. Give the child content - in this case, the content is text
1. Append the child to the parent

# Adding Something to the DOM
**We can only add ONE THING AT A TIME.**

```js
var parent = document.getElementById('parentElement');  
var child = document.createElement('p');  
child.textContent = 'Some words we want in our p element';  
parent.appendChild(child);
```



## The DOM
"The DOM" 
(
 Document - takes our html document
 Object - makes objects
 Model - using the domain modeling
 ) 
 is where the HTML and CSS that we have been learning about this whole time come together to create a very powerful document that we use in our browsers. Within our browser, when looking at a webpage, we see HTML and CSS come together to create a structure that we can in turn see headings, images, links etc....

Browsers represent the html document as a JS object. This means that we can access individual components of "The DOM" the same way we would access individual components of a JS object. 

We access the dom by using the variable that is created automatically called document.
So my goal is use the js objects that we created and show some of that content to our actual page. 
<div id="person-holder">
<!--
   camelCase
   UpperCamelCase
   kebab-case
   snake_case
   -->
</div>

Now that I have the id I can access it in my javascript, 


Here is a quick exercise to prove this point: in the console.

1. type `document` in the console within your browser
1. find `document.body`
1. actually type in `document.body`
1. change the document.body.textContext = 'to something else'
1. look at all the options on the `document.` dot notation.
<!-- 
Within the `document` object, we have a method in there called `getElementById`. This allows us to "get a specific element within the HTML by specifying the id"

One thing to note **we can only add one thing at a time**.
 **must have a unique id attached to it**. 
```
person-holder.textContent = 'This is where the information goes about the persons';
```
In addition to setting text we could add some paragraphs and some images, so we ask the dom to creat a new element for us, from our js file. 
#### create a paragraph tag inside the person-holder.
```
var newParagraph = document.createElement('p');

```
#### and now, set the content for the paragraph

```
newParagraph.textContent = personOne.name;

```
#### then we will append that element to the page where we want it to show up. 
```
personHolder.appendChild(newParagraph);

```
#### We can see the new empty para in cosole.


#### get fancier create an array of persons

```
var people = [personOne, personTwo];

```
#### now that they are in an array, I can loop through them, 

```
for(var i = 0; i < people.length; i++){
var newParagraph = document.createElement('p');
personHolder.appendChild(newParagraph);
}
```
#### Now show the text content being set.

```
for(var i = 0; i < people.length; i++){
var newParagraph = document.createElement('p');
newParagraph.textContent = people[i].name;
personHolder.appendChild(newParagraph);
}
```



```js

var personOne = {
	name: 'Craig Barkley',
	age: 47,
	computerScientist: true,
    education: ['Southern Illinois University', 'DeltaV', 'SWIC', 'JJC'],
    code: function() {
    console.log('I am coding now!....');
     return this.education[Math.floor(Math.random() * this.education.length)];
  }
 };
 
```

```js

var personTwo = {
	name: 'Bob TestUser',
	age: 20,
	computerScientist: true,
    education: ['UofI', 'CF', 'UCLA', 'NIU'],
    code: function() {
   
     return this.education[
         Math.floor(Math.random() * this.education.length) 
         ];
  }
 };
```



Here is the JS code to add a `p` tag to our `div`

```js
var parent = document.getElementById('parentElement');  
var child = document.createElement('p');  
child.textContent = 'Welcome to our persons object demo.';  
parent.appendChild(child);
```

```HTML
<div id="parent">
  <p>Some words we want in our p element</p>
</div>
``` -->



# Talk about the lab
Plan your work out. It is worth it to plan it out. Make basic functionality first the work on css, no more than 15 minutes to start.
bottom of page setup instructions. 
create a new branch each day. 
- can add separate branches for streght goals. 

This is a large lab assignment. If you are having trouble breaking it down, please reach out and get some ideas on how to help. 

<!-- 

1. clearing & removing
   1. set value to '', 0, or null
   1. `delete` operator

## Prototypes
1. Every object has a prototype. It can be assigned explicitly, or is set to the global Object by default
1. All objects have the props & methods of their prototype
1. If a prop or method can't be found on the object itself, the JS engine will look up the prototype chain for it

- There is a lot of potential for DOM manipulation and JS objects. We could potentially make a `render` method on one of the JS objects that can render these new HTML tags as a list to our page when called:

```js
render: function(){
  var parent = document.getElementById('parentElement');
    for(var i=0; i < people.length; i++){
      var newTag = document.createElement('li');
      newTag.textContent = myArray[i];
      parent.appendChild(newTag);
    }
}
``` -->