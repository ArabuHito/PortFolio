import React from 'react';
import './css/Navbar.css';
import logoNameDark from '../asset/image/logonamedark.svg';

export class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-left">
                    <img src={logoNameDark} className="logo" alt="logo" />
                </div>
                <div className="navbar-right">
                    <a href="https://github.com/ArabuHito">GitHub</a>
                    <a href="https://www.linkedin.com/in/ayoub-boudouaya-184271290">LinkedIn</a>
                </div>
            </div>
        );
    }
}