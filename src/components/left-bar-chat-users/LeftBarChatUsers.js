import React, { Component, Fragment } from 'react'
import '../left-bar-chat-users/_LeftBarChatUsers.scss'


class LeftBarChatUsers extends Component {
    
    render() {
        
        let className = 'left-bar-chat-users__users-wrapper'
        const checkedBg = this.props.checkedBg
        if(checkedBg) {
            className += ' left-bar-chat-users_checkedBg'
        }

        const leftBarDate = this.props.leftBarDate
        const usersLeftBar = leftBarDate.map((el) => {
        return  <div key={el.ticketId} className={className}>
                    <div  className="left-bar-chat-users__users-wrapper-profile" onClick={() => {this.props.selectUsers()}}>
                        <img className="left-bar-chat-users__avatar" src={el.owner.avatar} alt="" />
                        <p className="left-bar-chat-users__reportedTime">{el.reportedTime}</p>
                        <p className="left-bar-chat-users__assetName">{el.asset.name}</p>
                        <span className="left-bar-chat-users__status">{el.status}</span>
                    </div>
                </div>
        })


        return (
            <Fragment>
                { usersLeftBar }
            </Fragment>
            
        )
    }
}

export default LeftBarChatUsers