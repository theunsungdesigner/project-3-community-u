import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";


export default class singleEvent extends Component {
  state = {
      singleEvent: {
    name: "",
    goalBased: "",
    organizationType: ""
      },
      redirectHome: false,
      isFormDisplayed: false
  };
  componentDidMount() {
    axios.get(`/api/event/${this.props.match.params.eventId}`).then(res => {
      this.setState(res.data);
    });
  };
 
  updateEvent = (event) =>{
    axios.put(`/api/event ${this.props.match.params.id}`, {
        name: this.state.name,
        goalBased: this.state.goalBased,
        organizationType: this.state.organizationType
    }
    .then(res => console.log(res.data));
}

deletedEvent=(event)=>{
    event.preventDefault()
     axios.delete(`/api/event/${this.props.match.params.eventId}`)
     .then(res => console.log(res.data));
 }

 toggleEditForm = () => {
    this.setState((state, props) => {
        return { isFormDisplayed: !state.isFormDisplayed }
    })
}
 
  render() {
    return (
      <div>
        <h1>All Local Events</h1>
        <h1>{this.state.name}</h1>
        <h5>{this.state.goalBased}</h5>
        <h5>{this.state.organizationType}</h5>

        <Button variant="contained" color="secondary" type="submit" value="Delete" onClick ={this.deletedEvent} >
            Delete
          </Button>
       
          <Button variant="contained" color="primary" type="submit" value="Update" onClick ={this.updateEvent} >
            update
          </Button>
       
      </div>
    );
  }
}
