// in front end js - if the library is loaded before the app.js, we can use its variables
// not so in npm because NONE of the node_modules/libraries are loaded by default
// in this file we have to tell them to load

const express = require('express'); // looks in node_modules and picks a library with the same name to load


const app = express(); // builds a server from the express library



// middleware that hosts the website  
app.use(express.static('./public')); // host all the files in the public folder.
//we have now unlocked the base URL and port 3000 will now host a web site. 



const PORT = 3000; 
app.get('/secretPathToPizza', (request, response) => {
  // The same request and response from the WRRC
  console.log(request, response);
  response.send('You have Found my Secret Pizza Treasure Life Time Supply');
});



app.listen(PORT, () => console.log(`the server js file is running!, started on PORT: ${PORT}`));

// localhost:8080 has live-server
// express is so popular that their guide doc that says try using 3000 has made 3000 the dev server port


//our server will provide an error html page, which will be what we do on monday. 
//so our servers need to respond to stuff lets add a route for it to follow.



//starter code need to run npm install and run the server  node server.js

//then go to localhost and see the html5up, you are free to use what ever template 
//take the front end files and put them in the public folder. 