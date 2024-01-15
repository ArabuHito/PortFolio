import './css/Greeting.css';
import React from 'react';
import picture from '../asset/image/picture.png';

export class Greeting extends React.Component {
    render() {
        return (
            <div className="greeting">
                <div className="greeting-left">
                    <h2 className="greeting-subtitle">Salut, je suis Ayoub.</h2>
                    <h1 className="greeting-title">Un développeur.</h1>
                </div>
                <div className="greeting-right">
                    <img src={picture} className="picture" alt="picture" />
                </div>
            </div>
        );
    }
}