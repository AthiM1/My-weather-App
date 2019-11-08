import React, { Component } from "react";

export default class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.city && (
          <p>
            City :<span> {this.props.city}</span>
          </p>
        )}
        {this.props.humidity && (
          <p>
            Humidity :<span> {this.props.humidity}</span>
          </p>
        )}
        {this.props.temperature && (
          <p>
            Temperature :<span> {this.props.temperature}</span>
          </p>
        )}
        {this.props.pressure && (
          <p>
            Pressure :<span> {this.props.pressure}</span>
          </p>
        )}
        {this.props.description && (
          <p>
            Description :<span> {this.props.description}</span>
          </p>
        )}
        {this.props.error && (
          <p>
            Err :<span> {this.props.error}</span>
          </p>
        )}
      </div>
    );
  }
}
