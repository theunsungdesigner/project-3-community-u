import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";


export default class singleEvent extends Component {
  state = {
    name: "",
    goalBased: "",
    organizationType: ""
  };
  componentDidMount() {
    axios.get(`/api/event/${this.props.match.params.eventId}`).then(res => {
      this.setState(res.data);
    });
  }
  deleteEvent=(event)=>{
      axios.delete(`/api/event/${this.eventId}`)
  }

  bttnClicked =(event)=>{
    event.preventDefault()
    axios.post('/api/event', this.state.newEvent)
    .then((newEvent)=>{
      console.log(newEvent)
    })
  }
  render() {
    return (
      <div>
        <h1>Test</h1>
        <h1>{this.state.name}</h1>
        <h5>{this.state.goalBased}</h5>
        <h5>{this.state.organizationType}</h5>

        <Button variant="contained" color="secondary" type="submit" value="Delete" deleteEvent>
            Delete
          </Button>
       
          
       
      </div>
    );
  }
}
