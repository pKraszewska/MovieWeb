import React, { Component } from 'react';
import { Form, FormControl, Button, Col, Row } from 'react-bootstrap';

export default class Searchbar extends Component {
  render() {
    return (
      <Form>
        <Row>
          <Col>
            <Form.Label>What are you looking for?</Form.Label>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <FormControl
              type="text"
              placeholder="Find Movies, TV Shows..."
              className="mr-sm-5"
            />
          </Col>
          <Col xs={2}>
            <Button variant="outline-success">Search</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
