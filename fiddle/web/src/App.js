import React, { Component } from 'react';
import { Button } from 'fiddle-universal-components/components';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Button
            text="Press on Web!"
            onPress={() => alert('Button Pressed!')}
          />
        </div>
      </div>
    );
  }
}

export default App;
