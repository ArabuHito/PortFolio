import React from 'react';
import './css/ContactPanel.css';

export class ContactPanel extends React.Component {
    render() {
        return (
            <div className="contact-panel">
                <h2>Comment me contacter ?</h2>
                <p>Email: boudouayou@gmail.com</p>
                <p>Téléphone: 06.50.08.56.82</p>
                <div>
                    <button className="close-contact-panel" onClick={this.props.toggleContactPanel}>
                        <svg className="svg-icon"
                             viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"/>
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}