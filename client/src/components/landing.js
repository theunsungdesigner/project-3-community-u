import React, { Component } from "react";
import axios from "axios";
import { Redirect ,Link} from 'react-router-dom'
import NewEvent from './newEvent'
import NavBar from "./navBar";
import NewDonation from "./newDonation"
import NewVolunteers from "./newVolunteers"

export default class Landing extends Component {
  state = {
    event: [],
    donation: [],
    volunteers: []
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

    axios.get('/api/volunteers').then(res =>{
      console.log(res.data);
      this.setState({
        volunteers: res.data
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

        {this.state.volunteers.map(volunteers => {
          return <div>
           <Link to={`/volunteers/${volunteers._id}`}>
           {volunteers.volunteerName}
           </Link>
           </div>;
        })}


        <NewVolunteers />
        

      </div>
    );
  }
}
