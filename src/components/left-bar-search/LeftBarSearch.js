import React from 'react'
import '../left-bar-search/_LeftBarSearch.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const LeftBarSearch = () => {
    return (
        <div className="left-bar-search">
            <form className="left-bar-input">
                <input className="left-bar-search__input" type="text" />
                <span className="left-bar-search__span"><FontAwesomeIcon style={ {color: "#747373"} } icon={ faSearch } /></span>
            </form>
        </div>
    )
}

export default LeftBarSearch