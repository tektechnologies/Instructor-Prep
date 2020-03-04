# Programming Concepts Covered

**Hello, good morning, happy day…,** 

### Explain the lab for today and Tuesday and that the 
- lab friday is chocolate pizza and explain the format of the lab activity. 

- Ties in the wireframe lab today as practice for tomorrow’s lab. forms and js events 
- What questions do you have about that for now? 

### Do the form in the html even if you have the js skills, good advice. 
# Show Class 8. html forms and js evens. on Screen.
# Announcements.

# first hour 
- review the app and how it is working 
- review constuctors and 
- the new walk through the app. 
- render footer total if needed. 
- calculations in code, ask students what they are doing, 
# second hour look at 
- take break 
- talk about pseudo code. 
- Start code challenge, 6 questions 
# third hour 
- take break
- CSS layout. 
- jess intro lab
```js

// Student submitted example of commenting prior to building out javascript. 
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
# What are the three or four main jobs that our javascript is doing things in. 
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

# Start review with where the app begins the start of work towards rendering data to the page. 
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

# comment out the append sales hours to table and ask them what is going to happen. 
- take the hours total table and move it up to the top and ask what is going to happen?
- The order in which we append things make a difference. 
- Comment out the top row, to show that we have to add the append to get that row to show up. 
- Any questions on how the header row is being displayed? 

**Break Time**
- Now lets look at the main pieces of strategy that we said we would look at. 
- How it calcs
- How  it is showing up.
- Look at the calc and render sales functions. 

# Ask another student what does random Customer per hour do?
- Calling the salesHours length number of times, push into th array a random number of customers multipied by how many cookies they buy. 
- Console.log 
```js 
cityArray[0].cookiesSoldPerHour;

```
- the array will already have things in it, as many as the hourly numbers 14 and then the 15 the total numbers. 
- It is possible to have a separate variable that tracks the total. 
- In general I only use template literals if I have addition data being added in at that moment. 
- Talk about the FOOTER of the store. 
- Pseudo code approach / English problem. 
# show what pseudo code is. 
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
# There are two parts to writing good code. 
1. **Have a good strategy.**
2. **Write out the psuedo code.**

- **This is known as algorithmic thinking.** This is hard, this is like the second week of course curriculm and you are not expected to be fully proficient.

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



## Todays' CSS practice 
We will look at some information pertaining to laying out our pages, and look at how to start those style assignments. 
With the styling assignments, provide guidance on how to approach the problem domain, start from top to bottom, and use printouts and draw some boxes. 

Use an example of a wireframe that you’ve drawn, then ask the student to start identifying the components of the wireframe and translate them into html elements. 


 # Mob Debug the class lab's first hour. 
- Pull Request with repo to push. 
- parseInt has to be an integer number. Will not include the decimal if you try and type one in. 





# white boarded several code challenges

- js review -
- verify there work
- we will have about 7 chances to solve some challenges

- math with decimal is not perfect because of how numbers are represented in the computers. it is built in to js, 







# CSS REVIEW 
# inline-block 
**display: inline-block Value**
Compared to **display: inline**, the major difference is that display: inline-block allows to set a width and height on the element.

# inline 
**display: inline-block** the top and bottom margins/paddings are respected, but with **display: inline** they are not.

# Block
**display: block**, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.


# Lab 8a 
- we give you a wire frame to make in html, you can use what positioning you want to make the page, 
- Here are some guide lines to creating a wireframe to help start this process. 

- we have place holder spots, to show us what our demensions will be, so as a developer how will these break down on my page and what styles will I need to apply to get the elements on the page to move where I need them to go. 
 
 - Industry term Red Lines specifiy width of things. 
 #### https://www.quora.com/What-is-redline-document-in-UI-designing


 show link to image samples online.

 - drawl out wireframe and do in class mapping of html elements. 

 ![WireFrame](/wireFrame.png)


 - it is up to you if you want to do the challenge or if you want to do salmon cookies. 

-if you are on a lab, and you are close to finishing, then try and do that, however breaks from js can help and doing some css will allow our brains to process what we are trying to do. 

- Lab 8b finish sales.html 

