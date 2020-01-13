import React, { Component } from 'react';
import MovieContainer from './movieContent/MovieContainer';
import Searchbar from './searchbar/Searchbar';
import './content.css';

export default class BrowseMovies extends Component {
  constructor(props) {
    super(props);
    this.getAllMovies = this.getAllMovies.bind(this);
    this.getSearchedMovies = this.getSearchedMovies.bind(this);

    this.state = {
      movies: [],
      count: 0,
      page_number: 1,
    };
  }

  componentDidMount() {
    this.getAllMovies();
  }

  getAllMovies() {
    fetch(
      `https://yts.lt/api/v2/list_movies.json?sort_by=year&&page=${
        this.state.page_number
      }`
    )
      .then(success => {
        return success.json();
      })
      .then(res => {
        console.log(res);
        this.setState({ movies: res.data.movies });
        this.setState({ count: res.data.movie_count });
        this.setState({ page_number: res.data.page_number });
        console.log(this.state.page_number);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getSearchedMovies(data) {
    this.setState({ movies: data.movies });
    this.setState({ count: data.count });
  }

  render() {
    return (
      <React.Fragment>
        <Searchbar sendData={this.getSearchedMovies} />
        <MovieContainer movies={this.state.movies} count={this.state.count} />
      </React.Fragment>
    );
  }
}
