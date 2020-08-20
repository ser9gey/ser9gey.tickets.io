import React, { Component, Fragment } from 'react'
import '../left-bar-chat-users/_LeftBarChatUsers.scss'
import LeftBarChatUsersItems from '../left-bar-chat-users-items/LeftBarChatUsersItems'


class LeftBarChatUsers extends Component {
    // state = {
    //     status: [
    //         {id: 1, status: "ASD"},
    //         {id: 2, status: "COM"},
    //         {id: 3, status: "UNA"},
    //         {id: 4, status: "ASD"},
    //         {id: 5, status: "UNA"},
    //         {id: 6, status: "COM"},
    //         {id: 7, status: "ASD"},
    //         {id: 8, status: "UNA"},
    //         {id: 9, status: "COM"},
    //         {id: 10, status: "UNA"},
    //         {id: 11, status: "CON"},
    //         {id: 12, status: "UNA"},
    //         {id: 13, status: "ASD"},
    //         {id: 14, status: "COM"},
    //         {id: 15, status: "UNA"},
    //         {id: 16, status: "ASD"},
    //         {id: 17, status: "COM"},
    //         {id: 18, status: "UNA"},
    //         {id: 19, status: "UNA"},
    //         {id: 20, status: "ASD"},
    //         {id: 21, status: "COM"},
    //         {id: 22, status: "ASD"},
    //         {id: 23, status: "UNA"}
    //     ]
        
    // }

    render() {
        
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