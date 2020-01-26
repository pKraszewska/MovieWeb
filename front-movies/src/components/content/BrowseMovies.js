import React, { Component } from 'react';
import MovieContainer from './movieContent/MovieContainer';
import Searchbar from './searchbar/Searchbar';
import PaginationBar from './pagination/PaginationBar';
import './content.css';

export default class BrowseMovies extends Component {
  constructor(props) {
    super(props);
    this.getAllMovies = this.getAllMovies.bind(this);
    this.getSearchedMovies = this.getSearchedMovies.bind(this);
    this.getPage = this.getPage.bind(this);

    this.state = {
      movies: [],
      count: 0,
      page_number: 1,
      loaded: false,
      totalPages: 0,
    };
  }

  componentDidMount() {
    this.getAllMovies(this.state.page_number);
  }

  getAllMovies(pageNum) {
    this.setState({ loaded: false });
    fetch(
      `https://yts.lt/api/v2/list_movies.json?sort_by=year&&page=${pageNum}`
    )
      .then(success => {
        return success.json();
      })
      .then(res => {
        this.setState({
          loaded: true,
          movies: res.data.movies,
          count: res.data.movie_count,
          page_number: res.data.page_number,
          totalPages: Math.floor(res.data.movie_count / res.data.limit),
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getSearchedMovies(data) {
    this.setState({ movies: data.movies });
    this.setState({ count: data.count });
  }

  getPage(data) {
    this.getAllMovies(data);
  }

  render() {
    return (
      <React.Fragment>
        <Searchbar sendData={this.getSearchedMovies} />
        {this.state.loaded === true ? (
          <PaginationBar
            sendPage={this.getPage}
            pageNum={this.state.page_number}
            totalPages={this.state.totalPages}
          />
        ) : (
          <React.Fragment />
        )}
        <MovieContainer movies={this.state.movies} count={this.state.count} />
      </React.Fragment>
    );
  }
}
