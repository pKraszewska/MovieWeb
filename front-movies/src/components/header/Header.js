import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component {
  logOut() {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return (
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="home">MovieWeb</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="movies">Movies</Nav.Link>
            <Nav.Link href="genres">Genres</Nav.Link>
          </Nav>

          {localStorage.getItem('movie-auth') !== null ? (
            <Nav>
              <Nav.Link href="home" onClick={this.logOut}>
                Log out: {localStorage.getItem('movie-auth')}
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="register">Register</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
