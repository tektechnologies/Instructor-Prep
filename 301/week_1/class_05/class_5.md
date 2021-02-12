# Good Day Happy Friday
**You Made It to Friday**
--- 

## This has been a big week, thumbs up/down how are you feeling about this week.
- ## First Hour


# Agenda for today
- We will be done by 11:50 today, as I have an appt at 12 to see a Dentist. Not sure when I will be back to lab. 

## Lecture Outline
### Warm-Up
### Code Review
### Shred Talk
### City Explorer Build
### Deployments



--- 
### Warm-Up
![Warm UP](IMG_0058.jpg)


### Code Review
- Lets look at some Code Challenge and then we can take a look at someones grid layout. 
- Take a Look at the whiteBoard images lets talk about WRRC
- So we are going to take a look at servers today. 
- Lets talk about live server, our client and how we request and it responds with rendering 
- we will create a front end site that will have a server that will talk to google and a parks api and yelp, and by the end of next week this is how our app with look 
- servers respond to requests
- clients request info from web. 
- so lets make city-explorer lite. 
- we will use mock data. 
- that will represent the end result that we will build out next week. 
- https://codefellows.github.io/code-301-guide/curriculum/city-explorer-app/front-end/index.html
-https://city-explorer-backend.herokuapp.com  is our back end
- next week the labs will have starter code for you to build on, and each day we will add a new path to our app.
- What does our default do? when we submit a form 


### Shred Talk

```js

let arr = ['a','b','c','d','e'];

// SLICE - Find elements in the array 
// Does not modify
// Identify the start index, and the end index (optional)

// Find 2 elements starting at position 0
console.log( 'slice(0,2)', arr.slice(0,2) );

// Find 2 elements starting at position 2
console.log( 'slice(2,2)', arr.slice(2,4) );

// Find 1 elements starting at position 4
console.log( 'slice(3,4)', arr.slice(3,4) );

// Find 1 elements starting at position 0
console.log( 'slice(0,1)', arr.slice(0,1) );

// Find the last element
console.log( 'slice(arr.length-1)', arr.slice(arr.length-1) );

// 2 from the front to the end ...
console.log( 'slice(2)', arr.slice(2) );

// 2 from the end to the front ...
console.log( 'slice(-2)', arr.slice(-2) );



// SPLICE - Insert/Remove elements in the array
// Alters the original array


// At arr index 1, replace 0 elements with 99
// This will INSERT a new element into the array
arr.splice(1,0,99)
console.log('splice(1,0,99)', arr);

// At arr index 1, replace 1 element with nothing
// This will DELETE an array element at a particular index
arr.splice(1,1)
console.log('splice(1,1)', arr);

// At arr index 2, replace 3 elements with 99
// This will shorten the array, but add a new value
arr.splice(2,3,99)
console.log('splice(2,3,99)', arr);



// JOIN -- Creates a string from an array, with the join char as a separator.
arr = ['this','was','fun']
console.log('Array .join()', arr.join() ); // commas will be the default
console.log('Array .join("")', arr.join('') ); // one long word
console.log('Array .join(".")', arr.join('.') ); // millennial advertising
console.log('Array .join("-")', arr.join('-') ); // kebab case
console.log('Array .join("_")', arr.join('_') ); // snake case


 // SPLIT -- Creates an array from a string, with each element being created from the matched value (and nuking that value)
let str = 'This is a really cool thing';
let words = str.split(' ');
console.log(words);

let iii = str.split('i');
console.log(iii);






```










---
## Ten Minute Break
- ## Second Hour
---
 
### City Explorer Build
- **Why** (5 min)
  - This simple app is a great opportunity to revisit jQuery and dynamic data to cap off the week.
  - We provide them a more complex version of this same app during the next lesson block. This provides the students some context on that application when they see it again.
- **What** (5 min)
- **Experimentation and Discovery Ideas**
  - Get some suggestions from the students as how this app can be better
    - Multiple Cities
    - Movies, Nights Out, Trails, etc
    - What else can they think of?
  - Show the [official/deployed city explorer](https://codefellows.github.io/code-301-guide/curriculum/city-explorer-app/front-end/) to confirm their wishes













---
## Ten Minute Break
- ## Third Hour
---
### Deployments
- **Why** (5 min)
  - Websites don't run from laptops
  - Consumers need to get to actual sites/data
  - Explodes the notion of WRRC by adding a real server
- **What** (10 min)
  - Heroku is one (of many) services that can "host" a server
  - It can connect to GitHub to fetch your source code, install dependencies, and start your service
  - Other hosts (such as godaddy) are setup to host static websites (renting access to a folder)
- **How** (30 min)
  - Using a live-coded demo ...
    - Produce a simple express server with 2 routes (static and dynamic)
    - Deploy to Heroku
  - Sketch out the WRRC to demonstrate what is happening with the server and Heroku.
- **Experimentation and Discovery Ideas**
  - Replace the "hello world" index.html file with the city-explorer-lite app that you previously built.
  - Suggest that students can deploy their portfolios
## Lab Notes



- first step in building a server is to access npm
- we build servers in npm and in node we can run code in the terminal instead of the browser
- so make a server folder
- add a server file
- run npm init to initialize our server
- then go through the basic app data set up. 
- point is that upon running npm init we end up with the package.json which is running code that is meant to run stand alone. We have seen these in the code challenges as well that are not server files. 

-next we need to install librarys. we dont build servers from nothing
- the most popular is Express Server , so lets load. 
- node modules is where express will live. 
- and along with Express is that it is JS that is meant to run in the terminal. 
- Express is also a Dependancy to this server as well now. 
- Express will also install the librarys that it needs. 
- these installs have there own package.json requirements as well lets take a look at them 
- inorder to manage all this it creates the package-lock.json. and it will pick the appropriate librarys to make sure that our server file will have the resources the correct packages that it needs to run the app. 
- if we run    NODE SERVER.JS

-In order to make the server in front end js 
- if the library is loaded before the app.js we can use its variables, not so in npm so in this file we have to tell them to load.
-

- const express = require('express');  which is the library. 
- and it will look inside of node modules and picks a livrary with the same name to load.
- const app = express();  // this actually builds our server. 
- we have created an instance of a server like the mustache we havenot yet put it on the page, 
- we have a server event listener that makes the server listen to 

- app.listen(3000)
-localhost:8080 is the default live server. 
//express is so pop that the dev server is 3000. so we 
- const PORT = 3000;

-app.listen('PORT', () => {`server.js file is started on PORT: ${PORT}`});

- 






