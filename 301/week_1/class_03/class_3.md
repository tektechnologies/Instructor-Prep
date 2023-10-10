# Good Day Happy Day

## Announcements daily alerts

### Warm-Up

- 10 minutes

- Python

### Review Code Challenge

- 20 Minutes

### Code Review

- 30 Minutes

- TDD workflow with the class.
    - Every day a new branch
    - Every day a new file
    - TDD
    - Submit a PR for grading

## Second Hour

- Code challenge demo 15

- Go through review lab slide deck for demo plan.

- Demo the slide deck concepts with displaying pizza by passing a function.

## Passing Functions as Props

- **Why** (5 min)
    - child components may need to interact with information in the parent
     component
    - child component may need to update state in the parent component
- **What** (10 min)
    - Parent component sends a function into the child component on the props
     that will allow the child component to interact with information in the parent
    component
      by invoking that function.
- **How** (50 min)
    - Demonstrate in demo: passing-functions
    - Use a lot of whiteboard drawings.
    - We use the this to make the passing of functions work, data can only be
    passed down from the parent component, and the child component can use the
     props passed to it to pass the update back to the parent for it to re-render
      the component with the updated state.

- Read the Lab

- Talk about modals

### 1

- Begin in app.js and and a constructor function also move the data
- to start the layout of props.
- write the addPizza function to show the pizza emoji, add prop to ```<Main />```
  then in main add it to ```<Pizza />```, then in Pizza add the onclick to the image
- Update the Header with props emoji

### 2

- Show the modal test in a ```<p>``` to see that the modal shows up.
- Add Modal and see it
- Add Modal arrow functions for handleOnHide in App.js
- Add to Modal show={this.state.showModal}  onHide={this.handleOnHide}
- Add  In App.js to the  <Main handleOnShowModal={this.handleOnShowModal}  /> component
- And then pass it to <Pizza handleOnShowModal={this.props.handleOnShowModal} />
- And then add it to h3  <h3 onClick={this.handleHeadlineClick} >{this.props.pizzaName}</h3>
- Add the arrow function to pass name of pizza into the modal
- Add helper function for the modal pizza name

```js  handleHeadlineClick = () => {
    this.props.handleOnShowModal(this.props.pizzaName)
  };

  ```

- Add Bootstrap
- update foreach to map
- add netlify to github repo.
