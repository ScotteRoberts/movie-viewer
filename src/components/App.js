import React, { Component } from 'react';
import Axios from 'axios';
import MovieDescription from './MovieDescription';
import MovieSearch from './MovieSearch';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchData: {},
      selectedMovie: {
        details: {},
        cast: [],
        crew: [],
      },
    };
  }

  handleMovieSearch = searchTextValue => {
    if (searchTextValue === '') return this.setState({ searchData: {} });
    // Returns pagination responses.
    Axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY_V3,
        query: searchTextValue,
      },
    }).then(response => {
      this.setState({ searchData: response.data });
    });
  };

  handleSelectMovie = movie => {
    Axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY_V3,
      },
    }).then(response => {
      this.setState({
        selectedMovie: {
          details: movie,
          cast: response.data.cast,
          crew: response.data.crew,
        },
      });
      // TODO: Not sure if you want to have this in the final product...
      window.scrollTo(0, 0);
    });
  };

  render() {
    return (
      <main className="app">
        <h1>Movie Viewer</h1>
        <MovieDescription className="movie-description" selectedMovie={this.state.selectedMovie} />
        <MovieSearch
          className="movie-search"
          handleMovieSearch={this.handleMovieSearch}
          handleSelectMovie={this.handleSelectMovie}
          searchData={this.state.searchData}
        />
      </main>
    );
  }
}

export default App;
