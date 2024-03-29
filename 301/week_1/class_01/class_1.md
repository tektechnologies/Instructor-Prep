# Good Day

## First Hour

- Slide Deck 45 minutes intro slides

## TAKE BREAK

## Second Hour

### All about 301 (30 min)

## REPO and REMO

- we will get back into the configs in the second week when we look at building
  out a server file

## go to Canvas

- In-Class schedule and assignments
- I will call on you, don't forget to pass or phone a friend. If I have spelling
    errors let me know.
    - Career Coaching
    - Readings
        - Done in a reading-notes repo
    - Warmups
        - Every language!
    - Code Challenges (and shred talks)
        - Node and Test Driven Development
        - Practice!
    - Lab Assignments
        - Look at grade percentages.
        - New workflows (Trello) on the way
- Grading standards
    - Minimum requirements
    - Take care of your TAs by following instructions

## Go through the Pre-work Review

- Function Declaration
- Function Expression
- Arrow Function - How does that look? With one line of code?

### Shred Talk (15 min to 1 Hour)

- **Why**
    - Daily "Shred Talks" introduce students to a new javascript coding concept.
- **What**
    - Refer to the [challenge documentation](../challenges/README.md).
- **How** (10 min)
    - Follow the [Demo Code]
    - First day = students also need a complete demonstration of the
     Code Challenge Workflow, described in [the assignment](../challenges/ASSIGNMENT.md).
  
    - Review tests in action.
    - run the tests in the terminal.

- Look at **Code Challenges** set up and create in the demo.
    - Look at code challenge one in canvas.
    - Use the branch names given in the assignment.
    - Run npm test, see failing tests then run code demo on foreach()
    - start with going to the mozilla documentation and showcase site.
    - run for each() demo
    - Then do the first challenge and see tests pass.
- Walk through create react app
- Refer to the [301 Intro Concepts Demo](../class_01/preworkReview.js)

### Classes (20 min)

- **Why** (5 min)
    - Classes are the building blocks for React
    - They are part of ES6 and allow for Object Oriented Programming
- **What** (10 min)
    - A blueprint for creating objects
    - A system where we can define objects in relation to each other using
     subclasses using the keyword `extends`.
- **How** (10 min)
    - [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
    - Prepare a short demo on classes or use the one provided. Be sure to discuss
     class structure, subclasses and inheritance.

### Arrow Functions (20 min)

- **Why** (5 min)
    - There are multiple ways to write functions
    - Allows us to write concise one line functions
    - Contextual `this` behaves differently
- **What** (10 min)
    - A different way to write a function
    - Contextual `this` will bubble up to the next non-arrow function
- **How** (10 min)
    - Review the arrow-functions lab with the students

## After Break lets set up the code Challenges

## Third Hour

### Install / Create Data Structures repo for 301 and then 401

- <https://codefellows.github.io/setup-guide/code-301/2-code-challenges>
- bring in code challenge number one
- run npm test to see things pass
- Create Branch then ACP
- Start Challenge one explain resources, videos and when we are demoing the concepts.

### React and Component-Based UI (40 min)

### Start with the IN slide deck intro to REACT concepts

- <https://craigbarkley702658.invisionapp.com/freehand/Class-One---301-QqjvhWV8j>

- Lab 01.
- Create a react app
- Create 4 components inside the react app
- Pass unique values using Props to those four components.

- **Why** (5 min)
![Static website](/content/staticsites.png)
    - React is a growing trend in the industry for front end development.
    - Allows us to break things down into individual components that can easily
     be reused and tested.
    - Can update state without reloading the entire page.
- **What** (10 min)
    - Check out medium website. <https://medium.com/>
    - React (and Angular and Vue) are "Component-based libraries"
    - They take care of binding data (state) to The DOM
        - React uses a Virtual DOM to do so, re-rendering things when data changes
    - As a developer, we get many advantages
        - thinking smaller and still managing template's issues at the same time.
        - Separation of Concerns
        - Reusable parts
    - Components
        - Header = `<Header />`, etc
            - Just like calling `Header()` from in a JS function, but easier
    - Modularity
        - How do we bring in dependencies?
        - `import x from 'y'` - equivalent of `require('thing')` on the node side
            - other components (which you can then render)
            - css
        - Where do we put them?
            - Wherever you want them
            - (It's Annoyance Driven Development)
- **How** (30 min)
    - Begin with a discussion of the WRRC and it how it relates to React
        - The web is just a series of requests and responses.
        - In order to go from React code that we see on our computer to a site
        that we see in the browser, there is a series of requests and responses happening.
            - who is the client? who is the server?
            - The client makes a request
            - The files are served
            - Talk about what it means when we say a class `extends React.Component`
    - Pull up an application and get student ideas on ways we can break it down
     into components
        - Here is a `Header` - a `Footer` - a `Main`
        - Encourage students break it down even further so that each button could
         be a component.
    - Build the [demo](../demo)
- **Experimentation and Discovery Ideas**
    - Discussions can arise about Modularity, Connections between components

    - Demonstrate how to use `create react app` to make a React template
        - Be sure to spend some time going through each thing that
         `create react app`
        - Start with what is Chart.js
        - difference between source and in browser code.
        - replace with vite
        - npm create vite@latest
        - lowercase with dashes.
        - installing will take a few minutes
        - Go to GitHub and create an empty repo
        - then cd into demo project
        - show that git is set up
        - then grab github commands and connect up the repos.
        - NOW go through file folder scaffolding and talk about what is there and
         what it does.
        - grabbing root "id" from index.html in the index.js
        - Live server doesn't work, it needs to be compiled before sent to browser.
        - we need to run npm start
        - npm is node.
        - is going to run our tests and our react pages
        - Set up netlify and import git hub repo to deploy react. Boom.
        - Delete react files, App.test.js, logo.svg, reportWebVitals.js and setupTests.js
        - Clean up the instances where they were used.
        - Two ways to write functional and class based components.
        - 1. import react
        - 2. extends react component
        - 3. export default App;
        - Then in the class  we render a return()
        - show the () for multi line
        - show fragments <> or <div>
        - Show the css file and how to add styles
        - making reusable code avoid id and use class or the html element.
        - Link the css file show how linking works
        - Go over lab requirements
         gives you and discuss the components you want to keep and the ones that
          we are not going to use

        - Create a Header Component
        - Add to our App.js
        - Show how to many a component tag
        - Show copy and paste component for reusability.
        - Make the Main.js Component

        - Possibly white board here for help.
        - Show what we customize and what we don't(index.html, App.js, index.js)
        - create a person component
        - How do we get different data into these same components.

- Then access the value from props using this.props.name in the Person.js
- Now we see our names
- Talk about curly braces and meaning. Interpret as js. it is jsx
- props is like a package getting passed to child components
- Check netlify deployment.
- Show deployment preview and make sure we are good to merge.
- Show how to indent components for readability
- Explain Lab requirements
- don't go over board on css.

## Run the foreach Demo
