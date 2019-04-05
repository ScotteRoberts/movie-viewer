import React from 'react';
import PropTypes from 'prop-types';

const MovieMemberIcon = ({ member }) => {
  if (!member) return;
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignContent: 'spaceBetween',
      }}
    >
      <div
        style={{
          width: '128px',
          height: '128px',
          borderRadius: '50%',
          boxShadow:
            '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2)',
        }}
      >
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
          src={
            member.profile_path
              ? `https://image.tmdb.org/t/p/w185/${member.profile_path}`
              : 'https://image.flaticon.com/icons/png/128/149/149452.png'
          }
          alt={`${member.name} profile`}
        />
      </div>
      <span style={{ textAlign: 'center' }}>
        <strong>{member.name}</strong>
      </span>
      <span style={{ textAlign: 'center' }}>{member.job ? member.job : member.character}</span>
    </div>
  );
};

MovieMemberIcon.propTypes = {
  member: PropTypes.object.isRequired,
};

export default MovieMemberIcon;
