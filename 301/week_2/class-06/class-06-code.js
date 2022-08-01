import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      starWarsChars: [],
      cityData: {},
      error: false,
      errorMessage: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Submit Event: ", event);
      let starWarsCharacters = await axios.get(
        "https://swapi.dev/api/people/?page=1"
      );
      console.log("Galactic Heros: ", starWarsCharacters.data.results);
      this.setState({
        starWarsChars: starWarsCharacters.data.results,
        error: false,
      });
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
      this.setState({
        error: true,
        errorMessage: `An error occurred: ${error.response.status}`,
      });
    }
  };

  submitCityHandler = async (event) => {
    event.preventDefault();
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format=json`;
    let cityInfo = await axios(url);
    console.log("City Info: ", cityInfo.data[0]);
  };

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  render() {
    console.log("Star Wars STATE:", this.state.starWarsChars);
    console.log("onInput in STATE:", this.state.city);

    let startWarsList = this.state.starWarsChars.map((characterName, index) => {
      return <li key={index}>{characterName.name}</li>;
    });

    return (
      <>
        <h1>Data from an STAR WARS API</h1>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Display Star Wars Data</button>
        </form>
        {this.state.error ? (
          <p>{this.state.errorMessage}</p>
        ) : (
          <ul>{startWarsList}</ul>
        )}

        <ul>{startWarsList}</ul>

        <form onSubmit={this.submitCityHandler}>
          <label>
            {" "}
            Pick a City:
            <input type="text" onChange={this.handleCityInput} />
          </label>
          <button type="submit">Get City Data</button>
        </form>
      </>
    );
  }
}

export default App;
