import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {Link, Redirect} from 'react-router-dom';
// import TextField from '@material-ui/core/TextField';


export default class singleDonation extends Component {
  state = {
    singleDonation: {
      typeOfDonation: '',
      food: '',
      clothing:'', 
      goods: ''
    },
    redirectHome: false,
    isFormDisplayed: false
  };
  componentDidMount() {
    axios.get(`/api/donation/${this.props.match.params.donationId}`).then(res => {
      this.setState({ singleDonation: res.data });
    });
  }

  deletedDonation = donation => {
    
    axios.delete(`/api/donation/${this.props.match.params.donationId}`);
    //  .then(res => console.log(res.data));
    this.setState({ redirectHome: true });
  };

  toggleEditForm = () => {
    this.setState((state, props) => {
      return { isFormDisplayed: !state.isFormDisplayed };
    });
  };

  handleChange = donation => {
    const cloneDonation = { ...this.state.singleDonation };
    cloneDonation[donation.target.name] = donation.target.value;
    this.setState({ donation: cloneDonation });
  };

  updateDonation = donation => {
    donation.preventDefault();
    axios
      .put(`/api/donation/ ${this.props.match.params.id}`, {
        typeOfDonation: this.state.typeOfDonation,
        food: this.state.food,
        clothing: this.state.clothing,
        goods: this.state.goods
      })
      .then(res => {
        this.setState({ singleDonation: res.data, isFormDisplayed: false });
      });
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }
    
                

    return (
      <div>
          
        
        <h1>{this.state.singleDonation.typeOfDonation}</h1>
        <h5>{this.state.singleDonation.food}</h5>
        <h5>{this.state.singleDonation.clothing}</h5>
        <h5>{this.state.singleDonation.goods}</h5>

        <h3><Link to="/">Return to All Community Donations</Link></h3>

        
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          value="Delete"
          onClick={this.deletedDonation }
        >
          Delete
        </Button>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          value="Update"
          onClick={this.updateDonation}
        >
          update
        </Button>
      </div>
    );
  }
}
