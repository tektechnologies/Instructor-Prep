# Class 04

## Code Review Topics

- Review Truthy/Falsy
- <https://dorey.github.io/JavaScript-Equality-Table/>
- Review Arrays Question 7
- Review Loops Question 6

---

### Demo

```js

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

---

```javascript
1 === 1     -> true
1 == '1'    -> true
1 === '1'   -> false

let a = 10;
let b = 100;
a < b         -> true
a >= 50       -> false

(a + b === 110) -> (10 + 100 === 110)
                -> (110 === 110)
                -> true

(a + b > a - b) -> (110 > -90)
                -> true

(a === b && true) -> (false && true)
                  -> false

((a !== b) || (a < b)) -> (true || true)
                       -> true
```

---

## Statements vs Expressions

[Statements vs Expressions Comparison](https://bit.ly/3Ls4xq3)

- Statement vs Expression: the expression does a computation, but nothing is
 done with it, with a statement we group expressions as a way to express
 our conditions to do something with the computations. (??)
- So `x *= 5` is explicity implying the assignment of the variable value to x.

## Array

- Arrays are a ref datatype to hold other data. They are not primitive.
var fruits = ['apple','orange','bob','fred','tom'];

## Variable

- Variables allow us to give things in our code human readable values that
 we can use throughout our code.
- Attributes happen in html: form, image, input elements all have the ability
 to add attributes to them. In the form:

```html
 <label for="name">
 <input type="text">
 <button type="button">
```

## Data Types

To determine what type of data type a value is, use `typeof(differentThings)`

---

### Code Review question 6 or 7

debugger.  Guessing Game walk through

open the inspector to console before you reload the page,

- what debugger does is stops the code where we put it and then we can
 step through our code  to see exactly what is going on with these variables.

Type in the variables and see what values have been assigned to the variables.

- In case, the input is a "string" and the number is a Number 10.
- We can fix by taking away an equal sign, which is not best practice, while
 that would work we want to covert, the string to a number.

#### Search number conversion javascript

- ParseInt, Number
numGuess = parseInt(input);

- We can use the parseInt to chain to other methods, like

```js
   var numGuess = parseInt(prompt('Try again, Guess Higher!'));
```

### Method .includes()

- We can use the method .includes()
.includes() works on strings and sub strings.

---

## Second Hour

### CSS layout

- Introduce codepen.io
- Review box model
- Introduce Positioning
- Absolute
- Relative
- Fixed
- Block vs inline-block vs inline

### review hex colors as the RGB

- Let them know we will calculate hexidecimal in class 5.

## Pro tip

- The idea of your design will most likely not be what your
 final page looks like

- So we start with a low fidelity, rendering of the page, called a wireframe.
- css is the part of the coding process that will take as much time as you
give it, that may not be the best use of our time, so maybe time box or save the
 work until the end of the day.
- Label out the page as to what we may think we might need, with marking up
 some elements.
- Now we have a basic structure, we can start to add some styling.
- Add up to two css declarations.
- Use a span, a span is an inline element.

### Rerender the page to see that the tag does nothing by itself

- add a **border** to see what the span is doing.
- Try text-align, but didnt change anything because we are aligning it right
 in the tiny red box. So we could do a margin left, of 75%, when we shrink page,
 the margin does not operate the way we want.

## Lets try a new property the position property

---

## relative

- relative - meaning relative to where ever it was supposed to be otherwise.
Start with where are you supposed to be and then move accordingly, we can use
negative values to move relative values. Switching from abs to rel are not used
very often, unless we are looking for a specific spot. Because there are weird
side effects that change the way other things get laid out near by.

- So, we should think of these layout issues early on to avoid being lost in what
 our css is doing to our elements.

---

## fixed

- fixed - position fixed at first may look like nothing has changed from absolute,
 however the position fixed keeps the element in position while content on the page
  moves around it.

---

## absolute

- absolute.
Absolute we set what the spacing should be.
set absolute top-bottom-left-right within the page. It doesnt matter what the
parent element is or doing it now goes where ever you tell it to go. Lets you leave
the parent element and what it is doing. It is possible to use it within the element.
We can keep the elements grouped together so that screen readers can access that
grouped data, possibly styling too.

---

### inline and block level elements

- So now what we need to talk about is inline and block level elements.
anchor tags ? are they block or inline. It is an inline element. Because it doesnt
 take up the whole line.
- If we add an **h5 those are block level elements**, so we can see the element
 push the content down the page,
- As we have seen in our styles we can add a display of block, we dont standardly
 use block on inline elements.
Are **images inline or block level, they are inline**.
- We can change the image to block, but usually not a tool I reach for.

---

## End CSS Layout Demo

### Take Break 10 Minute

## Third Hour

### JS functions

- What are they?
- Anatomy of a function
- Parameters, arguments
- Calls/invoke
- Anonymous functions
- Scope

## Start Function Demo

## two more things to do today

brief look at **functions**. and how to do that within lab.
we will look more at functions in lab five.
so another thing today is that our lab is going to be **pair programming**.

- Start with a key word function
- Then give your function a name
- Then I will add the () so people can call it to the end of the name
- Next we add in the {}
- And within th curly braces I will put my code.

- If i go back to my browser nothing will work? why.
- Because we need to call it.
- So I think of a recipe, a function is the recipe, but in order for the recipe to
 work I need to run the recipe, call for the ingredients
- If I put that call in the console it will run and if I want I can add it to the
 app.js file. which is the normal practice.

---

## Review Lab for the day
