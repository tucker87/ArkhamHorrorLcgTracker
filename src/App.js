import React, { Component } from 'react';
import './App.css';
import Campaign from './components/Campaign'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Track Your Arkham Horror LCG Campaigns</h1>
        </header>
        <div>
          <Campaign/>
        </div>
      </div>
    );
  }
}

export default App;
