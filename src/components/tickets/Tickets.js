import React, { Component } from 'react'
import '../tickets/_Tickets.scss'

class Tickets extends Component {

    render() {
        const currentItemDate = this.props.currentItemDate;
        
        return (
            <div className="right-bar__tickets">
                <div className="right-bar__tickets-title">
                    <span className="right-bar__ticket-no">TICKET NO. {currentItemDate.number}</span>
                    <span className="right-bar__last-updated">LAST UPDATED {currentItemDate.lastUpdatedTime}</span>
                </div>

                <div className="right-bar__tickets-owner right-bar__tickets_card">
                    <div className="right-bar__item-title">Owner</div>
                    <div className="right-bar__tickets-owner-main">
                        <img className="right-bar__tickets-owner-main-img" src={currentItemDate.owner.avatar} alt="" />
                        <div>
                            <p className="right-bar__item-p">{currentItemDate.owner.firstName}</p>
                            <p className="right-bar__item-p">{currentItemDate.owner.lastName}</p>
                        </div>
                    </div>
                </div>

                <div className="right-bar__tickets-details right-bar__tickets_card">
                    <div className="right-bar__item-title">Details</div>
                    <div className="right-bar__item-wrapp">
                        <div className="right-bar__item-div">
                            <p className="right-bar__item-p">Reported</p>
                            <span>{currentItemDate.reportedTime}</span>
                        </div>
                        <div className="right-bar__item-div">
                            <p className="right-bar__item-p">Status</p>
                            <span className="right-bar__item-border">{currentItemDate.shortStatus}</span>
                        </div>
                        <div>
                            <p className="right-bar__item-p">Description</p>
                            <span>{currentItemDate.description}</span>
                        </div>
                    </div>
                </div>

                <div className="right-bar__tickets-asset right-bar__tickets_card">
                    <div className="right-bar__item-title">Asset</div>
                    <div className="right-bar__item-wrapp">
                        <div className="right-bar__item-div">
                            <p className="right-bar__item-p">Name</p>
                            <span>{currentItemDate.asset.name}</span>
                        </div>
                        <div className="right-bar__item-div">
                            <p className="right-bar__item-p">GeoCode</p>
                            <span>{currentItemDate.asset.geoCode}</span>
                        </div>
                        <div>
                            <p className="right-bar__item-p">Location</p>
                            <div>
                                <span className="right-bar__item-border right-bar__item-border_right">{currentItemDate.asset.kmFrom}</span>
                                <span className="right-bar__item-border">{currentItemDate.asset.kmTo}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tickets