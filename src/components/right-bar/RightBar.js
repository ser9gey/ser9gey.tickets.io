import React, { Component } from 'react'
import '../right-bar/_RightBar.scss'
import NoTickets from '../no-tickets/NoTickets'
import Tickets from '../tickets/Tickets'

class RightBar extends Component {
    render() {
        const {checkedUser, currentItemDate} = this.props;
        let tickets, noTickets;
        if(checkedUser && currentItemDate.checkedBg) {
            tickets = <Tickets currentItemDate={this.props.currentItemDate} />
        } else {
            noTickets =  <NoTickets />
        }
        return (
            <div className="right-bar">
            
            {tickets ? tickets : noTickets}
                              
            </div>
        )
    }
}

export default RightBar