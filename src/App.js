import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import Description from './components/Description'
import Community from './components/Community'
import Units from './components/Units'
import Menu from './components/Menu'
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <Description />
        <Community />
        <Units />
        <Footer />
      </div>
    );
  }
}

export default App;
