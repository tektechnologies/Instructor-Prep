'use strict';

// eslint-disable-next-line no-undef
//console.log(neighborhoodDataSet);

// Mustache js takes a string and puts values in it, just like a template literal
// if you want to insert html into html using mustache you need double mustaches
// every single templated piece is built using the keys from an object
/* This will be one of our objects
{
    name: 'Fremont',
    city: 'Seattle',
    population: '23,566',
    founded: '1820',
    body: '<p>This is example text to show you how <strong>HTML</strong> can be escaped using <em>Mustache</em>.</p>'
  },
*/


/* <li>
  <h2>{{Bisbee}}, {{AZ.}}</h2>
  <p>Pop: {{5,203}}</p>
  <p>Founded : {1902}</p>
  {{{<p>This is example text to show you how <strong>HTML</strong> can be escaped using <em>Mustache</em>.</p>}}}
</li> */

//--------Now Convert the above to the below. ---------------

// const stringOfHtml = `
// <li>
//       <h2>{{name}}, {{city}}</h2>
//       <p>Pop: {{population}}</p>
//       <p>Founded : {{founded}}</p>
//       {{{body}}}
//     </li>
//     `;

// const renderedHtml = Mustache.render(stringOfHtml, neighborhoodDataSet[0]);
// console.log(renderedHtml);

//one line of code and we get html for our rendering of our objects. 
// here we get access to the Mustache is a function we access to in the library like chart js. Then we pass in a string and pass in an object 


// we need template literals back tic on a multi line string
// we can template this without talking to the DOM lets go through and see how it works in th js file 


//now with data we can build in 3 lines of code. 
//mustache does the work of pairing
//if we try and render lots of articles the code would look the same, and with jquery the pairing of the templating peices is much harder. 


//Do this one second..  
// neighborhoodDataSet.forEach(neighborhood => {
//   const renderedHtml = Mustache.render(stringOfHtml, neighborhood);
//   console.log(renderedHtml);
//   $('ul').append(renderedHtml);
// });




//We should create the template in the html, and keep that html with the html 

neighborhoodDataSet.forEach(neighborhood => {
  // so we need the template string
  const htmlString = $('#neighborhood-template').html(); // === innerHtml
  console.log('this is the html string ',htmlString);
  // we need our neighborhood objects
  const object = neighborhood;
//we are being purposly verbose. 
  const renderedHtml = Mustache.render(htmlString, object);
//call the string and the object which is the neigborhood. and we can get stringfyed html with jquery. 
  // console.log(renderedHtml);
  $('ul').append(renderedHtml);
});