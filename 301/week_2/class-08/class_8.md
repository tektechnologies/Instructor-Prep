# Happy Nights

## Announcements

- Saturday will be somewhat of a catch up day. Mary as TA.

## Regex review for new code challenge today

## Review Code Challenge and Code Review

- 40 Minutes
- go through trello add steps to complete show data from json on the front end.

## Second Hour

## build out back end as review using the photo unsplash api

- use notes below to add to server build for unsplash
- Start with C/P of front end to correlate the weather front end api call to server
- build server quickly moving through file until server is running then,
- use thunder client to build the URL
- send data to front end
- look at render and talk about adding weather keys for api calls
- look at lab 8 tech requirements in trello
- lastly build the weather api in thunder client for second url demo
- lastly, lastly show the movie api docs

```js
/** 
Any time javascript recognizes an event as taking more than instant time, it 
can use a promise to wait for the event to finish before handling it
A promise is just an object that contains the necessary info to continue
running code for delayed process promises are a javascript thing, not a superagent
or jquery promises fail and succeed We call this resolving and rejecting a promise
can be directed to a failure or success callback just like we can have a try
catch with two different options so far we have always been going through the
 `success` path: this path triggers the .then(callback) failure triggers another
  function `.catch`
*/


/*
================= Servers ====================
A server needs to respond to information on the internet
When information is sent on the internet it primarily uses http
http is a way to encode data and send it in a uniform way so everyone can talk.
Its like the alphabet of talking on the internet

The job of talking over http, and especially listening for http requests is
handled by Express It gets translated by express into javascript

http requests contain a lot of info
The basics are a lot like mail
there is an address: url
there is a to and a from  to: route, from: client url
There can be a letter inside: encode information completely hidden in 
the response - like a letter in the envelope
There can be info written on the outside of the letter - this is our queries
- info on the visible url

Express reads all of this for us and much more


================ Environment  ===============
A server has to run somewhere
Heroku, AWS, terminal, render
The server needs to run on a PORT on our local we use 3000, 3001, heroku tends to
gravitate towards like 27000-32000, aws i have no clue
There are settings our server has to pay attention to when it runs.
We will create dynamic variables instead of hard coded ones that our server can
read live.
These variables make up / live in our environment
not goDaddy (goDaddy is a dns, redirects to where it lives)
*/

// ========================== end theory ======================

// ==== setup the application (server) ====
const app = express(); // creates a server from the express library
app.use(cors()); // app.use loads middleware - we are loading cors so that requests
//don't get blocked when they are local

// ==== other global variables ====
const PORT = process.env.PORT || 3111; // all caps because it is a variable future
//devs should not touch
// magic variables (other things rely on this variable)
// process.env.PORT references the PORT env variable from my terminal

// ==== Routes ====

// app.get : attaches a listener of method type GET to the server with a
//(route, and a callback)
// '/' : route - we can visit the server at localhost:3000 or localhost:3000/ and
//trigger this callback
// (request, response) => : the callback function, think of it as (event) => on
//an event handler
// request : all the data from the client
// response: all the data from us + we can attach data to it + we can trigger a
//response to start with this parameter
// response.send(<anything>) : takes the argument and sends it to the client
app.get('/', (request, response) => {
  response.send('you made it home, party time    ');
});

// localhost:3333/name-the-pizza?name=detroit&quantity=3&toppings=pepperoni
// expect a key value pair of name:detroit and quantity:3
// this lives with all the client data, in the `request (req)` parameter
// inside request will always live a property :
// -  query: { name: 'detroit', quantity: '3', toppings: 'pepperoni' },



```

## ends server review / Start promise review

```js


// Promises DECLARE functionality
// "Go ahead and do your work and let me know when you're done. 
// Meanwhile, I'm going to do other things."

let longTask = (status) => new Promise( (resolve,reject) => {
  let timer = Math.floor(Math.random() * 1000);
  setTimeout( () => {
    if( status ) { resolve(`Good (${status} / ${timer})`); }
    else { reject('Bad'); }
  },timer);
});

// Just do this longTask one time ...
// Notice that code after this actually executes before this completes.
longTask('First One')
  .then(task => console.log('Task', task))
  .catch(console.error);

// Running many async things individually (no guarantee of order)
console.log('------- Individually ----------');
longTask('i - 1').then(task => console.log('Task', task)).catch(console.error);
longTask('i - 2').then(task => console.log('Task', task)).catch(console.error);
longTask('i - 3').then(task => console.log('Task', task)).catch(console.error);
longTask('i - 4').then(task => console.log('Task', task)).catch(console.error);

// Running many async things in a series -- These will always happen in order
console.log('------- Chained ----------');
longTask('c - 1')
  .then( data => { console.log(data); return longTask('c - 2'); } )
  .then( data => { console.log(data); return longTask('c - 3'); } )
  .then( data => { console.log(data); return longTask('c - 4'); } );


// Running Many Async Things Simultaneously ... they may not all finish in order,
// but the collected responses will be GIVEN to you in order
console.log('------- Promise.all() ----------');
let stuffToDo = [];
for( let i = 1; i <= 10; i++ ) {
  stuffToDo.push(longTask(`pa - ${i}`));
}
Promise.all(stuffToDo)
  .then(things => console.log('Promise.all() Response Array', things))
  .catch(console.error);

```
