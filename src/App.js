import React, { Component } from 'react';
import Header from './components/Header';
import HeaderSmall from './components/HeaderSmall';
import './App.css';
import './bsi.css';
import MainContainer from './components/MainContainer';
import OffCanvas from './components/OffCanvas';

class App extends Component {
  render() {
    const { page, sub, sub2 } = this.props.match.params;
    return (
      <div>
        <Header page={page} />
        <HeaderSmall />
        <MainContainer page={page} sub={sub} sub2={sub2}/>
      </div>
    );
  }
}

export default App;
