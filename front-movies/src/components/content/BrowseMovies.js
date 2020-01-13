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
      limit_per_page: 0,
    };
  }

  componentDidMount() {
    this.getAllMovies(this.state.page_number);
  }

  getAllMovies(pageNum) {
    fetch(
      `https://yts.lt/api/v2/list_movies.json?sort_by=year&&page=${pageNum}`
    )
      .then(success => {
        return success.json();
      })
      .then(res => {
        console.log(res);
        this.setState({ movies: res.data.movies });
        this.setState({ count: res.data.movie_count });
        this.setState({ page_number: res.data.page_number });
        this.setState({ limit_per_page: res.data.limit });
        console.log(this.state.limit_per_page);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getSearchedMovies(data) {
    console.log(data);
    this.setState({ movies: data.movies });
    this.setState({ count: data.count });
  }

  getPage(data) {
    console.log(data);
    this.setState({ page_number: data });
    this.getAllMovies(data);
  }

  render() {
    return (
      <React.Fragment>
        <Searchbar sendData={this.getSearchedMovies} />
        <MovieContainer movies={this.state.movies} count={this.state.count} />
        <PaginationBar
          sendPage={this.getPage}
          limit={this.state.limit_per_page}
          count={this.state.count}
        />
      </React.Fragment>
    );
  }
}
