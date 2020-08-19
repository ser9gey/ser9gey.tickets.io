import React, { Component } from 'react'
import '../left-bar-chat/_LeftBarChat.scss'
import LeftBarChatNav from '../left-bar-chat-nav/LeftBarChatNav'
import LeftBarChatUsers from '../left-bar-chat-users/LeftBarChatUsers'

class LeftBarChat extends Component {
    state = {
        items: [
            {id: 1, item: 'OWNER'},
            {id: 2, item: 'REPORTED'},
            {id: 3, item: 'ASSET'},
            {id: 4, item: 'STATUS'},
        ]
    }

    render() {
        const allItems = this.state.items;

        const items = allItems.map((el) => {
                return <LeftBarChatNav key={el.id} el={el}  />
            })

        return (
            <div className="left-bar-chat">
                <div className="left-bar-chat-nav">
                    <ul className="left-bar-chat-nav-ul">
                      { items }
                    </ul>
                </div>
                <div className="left-bar-chat-users">
                    <LeftBarChatUsers users={this.props.users} active={this.props.active} leftBarDate={this.props.leftBarDate} selectUsers={this.props.selectUsers}/>
                </div>
            </div>
        )
    }
}

export default LeftBarChat