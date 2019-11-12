import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class NewEvent extends Component {
  state = {
    name: "",
    organizationType: "",
    goalBased: ""
  };

  updatedFunc = e => {

    this.setState({
      name : e.target.value,
      organizationType : e.target.value,
      goalBased : e.target.value,
    });
  };

  onSubmit =() =>{

  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.updatedFunc}
          />

          <input
            type="text"
            goalBased="goalBased"
            placeholder="Whats your goal?"
            value={this.state.goalBased}
            onChange={this.updatedFunc}
          />

          <input
            type="text"
            organizationType="organizationType"
            placeholder="type-of-organization"
            value={this.state.organizationType}
            onChange={this.updatedFunc}
          />

          <Button variant="contained" color="secondary" >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
