import React from 'react'
import '../left-bar-chat-users/_LeftBarChatUsers.scss'
import LeftBarChatUsersItems from '../left-bar-chat-users-items/LeftBarChatUsersItems'
import {Link} from 'react-router-dom'

const LeftBarChatUsers = (props) => {
    const leftBarDate = props.leftBarDate

    const usersLeftBar = leftBarDate.map((el) => {
        return (
            <li key={el.ticketId} >
                <Link to={`/ticket/${el.ticketId}`}  style={{color: "#b4b4b4", textDecoration: "none"}} >
                    <LeftBarChatUsersItems 
                        users={props.users} 
                        active={props.active} 
                        selectUsers={props.selectUsers} 
                        el={el}
                    />
                </Link>
            </li>
        )
    })

    return (
        <ul>
            { usersLeftBar }
        </ul>      
    )
}

export default LeftBarChatUsers