
# Explain the LAB for today and Thursday and that the

- LAB FRIDAY  is chocolate pizza and explain the format of the lab activity.
- Ties in the wire frame lab today as practice for tomorrow’s lab. forms and js events
- What questions do you have about that for now?
- Do the form in the html even if you have the js skills, good advice.
- Announcements.

# There are two parts to writing good code

1. **Have a good strategy.**
2. **Write out the pseudo code.**

- **This is known as algorithmic thinking.** This is hard, because it is the
 second week of course curriculum and you are not expected to be fully proficient.

- It takes practice to write out a good strategy, to code.

## show what pseudo code is

- It’s ok that students feel confused with the nested loop.
- 2 parts to writing good code.
- Organize what it is we are going to do.
- Translate that strategy into the code.
- Code Review is a time for us to review code together.

 Try to expand on the code review solutions, to not just implement to code
 but understand it, so as to be able to create your own code.

- Does the student have a ReadMe. file.
It is vital to document your code correctly.
To communicate to other developers how your program works and what requirements 
there are for the application to perform correctly.
- Make sure to have, several format properties added to your page layout.
- Is the math right? You should check your math outcomes.
 You could add customers to the count of one. So that you can easily see the math
 outcome.
- Lets find the constructor and review what it is doing?
- Update the customers to one and the avg cookies to one as well.
- Does it work? check in the table.
- Know how the totals row works
- Know how to set the names on the left side
- totals for each hour
- how the table is being made
- how are we populating the table
- Before we jump into code lets look at what our code is doing.
- Lets look at the strategy of what the code is doing.
- What are the three or four main jobs that our javascript is doing things in.
- What are the numbers to come up with to figure out the store.
- Displaying the information into the table on the page, by way of the DOM traversal.
- Creating the arrays to save stuff too, saving it to a variable.
- So generate the numbers for the day
- So the hourly totals for the footer.
- Put the names of the cites into the array.

### So now

- Have the student start to review the code that is working and begin to run
through the application.
- Possibly white board the function order to have students draw the path of the
 code in the javascript file.
- The strategy is that we will need to create a piece of data, and then run a for
 loop to add more data and then add another piece of data to finish the row.
- You could add some content to the empty 'cell'.
- The point of a constructor is to keep our code dry.
- And having something like sending it an [] every time does not seem as efficient
 as if I just put the empty array in the constructor and each instance will
 automatically set the property to be an empty array, which is what we need.
- Makes life slightly easier as a developer. We also avoid sending in data to the
 constructor instead of an empty array.

## Other topics to cover include 'new', datatype, render(), debug()

### 'new'

- ``` new ``` is what we use when we call our constructor functions.

### datatype

- IN CONSOLE
- What is the data type of cityArray == Array
- cityArray[0] is what data type?
- cityArray[0].cityName.length is what data type == Number
- Arrays of objects that have properties give us the access to drill down into
 that object to get those smaller pieces of data from the array.

### render()

```js
//example render function
 function calcAndRenderSale(){
    cityArray[i].randomCustomerPerHour();
    cityArray[i].setCookiesSoldPerHour();
    cityArray[i].setCookiesSoldPerDay();
    cityArray[i].render();
    cityArray[i].estimateTotalGlobalSales();
}
 ```

### debug() and white board the gathering of elements that we are appending

### comment out the append sales hours to table and ask them what is going to happen

- take the hours total table and move it up to the top and ask what is going to happen?
- The order in which we append things make a difference.
- Comment out the top row, to show that we have to add the append to get that
row to show up.
- Any questions on how the header row is being displayed?

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
    // so go to city array and find the number for how many cityArray[j] which
    // should be seattle, how many cookies for that hour of the day, so grab the
    // new array and give me the cookies at [i] which is where I want to look 
    //right now. 

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

```

### Take Break 10 Minute

# Second Hour

# Review Challenges

## Challenge 1

Write a piece of code that creates a variable 'numberOfChugga' and sets the value
 of that variable to 4. Then, write code that uses that variable to print out the
  word 'chugga' 4 times, and then at the end prints out 'choo choo!' once.

```js
let numOfChugga = 4;
while(numOfChugga > 0){
    console.log('chugga');
    numberOfChugga--;
}
console.log('Choo Choo!);
```

## Challenge 2

Write a function called 'getTwo' that takes in no parameters and returns the
number 2.

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

Write a function called `addTwo` that takes in one parameter, a number, and
returns 2 more than the input number.

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

Write a function called `repeat` that takes in two parameters, a string and a
number, and returns the string repeated that many times, with spaces between repeats.
Input | Output
------|-------
`'a',0` | `''`
`'a',1` | `'a'`
`'a',2` | `'a a'`
`'a',4` | `'a a a a'`
`'abc',3` | `'abc abc abc'`

- Solution

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

Write a function that takes in 2 parameters, a string and a number, and returns
 a string consisting of the number, followed by the string, followed by an 's' 
 if the string should be pluralized based on the number.
Input      | Output
-|-
`'cookie', 1` | `'1 cookie'`
`'cookie', 2` | `'2 cookies'`
`'cookie', 12` | `'12 cookies'`
`'cookie', 0` | `'0 cookies'`
`'salmon', 1` | `'1 salmon'`
`'salmon', 2` | `'2 salmons'`
`'mouse', 3` | `'3 mouses'`

## Solution for 5

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

# Third Hour

Layout Demo..
