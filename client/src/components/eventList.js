import React, { Component } from 'react'
import Axios from 'axios'

export default class eventList extends Component {
    state = {

        typeOfEvent: '', //Donation drive, Food Donation, Clothing Drive
        name: '', //organization name, or meetup name
        financial: false,
        organizationType: '',
        goalBased: '',
        food: '', //produce, protien, dry-goods
        clothing: '', //children, men's, women's
        goods: '' //diapers, housewares, 
    }

    componentDidMount() {
        const eventId = this.props.match.params.eventId
        Axios.get('api/event/')
            .then((res) => {
                console.log(res.data)
                const previousState = { ...this.state }
                const newState = 
                previousState.name = res.data.name
                previousState.financial = res.data.financial
                previousState.organizationType = res.data.organizationType
                previousState.goalBased = res.data.goalBased
                this.setState(newState)
            })
    }
    render() {
        return (
            <div>
                <h1>name:{this.state.name}</h1>
                <h5>financial:{this.state.financial}</h5>
                <h5>organizationType:{this.state.organizationType}</h5>
                <h5>goalBased: {this.state.goalBased} </h5>
            </div>
        )
    }
}
