import React, { Component } from "react";
import ReactDOM from "react-dom";
import Weather from "./weather";
import Footer from "./footer";
import "./App.css";
import './index.css'

class App extends Component {
  getweather = async e => {
    const cityname = document.getElementById("cityname").value;
    const api_key = "8b4a1cfe7b37f251dcce8b232975fd6d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api_key}`;
    console.log(url);
    if (cityname) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.cod === 404) {
            this.showErrorMsg();
          }
          this.setState({
            city: data.name,
            description: data.weather[0].description,
            tempertaure: data.main.temp,
            humidity: data.main.humidity,
            pressure: data.main.pressure
          });
        })
        .catch(e => console.log("error", e));
    } else {
      this.setState({
        searchcity: "",
        city: "",
        description: "",
        tempertaure: "",
        pressure: "",
        humidity: "",
        error: ""
      });
    }
  };
  showErrorMsg = () => {
    console.log("gfhf");
    this.setState({
      error: "Sorry there is not such city in the list"
    });
  };
  onInputChange = e => {
    this.setState({
      searchcity: e.target.value,
      city: "",
      description: "",
      tempertaure: "",
      pressure: "",
      humidity: ""
    });
  };
  state = {
    searchcity: "",
    city: "",
    description: "",
    tempertaure: "",
    pressure: "",
    humidity: ""
  };
  render() {
    return (
      <div className="container">
        
          <h3>Welcome to Athi Mbondwana's WEATHER APP</h3>
        <label>Enter City Name : </label>
        <input
          type="text"
          name="cityname"
          id="cityname"
          value={this.state.cityName}
          onChange={this.onInputChange}
        />
        <button type="submit" onClick={this.getweather}>
          {" "}
          Get Weather{" "}
        </button>
        <Weather
          city={this.state.city}
          temperature={this.state.tempertaure}
          pressure={this.state.pressure}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
        <Footer />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
