import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Form, Card } from "react-bootstrap";

export default class NewDonation extends Component {
  state = {
    newDonation: {
      typeOfDonation: "",
      food: "",
      clothing: "",
      goods: ""
    }
  };
  handleInputChange = e => {
    const newDonation = { ...this.state.newDonation };
    newDonation[e.target.name] = e.target.value;
    this.setState({ newDonation: newDonation });
  };

  bttnClicked = donation => {
    // donation.prdonationDefault();
    axios.post("/api/donation", this.state.newDonation) 
    .then(newDonation => {
      console.log(newDonation);
    });
    // console.log(this.state.newDonation);
  };
  
  render() {
    return (
      <div>
        
        <form onSubmit={this.bttnClicked}>
          <input
            type="text"
            name="typeOfDonation"
            placeholder="type of Donation"
            value={this.state.typeOfDonation}
            onChange={this.handleInputChange}
          />

          <input
            type="text"
            name="food"
            placeholder="food type"
            value={this.state.food}
            onChange={this.handleInputChange}
          />

          <input
            type="text"
            name="clothing"
            placeholder="clothing"
            value={this.state.clothing}
            onChange={this.handleInputChange}
          />

          <input
            type="text"
            name="goods"
            placeholder="goods"
            value={this.state.goods}
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
