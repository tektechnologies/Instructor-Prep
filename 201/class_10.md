# Programming Concepts Covered

# Agenda

## Announcements
#### Don't forget. to....
- Commit More
- Turn off Projector
- Increase Screen Size.

### Debug
- Today is a review of some concepts we have already covered. And we will look at some salmon cookies projects that other people have done, that have some bugs in it and we will debug those. 
### Chocolate Pizza
- Then with some additional css review we will  do a paired assignment where you and your partner will construct a wireframe from 

- thumbs up how is your cookie salmon going, with a working sales page and style index? 

# Code Review. 
#### good practice
- Note if we encounter an error in our js it will stop the rest of the page from populating, and even keeps working code from continuing to run. So remember to fix errors before moving forward in the program and even avoid adding in additional code that could further cause issues within your code. 
#### redundate info in html pages
- In addition to DRY code we want to keep redundant data at a minimum and that will become even more important when we add in databases to our application in 301. The js is our logic of which data should be displayed. 
#### when does our html end up in the JS
- Modern single page web app the SPA pattern, where the actual html, just contains the basic div structure. Which is a normal build pattern. You will see that in 301. 
#### place holder form styling
- Place holder attribute. Is a 'bad' idea, as a user if I type in the box, I can not see what it was that I was supposed to fill in the input, not a great user experience, and it does not make the form accessible, in fact with out labels, it is not accessible by any screen readers. 
#### labels on forms. 
- We put labels on our inputs. 
- Materialize css.  to use the no label approach. Where the label is shown on click of the input box. https://materializecss.com/text-inputs.html
- CSS MUG!!!!
#### styling tables
- Styling the table is not an easy thing to do. And generally tables are not looked at as a first choice to implement. Once upon a time, they were a dev's friend. 
- document.getElementById('add-location').reset();
#### object methods - google it. 
- How do we find out more about how that function works, where do I go look for the information. So the reset function is a function that we did not create. What does it do? Let's go to the internet. 

### linking two html pages to a js page.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

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
# Here we can add a reset button example. 

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

#### In the console
- event.srcElement // shows the element reset button so find the parent element.

- event.srcElement.parentElement.parentElement.reset();// is where we find the form id. 

#### This is the add event listener format. 
- element.addEventListener('whichEvent', handlerFunction);

#### First Break. 

# JS review debugging. 
https://github.com/codefellows/code-201-guide/blob/master/curriculum/class-10/review.md

- Error messages are awesome!, No really they tell us what to do next. 
- We have some solutions that have some built in errors, that we get to review and fix, error messages help us identify what we need to change and update. 

#### first example. 
- Fishy Cookies. 
- Syntax Errors. 
- Unexpected end of input. 
- How is this sales page going? 
    * We have a page with no data. 
    * Our form is not rendering 
    * Error is on line 147

- What is an unexpected end of input
- Hover over, it is telling me we need a curly brace. 
#### how to start to trouble shoot. 
- So how do we start, with something you made recently, to match up curly brace
- We can highlight starting curly braces and look for the closing. //line 41
- So they are missing the curly brace from the for loop. 
#### NOTE.  If what I added doesnt work, I usually take it back out. 

#### need semi colon. 
- we need a semi colon at the end of any js statement, any js assignment. end of a line of code. 
- we dont need if it is an expression or a loop, or function declarations, not a statement. 

#### call stack for errors
- The call stack shows us the path with which our error was called. 

- Using array . push adds to the array and tells how many items were pushed. The new length is returned. 

#### second example 
- why is my cookie array full of nulls 
- this. cookiesSoldArray === undefined. // I get why the console is telling me that.
- this === the object with the null array. 
- Missing one letter in the array Name. 
- clicking twice on it will show you where the occurances are. 
- remove the debugger. 
- ASK did we make it better or worse? 
- We made progress right? 
#### Now figure out why the table is rendering null. 

- its not filling in the array very well, so lets look at where that is happening. 
- Random math functions look at the 
#### add a debugger on line 31 before the push to the array. 
- start adding the debugger in the smaller sections to see where we are doing what, where. 
- So lets look at the 
```js
    Math.random() * (this.max - this.min + 1)  // returns Nan 
 ```
 - the max and min are adding undefined which is NaN. 
 - How do we fix it, where are we storing them 
 - look at contextual this. // and we find that the naming is not the same and we remove        Customers

#### console log the in for loop .
for(var fruit in fruits){
    console.log(fruits);
}

- we are setting these properties on the constructor without the prototype deal with all of the stores data that all stores share in common but not individually. These are high level properties. With the prototypes, the stores have access to those function but do not have to call them on all the objects, we can call the method. 

- While in the global name space, we can access as CookieStand.all, setting those variables to be namespaced to the constructor. As it is a property on the cookie stand constructor. 

- Global variables are kinda a bad idea. Especially with multiple devs on a project with 1000's of lines of code. 

#### third example. 


- line 43 to investigate. 
- Remove the capitol C. 
- Does capitolization matter in JS? // yes it does. 
- Now on to the addEventListener.
- Something before the add is coming back null. It is acting on what comes before it. 
- so the object or the ....
- CookieStand.storeForm in the console is null. //store form is an id that we got earlier. 
- So it is not in the HTML, ask where should it be? 
- On the Form. 
- After we update the id name we still have an error, but I think we made it better. 
- Try and submit the form to see if it actually does the work. and it does. 
- sumSams is not defined. 
- So it is the only location and should pry be, ,... look at the page and guess that the bottom row is missing and then we will update the function name and watch it run. 


- var trEl = document.createElement('tr'); //set  trEl.id = 'cool-id';

# Time for Second Break. 
```js
// event Listeners : where, what event, what to do. 
```
- So lets add an event listener to the h1
- so we need an id on the h1, 
- No forms involved, 

```js
 var clickableH1 = document.getElementById('click-h1');
clickableH1.addEventListener('click', function(event)){
    console.log('H1 was clicked1');
});
```
- What element did I add this too? // it is an h1 in the html
- open console and click. 

- We can define other things that we want to have happen, we could do lots of things, but how about we say welcome to the site, through an alert, 

```js 
var clickableH1 = document.getElementById('click-h1');
clickableH1.addEventListener('click', function(event)){
    //console.log('H1 was clicked1');
    alert('Welcome to the site!');
});
```

- great that is working now lets change the background color

```js 
 var clickableH1 = document.getElementById('click-h1');
 clickableH1.addEventListener('click', function(event)){
    document.getElementByTagName('html')[0].style.backgroundColor = '#23F';
});
```
- from documentation online examples
- document.getElementById("myDiv").style.backgroundColor = "lightblue";
- alert(document.getElementById("myDiv").style.backgroundColor);

#### the style method on the object
[STYLE OBJECT](https://www.w3schools.com/jsref/dom_obj_style.asp)
#### Syntax for the background property.
- Return the backgroundColor property:
### object.style.backgroundColor
- Set the backgroundColor property:
#### object.style.backgroundColor = "color|transparent|initial|inherit"
[BACKGROUND](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp)


#### randomize the background color. 
https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript

```js 
 var clickableH1 = document.getElementById('click-h1');
 // we can also do things like 'mouseover' https://developer.mozilla.org/en-US/docs/Web/Events
 clickableH1.addEventListener('click', function(event)){
     var randomNumber = Math.floor(Math.random() * 256 * 256 * 256);
    document.getElementByTagName('html')[0].style.backgroundColor = '#' + randomNumber.toString(16);
});
```



- So one thing to note is that we are calling on things while listening on another.
- so we set where we listen as to oppse what we effect and where the change occurs. 
-  * where - are we listening
   * how - are we accessing  the where (element)
   * what - are events to take place. 



# Additional event add listeners to demo 
- add an id to an input on the html form
- target the page h1 to change the text. 
- To update while the user types. 

```js
var changeText = document.getElementById('change-text');
              //forms have 'change'
changeText.addEventListener('input', function(event){
                      //  Tag
    document.getElementByClassName('h1')[0].textContent = event.srcElement.value
});

```
- change event fires when the next change occurs as soon as it loses focus it will run. 

- auto fill behavior in chrome. it is a useful feature. but we can prevent by saying autocomplete="off" which you can apply to an element or the form. 
- As a dev we can go into the console and turn them on 


#### input password update in console show case. 
- create an input <input id='showPassword' type="password" />
- in the console 
```js
    document.getElementById('showPassword').type = text;
```

#### here are the input types list. 
[types and inputs](https://www.w3schools.com/html/html_form_input_types.asp)





# Labs
## check goals from lab 9 with index styling. 
### Your public-facing index.html page should include the following:
- locations with addresses,
- hours open
- contact information
- Anything else you feel neccesary.
- A link to your sales.html page
- Be sure to also include a link to your index.html page on your sales.html pages as well.



#### 10 A. Chocolate Pizza  B. finish salmon cookie  C.git practice 
- timed due wednesday night, paired. 
- Finish the index.html Deploy to git hub pages, otherwise no new feature tasks. 

- I will slack out your partners. 