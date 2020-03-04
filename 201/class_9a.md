# Programming Concepts Covered
# 2 hours on code review today. 

- event.preventDefault(); Keeps the page from refreshing. 
- Number type returns a string? new feature js doesnt always break becuase type coercion it see the types as numbers to do the math. 

- step value in the input  ```js <input step=".01"> ````


- having the prototyp makes it so that we have access to our constructor so that we can do things like add event listeners and reuse our code. 


- because I have not commited on master I can still run normal commands to create a branch and the changes will be applied. 

- store data must be run before the hourly array data is being run, if we try to grab something from an array that is undefined and undefined plus undefined is Nan.

- Call after render table. 


- Do git remote -v
- git remote set-url origin to your repo. 

- Make sure to only call the prototype functions on the individual new object not rerun the the whole of all the objects when program starts. 


- for random we add the 1 to create the ceiling and then use Math.floor to be able to get to the bottom of random range. 


- return is a hard stop on any function. so if we return inside the loop the loop will stop. 


- Find the responsible peice of code and change it to do something better instead. 

- If something is going wrong we dont wnat to add more to fix the problem. 

- Modify code and reduce refactoring when possible. 
- debugger 
- console this before this 
newDataRow.textContent = this.shopName.

- Start the debugger and stop and check the this.shopName to see if you get it again. 
## Event listeners 
- Which element are we listening to? 
- What event are we listening for on that element
-What js code should run when that event happens

# Working in the console today 


### What is NaN 
-       5 = ['apple'];




- We are going to look at two new concepts today, with code review and how constructors work and then add in forms and events. More new Javascript concepts, today's will be just as challenging. This is the second of the two hardest days of 201. 
- Any logistical questions? How are you all feeling? Thumbs? 
- Side waysizes



 

```

**Second Break**

- When you are back we will talk about forms and events. 
```js
function renderFooterThisWay(){
    var footerRow = document.createElement('tr');
    var totalId = document.createElement('td');
    totalId.textContent = 'Total');
    footerRow.appendChild(totalId);
//Set Table Data
var grandTotal = 0;
for(var i = 0; i < salesHour.length; i ++){
    var hourlyTotal = 0;
    for(var j = 0; j < cityArray.length; j++){
        hourlyTotal = hourlyTotal + cityArray[j].cookiesSoldPerHour[i];
    }
    grandTotal += hourlyTotal;
    var hourlyTotalTd = document.createElementById('td');
    hourlyTotalTd.textContent = hourlyTotal;
    footerRow.appendChild(hourlyTotalTd);
}
var grandTotalTd = document.createElement('td');
grandTotalTd.textContent = grandTotal;
footerRow.appendChild(grandTotalTd);
var tableFoot = document.getElementById('div-id');
tableFoot.appendChild(footerRow);
}
```

# Show them what will look different about there project today, show the finished form working.
## Explain what is happening while adding a new store, show the additions made to the cookies hourly array. Which is what is happening today. For Lecture lets talk about forms and events. 


#### Lets talk about forms. 
- We will get out our Pet adpotion project and start adding that form. 

- tag you use is <form>
- inputs are the most basic thing that will show up in the form. 
- so lets add an input. and that will add something to the page. Which we can type things into. 
- Now what? (Thats' it there is nothing else. but we didnt have to code out if user types e into input display the letter e)

- We don't know what to type in so let's tell the user what to type into the input. 
- When we have multiple inputs we can use the <label> to provide a label for the input box. 
- Input tags are self closing. 
- Now we have three text boxes. 
- Each with a label. 
- Now lets connect the label to the input, we will use the attribute tag on the label, for="breed" 
- now we should id the input with the same name as the for in the label. 
- if we click on label input gets curser automagically, this is good for screen reader as well. 
- Good for accessibility. 
- So far we have talked about the form tag, inputs and labels, what questions do you have about that. 
- Lets look at handling input validation to manage what users may want to enter into the text boxes, 
- Lets add a type to our input, now what is different in our input, we can't type words. 
type='number' , type='date', 

- Lets add a button to our form. 
- So now lets type our stuff in form and what happens when we click submit, 
- By default it will try to send something over the internet by default. 
- So in the working demo, we can see a box, around the form and a title like name of the form. 
- So, the last two thing that we can add to our form is a feildset, and we can add the 
- Lengend tag for titling the fieldset for the form. 
- Legend descripes what the form's function is. 
- it autmatically renders where we want it to. 
Since the html for the form will look the same each time it makes more sense to leave it in the html file. 
- This makes it possible to do something after the fact on our page. 
- Lets' look at events. 
- which element are we listening too. (form)
- What events are we listening for on that elements. - are we waiting for user to hover over, what type of events can we listen for. 
- what js code should we run when that event happens. 
- We are saying that we want something to happen on an event, this event is the button submit, 
- And we dont want it to happen when the page loads, 
- When I click the button I am going to listen for the submit. - forms in the browser can type things into a form and then hit enter it will submit the form, and then button will not have clicked, listen for user to submit the form,
- Listen to form the 'submit event'
- what code to put in there usually start with a console.log
- How should I grab the html form in my javascript. 
- we should call it where we are rendering it . 
- we should use the document.getElementById
- Well lets add an id to our form, 
```js
id="newPet"
```
- lets go to the bottom to where the driver code for the page is and we will type out our event listener on the form. 

- 1. Which element.
```js 
    var formElement = document.getElementById('new-pets');
```

- 2. Which event am I listening for
formElement.addEventListener('submit', functionName);



- 3. What code should run when that event happen

- on the form element we add an event listener. first thing we pass in is what we are listening for, the submit, the second parameter is going to be a named piece of code and use that to repesent what we want to run, we create a function or a named peice of code. 
```js
function handleFormSubmit() {
console.log('Form Submission Working');
}
```
```js
formElement.addEventListener('submit', handleFormSubmit);
 ```
- So it worked but the page was refreshed and we want to stop that so that we can see the console.log
- So we add in the prevent the default(because the default is that submitting a form refreshes the page )
- so lets add a parameter to this function. because the browser passes me an argument with an object about the event that just happened, and one of the useful things in that object is. 
- event.preventDefault();


```js
function handleFormSubmit(event) {
event.preventDefault();
console.log(event);
}
```

### What do I want to do with the data I typed in? 


```js

function handleFormSubmit(event) {
event.preventDefault();
console.log(event);
var newPet = new Pet('Labrador', 35, 'Best Friend');
//render that pet instance to the page.
}

```
newPet.render();

- Keep clicking so why does this happen?
- We do know that it is working up to this point. 
- So lets grab the data that the users put into the inputs, how do we access those inputs? 
- In the console we type 
```js
var breedInput = document.getElementById('breed');
//type breedInput to see the input tag
// now type 
//breedInput.properties(alot of them)
//breedInput.value will give us what the user typed in. 

```
- So lets use that to pull out that information. 
```js 
var breedInput = breedInput.value;

```
- or 
```js 
var breedInput = breedInput['value'];

```

- You do not need persistence / storage for new things today, we will talk about that next week. 

- Have constructor function working, and basic render, then you can move on to this, and then leave footer for last of all. if you have to finish that. 










```html
    <form id="new-pets">
      <fieldset>
        <legend>Add new animal to the shelter</legend>
        <!-- for in a label matches id of the input -->
        <label for="breed">Breed</label>
        <input id="breed" />
        <label for="weight">Weight</label>
        <input id="weight" type="number" />
        <label for="description">Description words</label>
        <input id="description" />
        <button>Add the animal!</button>
      </fieldset>
    </form>
```

```js

// take in the event parameter so that we can prevent the default
function handleFormSubmitted(event) {
  // prevent the default (because the default is that submitting a form refreshes the page)
  event.preventDefault();
  console.log(event);
  // actually add a new pet to our table

  // get the data about the new pet from the inputs
  var breedInput = document.getElementById('breed');
  var breedValue = breedInput['value'];
  var weightInput = document.getElementById('weight');
  var weightValue = weightInput.value;
  var descriptionInput = document.getElementById('description');
  var descriptionValue = descriptionInput.value;
  // use our constructor to create a new pet instance
  var newPet = new Pet(breedValue, weightValue, descriptionValue);
  // render that pet instance to the page
  newPet.render();
}

// set up event listener on the form
// 1. Which element?
var formElement = document.getElementById('new-pets');
// 2. Which event am I listening for?
// 3. What code should run when that event happens?
formElement.addEventListener('submit', handleFormSubmitted);```