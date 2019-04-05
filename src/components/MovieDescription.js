import React from 'react';
import PropTypes from 'prop-types';
import MovieMemberIcon from './MovieMemberIcon';
import '../styles/MovieDescription.css';

const MovieDescription = ({ selectedMovie }) => {
  const { details, cast, crew } = selectedMovie;
  if (!details.title || details.title === '') {
    return (
      <section className="movie-description">
        <div className="movie-card-container" />
      </section>
    );
  }
  const backgroundImage = {
    backgroundImage: `linear-gradient(to bottom right,rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(https://image.tmdb.org/t/p/original${
      details.backdrop_path
    })`,
  };
  return (
    <section className="movie-description">
      <div className="movie-card-container" style={backgroundImage}>
        <div className="movie-card-info">
          <h1>{`${details.title} (${details.release_date.substring(0, 4)})`}</h1>
        </div>
      </div>

      <article className="movie-description-details">
        <h2>Overview</h2>
        <p>{details.overview ? details.overview : 'No overview provided.'}</p>
        <h2>Featured Crew</h2>
        <div className="member-container">
          {crew.map((member, i) => (
            <MovieMemberIcon key={i} member={member} />
          ))}
        </div>
        <h2>Top Billed Cast</h2>
        <div className="member-container">
          {cast.map((member, i) => (
            <MovieMemberIcon key={i} member={member} />
          ))}
        </div>
      </article>
    </section>
  );
};

MovieDescription.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
};

export default MovieDescription;
