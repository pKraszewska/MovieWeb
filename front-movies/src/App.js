import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Searchbar from './components/searchbar/Searchbar';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="content-box">
          <Searchbar />
        </div>
      </Router>
    );
  }
}
