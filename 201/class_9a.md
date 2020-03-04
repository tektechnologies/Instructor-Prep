# Programming Concepts Covered
# 2 hours on code review today. 


```js
'use strict';
// javascript connected
console.log('js connected');

// Problem Domain
//Create a new branch for today’s lab.
// Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.
 
//calculate cookies sold per hour
//calculate cookies sold per day
 
//build a single table of data using render().
//Get the table from the html.
//create a row.
//create a td.
//get city name and set to text content.
//append that td to the table row.
//loop through the hours length, create td's w/ text content of cookies sold per hour then append td to the row.
//then append tr to table.
 
//Now render the bottom row the day hourly totals from each store added up.
//for each city in the cities array add to the hourly total that cities total for that hour after looping through all the cities, create a td and set the textcontent to hourly total and append it to the row.
// When I see this I know that I am going to need some html basically a table setup
//6:00am7:00am8:00am9:00am10:00am11:00am12:00pm 1:00pm2:00pm3:00pm4:00pm5:00pm6:00pm7:00pm  Daily Location Total
 
// Seattle                                                          
// Tokyo                                                            
// Dubai                                                            
// Paris                                                            
// Lima                                                         
// Totals              
 
// Each cookie stand location should have a separate render() method that creates and appends its row to the table
// The header row and footer row are each created in their own stand-alone function
//Put our function calls here.
```
- It’s ok that students feel confused with the nested loop. 2 parts to writing good code. 
- Organize what it is going to do
- Translate strategy into the code. 


### Do the form in the html even if you have the js skills, good advice. 
# Show Class 8. html forms and js evens. on Screen.
# Announcements.
- We are going to look at two new concepts today, with code review and how constructors work and then add in forms and events. More new Javascript concepts, today's will be just as challenging. This is the second of the two hardest days of 201. 
- Any logistical questions? How are you all feeling? Thumbs? 
- Side waysizes

- Code Review is a time for us to review code together. Try to expand on the code review solutions, to not just implement to code but understand it, so as to be able to create your own code. 
- Does the student have a ReadMe. file. It is vital to document your code correctly. To comunicate to other developers how your program works and what requirements there are for the application to perform correctly. 
- Make sure to have, several format properties added to your page layout. 
- Is the math right? You should check your math outcomes. You could add customers to the count of one. So that you can easily see the math outcome.
- Lets find the constructor and review what it is doing? 
- Update the customers to one and the avg cookies to one as well. 
- Does it work? check in the table. 
## Know how the totals row works
## Know how to set the names on the left side
## totals for each hour
## how the table is being made 
## how are we populating the table
- Before we jump into code lets look at what our code is doing. 
- Lets look at the strategy of what the code is doing. 
- What are the three or four main jobs that our javascript is doing things in. 
- Look at each others code. 

- What are the numbers to come up with to figure out the store. 
- Displaying the information into the table on the page, by way of the DOM traversal.
- Creating the arrays to save stuff too, saving it to a variable. 
- So generate the numbers for the day 
- So the hourly totals for the footer. 
- Put the names of the cites into the array. 
- As we review code you can compare how the solution was achieved, differently than how you came to the solve the problem. 

1. Calc a # of people per hour, between min/max and saving to an array.
2. Put those #'s into the table in the DOM with city name and total
3.Hourly Totals Footer

- Start review with where the app begins the start of work towards rendering data to the page. 
- The point of a constructor is to keep our code dry, and having something like sending it an [] everytime does not seem as efficient as if I just put the empty array in the constructor and each instance will automatically set the property to be an empty array, which is what we need. 
- Makes life slighty easier as a developer. We also avoid sending in data to the constructor instead of an empty array. 
- ``` new ``` is what we use when we call our constructor functions. 

- IN CONSOLE 
- What is the data type of cityArray == Array

- cityArray[0] is what data type?
- cityArray[0].cityName.length is what data type == Number
- Arrays of objects that have properties give us the access to drill down into that object to get those smaller pieces of data from the array. 

```js 
 function calcAndRenderSale(){
    cityArray[i].randomCustomerPerHour();
    cityArray[i].setCookiesSoldPerHour();
    cityArray[i].setCookiesSoldPerDay();
    cityArray[i].render();
    cityArray[i].estimateTotalGlobalSales();
}
 ```
- Have the student start to review the code that is working and begin to run through the application. 

- Possibly white board the function order to have students draw the path of the code in the javascript file. 

- The strategy is that we will need to create a peice of data, and then run a for loop to add more data and then add another piece of data to finish the row. 
- You could add some content to the empty 'cell'

- comment out the append sales hours to table and ask them what is going to happen. 
- take the hours total table and move it up to the top and ask what is going to happen?
- The order in which we append things make a difference. 
- Comment out the top row, to show that we have to add the append to get that row to show up. 
- Any questions on how the header row is being displayed? 

**Break Time**
- Now lets look at the main pieces of strategy that we said we would look at. 
- How it calcs
- How  it is showing up.
- Look at the calc and render sales functions. 

- Ask another student what does random Customer per hour do?
- Calling the salesHours length number of times, push into th array a random number of customers multipied by how many cookies they buy. 
- Console.log 
```js 
cityArray[0].cookiesSoldPerHour;
```
- the array will already have things in it, as many as the hourly numbers 14 and then the 15 the total numbers. 
- It is possible to have a separate variable that tracks the total. 
- In general I only use template literals if I hae addition data being added in at that moment. 
- Talk about the FOOTER of the store. 
- Pseudo code approach / English problem. 
```js
// create the row and append the first td that says total
// for each hour of the day
// var hourlyTotal = 0; 
// I want to loop through each of my cities. 
// for each cities in the cities array I am going to add to my hourlyTotal the City total
// then I will create a td and set text content to hourlyTotal and append it to the row.
// So I need to Keep trackof hourly total as well. 
// Add my hourly total to my grand total. 
//create/append/td with grand total.
```
- We need a nested loop to show this. 
- There are two parts to wrtiting good code. 
1. Have a good strategy.
2. Write out the psuedo code.

- This is known as algorithmic thinking. This is hard, this is like the second week of course curriculm and you are not expected to be fully proficient.

- It takes practice to write out a good strategy, to code.

- This is separate from the prototype because our object dont need to know how to render a footer. 

```js
function renderFooterThisWay(){
    var footerRow = document.createElement('tr');
    var totalId = document.createElement('td');
    totalId.textContent = 'Total');
    footerRow.appendChild(totalId);

//To do rest of row. So far we have a row and space for numbers. 
var tableFoot = document.getElementById('div-id');
tableFoot.appendChild(footerRow);

}

```

- There are many ways to solve this but I want to show this one as an example, and maybe useful for lab today. 

### ---------------------------------------
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
    //go through cities to get total
    for(var j = 0; j < cityArray.length; j++){
        //add to my  hourly total the city total for that hour. 
        //Lets look in the console. 
    debugger;
    // we have two variables i and j, that are arrays. 
    // so go to city array and find the number for how many cityArray[j] which should be seattle, how many cookies for that hour of the day, so grab the new array and give me the cookies at [i] which is where I want to look right now. 

    /**
    cityArray[j]
    cityArray[j].cookieSoldPerHour
    cityArray[j].cookieSoldPerHour[i]
    Should return a number.
    */
hourlyTotal = hourlyTotal + cityArray[j].cookiesSoldPerHour[i];
//now I have my hourlyTotal
    }
    //two things add hourly total to grand total and append it to the row
    grandTotal += hourlyTotal;
    //display the hourly total for each hour.
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