import React from 'react'
import '../left-bar/_LeftBar.scss'
import LeftBarSearch from '../left-bar-search/LeftBarSearch'
import LeftBarChat from '../left-bar-chat/LeftBarChat'

const LeftBar = (props) => {
    return (
        <div className="left-bar">
            <LeftBarSearch />
            <LeftBarChat 
                users={props.users} 
                active={props.active} 
                leftBarDate={props.leftBarDate} 
                checkedBg={props.checkedBg} 
                selectUsers={props.selectUsers}
            />
        </div>
    )
}

export default LeftBar