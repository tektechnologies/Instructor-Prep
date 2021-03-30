'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


//Neccessary for demo
app.use(express.urlencoded({extended: true})); // reads the inside of the url for POST

//this will host the static files that do not change. 
app.use(express.static('/public'));




//--------------First side of Forms that act like anchor tags and there default behaviors. -------------
//we can make the form talk to the ice cream routes
//START frontend live server and make form request, then check local host server side on 3000 to see results and to see console.log();
//test this with the index page. 
app.get('/ice-cream', getIceCream);

function getIceCream(req,res){

  console.log(req.query);

  res.send(`${req.query.name} : here is your ${req.query.quantity} ${req.query.flavor} ice cream`);
}
/**
 * 
 * 
 * 
 * client : localhost: 8080                           Server Side localhost:3000
 * Form action '"localhost:3000/'ice-cream"            app.get('/ice-cream');
 * input name="flavor" value="vanilla"                 req.query === { flavor: "vanilla"
 * input name="quanity" value="99"                                     quanity=99}
 * 
 * visits. 
 * 
 * http://localhost:3000/ice-cream?flavor=vanilla&quantity=99
 * 
 * 
 * Teams will predefine this name set ahead of time in the documentation. Something like a UML Doc.
 * 
 * 
 */



















//--------------Second is Forms hosted by a Server. ----------------------


//This returns the first form on the cookies.html  
//this is a path url has access to req.query
app.get('/order', orderCookies);
function orderCookies(req, res) {
  console.log(req.query);
  res.send(`${req.query.name} ${req.query.flavor} quantity= ${req.query.quantity} will be 99$`);
}















// add a listener for when someone visits /cookies with a GET,
// add a listener to a click on some element
//demo first 
//Lets create a route a .get() to render the cookies html page. 
app.get('/cookies', displayCookiePage);

function displayCookiePage(req, res){
  console.log(req.query);
  //You will not need to do this for you homework. //the update sendFile needs the option root. 
  //this is for demo purposes 
  res.sendFile('cookies.html', {root: './public'});
}




/**
 *                     
 * GET    - visiting URL                 - these are meant to read Data.
 * POST   - visiting URL w/data          - add data. 
 * PUT    - visiting URL w/data          - update data 
 * DELETE - visiting URL with a Value    - delete data. 
 * 
 * 
 * 
 */


// add a listener for when someone visits /cookies with a POST,
// in html  <form method="POST"> method="POST" turns the request into a POST

// req.query does not exist in a post by default. becase we are storing the info encoded in the request, like a letter stored inside an envelope
app.post('/cookies', buyCookies);
//this sends info from within side the envelop 
function buyCookies(req, res){
  console.log('req.query in the post', req.query);
  console.log('req.body in the post', req.body);
  // res.send(`${req.query.name} you bought cookies`);
    
  //body is a property of super agent request, sa decodes and puts in the body property. 

  // res.send('you bought cookies');

  // req.query in the post {}
  // req.body in the post { name: 'Dan', flavor: 'Grey', quantity: '890' }
    res.send(`${req.body.name} you bought cookies`);
}











app.listen(3000, () => console.log('up on 3000'));
