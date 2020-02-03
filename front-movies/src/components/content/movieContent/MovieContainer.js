import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../content.css';

export default class MovieContainer extends Component {
  render() {
    const { movies } = this.props;
    return (
      <React.Fragment>
        {movies.length > 0 ? (
          <ResultContainer movies={movies} />
        ) : (
          <div className="cont movies">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </React.Fragment>
    );
  }
}

const ResultContainer = props => {
  const rows = props.movies.map((row, index) => {
    return (
      <div key={index} className="movie-inside">
        <figure style={{ marginBottom: '2px' }}>
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
