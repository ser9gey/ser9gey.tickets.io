import React, { Component } from 'react';
import './_AppHeader.scss'

class AppHeader extends Component {
    render() {
        return (
            <div className="app-header">
                <div className="app-header-wrapper">
                    <h1 className="app-header-wrapper__h1">Tickets</h1>
                    <div className="app-header-wrapper__line"></div>
                </div>
            </div>
        )
    }
}

export default AppHeader