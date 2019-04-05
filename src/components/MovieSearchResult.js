import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MovieSearchResult.css';

function MovieSearchResult({ result, handleSelectMovie }) {
  return (
    <button className="movie-search-result" onClick={() => handleSelectMovie(result)}>
      <img
        className="movie-search-result-image"
        src={`https://image.tmdb.org/t/p/w342/${result.poster_path}`}
        alt={`${result.title} poster`}
      />
      <div className="search-result-text-container">
        <h3>{result.title}</h3>
        <h4>{result.release_date}</h4>
      </div>
    </button>
  );
}

MovieSearchResult.propTypes = {
  result: PropTypes.object.isRequired,
  handleSelectMovie: PropTypes.func.isRequired,
};

export default MovieSearchResult;
