import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import Description from './components/Description';
import Community from './components/Community';
import Units from './components/Units';
import Menu from './components/Menu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Description />
        <Community />
        <Units />
      </div>
    );
  }
}

export default App;
