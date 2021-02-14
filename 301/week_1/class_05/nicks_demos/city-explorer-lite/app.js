'use strict';

/*
 1. Form that asks for a server's url - this will be functionally useless
 2. Form pops up to search for location
 3. On submit, use the location data to "build" the map (put the completely static image on the page)
 4. On submit, use the location data to "search" for restaurant data (just render the json to the page)
*/
const defaultLocation = {
  'id': 1,
  'search_query': 'seattle',
  'formatted_query': 'Seattle, WA, USA',
  'latitude': '47.606210',
  'longitude': '-122.332071',
  'created_at': null
};

const defaultRestaurants = [
  {
    'restaurant': 'Pink Door',
    'cuisines': 'Italian',
    'locality': 'Pike Place Market'
  },
  {
    'restaurant': 'Serious Pie',
    'cuisines': 'Pizza, Italian',
    'locality': 'Belltown'
  },
  {
    'restaurant': 'Salumi',
    'cuisines': 'Sandwich, Deli, Italian',
    'locality': 'Pioneer Square'
  },
  {
    'restaurant': 'Lola',
    'cuisines': 'Greek, Mediterranean, Pacific Northwest',
    'locality': 'Hotel Andra'
  },
  {
    'restaurant': 'Wild Ginger',
    'cuisines': 'Vietnamese, Chinese, Asian',
    'locality': 'Downtown'
  },
  {
    'restaurant': 'Purple Cafe and Wine Bar',
    'cuisines': 'Pacific Northwest, American',
    'locality': 'Downtown'
  },
  {
    'restaurant': 'Le Pichet',
    'cuisines': 'Cafe, French',
    'locality': 'Pike Place Market'
  },
  {
    'restaurant': 'Cafe Campagne',
    'cuisines': 'French, Cafe',
    'locality': 'Pike Place Market'
  },
  {
    'restaurant': 'Dahlia Lounge',
    'cuisines': 'Seafood, Pacific Northwest',
    'locality': 'Belltown'
  }
];





let serverURL;

$('form:nth-of-type(2)').hide();
//Step One ---------------------------------------------------------//
$('form:first-of-type').on('submit', event => {
  event.preventDefault();
  // when a form is submitted, it revisits the same page but puts info into the url week 3
  //forms orignally were used in html to talk over the interent trying to get to another website that was like the one way to talk over the interent on web sites.

  $('form:first-of-type').hide();
  $('form:nth-of-type(2)').show();

  //  <input type="text" name="server"> because the name="server" => event.target.server
  serverURL = event.target.server.value; // take what is in the form and save it globally
});

//Step Two ---------------------------------------------------------//
$('form:nth-of-type(2)').on('submit', event => {
  event.preventDefault();


  const cityName = $('form:nth-of-type(2) input:first-of-type').val();
  // const cityName = event.target.city.value;
  console.log(cityName);

  // In order to get the GPS coordinates that we need for google to give us a map, we ask the server to convert 'albequerque' to GPS coordinates
  // use ajax to talk to the server
  // we concatenate the route `/location` to the server url so that the server knows what we are asking
  // `facebook.com/profile/nicholas/messages/archived/reply`
  //slash is like a direction
  // when we are doen with the routing we add in a question mark then a key value pair and we will look at these later but this is the full request and we can put in as many of these as we want and are separated by & and they are all read by the server
  //this work with with js is the same basic html work that has been happening with since the beggining we are just doing it with js
  $.ajax(`${serverURL}/location?city=${cityName}`)
    .then(gpsDataThatCameBack => {
    // render the map this is the gps data
      gpsDataThatCameBack = defaultLocation;
      //today the the lives in the json file.
      const imgString = `<img src="images/map.png?lat=${gpsDataThatCameBack.latitude}&lng=${gpsDataThatCameBack.longitude}"/>`;
      $('main').append(imgString);

      // once we have gps we can search for restaurants
      //-----------Now talk about this--------------------------------------------------
      // $.ajax(`${serverURL}/restaurants?search_query=${gpsDataThatCameBack.search_query}`);
      //---------------------------------------------------------------------------------
      //this would get long to have to do it for every request, so we pass in an object that has a key of data, anything that is stored in the key from the object will be stored

      //server connections are 1 to 1 and we done. its a handshake, where we have a timeout set amount of time that we could even set up in our js, if it fails to find we will get a failed ping, the server is in a constant state of taking in new data, but we could still loose the connect. we are going out to the server but we are just using the local data.
      //------->  first ajax call
      //------->  second ajax call. to the server its after the first one has come back then we get our restaurant array back, we have 1,2,3,4 ping


      //--------then show this restaurant data coming back to render to the page.
      $.ajax(`${serverURL}/yelp`, {
        data: gpsDataThatCameBack
      // all the keys in gpsDataThatCameBack will be concatenated in the url as ?key=value&key2=value2 etc
      }).then(restaurantDataThatComesBack =>{

        restaurantDataThatComesBack = defaultRestaurants;
        // go build out some html template so that we can add the next code below.
        const html = $('#restaurant-template').html();
      
        restaurantDataThatComesBack.forEach(restaurant => {
          //add css to data
          //the function we wrote uses data from the lat lon second form submitted we go out an get gps data to get the map and now we are using the gps to get the yelp data.


          //can write this before we write the forEach()
          const newHtml = Mustache.render(html, restaurant);
          $('main > ul').append(newHtml);
        });

      });
      // /////////////////////////////////////////////////////paste
      // $.ajax(`${serverURL}/parks`, {
      //   data: gpsDataThatCameBack
      //   // all the keys in gpsDataThatCameBack will be concatenated in the url as ?key=value&key2=value2 etc
      // })
      //   .then(restaurantDataThatComesBack => {
      //     restaurantDataThatComesBack = defaultRestaurants;
      //     const html = $('#restaurant-template').html();
      //     restaurantDataThatComesBack.forEach(restaurant => {
      //       const newHtml = Mustache.render(html, restaurant);
      //       $('main > ul').append(newHtml);
      //     });

      //   });
      // /////////////////////////////////////////////////////paste

      // $.ajax(`${serverURL}/weather`, {
      //   data: gpsDataThatCameBack
      //   // all the keys in gpsDataThatCameBack will be concatenated in the url as ?key=value&key2=value2 etc
      // })
      //   .then(restaurantDataThatComesBack => {
      //     restaurantDataThatComesBack = defaultRestaurants;
      //     const html = $('#restaurant-template').html();
      //     restaurantDataThatComesBack.forEach(restaurant => {
      //       const newHtml = Mustache.render(html, restaurant);
      //       $('main > ul').append(newHtml);
      //     });

      //   });
      // /////////////////////////////////////////////////////paste

      // $.ajax(`${serverURL}/movies`, {
      //   data: gpsDataThatCameBack
      //   // all the keys in gpsDataThatCameBack will be concatenated in the url as ?key=value&key2=value2 etc
      // })
      //   .then(restaurantDataThatComesBack => {
      //     restaurantDataThatComesBack = defaultRestaurants;
      //     const html = $('#restaurant-template').html();
      //     restaurantDataThatComesBack.forEach(restaurant => {
      //       const newHtml = Mustache.render(html, restaurant);
      //       $('main > ul').append(newHtml);
      //     });

      //   });

    });
});


//next week we will do the server side only.
