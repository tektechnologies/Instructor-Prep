# Happy Day

## Announcements

- Friday I will be out at 3. Working Saturday.

## Warm-Up

- Object Iterations.

## Code Challenge Review

## Lab Review

================= Servers ====================
A server needs to respond to information on the internet
When information is sent on the internet it primarily uses http
http is a way to encode data and send it in a uniform way so everyone can talk.
Its like the alphabet of talking on the internet

The job of talking over http, and especially listening for http requests is
handled by Express It gets translated by express into javascript

http requests contain a lot of info
The basics are a lot like mail
there is an address: url
there is a to and a from  to: route, from: client url
There can be a letter inside: encode information completely hidden in
the response - like a letter in the envelope
There can be info written on the outside of the letter - this is our queries
info on the visible url

Express reads all of this for us and much more

================ Environment  ===============
A server has to run somewhere
Heroku, AWS, terminal
The server needs to run on a PORT on our local we use 3000, 3001, heroku tends to
gravitate towards like 27000-32000, aws i have no clue
There are settings our server has to pay attention to when it runs.
We will create dynamic variables instead of hard coded ones that our server can
read live.
These variables make up / live in our environment
not goDaddy (goDaddy is a dns, redirects to where it lives)

## Second Hour

### Refactoring

    - Code isn't always poetry
    - You want to integrate new technologies/libraries
    - You get better and learn new things
    - You want to integrate more advanced design patterns
    - So
    - Break large functions into smaller chunks
    - Identify areas for reusable functions
    - Identify common patterns
    - Seek opportunities to extend or abstract functionality

## Ten Minute Break

- ## Third Hour

## Promises

- Any time javascript recognizes an event as taking more than instant time, it
- can use a promise to wait for the event to finish before handling it
- A promise is just an object that contains the necessary info to continue
- running code for delayed process
- promises are a javascript thing, not a superagent or jquery or react or axios
- promises fail and succeed We call this resolving and rejecting
- a promise can be directed to a failure or success callback just like we can
- have a try catch with two different options
- the `success` path for promises: this path triggers
- the .then(callback)
- failure triggers another function `.catch`

if we req something it is promising to bring something back which is what async
await is doing for us.

## remind them to be kind to themselves this week we have taken in a lot of info
