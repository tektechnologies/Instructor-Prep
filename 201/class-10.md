# Class 10

## First Hour

- look over the lab 8a wireframe

## Second Hour

### Take Break 10 Minute

## Third Hour

## Announcements

### Debug

- Today is a review of some concepts we have already covered. And we will look
at some salmon cookies projects that other people have done, that have some bugs
in it and we will debug those.

---

### Chocolate Pizza

- Then with some additional css review. We will  do a paired assignment where you
 and your partner will construct a wireframe for a website.

- thumbs up how is your cookie salmon going.

## Code Review

## good practice

- Note if we encounter an error in our js it will stop the rest of the page from
 populating, and even keeps working code from continuing to run.
- So remember to fix errors before moving forward in the program and
- even avoid adding in additional code that could further cause issues within
 your code.

## redundate info in html pages

- In addition to DRY code we want to keep redundant data at a minimum and that
 will become even more important when we add in databases to our application in 301.
- The js is our logic in which we determine the data that should be displayed.

## when does our html end up in the JS

- Modern single page web app the SPA pattern, where the actual html, just
 contains the basic div structure. Which is a normal build pattern. You will
  see that in 301.

## FORMS - place holder form styling

- Place holder attribute. Is a 'bad' idea, as a user if I type in the box, I can
 not see what it was that I was supposed to fill in the input, not a great user
 experience, and it does not make the form accessible, in fact with out labels,
 it is not accessible by any screen readers.

## labels on forms

- We put labels on our inputs.
- Materialize css.  to use the no label approach. Where the label is shown on
click of the input box. <https://materializecss.com/text-inputs.html>

### styling tables

- Styling the table is not an easy thing to do.
- And generally tables are not looked at as a first choice to implement.
- Once upon a time, they were a dev's friend.

---

### linking two html pages to a js page

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith>

```js
if(window.location.pathname.endsWith('sales.html')){
    buildTable();
    buildTotal();
    buildEmployeeTable();

} 
if(window.location.pathname.endsWith('index.html')){
    for(var i = 0; i < cookieStand.length; i++) {
        var newLine = document.createElement('li');
    newLine.textContent = `${cookieStand[i].location}: ${hoursOfDay[0]- ${hoursOfDay[12]}`;
    mainLocationsHolder.appendChild(newLine);
    }
}

```

---

## Here we can add a reset button example

```js

document.getElementById('resetbutton').addEventLister('clickReset', function() {
    event.preventDefault; 
    //otherwise it will do it on its own, and I want to prompt the user.
    //debugger;
    if(confirm('Are you sure you want to reset the form?')){
        event.srcElement.parentNode.reset();
    } else {
        //do nothing
    }
});
// This is calling the fieldset. 
```

---

### In the console

- event.srcElement // shows the element reset button so find the parent element.

- event.srcElement.parentElement.reset(); is where we find the form id.

#### This is the add event listener format

- element.addEventListener('whichEvent', handlerFunction);

---

## JS Errrrors

- Error messages are awesome!, No really they tell us what to do next.

## how to start to trouble shoot

- If what I added doesnt work, I usually take it back out.
- ASK did we make it better or worse?
- We made progress right?

## need semi colon

- we need a semi colon at the end of any js statement, any js assignment. end of
 a line of code.
- we dont need if it is an expression or a loop, or function declarations, not
a statement.

### call stack for errors

- The call stack shows us the path with which our error was called.  

- we are setting these properties on the constructor without the prototype deal
 with all of the stores data that all stores share in common but not individually.
These are high level properties. With the prototypes, the stores have access to
those functions but do not have to call them on all the objects, we can call the
method.

- While in the global name space, we can access as CookieStand.all, setting those
 variables to be namespaced to the constructor. As it is a property on the cookie
stand constructor.

- Global variables are kinda a bad idea. Especially with multiple devs on a
project with 1000's of lines of code.

## Time for Second Break

```js
// event Listeners : where, what event, what to do. 
```

- So lets add an event listener to the h1
- so we need an id on the h1,
- No forms involved,

```js
 var clickableH1 = document.getElementById('click-h1');
clickableH1.addEventListener('click', function(event){
    console.log('H1 was clicked1');
});
```

- What element did I add this too? // it is an h1 in the html
- open console and click.

- We can define other things that we want to have happen, we could do lots of
 things, but how about we say welcome to the site, through an alert,

```js
var clickableH1 = document.getElementById('click-h1');
clickableH1.addEventListener('click', function(event){
    //console.log('H1 was clicked1');
    alert('Welcome to the site!');
});
```

- great that is working now lets change the background color

```js
 var clickableH1 = document.getElementById('click-h1');
 clickableH1.addEventListener('click', function(event){
    document.getElementByTagName('html')[0].style.backgroundColor = '#23F';
});
```

- from documentation online examples
- document.getElementById("myDiv").style.backgroundColor = "lightblue";
- alert(document.getElementById("myDiv").style.backgroundColor);

### the style method on the object

[STYLE OBJECT](https://www.w3schools.com/jsref/dom_obj_style.asp)

#### Syntax for the background property

- Return the backgroundColor property:

### object.style.backgroundColor

- Set the backgroundColor property:

#### object.style.backgroundColor = "color|transparent|initial|inherit"

[BACKGROUND](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp)

### randomize the background color

<https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript>

```js
 var clickableH1 = document.getElementById('click-h1');
 // we can also do things like 'mouseover' https://developer.mozilla.org/en-US/docs/Web/Events
 clickableH1.addEventListener('click', function(event)){
     var randomNumber = Math.floor(Math.random() * 256 * 256 * 256);

    document.getElementsByTagName('html')[0].style.backgroundColor = '#' + randomNumber.toString(16);
});
```

document.getElementsByTagName('html');

- So one thing to note is that we are calling on things while listening on another.
- so we set where we listen as to oppse what we effect and where the change occurs.
    - where - are we listening
    - how - are we accessing  the where (element)
    - what - are events to take place.

## Additional event add listeners to demo

- add an id to an input on the html form
- target the page h1 to change the text.
- To update while the user types.

```js
var changeText = document.getElementById('change-text');
              //forms have 'change'
changeText.addEventListener('input', function(event){
                      //  Tag
    document.getElementsByClassName('h1')[0].textContent = event.srcElement.value
});

```

- change event fires when the next change occurs as soon as it loses focus it
 will run.

- auto fill behavior in chrome. it is a useful feature. but we can prevent by
 saying autocomplete="off" which you can apply to an element or the form.
- As a dev we can go into the console and turn them on

### input password update in console show case

- create an input <input id='showPassword' type="password" />
- in the console

```js
    document.getElementById('showPassword').type = "text";
```

#### here are the input types list

[types and inputs](https://www.w3schools.com/html/html_form_input_types.asp)

## Labs

## check goals from lab 9 with index styling

### Your public-facing index.html page should include the following

- locations with addresses,
- hours open
- contact information
- Anything else you feel neccesary.
- A link to your sales.html page
- Be sure to also include a link to your index.html page on your
 sales.html pages as well.

#### 10 A. Chocolate Pizza  B. finish salmon cookie  C.git practice

- timed due wednesday night, paired.
- Finish the index.html Deploy to git hub pages, otherwise no new feature tasks.

- I will slack out your partners.

Debugging Workflow:
check browser console & resolve all error messages
look at file name, line number of error, and error type
check for useful linter messages near the source of the error
console log the value you are trying to work with
note all of the places in your code that define or modify the value you are working
 with try commenting things out, then adding them back. work backward until you
find the first source of error
try calling functions or inspecting vars in console
is the value named correctly?
is the value defined?
is the value the right type?
does the object have the props/methods you expect?
does the function return the value(s) it should?
are you calling the function with the right number/type of arguments?
does the array have the number/type of elements you expect?
inspect the HTML elements
do all the elements exist in the HTML?
is the HTML hierarchy correct?
does the element actually have an event listener attached?
does the element have all the attributes you expect?
have you mixed up a class & an ID?
