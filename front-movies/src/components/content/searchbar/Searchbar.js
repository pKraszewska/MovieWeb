import React, { Component } from 'react';
import { Form, FormControl, Button, Col, Row } from 'react-bootstrap';
import '../content.css';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      query: '',
      movies: [],
      count: 0,
      searchedPhrase: '',
    };
  }

  handleInputChange(event) {
    this.setState({
      query: event.target.value,
      searchedPhrase: event.target.value,
    });
  }

  search() {
    fetch(
      `https://yts.lt/api/v2/list_movies.json?query_term=${this.state.query}`
    )
      .then(success => {
        return success.json();
      })
      .then(res => {
        this.setState({ movies: res.data.movies });
        this.setState({ count: res.data.movie_count });
        this.passStateToParent();
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({ query: '' });
  }

  passStateToParent() {
    this.props.sendData(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <div className="search-box">
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
                  placeholder="Find Movies..."
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
          </Form>
        </div>
      </React.Fragment>
    );
  }
}
