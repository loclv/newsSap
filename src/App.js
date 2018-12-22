import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import Card from './Card';

class App extends Component {
render() {
    return (
      <div className="flex-center position-ref full-height">
        <div className="content">
          <div className="title m-b-md">
            <img className="" src={logo} alt="logo"></img>
            random game hub
          </div>
          <div className="topic">
            <button>PC Games</button>
            <button>Mobile Games</button>
            <button>Esport</button>
            <button>Manga/Anime</button>
            <button>Cosplay</button>
            <button>Game</button>
          </div>

          <div className="news-list">
            <Card />
            <Card />
            <Card />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
