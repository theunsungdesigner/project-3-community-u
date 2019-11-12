import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class NewEvent extends Component {
  state = {
    name: "",
    organizationType: "",
    goalBased: ""
  };

  updatedName = e => {

    this.setState({
      name : e.target.value
    });
  };
  // organizationType : e.target.value,
  // goalBased : e.target.value,

  updatedGoal = e =>{
    this.setState({
      goalBased : e.target.value
    });
  };

  updatedOrg = e =>{
    this.setState({
    organizationType: e.target.value
    });

  };
  bttnClicked =()=>{
alert('a button was clicked')
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
            onChange={this.updatedName}
          />

          <input
            type="text"
            goalBased="goalBased"
            placeholder="Whats your goal?"
            value={this.state.goalBased}
            onChange={this.updatedGoal}
          />

          <input
            type="text"
            organizationType="organizationType"
            placeholder="type-of-organization"
            value={this.state.organizationType}
            onChange={this.updatedOrg}
          />

          <Button variant="contained" color="secondary" onClick={ bttnClicked } >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
