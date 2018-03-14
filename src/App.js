import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      notes: [`note1`, `note2`, `note3`]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Add a Note</h1>
        </header>
        {this.state.notes.map(note => <div>{note}</div>)}
      </div>
    );
  }
}

export default App;
