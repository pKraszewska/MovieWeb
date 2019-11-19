import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './forms.css';

export default class LoginForm extends Component {
  render() {
    return (
      <div className="form-box">
        <h4 className="form-sign">Sign in to MovieWeb</h4>
        <div className="form-box border">
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="success" type="submit" block className="btn-login">
              Sing in
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
