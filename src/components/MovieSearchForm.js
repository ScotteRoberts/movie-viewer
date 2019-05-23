import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MovieSearchForm.css';

class MovieSearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTextValue: '',
    };
  }

  handleChange = event => {
    this.setState({ searchTextValue: event.target.value });
  };

  handleSearch = event => {
    event.preventDefault();
    this.props.handleMovieSearch(this.state.searchTextValue);
  };

  render() {
    return (
      <form className="movie-search-form" onSubmit={this.handleSearch}>
        <input
          className="movie-search-form-input"
          type="text"
          name="search"
          placeholder="Search"
          size="35"
          value={this.state.searchTextValue}
          onChange={this.handleChange}
        />
        {/* Add a button and hide it! */}
        <button type="submit" style={{ display: 'none' }} />
      </form>
    );
  }
}

MovieSearchForm.propTypes = {
  handleMovieSearch: PropTypes.func.isRequired,
};

export default MovieSearchForm;
