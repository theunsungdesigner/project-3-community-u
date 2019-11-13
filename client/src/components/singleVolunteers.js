import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {Link, Redirect} from 'react-router-dom';
// import TextField from '@material-ui/core/TextField';


export default class singleVolunteers extends Component {
  state = {
    singleVolunteers: {
        volunteerName: '',
        schoolName:  '',
        organization: ''
  },
  redirectHome: false,
    isFormDisplayed: false
}
  componentDidMount() {
    axios(`/api/volunteers/${this.props.match.params.volunteersId}`).then(res => {
      this.setState({ singleVolunteers: res.data });
    });
  }

  deletedVolunteers = volunteers => {
    
    axios.delete(`/api/volunteers/${this.props.match.params.volunteersId}`);
    //  .then(res => console.log(res.data));
    this.setState({ redirectHome: true });
  };

  toggleEditForm = () => {
    this.setState((state, props) => {
      return { isFormDisplayed: !state.isFormDisplayed };
    });
  };

  handleChange = volunteers => {
    const cloneVolunteers = { ...this.state.singleVolunteers };
    cloneVolunteers[volunteers.target.name] = volunteers.target.value;
    this.setState({ volunteers: cloneVolunteers });
  };

  updateVolunteers = volunteers => {    
    volunteers.prvolunteersDefault();
    axios
      .put(`/api/volunteers/ ${this.props.match.params.id}`, {
        volunteerName: this.state.volunteerName,
        schoolName: this.state.schoolName,
        organization: this.state.organization
      })
      .then(res => {
        this.setState({ singleVolunteers: res.data, isFormDisplayed: false });
      });
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }
    
                

    return (
      <div>
          
        
        <h1>{this.state.singleVolunteers.volunteerName}</h1>
        <h5>{this.state.singleVolunteers.schoolName}</h5>
        <h5>{this.state.singleVolunteers.organization}</h5>

        <h3><Link to="/">Return to All Community Volunteers</Link></h3>

        
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          value="Delete"
          onClick={this.deletedVolunteers }
        >
          Delete
        </Button>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          value="Update"
          onClick={this.updateVolunteers}
        >
          update
        </Button>
      </div>
    );
  }
}
