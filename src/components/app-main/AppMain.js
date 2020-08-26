import React, { Component } from 'react'
import '../app-main/_AppMain.scss'
import LeftBar from '../left-bar/LeftBar'
import RightBar from '../right-bar/RightBar'
import axios from 'axios';

class AppMain extends Component {
    state = {
        users: [
            
        ],
        checkedUser: false,
        currentItemDate: {}
    }

    active = (id, users) => {
        let el;
        let newEl = [];
        for ( let i = 0; i < users.length; i++) {
            if(users[i].ticketId === id && users[i].checkedBg === false) {
                el = users[i]
                el.checkedBg = true
                newEl.push(el)
            } else {
                el = users[i]
                el.checkedBg = false
                newEl.push(el)
            }
        }
        this.setState(() => {
            return {
                users: newEl
            }
        })
    }

    async componentDidMount() {
        const res = await axios.get(`https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json`)
        const data = res.data;
        data.map((el) => {
            if(el.status === "assigned") {
                const checkedBg = el.checkedBg = false
                const shortStatus = el.shortStatus = "ASD" 
                return {checkedBg, shortStatus} 
            } else if(el.status === "completed") {
                const checkedBg = el.checkedBg = false
                const shortStatus = el.shortStatus = "COM"
                return {checkedBg, shortStatus} 
            } else {
                const checkedBg = el.checkedBg = false
                const shortStatus = el.shortStatus = "UNA"
                return {checkedBg, shortStatus} 
            }
        })
        this.setState({
            users: data
        })
    }

    selectUsers = (el) => {
        this.setState({
            checkedUser: true,
            currentItemDate: el
        })
    }

    render() {
        /*Right Bar Date*/
        const {checkedUser, currentItemDate} = this.state;
        
        /*Left Bar Date*/
        const leftBarDate = this.state.users;

        return (
            <div className="app-main">
                <LeftBar 
                    users={this.state.users} 
                    active={this.active} 
                    leftBarDate={leftBarDate} 
                    selectUsers={this.selectUsers}    
                />
                <RightBar 
                    currentItemDate={currentItemDate}
                    checkedUser={checkedUser}
                />
            </div>
        )
    }
}

export default AppMain