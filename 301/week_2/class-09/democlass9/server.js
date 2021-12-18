// 1. Create db
// 2. add pg, the package
// 3. create the client variable and pass it the DATABASE_URL
// 3.5 create the .env variable for DATABASE_URL
// 4. conenct to the db
// 6. create the table
// 7. create a schema.sql file
// 8. run the schema.sql file with psql -d city_explorer_301d70 -f schema.sql
// 9. add to our route a check for if there is data in the db
// 10. check the table for the location
// Load Environment Variables from the .env file

require('dotenv').config();

// Application Dependencies
const express = require('express');
const superagent = require('superagent');
const cors = require('cors');

// Application Setup
const PORT = process.env.PORT || 3111;
const app = express();
app.use(cors());
const pg = require('pg');


const DATABASE_URL = process.env.DATABASE_URL;
const client = new pg.Client(DATABASE_URL);




// Route Definitions
app.get('/location', locationHandler);
app.get('/places', placesHandler);





const locations = {};

function locationHandler(request, response) {
  // console.log('maybe', request.query.city);
  const city = request.query.city;
  console.log(request.query.city);
  const url = 'https://us1.locationiq.com/v1/search.php';

  // If we already got data for this city, don't fetch it again
  if (locations[city]) {
    response.send(locations[city]);
  }
  else {

    const queryParams = {
      key: process.env.GEOCODE_API_KEY,
      q: city,
      format: 'json',
      limit: 1,
    };
    superagent.get(url)
      .query(queryParams)
      .then(data => {
        const geoData = data.body[0]; // first one ...
        const location = new Location(city, geoData);
        locations[city] = location; // Save it for next time
        response.send(location);
      })
      .catch((error) => {
        console.log('ERROR', error);
        response.status(500).send('So sorry, something went wrong.');
      });
  }
}




function placesHandler(request, response) {
  console.log('rrrrrrr',request.query.latitude);
  const lat = request.query.latitude;
  const lng = request.query.longitude;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json`;

  const queryParams = {
    access_token: process.env.MAPBOX_API_KEY,
    types: 'postcode',
    limit: 10,
  };

  superagent.get(url)
    .query(queryParams)
    .then((data) => {
      const results = data.body;
      const places = [];
      results.features.forEach(entry => {
        places.push(new Place(entry));
      });
      response.send(places);
    })
    .catch((error) => {
      console.log('ERROR', error);
      response.status(500).send('So sorry, something went wrong.');
    });
}








function Place(data) {
  this.name = data.text;
  this.type = data.properties.category;
  this.address = data.place_name;
}














function Location(city, geoData) {
  this.search_query = city;
  this.formatted_query = geoData.display_name;
  this.latitude = geoData.lat;
  this.longitude = geoData.lon;
}

















client.connect(); //db listener
app.listen(PORT, () => console.log(`App is listening on PORT:  ${PORT}`));