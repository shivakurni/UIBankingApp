import React, { Component } from 'react';
import Header from './components/header/header';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
