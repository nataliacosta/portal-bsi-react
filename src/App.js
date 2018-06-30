import React, { Component } from 'react';
import Header from './components/Header';
import Header_Small from './components/Header_Small';
import './App.css';
import './bsi.css';
import MainContainer from './components/MainContainer';
import OffCanvas from './components/OffCanvas';

class App extends Component {
  render() {
    const { page, sub, sub2 } = this.props.match.params;
    return (
      <div>
        <Header />
        <Header_Small />
        <OffCanvas />
        <MainContainer page={page} sub={sub} sub2={sub2}/>
      </div>
    );
  }
}

export default App;
