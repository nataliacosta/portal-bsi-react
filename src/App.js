import React, { Component } from 'react';
import Header from './Header';
import Header_Small from './Header_Small';
import './App.css';
import './bsi.css';
import MainContainer from './MainContainer';

class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <Header_Small />
      <MainContainer />
    </div>
    );
  }
}

export default App;
