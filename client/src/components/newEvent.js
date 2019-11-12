import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Form, Card } from "react-bootstrap";

export default class NewEvent extends Component {
  state = {
    newEvent: {
      name: "",
      organizationType: "",
      goalBased: ""
    }
  };
  handleInputChange = e => {
    const newEvent = { ...this.state.newEvent };
    newEvent[e.target.name] = e.target.value;
    this.setState({ newEvent: newEvent });
  };

  bttnClicked = event => {
    event.preventDefault();
    axios.post("/api/event", this.state.newEvent).then(newEvent => {
      console.log(newEvent);
    });
  };

  render() {
    return (
     
        <div>

        <form onSubmit={this.bttnClicked}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />

          {/* <form onSubmit={this.bttnClicked}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          /> */}

          <input
            type="text"
            name="goalBased"
            placeholder="Whats your goal?"
            value={this.state.goalBased}
            onChange={this.handleInputChange}
          />

          <input
            type="text"
            name="organizationType"
            placeholder="type-of-organization"
            value={this.state.organizationType}
            onChange={this.handleInputChange}
          />

          <Button variant="contained" color="secondary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
