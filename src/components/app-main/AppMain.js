import React, { Component } from 'react'
import '../app-main/_AppMain.scss'
import LeftBar from '../left-bar/LeftBar'
import RightBar from '../right-bar/RightBar'
// import GithubNetwork from '../../github-network/GithubNetwork'
import axios from 'axios';

class AppMain extends Component {
    
    // state = {
    //     users: {
    //         ownerAvatar: null, ticketId: null, avatar: null, reportedTime: null,
    //         assetName: null, status: null, number: null, firstName: null, lastName: null,
    //         description: null, geoCode: null, 
    //     },
    //     checkedBg: false,
    //     checkedUser: false,
    // }

    state = {
        users: [
            
        ],
        checkedUser: null,
        currentItemDate: null
    }

    // active = (id, users) => {
    //     const el =  users.filter((el) => el.ticketId === id)
    //     const newEl = el[0]
    //     newEl.checkedBg = !newEl.checkedBg
    //     console.log(newEl)
    //     const date =[...users]
    //     const Newdate = [...date.slice(0, --id), newEl, ...date.slice(++id)]
    //     console.log(Newdate)
    //     this.setState(({users}) => {
    //         return {
    //             users: Newdate
    //         }
    //     })
    // }

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
        this.setState(({users}) => {
            return {
                users: newEl
            }
        })
    }

    componentDidMount() {
        axios.get(`https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json`)
          .then((res) => {
            const data = res.data;
            data.map((el) => {
                return el.checkedBg = false
            })
            this.setState({
                users: data
            })
        })
    }

    selectUsers = (el) => {
        this.setState({
            checkedUser: true,
            currentItemDate: el
        })
    }

    render() {

        
        const {checkedUser} = this.state;

        /*Left Bar Date*/
        const leftBarDate = this.state.users;

        /*Right Bar Date*/
        const currentItemDate = this.state.currentItemDate;
        return (
            <div className="app-main">
                <LeftBar users={this.state.users} active={this.active} leftBarDate={leftBarDate} selectUsers={this.selectUsers}/>
                <RightBar currentItemDate={currentItemDate}  checkedUser={checkedUser}/>
            </div>
        )
    }
}

export default AppMain