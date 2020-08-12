import React, { Component } from 'react'
import '../right-bar/_RightBar.scss'
import NoTickets from '../no-tickets/NoTickets'
import Tickets from '../tickets/Tickets'

class RightBar extends Component {
    render() {
        const {checkedUser} = this.props;
        return (
            <div className="right-bar">
            {
                checkedUser ? <Tickets />  : <NoTickets /> 
            }                    
            </div>
        )
    }
}

export default RightBar