import React, { Component } from 'react';
import './App.css';

class App extends Component {
render() {
    return (
      <div className="flex-center position-ref full-height">
        <div className="content">
          <div className="title m-b-md">
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

            <div className="card">
              <div className="card-header">NEWS</div>

              <div className="card-body">
                I'm an example NEWS!
              </div>
            </div>

            <div className="card">
              <div className="card-header">NEWS</div>

              <div className="card-body">
                I'm an example NEWS!
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
