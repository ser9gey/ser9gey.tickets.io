import React, { Component, Fragment } from 'react'
import '../left-bar-chat-users/_LeftBarChatUsers.scss'
import LeftBarChatUsersItems from '../left-bar-chat-users-items/LeftBarChatUsersItems'
import {Link} from 'react-router-dom'

class LeftBarChatUsers extends Component {
    
    render() {
        
        const leftBarDate = this.props.leftBarDate

        const usersLeftBar = leftBarDate.map((el) => {
                return (
                    <Link style={{color: "#b4b4b4", textDecoration: "none"}} key={el.ticketId} to={`/${el.ticketId}`}  >
                        <LeftBarChatUsersItems users={this.props.users} active={this.props.active} selectUsers={this.props.selectUsers} el={el} />
                    </Link>
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