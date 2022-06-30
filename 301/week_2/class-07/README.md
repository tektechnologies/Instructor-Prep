# Good Day Happy Friday

**You Made It to Tuesday**
---

## This has been a big week, thumbs up/down how are you feeling about this week

## Lecture Outline

### Warm-Up

### Shred Talk

### Code Review

### Code Review / Rebuild / Review

### Promises and Async

### 3rd Party APIs

- ## First Hour

- Warm-Up Exercise Java
- What does our code do?
- Type Specification.
- .methods are quite semantic. put() add()
- <> are type brackets, which may determine the type. like integer or string.
- so in our list we will have ints, once we populate the arraylist.
- Java is a compiled language, so it builds itself and turns itself into machine code and will then will execute. If the code doesnt compile it will not run.
- the new arraylist is empty, in java we have reflexive types in java a list of integers, the arraylist will inherit integer, so it is implied.
- Hash Map, in javascipt is like an object, which are always key value pairs where the key is a type string, with Hash map your keys can be any value, could be cat.
- the put allows us to put a key value pair in the map.
- When they recieve the incrementing values tally.get(key) will update the counter
- Our random is pretty much like javascript
- system.out.println.. Is like javascript console.log
- variables, if else, is just like JS, string concatination and type coersion is like JS as well.
- Java is a clean language.
- it is not a scripting language.
- the Main, method is like the index.html in a website.
- the program will look for and find the Main to run it,
- Another thing is that the class has to have the same name as the file.

# Lets talk server

- Today we will not add to much new to our servers.

- we are going to learn about how to use api's and grabbing data from the interent.
- the information will be living on other servers.
- Today we will get rid of the hard coded data and pull from the info.
- **Why** (5 min)
    - Lab 06 was big in concept, short on code
    - WRRC drawings
- **What** (10 min)
    - The WRRC should be coming more into focus now that we've built some of it out
    - The server should be feeding the front end actual data that works
    - Trello should be leading the way
- **How** (30 min)
    - Review the Trello board feature tasks & requirements

# What would you like to look at in code review?

- lab? //lets look at incomplete or broken code.
- code challenge? //what numbers.

## Code Challenge topics

- without the object

```js

let output = false;
arr.forEach(person => {
if(person.name === character && person.children.length > 0){
output = true;
}
return output;
});

// what do we get back
console.log('array object values', Object.values(arr));
```

# Look at Lab pull it down

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

# Lets build the weather route when we get back from break

---

## Ten Minute Break

- ## Second Hour

---

- grab trello data and res.send it to see what it looks like.

```js

app.get('/weather', (request, response) => {
const weatherData = require('./data/weather.json');
const arr = [];


weatherData.data.forEach(weatherObject => {
//do first and then add it to constuctor function then add the new and the push
// //find forecast 
// const forcast = weatherObject['weather']['description'];
// //everything with a TS is a time stamp. 
// const time = weatherObject.valid_date;
// //now lets pass to our weather constructor. 

const newWeatherObject = new Weather(weatherObject);
arr.push(newWeatherObj);
});


// If the client is sending me information where will it live?
// Aproperty that we can always access, the connection is in request.query. 

res.send(arr);


// res.send([
//   {
//     "forecast": "Partly cloudy until afternoon.",
//     "time": "Mon Jan 01 2001"
//   },
//   {
//     "forecast": "Mostly cloudy in the morning.",
//     "time": "Tue Jan 02 2001"
//   }
// ]);

});


//constructor function 
function Weather(jsonObj){
  this.forecast = jsonObj['weather']['description'];
  this.time = jsonObj.valid_date;
}

```

# Shred Talk

it is the identical callback to the forEach, there are like four methods that will look this way, with a value, index and an array.

```js
//Array.prototype.map
/*

let newArray = arr.map(callback(currentValue[, index[, array]]){
//return element for newArray, after executing something
});

identical in its structure to forEach
iterates over every element
it puts items in a new array as it iterates, one for every element no matter what an array of 5 things as the input will always have 5 things as the output. It's a forEach that makes arrays. 

The callback function takes whatever you return and puts it in the new array

map() is a built in method to all arrays. 

 */
const nums = [10, 30, 35, 50, 88];
//one line function the value is implicit. 
const output = nums.map(() => 'I was returned!');
console.log('output: ',output);
console.log('nums: ', nums);
//A Tenet of functional programming is that we dont change the original thing. 
nums.map((value, index, array) => {
  console.log('V-I-A',value, index, array);
  return value * 7;
});
nums.map(number => number * number);
//we can pass in a named callback

function callback(value, index){
  // return value * value;
  //for below
  return value * index;
}

nums.map(callback);


function fakeMap(array, callback){
  const newArray = [];
  for(let i = 0; i < array.length; i++){
newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

fakeMap(nums, callback);

//map() is great to pass info into our constructors, map will work with our labs, one of the goals for today is to use it this week. 



```

# Lets rebuild our front end again to become more familiar with it

-
---

## Ten Minute Break

- ## Third Hour

---

- <https://swapi.dev/>
- is an api.
- is a server like the one we have built.
- I dont know what language it is built in, but we can make request to it.
- our location URL we get data back and we will get data back from the api.
- 100's of api exsist, may have to register
- but most are just available.
- we want the same data in our app
- how have we made our URL request so far?

# To install Super Agent

- npm install -S superagent
- similiar to jquery we are going to pass in a URL
- super agent is going to take a while to load.

# Today we will talk about Promises and see what is going on behind the scene

# api  (we will be using these in our 301 project.)

- some one pays and collects the information for these api's
<https://rapidapi.com/>
<https://github.com/public-apis/public-apis>

- our site is an api, but not awesome, but it will be soon. when we add cool data.
- no one will know if they are coming from us or the api, of which could be pulling from other apis

# Talk about promises

- See code for notes.

- commit logs from last night. github

### Promises and Async

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
    - REST give us a common language and set of methods to access all of it, with WRRC
    - By using APIs in creative ways, you can make really interesting apps, but leave the data management to the experts
- **What** (10 min)
    - Identify the APIs that you need
    - Inspect the "shape" of the data and see if it conforms to your needs
    - Talk about communication via WRRC (now: server-side code is now the client!)
- **How** (30 min)
    - Demo the signup and access key retrieval process
        - Location IQ
        - Zomato
    - Integrate into your server application
        - Fetch Data
        - Massage it into shape (constructors)
        - Test with your client application
- **Experimentation and Discovery Ideas**

## Lab Notes

## What changed from the previous class?

- We will be refactoring our data fetchers from simply `require()` on a static .json file into pulling data from a live API with superagent, and having to wade through a promise to do so.
- We will truly be feeding the city explorer front end live data
    - This is an ongoing requirement for the week
- Not a lot of code movement (really a single change to the fetching functions), but a lot of cognitive changes for the students today as they wrestle with Promises both syntactically and conceptually

## What might students struggle with today?

- Promises and Async thought patterns
- Getting registered for their APIs

## Past bugs, issues or surprises

- Remind students HOW to set their API environment options in Heroku

## General Comments and Notes
