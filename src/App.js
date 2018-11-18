import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import Description from './components/Description';
import Community from './components/Community';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Description />
        <Community />
      </div>
    );
  }
}

export default App;
