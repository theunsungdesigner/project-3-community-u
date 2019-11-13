import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Form, Card } from "react-bootstrap";

export default class NewVolunteers extends Component {
  state = {
    newVolunteers: {
        volunteerName: '',
        schoolName: '',
        organization: ''
    }
  };
  handleInputChange = e => {
    const newVolunteers = { ...this.state.newVolunteers };
    newVolunteers[e.target.name] = e.target.value;
    this.setState({ newVolunteers: newVolunteers });
  };

  bttnClicked = volunteers => {
    // volunteers.prvolunteersDefault();
    axios.post("/api/volunteers", this.state.newVolunteers) 
    .then(newVolunteers => {
      console.log(newVolunteers);
    });
    // console.log(this.state.newVolunteers);
  };
  
  render() {
    return (
      <div>
        
        <form onSubmit={this.bttnClicked}>
          <input
            type="text"
            name="volunteerName"
            placeholder="Volunteer's name"
            value={this.state.volunteerName}
            onChange={this.handleInputChange}
          />

          <input
            type="text"
            name="schoolName"
            placeholder="School Name"
            value={this.state.schoolName}
            onChange={this.handleInputChange}
          />

          <input
            type="text"
            name="organization"
            placeholder="organization"
            value={this.state.organization}
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
