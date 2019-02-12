import React, { Component } from 'react';
import './Card.css';
import logo from './logo.svg'

class Card extends Component {
  render() {
    const DEF_H = 128;
    let h =
      Math.floor(this.props.title.length / 64) *
        32 + DEF_H;

    let summary = this.props.summary;
    if (summary.length > 172) {
      summary = summary.slice(0, 168) + '...';
    }

    return (
      <div className="card"
        style={{height: h + 'px'}}
      >
        <img className="card-img" src={logo} alt="news"></img>
        <div className="card-body">
          <div className="card-title">
            {this.props.title}
          </div>
          <div className="card-info">
            {this.props.whereWhen}
          </div>
          <div className="card-line"></div>
          <div className="card-summary">
            {summary}
          </div>
        </div>
      </div>
    );
  }

}

export default Card;
