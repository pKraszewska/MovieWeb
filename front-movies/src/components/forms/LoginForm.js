/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './forms.css';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.authorizeUser = this.authorizeUser.bind(this);

    this.state = {
      username: '',
      password: '',
      checkedCredentaials: true,
    };
  }

  updateState(event) {
    if (event.target.name === 'username') {
      this.setState({ username: event.target.value });
    } else if (event.target.name === 'password') {
      this.setState({ password: event.target.value });
    }
  }

  authorizeUser() {
    if (this.state.username === 'basia' && this.state.password === '123') {
      localStorage.setItem('movie-auth', 'basia');
      window.location.replace('/home');
      window.location.reload();
    } else {
      this.setState({ checkedCredentaials: false });
    }
  }

  render() {
    return (
      <div className="form-box login">
        <h4 className="form-login-sign text-center">Sign in to MovieWeb</h4>
        {this.state.checkedCredentaials ? (
          true
        ) : (
          <Alert variant="danger">Wrong username or password.</Alert>
        )}

        <div className="form-box border">
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Enter username"
                onChange={this.updateState}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={this.updateState}
              />
            </Form.Group>
            <Button
              variant="success"
              block
              className="btn-login"
              onClick={this.authorizeUser}
            >
              Sing in
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
