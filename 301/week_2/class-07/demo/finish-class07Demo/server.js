'use strict';

// ==== packages ====
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const superagent = require('superagent'); // getting data from a url

// ==== setup the application (server) ====
const app = express();
app.use(cors());

// ==== other global variables ====
const PORT = process.env.PORT || 3111;

// ==== Routes ====

app.get('/star-wars', (req, res) => {


  // res.send('May the code be with you!');

  /*
    things that have visited urls
   1.  <a href></a>   -- for html.
   2.  $.ajax         -- will have to load jquery
   3. new today is Super Agent!
  */
  //This is not built in, express is only listening.
  // So lets add new package, called superAgent.
  //its job is to go out to URL and get data
  ////////////////Talk about promises.
  // console.log(superagent('http://swapaaaaaaai.dev/api/planets/1/'));


  // Any time javascript recognizes an event as taking more than instant time, it can use a promise to wait for the event to finish before handling it
  // A promise is just an object that contains the necessary info to continue running code for delayed process// all the usefull information that we need to continue /data is with the call back function and the promise is like a valet, waiting with your keys, the data is the car.
  // promises are a javascript thing, not a superagent or jquery
  // promises fail and succeed We call this promiseSpeak(resolving and rejecting)
  // a promise can be directed to a failure or success callback just like we can have a try catch with two different options
  // so far we have always been going through the `success` path: this path triggers the .then(callback)
  // failure triggers another function `.catch`
  //contains details about events, listeners, http types
  // going out on to the internet our .catch will not work in the .then()


  superagent('http://swapaaaaaaai.dev/api/planets/1/')
  // promises
    .then(stuffThatComesBack => {
      //do first
      console.log(stuffThatComesBack.text);
      //  res.send(stuffThatComesBack);

      console.log('the body', stuffThatComesBack.body); // body is is a property like query that is created by superagent
      res.send(stuffThatComesBack);
    })
    .catch(error => {
      console.log(error.message);
      //error status code server side error.
      //its ok to have stuff break on the internet as long as we catch it.
      //catch takes in the error value.
      res.status(500).send('oops we made a mistake');
    });
});








/////========================================================

app.get('/location', (req, res) => {
  if(req.query.city === 'newark'){
    res.status(500).send('ew newark');
    return;
  }

  const searchedCity = req.query.city;
  const key = process.env.LOCATION_API_KEY;
  // const key = 'pk.9314aed33e5b0e10955bf1b4fc8570ef';
  // const theDataArrayFromTheLocationJson = require('./data/location.json');
  //so to protect there free data and avoid excessive usage you may have to pay for 10000K plus requests so we need a password. 
  const url = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${searchedCity}&format=json`;
  superagent.get(url)
    .then(result => {
      console.log(result.body); // always check the body with superagent

      const theDataObjFromJson = result.body[0]; // since my data is identical, i just need to use the superagent data in place of the location.json file data

      const newLocation = new Location(
        searchedCity,
        theDataObjFromJson.display_name,
        theDataObjFromJson.lat,
        theDataObjFromJson.lon
      );

      res.send(newLocation);
    })
    .catch(error => {
      res.status(500).send('locationiq failed');
      // console.log(error);
      console.log(error.message);
    });




});

app.get('/restaurants', (req, res) => {
  console.log('restaurant query',req.query);

  const latitude = req.query.latitude;
  // console.log(req.query.latitude);
  const longitude = req.query.longitude;
  const apiKey = process.env.ZOMATO_API_KEY;

  const url = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lng=${longitude}`;

  superagent.get(url)
    .set('user-key', apiKey) // is not necessary unless a doc says so (hint hint not necessary for weather)
    //we are beholded to the devs that created the api, and we can hide the url here which is cool. 
    .then(dataThatComesBack => {
      console.log('data that comes back from body ',dataThatComesBack.body);
      const arr = [];
      dataThatComesBack.body.nearby_restaurants.forEach(jsonObj => {
        const restaurant = new Restaurant(jsonObj);
        arr.push(restaurant);
      });

      res.send(arr);

    })
    .catch(error => {
      res.status(500).send('zomato failed');
      console.log(error.message);
    });

});

// ==== Helper Functions ====

function Location(search_query, formatted_query, latitude, longitude){
  this.search_query = search_query;
  this.formatted_query = formatted_query;
  this.longitude = longitude;
  this.latitude = latitude;
}

// arr[0] === jsonObj
function Restaurant(jsonObj){
  this.restaurant = jsonObj.restaurant.name;
  this.locality = jsonObj.restaurant.location.locality_verbose;
  this.cuisines = jsonObj.restaurant.cuisines;
}



// ==== Start the server ====
app.listen(PORT, () => console.log(`we are up on PORT ${PORT}`));

