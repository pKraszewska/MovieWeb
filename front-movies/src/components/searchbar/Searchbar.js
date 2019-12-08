import React, { Component } from 'react';
import { Form, FormControl, Button, Col, Row } from 'react-bootstrap';
import SearchContainer from './searchContainer/SearchContainer';
import './search.css';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      query: '',
      result: [],
      count: 0,
    };
  }

  handleInputChange(event) {
    this.setState({ query: event.target.value });
  }

  search() {
    console.log('szukam');
    fetch(
      `https://yts.lt/api/v2/list_movies.json?query_term=${this.state.query}`
    )
      .then(success => {
        return success.json();
      })
      .then(res => {
        console.log(res);
        this.setState({ result: res.data.movies });
        this.setState({ count: res.data.movie_count });
        console.log(this.state.result);
        console.log(this.state.count);
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({ query: '' });
  }

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
              value={this.state.query}
              onChange={this.handleInputChange}
            />
          </Col>
          <Col xs={2}>
            <Button onClick={this.search} variant="outline-success">
              Search
            </Button>
          </Col>
        </Row>
        {this.state.result.length > 0 ? (
          <SearchContainer
            results={this.state.result}
            count={this.state.count}
          />
        ) : null}
      </Form>
    );
  }
}
