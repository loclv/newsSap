import React, { Component } from 'react';
import './NewsList.css';
import Card from './Card';

class NewsList extends Component {

  render() {
    return (
      <div className="news-list">
        <Card />
        <Card />
        <Card />

      </div>
    );
  }
}

export default NewsList
