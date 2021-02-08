# Good Day Happy Friday
**You Made It to Friday**
--- 

## This has been a big week, thumbs up/down how are you feeling about this week.



- ## First Hour


---
## Ten Minute Break
- ## Second Hour
---

---
## Ten Minute Break
- ## Third Hour
---

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../facilitator/LECTURE-EXAMPLE.md) notes.

### Warm-Up

- **Student Analysis** (5 min)
  - Show or print the [warm-up code](../warm-up/warm-up.md)
- **Debrief** (5-10 min)
  - Refer to the [Warmup Notes](../warm-up/NOTES.md)
  - Optionally demo the running code at Repl.it

### Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

### Code Review

Students deployed to Heroku, so review the PROCESS of that deployment with them. Don't dig in to the server code, since that will be a topic today anyway. 

Make sure everyone can distinguish the roles of client and server, and how the dialog works across the internet. 

Conclude Code Review time with an preview of what work will be done on the server side this week. 

This is the first day that the labs will be executed through Trello and not standard Lab requirements. The lab docs are an execution guide, not a feature set. Use a bit of Code Review time to talk through this in class.

- [City Explorer Trello Board](https://trello.com/b/ZmD87LCC)
  - Each lab is a different color
  - Each task is well labeled
  - Each feature is well described
  - Each task is well documented
- Students will FORK the board to track their progress
- Students will submit a proper submission to canvas

During your lectures, refer to the board to see the data contract/requirements for each API!

### The WRRC

- **Why** (5 min)
  - An understand of The Web Request Response Cycle is critical to being a solid full-stack developer
  - We're about to add 3 more layers to it - servers, databases and remote APIs
  - To this point, students have been largely writing static websites and web pages with event handlers 
  - Data has been in `.json` files or in raw `{}` objects so far
  - In actual applications, users expect real time data
- **What** (10 min)
  - For that, we use APIs, Databases, and Servers to store, collate, and ultimately "serve" that data to the client (browser/js)
- **How** (30 min)
  - Interactively draw the WRRC for a Single Page App
- **Experimentation and Discovery Ideas**
  - Allow students to come up with a scenario where a browser would want live data
  - As they come up with ideas, lead them down a road that will resemble our City Explorer App
  - Draw this as a WRRC Diagram once they've settled on an app idea

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

- There's a lot of code to write here, but honestly, 90% of it is given in the demo. They really only have to "think through" Weather.
- Definitely encourage the students to separate their route handlers from the route definitions for clarity.
- There will be more readability and refactors as we go through the block, encourage them to explore, but don't make separating out the route handlers into multiple functions a high priority.

## What changed from the previous class?

- In our previous deployment workshop, we built out a really basic express server and deployed it to Heroku.
- This class is the start of a new block, so while nothing has "changed", we are going to be revisiting and rebuilding that server again, and adding more meaningful routes to it

## What might students struggle with today?

- The sheer volume of new material and vocabulary
  - Node, NPM, Deployments, Routes, WRRC, ReST
- Gleaning requirements only from Trello
  - Feeding the front end with their server data

## Past bugs, issues or surprises...

- Students tend to mis-format their .env files
  - PORT = 3000 (spaces)
  - PORT=3000; (semicolon)
  - PORT="3000" (quotes)
- Remind them that this is a simple key/value syntax

## General Comments and Notes