import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {Link, Redirect} from 'react-router-dom';
// import TextField from '@material-ui/core/TextField';


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
      this.setState({ singleEvent: res.data });
    });
  }

  deletedEvent = event => {
    event.preventDefault();
    axios.delete(`/api/event/${this.props.match.params.eventId}`);
    //  .then(res => console.log(res.data));
    this.setState({ redirectHome: true });
  };

  toggleEditForm = () => {
    this.setState((state, props) => {
      return { isFormDisplayed: !state.isFormDisplayed };
    });
  };

  handleChange = event => {
    const cloneEvent = { ...this.state.singleEvent };
    cloneEvent[event.target.name] = event.target.value;
    this.setState({ event: cloneEvent });
  };

  updateEvent = event => {
    event.preventDefault();
    axios
      .put(`/api/event/ ${this.props.match.params.id}`, {
        name: this.state.name,
        goalBased: this.state.goalBased,
        organizationType: this.state.organizationType
      })
      .then(res => {
        this.setState({ singleEvent: res.data, isFormDisplayed: false });
      });
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }
    
                

    return (
      <div>
          
        
        <h1>{this.state.singleEvent.name}</h1>
        <h5>{this.state.singleEvent.goalBased}</h5>
        <h5>{this.state.singleEvent.organizationType}</h5>

        <h3><Link to="/">Return to All Community Events</Link></h3>

        
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          value="Delete"
          onClick={this.deletedEvent}
        >
          Delete
        </Button>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          value="Update"
          onClick={this.updateEvent}
        >
          update
        </Button>
      </div>
    );
  }
}
