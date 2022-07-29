# Good Day Happy Friday

## This has been a big week, thumbs up/down how are you feeling about this week

## Warm-Up

[Solution Code](./class_05/IMG_0058.jpg)

## Code Challenge Review

## Lab Review

## Hour Two

## Break 1

## Intro the Lab for today and show the set up

- Introduce the Lab for today.
- Talk about how it relates to the final
- Look at the Lab in Canvas
- demo pulling down the repo template

### Shred Talk

- Talk about reduce.









- we will create a front end site that will have a server that will talk to
  google and a parks api and yelp, and by the end of next week this is how our
  app with look
- servers respond to requests
- clients request info from web.
- so lets make city-explorer lite.
- we will use mock data.
- that will represent the end result that we will build out next week.
- <https://codefellows.github.io/code-301-guide/curriculum/city-explorer-app/front-end/index.html>
-<https://city-explorer-backend.herokuapp.com>  is our back end
- next week the labs will have starter code for you to build on, and each day
  we will add a new path to our app.

## Lab Notes

- first step in building a server is to access npm
- we build servers in npm and in node we can run code in the terminal instead of
  the browser
- so make a server folder
- add a server file
- run npm init to initialize our server
- then go through the basic app data set up.
- point is that upon running npm init we end up with the package.json which is
  running code that is meant to run stand alone. We have seen these in the code
  challenges as well that are not server files.

-next we need to install librarys. we dont build servers from nothing

- the most popular is Express Server , so lets load.
- node modules is where express will live.
- and along with Express is that it is JS that is meant to run in the terminal.
- Express is also a Dependancy to this server as well now.
- Express will also install the librarys that it needs.
- these installs have there own package.json requirements as well lets take a
  look at them
- inorder to manage all this it creates the package-lock.json. and it will pick
  the appropriate librarys to make sure that our server file will have the
  resources the correct packages that it needs to run the app.
- if we run    NODE SERVER.JS

-In order to make the server in front end js

- if the library is loaded before the app.js we can use its variables, not so in
  npm so in this file we have to tell them to load.
-

- const express = require('express');  which is the library.
- and it will look inside of node modules and picks a livrary with the same name
  to load.
- const app = express();  // this actually builds our server.
- we have created an instance of a server like the mustache we havenot yet put
  it on the page,
- we have a server event listener that makes the server listen to

- app.listen(3000)
-localhost:8080 is the default live server.
//express is so pop that the dev server is 3000. so we
- const PORT = 3000;

-app.listen('PORT', () => {`server.js file is started on PORT: ${PORT}`});
