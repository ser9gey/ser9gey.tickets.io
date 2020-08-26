import React from 'react'
import '../left-bar-chat-nav/_LeftBarChatNav.scss'


const LeftBarChatNav = (props) => {
    return (
        <li className="left-bar-chat-nav-ul__li">
            {props.el.item}
        </li>
    )
}

export default LeftBarChatNav