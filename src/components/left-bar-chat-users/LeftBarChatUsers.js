import React, { Component, Fragment } from 'react'
import '../left-bar-chat-users/_LeftBarChatUsers.scss'
import LeftBarChatUsersItems from '../left-bar-chat-users-items/LeftBarChatUsersItems'


class LeftBarChatUsers extends Component {
    
    render() {
        
        // const checkedBg = this.props.checkedBg

        const leftBarDate = this.props.leftBarDate
        const usersLeftBar = leftBarDate.map((el) => {
            return <LeftBarChatUsersItems users={this.props.users} active={this.props.active} selectUsers={this.props.selectUsers} el={el} key={el.ticketId} />
        })

        return (
            <Fragment>
                { usersLeftBar }
            </Fragment>
            
        )
    }
}

export default LeftBarChatUsers