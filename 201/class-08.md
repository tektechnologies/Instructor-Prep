# First Hour





# Review Challenges
## Use console.log for printing things out. We will complete these review challenges together as there's time.

## Challenge 1
Write a piece of code that creates a variable 'numberOfChugga' and sets the value of that variable to 4. Then, write code that uses that variable to print out the word 'chugga' 4 times, and then at the end prints out 'choo choo!' once.
```js
let numOfChugga = 4;
while(numOfChugga > 0){
    console.log('chugga');
    numberOfChugga--;
}
console.log('Choo Choo!);
```

## Challenge 2
Write a function called 'getTwo' that takes in no parameters and returns the number 2.

```js 
function getTwo(){
    return 2;
}
```
- what data type is getTwo // it is a function 
- what data type is this getTwo() // it is a number. 
- getTwo() + 5 // becomes a string 7
- getTwo() - 5// becomes -3
- getTwo -5 // because its math it return Nan

## Challenge 3
Write a function called `addTwo` that takes in one parameter, a number, and returns 2 more than the input number.
Input | Output
------|-------
0     | 2
7     | 9
-5.4  | -3.4

## Solution
```js 
function addTwo(number){
  return number + 2;
  }

addTwo(2);
addTwo(getTwo());//4
addTwo(getTwo(),getTwo()); //4
addTwo('2'); //'22'
```

## Challenge 4
Write a function called `repeat` that takes in two parameters, a string and a number, and returns the string repeated that many times, with spaces between repeats.
Input | Output
------|-------
`'a',0` | `''`
`'a',1` | `'a'`
`'a',2` | `'a a'`
`'a',4` | `'a a a a'`
`'abc',3` | `'abc abc abc'`

## Solution
```js
//going to need a loop
function repeat(string, number){
    let answer = '';
    //some code here and test. 
    for(let i =0; i < number; i++){
        answer = answer + string + ' ';
    }
    //add in the answer.length -1
    return answer.substring(0, answer.length);
}

```
```js
//we dont want space on the ends
function repeat(string, number){
    let answer = '';
    for(let i =0; i < number; i++){
        answer = answer + string + ' ';
    }
    return answer.substring(0, answer.length -1);
}
//
function repeat(string, number){
    let answer = '';
    for(let i =0; i < number; i++){
        answer = answer + string;
        if(i < number - 1){
            answer = answer + ' ';
        }
    }
    return answer;
}
```

## Challenge 5
Write a function that takes in 2 parameters, a string and a number, and returns a string consisting of the number, followed by the string, followed by an 's' if the string should be pluralized based on the number.

Input      | Output
-|-
`'cookie', 1` | `'1 cookie'`
`'cookie', 2` | `'2 cookies'`
`'cookie', 12` | `'12 cookies'`
`'cookie', 0` | `'0 cookies'`
`'salmon', 1` | `'1 salmon'`
`'salmon', 2` | `'2 salmons'`
`'mouse', 3` | `'3 mouses'`

## Solution
```js
function takeTwo(string, number){
    let stringResult;
    if(number > 1){
     stringResult = `${number} ${string}\'s`;
    } else {
      stringResult =  `${number} ${string}`
    }
    return stringResult;
}
```

## Challenge 6
In what order will these `console.log` statements run?
```javascript
console.log(1);
function doStuff() {
  console.log(2);
}
console.log(3);
function doThings() {
  console.log(4);
  doStuff();
  console.log(5);
}
console.log(6);
doStuff();
console.log(7);
doThings();
console.log(8);
```

## Challenge 7
What will this code log to the console?
```javascript
    let a = 2;
    let b = 3;
    console.log(a + b);
    let c = a;
    a = 7;
    console.log(a);
    console.log(c);

    function printTheThing(a) {
        console.log(a);
    }

    printTheThing(4);
    printTheThing(b);
```
















































# Second Hour


### Take Break 10 Minute

# Third Hour













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

```js
//Create a layout of tech req, if students are having a hard time visualizing.
// Student submitted example of commenting prior to building out javascript. 
// Problem Domain
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
// let hourlyTotal = 0; 
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
    let footerRow = document.createElement('tr');
    let totalId = document.createElement('td');
    totalId.textContent = 'Total');
    footerRow.appendChild(totalId);

//To do rest of row. So far we have a row and space for numbers. 
let tableFoot = document.getElementById('div-id');
tableFoot.appendChild(footerRow);

}

```

- There are many ways to solve this but I want to show this one as an example, and maybe useful for lab today. 

### ---------------------------------------
```js
function renderFooterThisWay(){
    let footerRow = document.createElement('tr');
    let totalId = document.createElement('td');
    totalId.textContent = 'Total');
    footerRow.appendChild(totalId);
//Set Table Data
let grandTotal = 0;
for(let i = 0; i < salesHour.length; i ++){
    let hourlyTotal = 0;
    //go through cities to get total
    for(let j = 0; j < cityArray.length; j++){
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
    let hourlyTotalTd = document.createElementById('td');
    hourlyTotalTd.textContent = hourlyTotal;
    footerRow.appendChild(hourlyTotalTd);
}
let grandTotalTd = document.createElement('td');
grandTotalTd.textContent = grandTotal;
footerRow.appendChild(grandTotalTd);

let tableFoot = document.getElementById('div-id');
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































```js 


//returns     these
// VM18:3       5
// VM18:6       7
// VM18:7       2
// VM18:10      4
// VM18:10      3


```







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
// let hourlyTotal = 0; 
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
    let footerRow = document.createElement('tr');
    let totalId = document.createElement('td');
    totalId.textContent = 'Total');
    footerRow.appendChild(totalId);

//To do rest of row. So far we have a row and space for numbers. 
let tableFoot = document.getElementById('div-id');
tableFoot.appendChild(footerRow);

}

```

- There are many ways to solve this but I want to show this one as an example, and maybe useful for lab today. 

### ---------------------------------------
```js
function renderFooterThisWay(){
    let footerRow = document.createElement('tr');
    let totalId = document.createElement('td');
    totalId.textContent = 'Total');
    footerRow.appendChild(totalId);
//Set Table Data
let grandTotal = 0;
for(let i = 0; i < salesHour.length; i ++){
    let hourlyTotal = 0;
    //go through cities to get total
    for(let j = 0; j < cityArray.length; j++){
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
    let hourlyTotalTd = document.createElementById('td');
    hourlyTotalTd.textContent = hourlyTotal;
    footerRow.appendChild(hourlyTotalTd);
}
let grandTotalTd = document.createElement('td');
grandTotalTd.textContent = grandTotal;
footerRow.appendChild(grandTotalTd);

let tableFoot = document.getElementById('div-id');
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

