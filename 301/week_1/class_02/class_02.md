# Class 2

## Lecture Notes: State, Props and Bootstrap

## Warm-Up

- **Student Analysis** (5 min)
    - Show code instruct students to draw what they think the css will produce.
- **Debrief** (5-10 min)
   Predict how this code will be rendered on the page. Draw the outcome in the
   blank space below. What would you change?

## index.html

```html
<div>
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</div>
```

## styles.css

```css
div {
  border: 10px solid yellow;
}

li { 
  border: 1px solid red;
  float: left;
  height: 25px;
  width: 100px;
}
```













## Shred Talk

- **Why**
    - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series.
- **What**
    - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
    - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
    - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

## Code Review (30 min)

- Following the first lab, students will be in need of answers.
- It is also important that early in the course we start ingraining them in a daily schedule/format.
- Demonstrate the solution code for React components. Be sure to talk about how to render an image in React.

## State and Props

- **Why** (2 min)
    - State is used as a way of configuring components with properties.
    - State can keep track of things as other components(or the same component) are changing.
- **What** (5 min)
    - State: a memory of persistant values.
    - Props: a memory of persistant values passed in by a parent.
- **How** (40 min)
    - Begin with a review of the WRRC from yesterday.
    - Draw the components on the whiteboard. Demonstrate the way each component can hold its own state and parent components can pass props down to children components. Be sure to emphasize that children components cannot pass state back up to parents. State flows down.
        - There are a lot of great analogies for this. I like using a waterfall, but find one that works for you.
    - Go through the [state and props demo](../demo/state-and-props).
    - Be sure to pause periodically to draw how props are being passed from parent to child on the whiteboard.

## React-Bootstrap

- **Why** (2 min)
    - We want our application to look nice but we don't always know how to accomplish that.
- **What** (5 min)
    - A styling library that allows us to tap into built, styled components.
- **How** (30 min)
    - Read through the documentation for react-bootstrap.
    - Add a `navbar` to the demo on state and props.
    - Get suggestions on what to add next from the class and add it.
    - Be sure to read all the documentation for that component. This is a great opportunity to introduce students to reading documentation so take your time with this!

## Deploy

- **Why** (2 min)
    - We want to share our application with the world.
- **What** (5 min)
    - Netlify is a platform that allows us to deploy our React application.
- **How** (5 min)
    - Perform the following steps for the class, or have a student share his/her screen and walk them through the process since your React app will most likely be in the class repo.
        - Create a Netlify account
            - Students may follow along if they wish, but don't stop the class to troubleshoot.
        - Hook up your Netlify account to your GitHub
            - Make sure that you have a React application available to deploy.
        - Deploy your React application
  