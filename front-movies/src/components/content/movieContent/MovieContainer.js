import React, { Component } from 'react';
import '../content.css';

export default class MovieContainer extends Component {
  render() {
    const { movies, count } = this.props;
    return (
      <React.Fragment>
        <div className="cont count">
          <h5>
            Found {count} {count > 1 ? 'movies' : 'movie'}:
          </h5>
        </div>
        <ResultContainer movies={movies} />
      </React.Fragment>
    );
  }
}

const ResultContainer = props => {
  const rows = props.movies.map((row, index) => {
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
