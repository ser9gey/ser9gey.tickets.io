import React, { Component } from 'react'
import '../left-bar-chat-nav/_LeftBarChatNav.scss'

class LeftBarChatNav extends Component {
    render() {
        return (
            <li className="left-bar-chat-nav-ul__li">
                {this.props.el.item}
            </li>
        )
    }
}

export default LeftBarChatNav