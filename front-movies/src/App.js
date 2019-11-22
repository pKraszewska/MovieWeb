import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Searchbar from './components/searchbar/Searchbar';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="content-box">
          <Route path="/home" component={Searchbar} />
        </div>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </Router>
    );
  }
}
