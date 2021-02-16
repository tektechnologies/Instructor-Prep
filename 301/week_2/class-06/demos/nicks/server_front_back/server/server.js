'use strict';

/*
================= Servers ====================
A server needs to respond to information on the internet
When information is sent on the internet it primarily uses http
http is a way to encode data and send it in a uniform way so everyone can talk. Its like the alphabet of talking on the internet

The job of talking over http, and especially listening for http requests is handled by Express
It gets translated by express into javascript

http requests contain a lot of info
The basics are a lot like mail
there is an address: url
there is a to and a from  to: route, from: client url
There can be a letter inside: encode information completely hidden in the response - like a letter in the envelope
There can be info written on the outside of the letter - this is our queries - info on the visible url

Express reads all of this for us and much more


================ Environment  ===============
A server has to run somewhere
Heroku, AWS, terminal
The server needs to run on a PORT on our local we use 3000, 3001, heroku tends to gravitate towards like 27000-32000, aws i have no clue
There are settings our server has to pay attention to when it runs.
We will create dynamic variables instead of hard coded ones that our server can read live.
These variables make up / live in our environment
not goDaddy (goDaddy is a dns, redirects to where it lives)
*/

// ========================== end theory ======================

// ==== packages ====
const express = require('express'); // implies that express has been downloaded via npm
// the command to download it and save it is `npm install -S express`
const cors = require('cors'); // Cross Origin Resource Sharing : allows connection between 2 local servers or websites : It can block or allow access to any list of urls. By default it allows localhost to talk itself
//const { response } = require('express');
// - needed this week only
require('dotenv').config(); // runs once and loads all the environment variables IF they were declared in a file instead of the terminal

// ==== setup the application (server) ====
const app = express(); // creates a server from the express library
app.use(cors()); // app.use loads middleware - we are loading cors so that requests don't get blocked when they are local

// ==== other global variables ====
const PORT = process.env.PORT || 3000; // all caps because it is a variable future devs should not touch
// magic variables (other things rely on this variable)
// process.env.PORT references the PORT env variable from my terminal

// ==== Routes ====

// app.get : attaches a listener of method type GET to the server with a (route, and a callback)
// '/' : route - we can visit the server at localhost:3000 or localhost:3000/ and trigger this callback
// (request, response) => : the callback function, think of it ass (event) => on an event handler
// request : all the data from the client
// response: all the data from us + we can attach data to it + we can trigger a response to start with this parameter
// response.send(<anything>) : takes the argument and sends it to the client
app.get('/', (request, response) => {
  response.send('you nope, party time    ');
});

// localhost:3111/make-the-pizza?name=Detroit&quantity=3&toppings=pepperoni

// expect a key value pair of name:Detroit and quantity:3

// send `Baking Detroit perrperoni Baking Detroit perrperoni Baking Detroit perrperoni`

// this lives with all the client data, in the `request (req)` parameter

// inside request will always live a property
// I need to expect a query: { name: 'Detroit', quantity: '3', toppings: 'pepperoni' },

app.get('/make-the-pizza', (req, res) => {
//In order to trigger the route the correct path has to be visited. That triggers the call back function.
// res.send('pizza time pizza time');

  //Now lets see
  // console.log(req);
  // console.log(req.query);
  // console.log(req.query.name);

  let str = '';
  //before we add the for loop send the response after we call the
  //terminal will show a common error where we are not allowed to set headers after response is sent to the client. Client is not going to accept response and express is saving us those errors from happening.

  // for(let i = 0; i < req.query.quantity; i++){
  //   res.send(`Baking ${req.query.name} ${req.query.toppings}`);
  // } // This will show the error and you try to rerun.



  for(let i = 0; i < req.query.quantity; i++){
    str += `Baking ${req.query.name} ${req.query.toppings} </br>`;
  }
  res.send(str);
});




//In the letter anology we have the url on the front of the card.
//we have text on the outside of the envelope.
//for lab we will not be building any URL's today we will hard code gps data back , tomorrow we will read it and log so that we can see the dynamic portion
// any information the the front it will live in req.query. so to choose coordinates or restaurants that we need to react to will live in the query, we are only concerned with the back end side.



/////////Second Break //
// we will look at the City- Explorer Lite.
// and we are going take this  server and talk to that app.
// we will deploy both apps to heroku.
////////////////////////////////////////////////







//Another example.

// localhost:3111/baked-goods?pie=apple&muffin=blueberry&price=$13.12
app.get('/baked-goods', (req, res) => {
  const pieTheyWant = req.query.pie; //?pie=apple === apple
  const muffin = req.query.muffin; // === 'blueberry';
  const price = req.query.price; // === '$13.12';
  console.log(pieTheyWant, muffin, price);
  res.send(pieTheyWant + muffin + price);
});





//Show the trello board and show the structure of the call back function



app.get('/location', (req, res) => { // route with endpoint of /location

  // res.send({
  //   "search_query": "seattle",
  //   "formatted_query": "Seattle, WA, USA",
  //   "latitude": "47.606210",
  //   "longitude": "-122.332071"
  // });


  if(req.query.city === 'newark'){
    res.status(500).send('ew newark');
    return;
  }

  //normalize our data with librarys, templates and use here a constructor to get the json out of the file. Node can sync with local data.
  // we need to normalize our data with a constructor
  const theDataArrayFromTheLocationJson = require('./data/location.json'); // require gets things from a fle
  const theDataObjFromJson = theDataArrayFromTheLocationJson[0];

  //Now=========== go do the constructor functions ==================================

  ///////////////////////////////////////////////////////////////////////////
  // data from the client (search query they submitted)
  console.log('req.query', req.query);
  //collecting data from the json file and the searched city.
  //There is a lot going on and it doesnt all have to be clear.
  //We are practicing working with a team, a front end team where our job is the long and lat and other data get passed.

  const searchedCity = req.query.city;
  //////////////////////////////////////////////////////////////////////////////
  //Now lets look at some error go up above.



  const newLocation = new Location(
    searchedCity,
    theDataObjFromJson.display_name,
    theDataObjFromJson.lat,
    theDataObjFromJson.lon
  );

  res.send(newLocation);
});//closes the /location


////////////////////////////////////////////////////////////////////////////////
app.get('/restaurants', (req, res) => {
  const data = require('./data/restaurants.json');
  //we will need to store data in an array
  const arr = [];
  //data is already in an array so pass in the object and use the object access notation so we can say this.restaurant =
  //this is the array in the json file. 
  data.nearby_restaurants.forEach(jsonObj => {
    const restaurant = new Restaurant(jsonObj);
    arr.push(restaurant);
  });

  res.send(arr);
});
///////////////////////////////////////////////////////////////////////////////



// ==== Helper Functions ====


function Location(search_query, formatted_query, latitude, longitude){
  this.search_query = search_query;
  this.formatted_query = formatted_query;
  this.longitude = longitude;
  this.latitude = latitude;
  //now go back up and create the NEW object in .get(/location path)
}




// arr[0] === jsonObj
function Restaurant(jsonObj){
  this.restaurant = jsonObj.restaurant.name;
  this.locality = jsonObj.restaurant.location.locality_verbose;
  this.cuisines = jsonObj.restaurant.cuisines;
}



// ==== Start the server ====
app.listen(PORT, () => console.log(`we are up on PORT ${PORT}`));


// Steps for heroku
// 1 create app
// 2. upload your code to github
// 3. connect github to heroku on heroku
// 4. load the server by clicking deploy branch
// 5. click open app in the top right to get the live url
// 6. paste the url into the front end site and test it (remove the trailing /)
