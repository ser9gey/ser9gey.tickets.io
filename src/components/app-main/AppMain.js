import React, { Component } from 'react'
import '../app-main/_AppMain.scss'
import LeftBar from '../left-bar/LeftBar'
import RightBar from '../right-bar/RightBar'
import GithubNetwork from '../../github-network/GithubNetwork'
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
        checkedBg: false,
        checkedUser: false,
        currentItemDate: null
    }

    componentDidMount() {
        axios.get(`https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json`)
          .then((res) => {
            const data = res.data;
            this.setState({
                users: data
            })
        })
    }

    selectUsers = (el) => {
        this.setState({
            checkedUser: !this.state.checkedUser,
            checkedBg: !this.state.checkedBg,
            currentItemDate: el
        })
    }

    render() {

        const {checkedBg} = this.state;
        const {checkedUser} = this.state;

        /*Left Bar Date*/
        const leftBarDate = this.state.users;

        /*Right Bar Date*/
        const currentItemDate = this.state.currentItemDate;
        return (
            <div className="app-main">
                <LeftBar leftBarDate={leftBarDate} checkedBg={checkedBg} selectUsers={this.selectUsers}/>
                <RightBar currentItemDate={currentItemDate}  checkedUser={checkedUser}/>
            </div>
        )
    }
}

export default AppMain