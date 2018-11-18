import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import Description from './components/Description';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Description />
      </div>
    );
  }
}

export default App;
