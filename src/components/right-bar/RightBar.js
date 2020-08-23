import React, { Component } from 'react'
import '../right-bar/_RightBar.scss'
import NoTickets from '../no-tickets/NoTickets'
import Tickets from '../tickets/Tickets'
import {Switch, Route} from 'react-router-dom'

class RightBar extends Component {
    
    render() {

        const {checkedUser, currentItemDate} = this.props;
        
        let tickets, noTickets;
        if(checkedUser && currentItemDate.checkedBg) {
            tickets = <Tickets isAuthed={true} currentItemDate={this.props.currentItemDate} />    
        } else {
            noTickets =  <NoTickets />
        }
        return (
            <div className="right-bar">

            <Switch>
                <Route exact  render={(props) => (
                    tickets
                )} />
            </Switch>
            {tickets ? tickets : noTickets}
                              
            </div>
        )
    }
}

export default RightBar