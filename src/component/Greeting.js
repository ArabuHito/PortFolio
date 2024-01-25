import './css/Greeting.css';
import React from 'react';
import picture from '../asset/image/picture.png';
import {ContactPanel} from "./ContactPanel";

export class Greeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showContactPanel: false
        }
    }

    toggleContactPanel = () => {
        this.setState(prevState => ({
            showContactPanel: !prevState.showContactPanel
        }));
    }

    render() {
        return (
            <div className="greeting">
                <div className="greeting-left">
                    <h2 className="greeting-subtitle">Salut, je suis Ayoub.</h2>
                    <h1 className="greeting-title">Un développeur.</h1>
                    <div className="contact">
                        <button
                            className="contact-button"
                            onClick={this.toggleContactPanel}
                        ><h2>Me contacter</h2></button>
                    </div>
                </div>
                <div className="greeting-right">
                    <img src={picture} className="picture" alt="picture"/>
                </div>
                {this.state.showContactPanel && <ContactPanel toggleContactPanel={this.toggleContactPanel} />}
            </div>
        );
    }
}