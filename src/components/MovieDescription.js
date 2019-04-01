import React from 'react';
import PropTypes from 'prop-types';
import MovieMemberIcon from './MovieMemberIcon';
import '../styles/MovieDescription.css';

const MovieDescription = ({ selectedMovie }) => {
  const { details, cast, crew } = selectedMovie;
  if (!details.title || details.title === '')
    return (
      <section>
        <h1>Nothing Selected</h1>
      </section>
    );
  return (
    <div>
      <div className="back-drop-image-container">
        <img
          className="back-drop-image"
          src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
          alt={`${details.title} backdrop`}
        />
      </div>
      <section className="movie-description-info">
        <h1>{`${details.title} (${details.release_date.substring(0, 4)})`}</h1>
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
      </section>
    </div>
  );
};

MovieDescription.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
};

export default MovieDescription;
