# Programming Concepts Covered


# Talk about the project. 
- Explain Plan for the rest of the class.
- List out activities for assignemnts for class. 
- There are READ.me requirements for the project, so that will be a good opportunity to practice some mark down and you can speak to that refresher of practicing throughout project week
- Share insights to project technical requirements. 

# 3 Show the project requirements

# Discuss meet up oportunities.
- Does everyone have an idea of some event that they plan to attend? 

# Code Review.  Bus Mall
- 301 has Read Me requirements for each lab, there is a template and you will have to fill that out so, be ready for that. 

# What does .gitignore do? 
- You can avoid accidently commiting those file that you do not want to commit to git hub. Like the ds_store file that macs create and will include to push if you do not have the ingore file. Which will be even more important in 301. 
- You can create certain setting in VS code that are project specific. 
- look at the git ignore and show the files that you do not want to commit. 
- What questions do you have about git ignore. 
- show the link to the gitignore. link URL
- You DO want to push the git ignore to github so that other people can get the same project settings for is needed to run the application correctly. 

# Open up the console. 
- I usually open the console when I am working in javascipt so that I can see the console logs I work through some code. 
- If I am working css I like to use a second monitor where I can see a full display and have a screen with two windows with one screen with css code and the dev tools with the elements window open to trouble shoot the present.

## Open Site and run it. 
- Look at commit history. 
- Open the Site and click through. 
## Master BRANCH 
**Make sure Master Branch is Merged**

# What to look for :
- Look at Chart Js stuff. 
- Look at Styling issues. 
- Get student input on what to look at. 
- Check the image logic. Is it working how can we tell? 
- Notice the Random color generator. 
- Does the image know it has been viewed. 

## Check array to see views 
Does it count the first views? 
In the console type - allViews[0]
- You could count up those items as well. 
- go into the array 
- create a 
```js
var sum = 0;
for(var i =0; i < allVotes.length; i++){
    sum += allVote[i].imageview;
}
```

<seatle>
# Issue with list showing up 3 times. 
- Look in the function that is generating the list. 
- How do you find the peice of code? 
## Find the id in the browser and locate the same id in the file. 
- But that sometimes doesn't work. 
</seatle>
## Seeing a problem on the site and finding the code efficiently is a real skill to have. 
- You will have some time during project week where you feel comfortable with the code especially stuff you have created or worked on and you mey have to review code that you have not worked on and you will have try and figure what it is doing so that you know before you accept the pull request and merge to a live site that it will not break the site or create weird behaviors. 
## Add a debugger. 
- Change vote total to five. 
## One thing the Sources in the inspector shows us is the call stack. 
- Get a thumbs do you use the debugger in your code? 
- You can step through your entire file with it to see what is happening each step of the way. 
- You Can set up break point in the Sources by clicking on the line Numbers. 
- Then refresh the code. 

##  In the html element RIGHT CLiCk
- Chose the option break on. 
- And set up a break point on those things. You can break on node removal, subtree modification(shows where we got the addition error. ) , attribute modification. 
**it shows the line of code where it is changing**
- These are usefule debugging tools, use the ones that work best for you. 
- Break point on the DOM node. for example is something you may not use but if you see it atleast you will understand it. 
- It makes finding hard problems easy to find. 
- Part of being a developer is knowing what tools to use in the moment. 
- Look at view counts for the first three images. 
## Track first three images. 
- Site will always start with those three images. 
- Need to account for the first time the images are click. 

```js
//This increases the view count. 

for(var i = 0; i < 3; i++){
    allVotes[i].imageview++;
}

```

You can call three random images for the click count as well. 


# Select the random image selection, I only want to do that if the image view is not greater than or equal to five. 

- Put the while an image picking logic inside the < 5

## We can remove the var chart, because we are not using it and then 
- Right click the error and get ride of it. 

- var in the intialization of the for loop are available outside the for loop to and so it was accessible to our other loop - so we change the variable. 
- it 301 we will use let and const. with let it is nolonger accessible. 
- var vs let will be talked about day one of 301. 
- What other questions do you have about bus mall. 

# todays lab will be using local storage. 
# next class will be a lab similar to chocalate pizza, but not quite the same. 
# Today is last day to work on bus mall lab. 
# Then next class is the pair assignment, 
# After that we have project week to kick off and complete


- Notice that you are completing this lab in three days as opposed to 5, so you are creating code more quickly. 


#  go on Break. 


- Pizza Picker has a new feature where we can store a new vote total. 

- Store vote total over the course of multiple page load. 
- it will have all the data each time and will continue to add to that total. 
- We will do two things first - look at 2 concepts of how to do this 
1. json that will allow us to do this and 
2. local storage.  that will let us save data between page view. 

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
- We treat keys like variables. 
- When we have a constructor involved we call that an instance variables. 
- console 
```js
   allPizzasArray[0]
```

2. **What is an object?** 
objects have behaviors that are functions that we call methods. 



3. **What does a constructor do?**
- Builds objects. 
- gives them 3 things
1. instance variables
2. keys
3. properties. 

- constructors: this is how we set this stuff up. 

## What do we use the prototype for? 
- It gives access to methods for all the instances that are created by the constructor.
- body of constructor is where we get properties are set. 
- and at the same time they gain access to the prototype methods as a built in function of the constructor. 

# Start build out of site. 
Throughout other languages you will see the pattern of constructors having methods for their objects. 
- The browser has built in JSON - it takes objects(key value pairs) and represents them as a string. 
- Or we can take strings and transform them into an object. 
2 Methods 

- JSON.stringify(pizzName)
```js

var pizza = allPizzas[0];
  pizza.toString();

```
- this is a pizza object created by the construtor so call the
-  to see how many times you clicked on the goat. try another pizza to see the string with the properties using our contextual this. 

### Pizza.prototype is an object, everything in js is an object

we can put it in the constructor but use it in the prototype. 
in the constructor it creates a function for each instance the constructor creates, which becomes a performance issue on larger projects. 
- in the console type
```js
    
1.
 var pizzaNames = allPizzas[0];

     pizzaNames.name;

2.
JSON.stringify(pizzaNames);

               pizzaNames.toString // we can call the function on the object. 

3.
 var pizzaNameString = JSON.stringify(pizzaNames);
 
    pizzaNameString.toString();

4.
//Now take the string and turn it back into an object. 
var pizzaString2Object = JSON.parse(pizzaNameString);

/*type :*/ pizzaString2Object

           pizzaString2Object.name //works





```
## what did we get back a string that represents an object.
- Object have keys we can access and strings dont. 
- that is what we get to work with when we stringify an object. 
thumbs on objects vs strings knowing the difference. 
local storage only stores strings, a tool that will do that for is local storage. and a tool that will take those string and turn them back into objects. 


# So we need a times clicked in the constructor
- so that we can add that property to our instances and then be able to pass that value back and forth from the local storage and back. 


# After you update the constructor 

var pizzaPie = allPizzas[0];

 log: pizzaPie   - see the object

 var stringPizza = JSON.stringify(pizzaPie);

 log: stringPizza  - see the string


# transform back to object
    var pizzaStrObj = JSON.parse(stringPizza);

    log: pizzaStrObj - see the object

    call: new Pizza(pizzaStrObj.name,    pizzaStrObj.imageUrl,
        pizzaStrObj.timesClicked,
        )

        - see new object. 


- local storage is built into javascript, 
- local storage works with key value pairs. 
- the syntax is different but KVP's work the same as they do in objects. 
- take local storage and type set Item

```js

//In the console. 
localstorage.setItem('userName', 'Craig');


```


- look into the APPLICATION ON THE **localstorage** - see the key value in local storage is set .



```js

localstorage.getItem('userName')
//See 

```


- Lets create a way for them to login and have us remember their name and then we will remember them when they log back in. 

# hit submit and in the URL 
- http://127.0.0.1:5502/?name=craig



- local storage only holds strings. 
- json is good with arrays 



- Review lab assignment. 

# You need to go in and number what to build out first 

1. do the toString first 