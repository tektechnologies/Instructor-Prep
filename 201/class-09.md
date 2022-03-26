# First Hour


# Second Hour



# Third Hour
















# Anouncements

## More new Javascript concepts, two new concepts today
- with code review ~ how constructors work
- add in forms and javascript events.
- This is the second of the two hardest days of 201. 
- Any logistical questions? How are you all feeling? Thumbs? 
- Side waysizes?

---
# Hour One. 
**30 Minutes**
- Notes
1. What is a JavaScript Event?

2. What 2 arguments do we need to pass into the addEventListener() method for it to run correctly?

3. What is a callback function?

4. An HTML form is used to collect ________ input.

5. An <input> element can be displayed in many ways, depending on the _______ attribute.

6. What does event.preventDefault() do?


- Code Review.

# JavaScript Structure 
**30 Minutes**
1. Declare Global Variables
1. Declare Constructor functions - name should be capitalized!
1. Declare prototype methods
1. Declare regular functions
1. Add event listeners
1. Call functions

```javascript
//declare global variables at the top of your file
const globalVariable1 = 'hello';
const globalVariable2 = [0, 1, 2];
const myForm = document.getElementById('my-form');

//create an instance of PersonConstructor and save it to the sam variable
//note that we can do this before the constructor function declaration
const bud = new PersonConstructor('Bud', 'Squirrel', 'Macintosh');
const doyle = new PersonConstructor('Doyle', 'Stubs', 'Johnson');
//now sam = { firstName: 'Bud', middleName: 'Squirrel',lastName: 'Macintosh' }

//then put any object constructors
function PersonConstructor(first, nickName, last) {
 this.firstName = first;
 this.nickName = nickName
 this.lastName = last;
}

//then put any prototype functions that go with the object constructor
//call this function on an instance of PersonConstructor
PersonConstructor.prototype.sayHello = function() {
 console.log('Hello, my name is ' + this.firstName);
}

//then put regular function declarations
function firstFunction(parameter) {
 console.log(parameter);
}

function secondFunction(myArray) {
 for (i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
 }
}

function formHandler(event) {
 console.log(event.target);
}

//then add any event listeners
myForm.addEventListener('submit', formHandler);

//finally, call your functions
firstFunction(globalVariable1);
//logs 'hello'
secondFunction(globalVariable2);
//logs  0
//  1
//  2
sam.sayHello();
//logs 'Hello, my name is Sam'

```












---

# Begin Chat Demo



# Hour Two. 
- Show them what will look different about there project today, show the finished form working.
**45 mins.**
- HTML Forms
1. FieldSet
2. Label
3. Input
4. <form> Tag.

# form

#### Lets talk about forms. 
- Pet adpotion project and start adding that form. 
- tag you use is <form>
- inputs are the most basic thing that will show up in the form. 
- so lets add an input. 
- Input tags are self closing. 


//show that we can get stuff from inputs
```js
document.getElementById('name').addEventListener('input', function() {
  console.log(this.value);
});
```








- When we have multiple inputs we can use the <label> to provide a label for the input box. 
- Each with a label. 
- Now lets connect the label to the input, we will use the attribute tag on the label, for="breed" 

- now id the input with the same name as the for in the label. 
## Good for accessibility.
- if we click on label input gets curser automagically, this is good for screen reader as well. 
## input validation to manage what users may want to enter into the text boxes, 
- add a type to our input, now what is different in our input, we can't type words. 
1. type='number'
2. type='date'

- Add a button to our form. 
- By default it will try to send something over the internet by default. 
- Legend should describe what the form's function is. 

# Lets' look at events. 
- which element are we listening too? (form)
- what js code should we run when that event happens? 
- what code to put where? First we usually start with a console.log
- What events are we listening for on that elements? - look up types of events to listen too.

- When I click the button I am going to listen for the submit. 
- Listen to form the 'submit event'
- How should I grab the html form in my javascript. 
- we should call it where we are rendering it. 
- we should use the document.getElementById

































---
# Hour Three

**50 mins.**
1. js Events.
2. addEventListener()
3. this.
- Lab Review.

## Event listeners 

- Which element are we listening to? 
- What event are we listening for on that element
- What js code should run when that event happens

# Event prevent default();
- event.preventDefault(); Keeps the page from refreshing. 
 
# Event listener parameters what they mean. 
- on the form element we add an event listener. 
1. thing we pass in is what we are listening for, the submit, 
2. second parameter is going to be a named piece of code and use that to repesent what we want to run, we create a function or a named peice of code. 
```js
      function handleFormSubmit() {
      console.log('Form Submission Working');
      }
```
```js
      formElement.addEventListener('submit', handleFormSubmit());
 ```
- So it worked but the page was refreshed and we want to stop that so that we can see the console.log
- So we add in the prevent the default(because the default is that submitting a form refreshes the page )
# Show how eventPrevent works. 
- so lets add a parameter to this function. because the browser passes me an argument with an object about the event that just happened, and one of the useful things in that object is. 
- event.preventDefault();
```js
function handleFormSubmit(event) {
event.preventDefault();
console.log(event);
}
```
### What do I want to do with the data I typed in? 

# Prototypes
- having the prototypes makes it so that we have access to our constructor so that we can do things like add event listeners and reuse our code. 


# Notes
- This is the third heavy class in a row. One of the less intuitive pieces is that the input fields will convert numbers to strings, so a reminder about using parseInt or Number is helpful.
- Make sure to only call the prototype functions on the individual new object not rerun the the whole of all the objects when program starts. 
- because I have not commited on master I can still run normal commands to create a branch and the changes will be applied. 
- Find the responsible peice of code and change it to do something better instead. 

# Random

- for random we add the 1 to create the ceiling and then use Math.floor to be able to get to the bottom of random range. 

# return
- return is a hard stop on any function. so if we return inside the loop the loop will stop. 


### If something is going wrong we dont wnat to add more to fix the problem. 
- Modify code and reduce refactoring when possible. 
- debugger 
- console this before this 
newDataRow.textContent = this.shopName.

- Start the debugger and stop and check the this.shopName to see if you get it again. 

## Explain what is happening while adding a new store, 
- show the additions made to the cookies hourly array. 
- Which is what is happening today. 

- You do not need persistence / storage for new things today, we will talk about that next week. 

- Have constructor function working, and basic render, then you can move on to this, and then leave footer for last of all. if you have to finish that. 









