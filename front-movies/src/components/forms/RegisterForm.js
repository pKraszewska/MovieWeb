import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './Error';
import './forms.css';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Must have a character')
    .max(30, 'Must be shorter than 30')
    .required('Username is required'),
  email: Yup.string()
    .email('Must be a valid email address')
    .max(50, 'Must be shorter than 50')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password is too short- must have at least 8 characters')
    .required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required'),
});

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
        <p className="register-join text-center">Join MovieWeb</p>
        <h4 className="form-sign-register text-center">Create your account</h4>
        <div className="form-box">
          <Formik
            validationSchema={validationSchema}
            onSubmit={console.log}
            initialValues={{
              username: '',
              email: '',
              password: '',
              passwordConfirmation: '',
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    isInvalid={!!errors.username}
                    isValid={touched.username && !errors.username}
                  />
                  <Error touched={touched.username} message={errors.username} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    isInvalid={!!errors.email}
                    isValid={touched.email && !errors.email}
                  />
                  <Error touched={touched.email} message={errors.email} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    isInvalid={!!errors.password}
                    isValid={touched.password && !errors.password}
                  />
                  <Error touched={touched.password} message={errors.password} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Confirm password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirmation}
                    isInvalid={!!errors.confirmPassword}
                    isValid={
                      touched.passwordConfirmation &&
                      !errors.passwordConfirmation
                    }
                  />
                  <Error
                    touched={touched.passwordConfirmation}
                    message={errors.passwordConfirmation}
                  />
                </Form.Group>
                <Button
                  variant="success"
                  type="submit"
                  block
                  className="btn-login"
                >
                  Sign up
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
