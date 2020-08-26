import React from 'react'
import '../right-bar/_RightBar.scss'
import NoTickets from '../no-tickets/NoTickets'
import Tickets from '../tickets/Tickets'
import {Switch, Route} from 'react-router-dom'

const RightBar = (props) => {
    const {checkedUser, currentItemDate} = props;
        
    let tickets, noTickets;
    if(checkedUser && currentItemDate.checkedBg) {
        tickets = <Tickets currentItemDate={props.currentItemDate} />    
    } else {
        noTickets =  <NoTickets />
    }

    return (
        <div className="right-bar">
            <Switch>
                <Route exact path={`/ticket/${currentItemDate.ticketId}`} render={() => (
                    tickets
                )}/>
            </Switch>
            {noTickets}                  
        </div>
    )
}

export default RightBar