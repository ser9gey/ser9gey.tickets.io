import React, { Component } from 'react'
import '../tickets/_Tickets.scss'

class Tickets extends Component {

    /* !!!доделать!!!! */

    render() {
        return (
            <div className="right-bar__tickets">
                <div className="right-bar__tickets-title">
                    <span className="right-bar__ticket-no">TICKET NO.</span>
                    <span className="right-bar__last-updated">LAST UPDATED</span>
                </div>

                <div className="right-bar__tickets-owner right-bar__tickets_card">
                    <div className="right-bar__item-title">Owner</div>
                    <div className="right-bar__tickets-owner-main">
                        <img src='' />
                        <div>
                            <p className="right-bar__item-p">Clark Kent</p>
                            <p className="right-bar__item-p">ELECTRICIAN</p>
                        </div>
                    </div>
                </div>

                <div className="right-bar__tickets-details right-bar__tickets_card">
                    <div className="right-bar__item-title">Details</div>
                    <div className="right-bar__item-wrapp">
                        <div className="right-bar__item-div">
                            <p className="right-bar__item-p">Reported</p>
                            <span>???? 25/07/19 ?????</span>
                        </div>
                        <div className="right-bar__item-div">
                            <p className="right-bar__item-p">Status</p>
                            <span className="right-bar__item-border">UNA</span>
                        </div>
                        <div>
                            <p className="right-bar__item-p">Description</p>
                            <span>???? Ticket description ?????</span>
                        </div>
                    </div>
                </div>

                <div className="right-bar__tickets-asset right-bar__tickets_card">
                    <div className="right-bar__item-title">Asset</div>
                    <div className="right-bar__item-wrapp">
                        <div className="right-bar__item-div">
                            <p className="right-bar__item-p">Name</p>
                            <span>???? Switch warming ?????</span>
                        </div>
                        <div className="right-bar__item-div">
                            <p className="right-bar__item-p">GeoCode</p>
                            <span>???? 137 ?????</span>
                        </div>
                        <div>
                            <p className="right-bar__item-p">Location</p>
                            <div>
                                <span className="right-bar__item-border right-bar__item-border_right">2.900</span>
                                <span className="right-bar__item-border">19.100</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tickets