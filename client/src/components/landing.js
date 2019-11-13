import React, { Component } from "react";
import axios from "axios";
import { Redirect ,Link} from 'react-router-dom'
import NewEvent from './newEvent'
import NavBar from "./navBar";
import NewDonation from "./newDonation"

export default class Landing extends Component {
  state = {
    event: [],
    donation: []
  };

  componentDidMount() {
    axios.get("/api/event").then(res => {
      console.log(res.data);
      this.setState({
        event: res.data
      });
    });
    axios.get('/api/donation').then(res =>{
      console.log(res.data);
      this.setState({
        donation: res.data
      });
    }) 
    
  }
  render() {
    return (
    
      <div>
        <NavBar />
        <h4> Community Events</h4>
        

        {/* Accessing the value of message from the state object */}
        {this.state.event.map(event => {
          return <div>
           <Link to={`/event/${event._id}`}>
           {event.name}
           </Link>
          </div>;
        })}
        <NewEvent />
        
        {this.state.donation.map(donation => {
          return <div>
           <Link to={`/donation/${donation._id}`}>
           {donation.typeOfDonation}
           </Link>
          </div>;
        })}


        <NewDonation />
        

      </div>
    );
  }
}
