import React, { Component } from 'react';
import './Card.css';
import logo from './logo.svg'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img" src={logo} alt="news"></img>
        <div className="card-body">
          <div className="card-title">
            I'm an example NEWS!
          </div>
          <div className="card-line">
            I'm an example NEWS!
          </div>
          <div className="card-line">
            I'm an example NEWS!
          </div>
        </div>
      </div>
    );
  }

}

export default Card;
