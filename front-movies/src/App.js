import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
        </div>
      </Router>
    );
  }
}
