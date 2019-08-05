import React from 'react'
import './navbar.component.scss';

import { Link, BrowserRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/github-finder-logo.svg';


const Navbar = props => {
        return (
            <div className='nav-bar'>
                <div className="logo-container">
                    <BrowserRouter>
                        <Link className="" to="/">
                            <Logo className="logo" />
                        </Link> 
                        <h3 className="logo-title">GitHub Finder</h3>
                    </BrowserRouter>
                </div>
            </div>
        ) 
}

export default Navbar;
