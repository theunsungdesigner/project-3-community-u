import React, { Component } from "react";
import axios from "axios";

export default class Donation extends Component {
  componentDidMount() {
    axios.get("/api/event").then(allEvent => {
      this.setState({ allEvent: res.data });
    });
  }
  render() {
    return (
      <div>
        {this.state.allEvent.map((event)=>{
            return (<p>{event.name}</p>)
        })}
      </div>
    );
  }
}
