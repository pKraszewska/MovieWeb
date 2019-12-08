import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class SearchContainer extends Component {
  render() {
    const { results, count } = this.props;
    return (
      <Container>
        <h4>
          Found {count} {count > 1 ? 'results' : 'result'}:
        </h4>

        <ResultContainer results={results} />
      </Container>
    );
  }
}

const ResultContainer = props => {
  const rows = props.results.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.year}</td>
        <td>{row.description_full}</td>
        <td>{row.rating}</td>
        <td>{row.runtime}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};
