import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';
import BrowseMovies from './components/content/BrowseMovies';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/movies" component={BrowseMovies} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </Router>
    );
  }
}
