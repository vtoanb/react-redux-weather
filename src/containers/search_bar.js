import React, { Component } from 'react';

export default class SearchBar extends Component {
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
    console.log(event);
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