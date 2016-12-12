import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeatherRow() {

  }
  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>city</th>
              <th>Temperature</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
}

// refactor using ES6
function mapStateToProps({ weather }) {
  return { weather };
}

// exported connect version instead
export default connect(mapStateToProps)(WeatherList);