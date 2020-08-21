import React, { Component, Fragment } from 'react'
import '../left-bar-chat-users/_LeftBarChatUsers.scss'
import LeftBarChatUsersItems from '../left-bar-chat-users-items/LeftBarChatUsersItems'
import {Switch} from 'react-router-dom'

class LeftBarChatUsers extends Component {
    
    render() {
        
        const leftBarDate = this.props.leftBarDate

        const usersLeftBar = leftBarDate.map((el) => {
                return (
                    <Switch>
                        <LeftBarChatUsersItems users={this.props.users} active={this.props.active} selectUsers={this.props.selectUsers} el={el} key={el.ticketId} />
                    </Switch>
                )
        })

        return (
            <Fragment>
                { usersLeftBar }
            </Fragment>
            
        )
    }
}

export default LeftBarChatUsers