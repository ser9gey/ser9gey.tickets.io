import React, { Component } from 'react'
import '../no-tickets/_NoTickets.scss'

class NoTickets extends Component {
    render() {
        return (
            <div className="right-bar__no-tickets">
                <span>X</span>
                <p>No ticket selected</p> 
            </div>
        )
    }
}

export default NoTickets