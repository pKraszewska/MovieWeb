import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './forms.css';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
    };
  }

  render() {
    return (
      <div className="form-box register">
        <p className="register-join text-center">Join WebMovie</p>
        <h4 className="form-sign-register text-center">Create your account</h4>
        <div className="form-box">
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
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
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
              Sign up
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
