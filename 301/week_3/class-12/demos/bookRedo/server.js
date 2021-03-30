'use strict';

const express = require('express');
const superagent = require('superagent');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3111;

app.set('view engine', 'ejs');//tells express to load ejs. This unlocks response. render

app.use(express.static(__dirname + '/public'));//gives us permission to read these files. targets any file in the public folder.


//reads the encoded url data and puts it in the req.body.
app.use(express.urlencoded({extended: true}));


/**  method           Route              Purpose
 * => get(GET);     /HomePage    - display with render ejs, nav bar that takes us to the search page
 *
 *
 * => get(GET);     /searches/new  - show us the form , render a page with ejs, form should have an action of "/searches" and a method of "POST"  input of search type to be either author or title, and have an input of searchQuery ('frank herbert, Dune)
 *
 *
 * => post(POST);   /searches   - use the data in the request.body to either search by author or title
 * and use the data from superagent to display books to the client.
 *
 *
 *
 *
 * steps 6 and 7 will be to complete the WRRC and go out to the api to make the request.
 *
 */

app.get('/', showHomePage);

app.get('/searches/new', showSearchPage);
//This is tied to our form action="/searches" and the method="POST"
app.post('/searches', makeASearch);








function showHomePage(req, res){
  res.render('index.ejs');
}

function showSearchPage(req,res){
  res.render('search-page.ejs');
}

function makeASearch(req, res){
  //do this first build out ejs page below and then do the rest
  // res.render('search-results.ejs');

  //two ways to send data the req.query and the req.body.
  // the data that is sent with the body is encoded.
  // so we have to add the urlencode(); for handleing encoded data

  console.log('req body ',req.body);
  const searchType = req.body.searchType;
  const searchQuery = req.body.searchQuery;
  // //  GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
  const url = `https://www.googleapis.com/books/v1/volumes?q=+in${searchType}:${searchQuery}`;

  superagent.get(url)
    .then(result => {
      console.log('resultsssssss',result.body.items[0].volumeInfo);
      const books = result.body.items.map(book =>
        ({
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unknown Author',
          url: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'no image available'
        })
      );

      console.log(books);
      res.render('search-results.ejs', {books: books});
    });






}





















app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
