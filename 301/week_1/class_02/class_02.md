# Class 2

## Lecture Notes: State, Props and Bootstrap

## Warm-Up

- **Student Analysis** (5 min)
    - Show code instruct students to draw what they think the css will produce.
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

- **Debrief** (5-10 min)

## styles.css solutions

```css

div {
  /* we need a clear fix */
/*     overflow: auto; */
  /* will now contain elements */
}

ul {
 /* here we need display: flex */
 /* display: flex; */
}

li { 
/* but we may not want floats  
we could use display: inline or -block;
*/
/*   display: inline-block; */
}


```

## Review class 1 code challenge 10 - 15 minutes

## Code Review (30 min)

- Demonstrate the solution code for React components.
- Be sure to talk about how to render an image in React.

## State and Props

- **Why** (2 min)
    - State is used as a way of configuring components with properties.
    - State can keep track of things as other components(or the same component)
    are changing.
- **What** (5 min)
    - State: a memory of persistent values.
    - Props: a memory of persistent values passed in by a parent.
- **How** (40 min)
    - Begin with a review of the WRRC from yesterday.
    - Draw the components on the whiteboard. Demonstrate the way each component
     can hold its own state and parent components can pass props down to children
     components. Be sure to emphasize that children components cannot pass state
      back up to parents. State flows down.
        - There are a lot of great analogies for this. I like using a waterfall,
         but find one that works for you.
    - Go through the [state and props demo](../demo/state-and-props).
    - Be sure to pause periodically to draw how props are being passed from parent
     to child on the whiteboard.

  1. Annoucements daily alerts 5
  2. Warm-up 10
  3. Review Code Challenge 20
  4. Review Lab 1 20
  Second Hour
  1a. Code challenge demo 15

## Look at the slide show

  2a. Bring in Json data and render name and image of pizza
  3a. Slide show and talking about state. Create some event handlers

  4a. Add Constructor, state, onclick, see likes!
  Third Hour
  1b. Start CSS
  2b. Google BootStrap, install, run and look at options, ternary
  3b. Netlify deployment - Deploy the build/settings/command CI= npm run build save
  4b. Look at Lab
