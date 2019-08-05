import React from 'react';
import './spinner.component.scss';
import spinner from './loading-icon-animated-gif-19.gif';

const Spinner = () => {
    return (
        <div className="loading-spinner-container">
            <img className="loading-spinner" src={spinner} alt="Loading ..."/>
        </div>
    )
}

export default Spinner
