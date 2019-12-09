import React, { Component } from 'react';
import '../search.css';

export default class SearchContainer extends Component {
  render() {
    const { results, count } = this.props;
    return (
      <React.Fragment>
        <div className="cont count">
          <h5>
            Found {count} {count > 1 ? 'movies' : 'movie'}:
          </h5>
        </div>
        <ResultContainer results={results} />
      </React.Fragment>
    );
  }
}

const ResultContainer = props => {
  const rows = props.results.map((row, index) => {
    return (
      <div key={index} className="movie-inside">
        <figure>
          <img
            src={row.medium_cover_image}
            alt={row.title}
            width="170"
            height="255"
          />
        </figure>
        <div className="title">
          {row.title}
          <div>{row.year}</div>
        </div>
      </div>
    );
  });

  return <div className="cont movies">{rows}</div>;
};
