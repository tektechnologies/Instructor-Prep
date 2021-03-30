'use strict';
//On my client I want to live on /search-books
//Submit a form w/title.
//This will be a POST / search-books and will have a body : {title: 'Dune'}
//Which will go to our server file where
//lives at localhost3000. this one is in the browser and the server is in the console. 

/**Server localhost:3000
 * should recieve the request and use superagent 
 * to go to google books api to get an array of books. []
 * then we will take those books back as an html page with an unorderlist 
 * with list items representing the books. 
 * instead of sending data in the form of a string or array or pbject and then have the front end build the site
 * we will build the html and then send it to the front end. 
 * https://developers.google.com/books/docs/v1/using
 */




const express = require('express');
const superagent = require('superagent');

const app = express();

app.use(express.urlencoded({extended: true}));// read form data
app.use(express.static('./public')); // load the public folder (css);
app.set('view engine', 'ejs');


//Do first and then create the view index 
app.get('/', showHome);
app.get('/book-search', showSearchPage);
//create as a post because data is being sent to us. 
// the get describes the page and the post path ties these events together. so we keep them the same 
app.post('/book-search', makeBookSearch);



function showHome(req, res){
  res.render('index.ejs');
}


function showSearchPage(req, res) {
  res.render('search.ejs');
}



//this demo will help us understand the new wrrc. so this is the link you will use in lab.


function makeBookSearch(req, res){
  //two places data can live req.query or req.body with a form with a {POST we want the .body}
  // const title = req.body.title;

  //+intitle: intitle: Returns results where the text following this keyword is found in the title
  //you will want to create a constructor to pass all the information in. 
  //           https://www.googleapis.com/books/v1/volumes?q=search+terms
  // const url = `https://www.googleapis.com/books/v1/volumes?q=+intitle:Waiting for Godot`;

  const url = `https://www.googleapis.com/books/v1/volumes?q=+intitle:${title}`;

  superagent.get(url)
  .then(stuff => {
    console.log(stuff.body.items);

    const titles = stuff.body.items.map(item => item.volumeInfo.title);

    res.render('results.ejs', {titles: titles} );
  });
}







app.listen(3000, () => console.log('SERVER on 3000'));




//regexlib.com ..
//for code challenge
//regex101
//