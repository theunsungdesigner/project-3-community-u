import React, { Component } from "react";
import axios from "axios";



export default class Donation extends Component {
  
  state = {
    
  };

  componentDidMount() {
    axios.get("/api/event").then(allEvent => {
      this.setState({ allEvent: res.data });
    });
  }
  render() {
    return (
      <div>
        {this.state.allEvent.map(event => {
          return <p>{event.name}</p>;
        })}
      </div>
    );
  }
}

// donationItem = [
//   {
//     men: "men's-jacket",
//     women: "femine products",
//     children: "toys"
//   },
//   {
//     food: "produce",
//     drygoods: "can goods",
//     water: "bottled water"
//   }
// ];