import React from 'react';
import PropTypes from 'prop-types';

const MovieMemberIcon = ({ member }) => {
  if (!member) return;
  return (
    <div style={{ display: 'flex', flexFlow: 'column', justifyItems: 'center' }}>
      <div style={{ width: '128px', height: '128px' }}>
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
      <span>
        <strong>{member.name}</strong>
      </span>
      <span>{member.job ? member.job : member.character}</span>
    </div>
  );
};

MovieMemberIcon.propTypes = {
  member: PropTypes.object.isRequired,
};

export default MovieMemberIcon;
