import 'css/Card.css';
import React from 'react';

export class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-left">
                    <img src={this.props.image} className="card-image" alt="card-image" />
                </div>
                <div className="card-right">
                    <h1 className="card-title">{this.props.title}</h1>
                    <p className="card-description">{this.props.description}</p>
                    <a href={this.props.link} className="card-link">Voir le projet</a>
                </div>
            </div>
        );
    }
}