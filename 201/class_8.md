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