import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import NewEvent from './newEvent'

export default class Landing extends Component {
  state = {
    event: []
  };

  componentDidMount() {
    axios.get("/api/event").then(res => {
      console.log(res.data);
      this.setState({
        event: res.data
      });
    });
  }
  render() {
    return (
    
      <div>
        <h1> Community Events</h1>

        {/* Accessing the value of message from the state object */}
        {this.state.event.map(event => {
          return <div>
           <Link to={`/event/${event._id}`}>
           {event.name}
           </Link>
          </div>;
        })}
        <NewEvent />
      </div>
    );
  }
}
