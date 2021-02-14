'use strict';

console.log('js is connected');
/*
1. Form that asks for a server URL - this will be functionally useless
2. Forms to pop up, so that we can search for a location
3. On submit, use the location data to "build" the map (put the completely static image on the page)
4. On submit, use the location data to "search" for restaurant data (just render from our json to the page. )
*/

let serverURL;

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






$('form:nth-of-type(2)').hide();

$('form:first-of-type').on('submit', event => {
  event.preventDefault();

  // when a form is submitted, it revisits the same page but puts info into the url
  //forms orignally were used in html to talk over the interent trying to get to another website that was like the one way to talk over the interent on web sites.
  $('form:nth-of-type(2)').show();
  $('form:first-of-type').hide();

  //  <input type="text" name="server"> because the name="server" => event.target.server
  serverURL = event.target.server.value;


});



$('form:nth-of-type(2)').on('submit', event => {
  event.preventDefault();
  // const cityName = event.target.city.value;
  // console.log(cityName);

  const cityName = $('form:nth-of-type(2) input:first-of-type').val();
  // console.log(cityName);

  // In order to get the GPS coordinates that we need for google to give us a map, we ask the server to convert 'albequerque' to GPS coordinates
  // use ajax to talk to the server
  // we concatenate the route `/location` to the server url so that the server knows what we are asking
  // `facebook.com/profile/craig/messages/archived/reply`
  //slash is like a direction
  // when we are done with the routing we add in a question mark then a key value pair and we will look at these later but this is the full request and we can put in as many of these as we want and are separated by & and they are all read by the server
  //this work with with js is the same basic html work that has been happening with since the beggining we are just doing it with js


  $.ajax(`${serverURL}/location?city=${cityName}`)
    .then(gpsDataThatComesBack => {
      gpsDataThatComesBack = defaultLocation;
      //render some data to the page
      //today the image lives in the json. image folder.
      const imgString = `<img src="images/map.png?lat=${gpsDataThatComesBack.latitude}&lng=${gpsDataThatComesBack.longitude} " >`;
      $('main').append(imgString);

      $.ajax(`${serverURL}/yelp`, {
        data: gpsDataThatComesBack

      }).then(restaurantDataThatComesBack => {
        restaurantDataThatComesBack = defaultRestaurants;
        const html = $('#restaurant-template').html();

        restaurantDataThatComesBack.forEach(restaurant => {
          const newHtml = Mustache.render(html, restaurant);
          $('main >ul').append(newHtml);
        });
      });





      

    });
});

