import React, { Component } from 'react';
import Body from './Components/body/body'
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <h1>Tic Tac Toe</h1>
        <Body></Body>
      </div>
    );
  }
}

export default App;
