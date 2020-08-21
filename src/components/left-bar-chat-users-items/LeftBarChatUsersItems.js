import React from 'react'
import '../left-bar-chat-users-items/_LeftBarChatUsersItems.scss'

class LeftBarChatUsersItems extends React.Component {

    render() {
        const {el, selectUsers, active, users} = this.props;
        
        let className = 'left-bar-chat-users__users-wrapper'
        if(el.checkedBg === true) {
            className += " left-bar-chat-users_checkedBg"
        } else {
            className = 'left-bar-chat-users__users-wrapper'
        }

        let classNameStatus = 'left-bar-chat-users__status'
        if(el.shortStatus === "ASD") {
            classNameStatus += " left-bar-chat-users__status-asd"
        } else if(el.shortStatus === "COM") {
            classNameStatus += " left-bar-chat-users__status-com"
        } else {
            classNameStatus += " left-bar-chat-users__status-una"
        }

        return (
            <div className={className} onClick={() => active(el.ticketId, users)} >
                <div  className="left-bar-chat-users__users-wrapper-profile" onClick={() => selectUsers(el)}>
                    <img className="left-bar-chat-users__avatar" src={el.owner.avatar} alt="" />
                    <p className="left-bar-chat-users__reportedTime">{el.reportedTime}</p>
                    <p className="left-bar-chat-users__assetName">{el.asset.name}</p>
                    <span className={classNameStatus}>{el.shortStatus}</span>
                </div>
            </div>
        )
    }
    
}

export default LeftBarChatUsersItems