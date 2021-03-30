# Warm-Up Exercise
This code sample is written in JavaScript and JSX. Read through the code and determine the output for this function.

```javascript
//React starts with data and we always start on the data side, so having the html updated when state changes, is a built in feature of REact


import React, { Component } from 'react';
//this allow you to call from somewhere else in the app. 
//JSX library that looks like html but is infact javascript. 
//new App
//it is a componetized library. 

class App extends Component {

  constructor(props) {
    super(props); // the thing that is the parent of the other, if we want to extend our props to another instance super will create the prototype on the new object to have or inherit the props from our constructor. 
    this.state = {
      name: "Susan Sample",
      age: 27,
      pets: ["Fido", "Mr Whiskers"]
    };
  }

  hadBirthday = () => {     // react is now making use of contextual .this. 
    this.setState({age: this.state.age+1});
  };

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h3 onClick={this.hadBirthday}>Current Age: {this.state.age}</h3>
        <h4>Pets</h4>
        <ul>
          {
            this.state.pets.map( (pet) => <li>{pet}</li> )
          }
        </ul>
      </div>
    );
  }
}

export default App;
```
