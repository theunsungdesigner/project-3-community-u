import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class NewEvent extends Component {
  state = {
    name: "",
    organizationType: ""
  };

  onChange = e => {
    const attr = e.target.name;
    this.setState({
      [attr]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="new-event"
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="goalBased"
            placeholder="Whats your goal?"
            value={this.state.goalBased}
            onChange={this.onChange}
          />

          <input
            type="text"
            name="organizationType"
            placeholder="type-of-organization"
            value={this.state.organizationType}
            onChange={this.onChange}
          />

          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
