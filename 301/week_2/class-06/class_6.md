# Good Day Happy Monday WEEK 2
**How was your WEEKEnd**
--- 

## This will be a cool week jammed packe full of new concepts and terminology.
 - Node, NPM, Deployments, Routes, WRRC, ReST
- Gleaning requirements only from Trello
  - Feeding the front end with their server data

# First Hour

## Lecture Outline
### Warm-Up
### Shred Talk
### Code Review
### The WRRC
### Node.js, NPM, Servers   

# 3 Main things
1. How do I start a server.
2. How do I create a route.
3. How do I make it give data when someone tries talking to it.
A. by the End of the Day we will have some data rendering to our pages and one list of weather information. Tomorrow we will look at something called an api key, so that we can render an image from our calls to the api. 



### Warm-Up
### html
```html

<!-- our default order is 0 like an array.  Start and replacing it with the end and vice versa, end to start by default because of reverse order they  100 115 120 130, order one moves to end means it does not stand for the first, -->

  <div>
  <img src="http://via.placeholder.com/100">  <!--  0  -->
 
  <img src="http://via.placeholder.com/115"><!--  1  This is lexical order with out the css rule it would have laid out in normal order-->

  <img src="http://via.placeholder.com/120"><!-- 0  The order is the order they will layout from left to right-->

  <img src="http://via.placeholder.com/130"><!--  0  At the first flip the 1 will be in this position -->

</div>

```
### styles.css
```css
div {
  display: flex;
  /* Start out with a flex start and then a flex end */
  justify-content: flex-end;
  /* this is saying that we are going to center vertically up and down creating spacing on top and bottom of an image or div  */
  align-items: center;
  height: 200px;
  This is reversing the order of our content
  flex-direction: row-reverse;

  /* last try a align-items baseline to show what happens 
  align-items: baseline; 
  
  text and images will try and share the same baseline, same row they written on.
  grid does work with flex , align-items are shared between the two. its the content justigy items or content grid vs flex is where some differences are. 
  
  */
  
}


/* we have to pay attention to the order since they are reversed.  */
img:nth-child(2) {
  border: 2px solid red;
  order: 1;
  align-self: baseline;
}

```


### Code Review
# Today we will be learning all about servers. 

- Lets start by looking at the Lab. In Cavas.



- This is the first day that the labs will be executed through Trello. Talk about Trello.
- [City Explorer Trello Board](https://trello.com/b/ZmD87LCC)
  - Each lab is a different color
  - Each task is well labeled
  - Each feature is well described
  - Each task is well documented
- Students will FORK the board to track their progress
- Students will submit a proper submission to canvas

During your lectures, refer to the board to see the data contract/requirements for each API!

---
![Draw req/res for city](944.jpg)

- What is a client? - A student to teacher, request things, tempory, googler/webpageForm(client as well.)
- What is a server? A temporary. that server responses to requests, google 

- Client makes req to server for Food. The relationships are the same. We will make req and delegate our responsibilites to another server. 
- Server in a restaurant will make a req to the cook for food. 
- Afer this week you may begin to see the req/res cycle everywhere, its ok, its a code thing. 
- for us we will have an actual server.js. 

1. Make an entry point to the server file called server.js
2. Then we want to run the npm init command to set up of file scaffolding.
3. Then complete the set questions, to finish setting up apps link to the server file. Create the file first!
4. Package.json is now created, and we have key value pairs that annotate the server.js file. 
5. We will also talk about the concept of the env. 

# Draw out the WRRC Here AND OPEN UP SERVER JS FILE TO TYPE OUT COMMENTS. 

### The WRRC
![Draw req/res for city](570.jpg)

 **How** (30 min)

  - Interactively draw the WRRC for a Single Page App
 
- **Why** (5 min)
  - An understand of The Web Request Response Cycle is critical to being a solid full-stack developer
  - We're about to add 3 more layers to it - servers, databases and remote APIs
  - To this point, we have been largely writing static websites and web pages with event handlers 
  - Data has been in `.json` files or in raw `{}` objects so far
  - In actual applications, users expect real time data
  - For that, we use APIs, Databases, and Servers to store, collate, and ultimately "serve" that data to the client (browser/js)

-ITS WORTH TALKING ABOUT ENV.S AS OUR APPS WILL NO LONGER JUST LIVE ON OUR LOCAL MACHINES. 

- **What** (10 min)
  - Two Enviromments our apps will live on. Production and Development. 
  - Every terminal has an env that we have access to, to run at anytime. Server or no Server these are the terminals env  variables needed to run the variables. 
    - We have played with PATH which is where our executed files are living, 

  - Got to terminal and run 

  ```terminal 

      ENV is unique to the window it is running. Same if we open a new tab. 
      
  ```
  - Last week we hard coded a PORT, we could do that here and type 
  - 

  ```js
  export PORT 
  ```

  - This is an us port if we look at it.
  - We could use this port by running our app on 3333. which we will see change as we go on this week as it may not be the same port that it runs on, on another machine. 

-

---
## Ten Minute Break
# Second Hour
---



































### Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.



- Deploy to Heroku, so review the PROCESS of that deployment with them.
- Don't dig in to the server code, since that will be a topic today anyway. 
- Conclude Code Review time with an preview of what work will be done on the server side this week.









![Draw req/res for city](410.jpg)



































---
## Ten Minute Break
#  Third Hour
---





### Node.js, NPM, Servers

- **Why** (5 min)
  - Provide our application a single point to fetch all of the data it needs
  - Allow a server to do the hard work of making all of the data "look the same"
  - Servers have better/faster connections to other servers, making it more efficient than the browser doing this job
- **What** (10 min)
  - Node.js and Express
  - Web/HTTP Server
  - Listens on a Port
  - Receives Requests (GET and POST), "does work", sends back a response.
    - Describe/Draw the request/response process
    - A "postal envelope" serves as a nice visual
- **How** (30-40 min)
  - Interactively demo the building of an Express API Server
  - Discuss the details of the parts of the application
  - 2 Routes:
    - `/location'` and `/weather`, both read .json files
  - Go deep on why we're doing this
  - Go deep on the request and response objects in Express
    - They carry data and methods
    - They standardize the process
- **Experimentation and Discovery Ideas**
  - Walk the students through the deployed [City Explorer App](https://codefellows.github.io/code-301-guide/curriculum/city-explorer-app/front-end/) to see how our server data is being used on the client

## Lab Notes

- There's a lot of code to write here, but honestly, 90% of it is given in the demo. 
- They really only have to "think through" Weather.
- Definitely encourage the students to separate their route handlers from the route definitions for clarity.
- There will be more readability and refactors as we go through the block, encourage them to explore, but don't make separating out the route handlers into multiple functions a high priority.

