# Programming Concepts Covered



# Announcements



# Code Review 
- This weeks project is meant to take all week with new implementations to our problem domain, we will look at the code possibly refactor some, code and see what we find along the way. 
- What was the one thing that you found hardest, and what you want me to cover in code review. 
- Code review topics 
    1. How to do cookies per hour at each location.
    2. Sales amount in each city( adding things to the page) 
    3. id in html, then put other things into that from js. 
    4. ~ how to do css from js. 

- What do we notice from the student repo. 
    1. latest commits
    2. different branches 
    3. different commits 
    4. We can see that the different commits show that work being added over time. 
    5. Watch out for **CAPITALIZATION.** ( Computers,  go to a terminal on your machine, wsl, cd wr, mac users doesnt matter, run ls, to see macs and windows make a choice where capitols do not matter, the issue is that it is not true on Linux, capitalization matters, so when we deploy our code to for instance git hub, that runs on linux, we want to keep things standardized, with lower case. 90% of sites online are running on linux.)
    6. Make sure different citys get different numbers of cookies. 
- Have student walk you through how to download the clone and start the project. 

- bash  type:  chrome index.html
- bash  type:  chrome sales.html

- ./ css means start from where ever I am at right now. start where the index.html is and then go into the css folder. Not needed, for now, it is good practice, and you will have more practice in 301. The ./ means go a level up from where I am at right now. 

- Go to **Google Fonts**. You can combine font links to one, and then specify in css. 

- What data type is the Seattle variable. === Object
- Using what to store our data            === Key / Value Pair. 
- ctrl F2. to select all instances of a word. 


- City
- Hourly
- Store Totals, is the flow we are looking for. 
- Show the running total with the debugger



- We willl look at how o creat html elements that we will append our UL and LI items to, inorder to create some child/parent relation ship. 

- dont forget to add the city object to the render to loop through each city instead of just hourly array. 

- We do code review so that we get better at reading other's code. 

- Question how was it creating each object literal? How would you feel if you had to type out another 250 stores, by hand from paper. 


- So since these are all the same object literals there are ways, to automate this process, how you ask?

- With code constructors, instead of object literals. 
- Which is what lab 7 will be on.
- currently we have about 15 - 25 lines of code, x 250 objects. 

- So, with a constructor we can create objects, with a max of 15 lines(once) and we can add one line of code to 15 define each city and one to create store, this scales better the more objects we get, Constructors are powerful tools, for developers, so that we write less lines of code and have less of a chance to make mistakes, while coding out our problem domain. 

**Back to our Kitten Demo.**

# Constructors or Constructor functions. 

- it is a function
- it has a specific job to set up objects. (with specific properties(AKA keys))
- Upper Camel Case for the Name. 
- Call with the word "new"  , new is built in key word of javascript. 
- Constructor names tend to be a singular noun. 

- This is how we define functions.  

```js
function Pet(){
}
```
- Other than the capital letter there is no difference with any other function.
- So now inside the constructor, set up the properties we want for objects created with this constructor
- We need key/value pairs on the new object. 
- Within constructor functions we are going to use the contextual this, so we can say that 
### This is a bad constructor, but we will fix it in a minute. 

```js

function Pet(){
    this.breed = 'Labrador',
}
```

![Screen Shot](consoleObject.png)

- In the console we will write. 
- var nova = new Pet();
- type nova to see the new Pet object, notice that it say's Pet outside the object braces. 
- Try a different dog, 
- console.log is something we write some times. What do we do when we want to give it information? 
- In general if we have a function and we want to provide information to those functions. We pass inbetween parathesis. What do we call those thing in the parathesis. 
- In general we call them parameters, to give the function information so that it can run. 
- So, we will take in the values that we want as parameters to out functions. 

![Screen Shot](consoleParameter.png)

```js
function Pet(petBreed){
    //So I want to change this to the breed that I am passing in 
    /this.breed = 'Labrador',
    this.breed = petBreed
}
```
- Which means now that I need to pass in an argument to the parameter for petBreed.
- So, now in the console I can type 

```js
var cricket = new Pet('Tabby');
```

```js
function Pet(petBreed, petWeight){
    this.breed = petBreed,
    //Name of parmeter and name of property can be the same or different.
    //this.weight = weight,
    this.weight = petWeight,
}
```
![Screen Shot](consoleTwoParameters.png)

- Now go back to the console and pass both parameters in. 
```js
var nova = new Pet('Labrador',45);
```
## BREAK TIME 


