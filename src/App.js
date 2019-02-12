import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import NewsList from './NewsList';

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
            <Topic name="PC Games" />
            <Topic name="Mobile Games" />
            <Topic name="Esport" />
            <Topic name="Manga/Anime" />
            <Topic name="Cosplay" />
            <Topic name="Games" />
          </div>

          <NewsList />
        </div>
      </div>
    );
  }
}

class Topic extends Component {
  render() {
    return (
      <button style={{color: '#000'}}>{this.props.name}</button>
    );
  }
}

export default App;
