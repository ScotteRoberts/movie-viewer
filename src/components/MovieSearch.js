import React from 'react';
import PropTypes from 'prop-types';
import MovieSearchForm from './MovieSearchForm';
import MovieSearchResult from './MovieSearchResult';
import '../styles/MovieSearch.css';

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { searchData, handleMovieSearch, handleSelectMovie } = this.props;

    return (
      <aside className="movie-search">
        <MovieSearchForm handleMovieSearch={handleMovieSearch} />
        {searchData.results
          ? searchData.results.map((result, i) => (
              <MovieSearchResult key={i} result={result} handleSelectMovie={handleSelectMovie} />
            ))
          : ''}
      </aside>
    );
  }
}

MovieSearch.propTypes = {
  searchData: PropTypes.object,
  handleMovieSearch: PropTypes.func.isRequired,
  handleSelectMovie: PropTypes.func.isRequired,
};

export default MovieSearch;
