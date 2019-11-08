import {Link} from 'react-router-dom'
import React, { Component } from 'react'
const navBar = [
     'Contact-us', 'Donations', 'Start a new community'
]
export default class NavBar extends Component {
    render() {
        return (
            <div>
                {navBar.map((item) => {
                    return (
                        <p>
                            <Link to={``}></Link>
                        </p>
                    )
                })}
                
            </div>
        )
    }
}


