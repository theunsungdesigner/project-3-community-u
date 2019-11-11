import React, { Component } from 'react'
import axios from 'axios'


export default class singleEvent extends Component {
    state = {
        name: '',
        food: ''
    }
    componentDidMount() {
        axios.get(`/api/event/${this.props.match.params.eventId}`)
        .then((res)=>{
            this.setState(res.data)
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h5>{this.state.food}</h5>
            </div>
        )
    }
}
