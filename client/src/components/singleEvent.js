import React, { Component } from 'react'
import axios from 'axios'


export default class singleEvent extends Component {
    state = {
        event: {}
    }
    componentDidMount() {
        axios.get(`/api/event/${this.props.match.params.eventId}`)
        .then((event)=>{
            this.setState({ event: event.data})
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
