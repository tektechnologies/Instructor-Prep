# Go

## Announcements

### Warm - up code

- Warm-Up Exercise Java
- What does our code do?
- Type Specification.
- .methods are quite semantic. put() add()
- <> are type brackets, which may determine the type. like integer or string.
- so in our list we will have ints, once we populate the arraylist.
- Java is a compiled language, so it builds itself and turns itself into machine
  code and will then will execute. If the code doesnt compile it will not run.
- the new arraylist is empty, in java we have reflexive types in java a list of
  integers, the arraylist will inherit integer, so it is implied.
- Hash Map, in javascipt is like an object, which are always key value pairs where
  the key is a type string, with Hash map your keys can be any value, could be cat.
- the put allows us to put a key value pair in the map.
- When they recieve the incrementing values tally.get(key) will update the counter
- Our random is pretty much like javascript
- system.out.println.. Is like javascript console.log
- variables, if else, is just like JS, string concatination and type coersion is
  like JS as well.
- Java is a clean language.
- it is not a scripting language.
- the Main, method is like the index.html in a website.
- the program will look for and find the Main to run it,
- Another thing is that the class has to have the same name as the file.

### Review Code Challenge

### Review Lab

- Node is every where console, terminal
- Build git hub repo for our server
- Add license, readme
- Add linter config
- clone and cd into the folder
- 1. Install Node (npm init)
- npm i -g nodemon

1. Make an entry point to the server file called server.js
2. Then we want to run the npm init command to set up of file scaffolding.
3. Then complete the set questions, to finish setting up apps link to the server
   file. Create the file first!
4. Package.json is now created, and we have key value pairs that annotate the
 server.js file.
5. We will also talk about the concept of the env.

- **Why** (5 min)
    - An understand of The Web Request Response Cycle is critical to being
      a solid full-stack developer
    - We're about to add 3 more layers to it - servers, databases and remote APIs
    - To this point, we have been largely writing static websites and web pages
      with event handlers
    - Data has been in `.json` files or in raw `{}` objects so far
    - In actual applications, users expect real time data
    - For that, we use APIs, Databases, and Servers to store, collate, and
       ultimately "serve" that data to the client (browser/js)

- ITS WORTH TALKING ABOUT ENV.S AS OUR APPS WILL NO LONGER JUST LIVE ON OUR LOCAL
  MACHINES.

- **What** (10 min)
    - Two Enviromments our apps will live on. Production and Development.
    - Every terminal has an env that we have access to, to run at anytime.
     Server or no Server these are the terminals env  variables needed to
     run the variables.
    - We have played with PATH which is where our executed files are living,
    - Got to terminal and run
      ENV is unique to the window it is running. Same if we open a new tab.
    - Last week we hard coded a PORT, we could do that here and type

  ```js
  export PORT 
  ```

    - This is an us port if we look at it.
    - We could use this port by running our app on 3333. which we will see
      change as we go on this week as it may not be the same port that it
      runs on, on another machine.

## Second Hour

- Lets build our server up, this is good practice for you and at least once a day
 you build up the server, as you become familar with the process you will be able
  to go on and create custom servers.

1. First thing to declare is our packages.
2. Then we need to make sure that we have access to the express framework,

```js
  // the -s stands for save that creates three lines of code for anyone who
  // downloads the repo will have access to express, if we didnt -s they would
  // have to install on their own the library. 

npm install -s express

// This creates the package.json
// we load one time per project we will download as the library will live
// with the project. 

```

```js
// The next library will be cors, which we will need this week only CORS 

On our local machines we have firewalls that will watch to see if our local
machines are trying access remote URLs, we will get blocked, this week we will
run the front end and the back end, when we include CORS we wont get blocked when
making the request. 
```

```js
// The last package we need to load is our env library. 
const env = require('dotenv');
dotenv.config();
// instead of saving it in memory we can call it to load and run. 
// so best practice is this way. 

require('dotenv').config(); runs once and loads env variables if they were loaded
from a file instead of the terminal. 
```

## NOW IN THE TERMINAL run--- npm install -S cors dotenv express

- we can now check our package.json to see the updated list of libraries.

-

## Any Questions about the packages that we are going to load

## Now we can set up the application server

1. const app = ('express');
2. New line from Friday. app.use(cors()); So that local request dont get blocked.
   Loads before our routes get hit.
3. Load our Global Variables as we need them.
4. Now lets Start the Server. We need to add the app.listen which takes in a callback
5. Make a Global Variable for our PORT

- This is the basic set up of our server.
- Then we will add routes.

## Now lets Start the Server. We need to add the app.listen which takes in a callback

```js
app.listen(3000, () => console.log(`we are listening on PORT: ${3000}`));
//- This is a server being built and now we only need to add the routes. 
//- we will deal with the hard coded port in a minute, but this is the end goal
// in building servers. 
//- got to local host 3000 and see the error coming from the express app. 
//- Now lets make it better. 
```

## Make a Global Variable for our PORT

```js
const PORT = 3000; 
//Capitolization are sometimes refered to as Magic Variables. other things rely
// on this variable. 
//- lets add the env file now. 
const PORT = process.env.PORT;

//- Show in browser the 3333 port not working when we go to 3000 and of course
// in the new terminal which has port 3000 will not find 333


//- this file is going to be called the .env, which is a secondary location for
// referencing our variables, but our packages can read them 
//-The specific syntax is the caps, no spaces, no semi colons. It is a file that
// is accessible from both terminal windows, so that we have a back up, 
//We need to treat this as a secure file that will not go out onto git hub. 



// Now another and third back up with the OR and select 
const PORT = process.env.PORT || 3111;
// - if we see our last result show up in the terminal we should look at our app
// and fix what is broken with our initial routes. 

```

## Lets build a home Route

- Routes

1. app.get home route
2. its just the code that fires off when someone wants to access this route.

## But first lets fix our Server up alittle

- Instead of starting our server with node.
- We are going to use nodemon
- Nodemon or nodemon, a demon is a process that runs in the back of your computer
- It is a server that runs servers on it, it is like a live-server
  for your server files.
- We can say nodemon and it will run our server.
- We can see the changes in the terminal.
- and restarts the server but does not restart the browser, so we have to do that.

- The command is

## npm i -g nodemon

- g is global and we can use it on all projects.

### Now lets do a route that can take dynamic data in

- Deploy to Heroku, so review the PROCESS of that deployment with them.
- Don't dig in to the server code, since that will be a topic today anyway.
- Conclude Code Review time with an preview of what work will be done on the
  server side this week.

![Draw req/res for city](content/410.png)

## Third Hour

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
- localhost:8080 is the default live server.
- express is so pop that the dev server is 3000. so we
- const PORT = 3000;

-app.listen('PORT', () => {`server.js file is started on PORT: ${PORT}`});

## What would you like to look at in code review?

- lab? //lets look at incomplete or broken code.
- code challenge? //what numbers.

- look at npm install to get node modules.
- it will now look in the list to make sure we have our express cors and dotenv
- env is also in the gitignore. which is why its not pushed to git hub.
- lets look at our PORT.
- Lets then update are .env and see the PORT 3000
- add a semi colon and see the error and then delete the file.
- Now lets test out our server on the city explorer site.
- <https://codefellows.github.io/code-301-guide/curriculum/city-explorer-app/front-end/index.html>
- then paste in the <http://localhost:3000>
- then add city location .
- see what is returned.
- Ask students what is happening with the Home Route.
- What is happening with the (req, res) this is passing the callback function.
- that takes in a request and a response.

- some one pays and collects the information for these api's
<https://rapidapi.com/>
<https://github.com/public-apis/public-apis>

- **Why** (5 min)
    - Node/Express takes advantage of javascript's asynchronous coding pattern
    - We don't want to always write "blocking" code
    - We don't always need to wait for code to complete
    - Javascript is really good at it -- we can use this idea to multi-task
- **What** (10 min)
    - The Event Loop and Call Stack
        - Detect async patterns and push that to the side for a while
    - Promises and Callbacks
- **How** (30 min)
    - Run a promise demo that showcases how things can be out of order
    - Focus on the syntax and when/how we process data
    - `.then()` and `.catch()` and how they interact with the process
- **Experimentation and Discovery Ideas**

### 3rd Party APIs

- **Why** (5 min)
    - All of the data in the world is literally all over the world
    - REST give us a common language and set of methods to access all of it, with
      WRRC
    - By using APIs in creative ways, you can make really interesting apps, but
      leave the data management to the experts
- **What** (10 min)
    - Identify the APIs that you need
    - Inspect the "shape" of the data and see if it conforms to your needs
    - Talk about communication via WRRC (now: server-side code is now the client!)
- **How** (30 min)
    - Demo the signup and access key retrieval process
        - Location IQ
    - Integrate into your server application
        - Fetch Data with Axios
        - Massage it into shape (constructors)
        - Test with your client application
- **Experimentation and Discovery Ideas**

## 3 Main things

1. How do I start a server.
2. How do I create a route.
3. How do I make it give data when someone tries talking to it.

A. by the End of the Day we will have some data rendering to our pages and one
list of weather information. Tomorrow we will look at something called an api
key, so that we can render an image from our calls to the api.

## Today we will be learning all about servers

- Lets start by looking at the Lab. In Cavas.

- This is the first day that the labs will be executed through Trello.

![Draw req/res for city](content/944.png)

- What is a client? - A student to teacher, request things, tempory,
 googler/webpageForm(client as well.)
- What is a server? A temporary. that server responses to requests, google

- Client makes req to server for Food. The relationships are the same. We will
 make req and delegate our responsibilites to another server.
- Server in a restaurant will make a req to the cook for food.
- Afer this week you may begin to see the req/res cycle everywhere, its ok, its
 a code thing.
- for us we will have an actual server.js.
