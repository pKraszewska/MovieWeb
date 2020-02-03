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
      totalPages: 0,
    };
  }

  componentDidMount() {
    this.getAllMovies(this.state.page_number);
  }

  getAllMovies(pageNum) {
    this.setState({ movies: [] });
    fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=year&&page=${pageNum}`
    )
      .then(success => {
        return success.json();
      })
      .then(res => {
        this.setState({
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
        <div className="cont count">
          <h4>
            Found {this.state.count} {this.state.count > 1 ? 'movies' : 'movie'}
            :
          </h4>
        </div>
        <PaginationBar
          sendPage={this.getPage}
          pageNum={this.state.page_number}
          totalPages={this.state.totalPages}
        />
        <MovieContainer movies={this.state.movies} count={this.state.count} />
      </React.Fragment>
    );
  }
}
