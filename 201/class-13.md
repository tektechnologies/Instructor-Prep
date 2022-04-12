# First Hour

1. Anouncements
2. Code Review
3. 201 Review
4. Local storage in the console, then in the app - form first then do the votes.  
5. Lab introduction. 

## Get a thumbs do you use the debugger in your code? 
## Todays lab will be using local storage. 
## Today is last day we will work on bus mall in lab. You can continue to finish the Bus Mall through Friday and the weekend. 
## Lab 14, Is a pair assignment Then next class Lab15a is also a pair assignment.


## Assignments for today. 
- Read: 13 - Local Storage. 
- Lab: 13 - Add local storage to BusMall
- Learning Journal: 13



## Code Review

# What to look for:
- Look at Chart Js stuff. 
- Look at Styling issues. 
- Get student input on what to look at. 
- Check the image logic. Is it working how can we tell? 
- Notice the Random color generator. 
- Does the image know it has been viewed. 

## Seeing a problem on the site and finding the code efficiently is a real skill you have to practice at. You can expedite your skills by reading code that you did not write. At first you dont even have to understand what it is doing you just need to read it. 

let bS = cS(    c().iC(fs).aTs(),     bBC(p)    );

let banannaSplit = coolSummer(chocolate().iceCream(flavors).allTheTrimmings()) , baseBallCap(plastic));

- You will have some time during project week where you feel comfortable with the code especially stuff you have created or worked on and you mey have to review code that you have not worked on and you will have try and figure what it is doing so that you know before you accept the pull request and merge to a live site that it will not break the site or create weird behaviors. 














# Second Hour
### Take Break 10 Minute

# Warm up question? 
### Ask them : 
1. **What is JSON(what does it mean)? What does it do?** 
- IS A FORMAT THAT REPRESENTS DATA. 
- OTHER THINGS THAT ARE FORMATTED ARE PDF FORMAT, IS HOW THOSE DOCUMENTS ARE STORE, RECIPES     AS WELL. 
- Just a way of organizing data. 
- xml example 

 **what data data type are keys in our objects?** 
Our values can be any data types:
    - Keys(stringy) are mostly strings. bracket notation is a string in qoutes. that is how we get those values. 
    - Keys are also call properties. 
    - values: numbers, strings, functions, arrays, other objects, values can be about any data type. 
- We treat keys like letiables. 
- When we have a constructor involved we call that an instance letiables. 
- console 
```js
   allPizzasArray[0]
```

2. **What is an object?** 
objects have behaviors that are functions that we call methods. 



3. **What does a constructor do?**
- Builds objects. 
- gives them 3 things
1. instance letiables that we access with contextual **this**
2. keys
3. properties. 

- constructors: this is how we set this stuff up. 


## What do we use the prototype for? 
- It gives access to methods for all the instances that are created by the constructor.
- body of constructor is where we get properties are set. 
- and at the same time they gain access to the prototype methods as a built in function of the constructor. 

- Object have keys we can access and strings dont. 
- that is what we get to work with when we stringify an object. 
- thumbs on objects vs strings knowing the difference. 
- local storage only stores strings, 
- and a tool that will take those string and turn them back into objects. 
- local storage is built into javascript, 
- local storage works with key value pairs. 
- the syntax is different but KVP's work the same as they do in objects. 
- take local storage and type set Item
- local storage only holds strings. 
- json is good with arrays 

- look into the APPLICATION ON THE **localstorage** - see the key value in local storage is set .
```js
//In the console. 
localstorage.setItem('userName', 'Craig');
```
```js
localstorage.getItem('userName');
```










# Third Hour
### Take Break 10 Minute

## Build out local storage in the Pizza App



- Pizza Picker has a new feature where we can store a new vote total. 
- Store vote total over the course of multiple page load. 
- it will have all the data each time and will continue to add to that total. 
- We will do two things first - look at 2 concepts of how to do this. 
1. json that will allow us to do this and 
2. local storage.  that will let us save data between page view. 

# Start build out of site. 
Throughout other languages you will see the pattern of constructors having methods for their objects. 
- The browser has built in JSON - it takes objects(key value pairs) and represents them as a string. 
- Or we can take strings and transform them into an object. 
2 Methods 

- JSON.stringify(pizzName)
```js
let allPizzas = [5, '5'];
let pizza = allPizzas[0];
  pizza.toString();
```


























