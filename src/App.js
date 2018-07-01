import React, { Component } from 'react';
import Header from './components/Header';
import HeaderSmall from './components/HeaderSmall';
import './App.css';
import './assets/css/calendario.css';
import './assets/css/fotos.css';
import './assets/js/slidebox';
import MainContainer from './components/MainContainer';
import OffCanvas from './components/OffCanvas';
import Footer from './components/Footer';

class App extends Component {
  render() {
    const { page, sub, sub2 } = this.props.match.params;
    return (
      <div>
        <Header page={page} />
        <HeaderSmall />
        <OffCanvas />
        <MainContainer page={page} sub={sub} sub2={sub2}/>
        <Footer />
      </div>
    );
  }
}

export default App;
