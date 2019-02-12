import React, { Component } from 'react';
import './NewsList.css';
import Card from './Card';

class NewsList extends Component {

  render() {
    return (
      <div className="news-list">
        <Card title="I'm an example NEWS!"
          whereWhen="from News | time"
          summary="very short news"
        />
        <Card title="Test News"
          whereWhen="from News | time"
          summary="very normal news. very normal news. very normal news.
            very normal news. very normal news. very normal news."
        />
        <Card title="this is very long tile news. this is very long tile news. this is very long tile news."
          whereWhen="from News | time"
          summary="
          I'm an example NEWS! I'm an example NEWS!
          I'm an example NEWS! I'm an example NEWS!
          I'm an example NEWS! I'm an example NEWS!
          I'm an example NEWS! I'm an example NEWS!
          I'm an example NEWS! I'm an example NEWS!
          I'm an example NEWS! I'm an example NEWS!
          I'm an example NEWS! I'm an example NEWS!
          I'm an example NEWS! I'm an example NEWS!
          I'm an example NEWS! I'm an example NEWS!
          I'm an example NEWS! I'm an example NEWS!
          I'm an example NEWS! I'm an example NEWS!
          I'm an example NEWS! I'm an example NEWS!
          "
        />

      </div>
    );
  }
}

export default NewsList
