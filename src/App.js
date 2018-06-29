import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Header_Small from './Header_Small';
import './App.css';
import './bsi.css';

class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <Header_Small />
    </div>
    );
  }
}

export default App;
