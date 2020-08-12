import React, { Component } from 'react'
import '../left-bar/_LeftBar.scss'
import LeftBarSearch from '../left-bar-search/LeftBarSearch'
import LeftBarChat from '../left-bar-chat/LeftBarChat'

class LeftBar extends Component {
    render() {
        return (
            <div className="left-bar">
                <LeftBarSearch />
                <LeftBarChat leftBarDate={this.props.leftBarDate} checkedBg={this.props.checkedBg} selectUsers={this.props.selectUsers}/>
            </div>
        )
    }
}

export default LeftBar