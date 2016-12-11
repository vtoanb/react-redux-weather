import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' }
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

  render () {
    return (
      <form className="input-group">
        <input
          placeholder="get a five-day forecast in your favorite cities"
          value={this.state.term}
          onChange={this.onInputChange}
          className="form-control" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}