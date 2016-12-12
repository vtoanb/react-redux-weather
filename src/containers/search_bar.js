import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' }
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // go fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
  }

  render () {
    return (
      <form onSubmit={ event => this.onFormSubmit(event) } className="input-group">
        <input
          placeholder="get a five-day forecast in your favorite cities"
          value={this.state.term}
          onChange={ event => this.onInputChange(event) }
          className="form-control" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// no state , so null
export default connect(null, mapDispatchToProps)(SearchBar);