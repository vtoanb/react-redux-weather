import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    return(
      <tr>
        <td>{cityData.city.name}</td>
      </tr>
    );
  }
  render() {
    const { weather } = this.props;
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>city</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Pressure</th>
            </tr>
          </thead>
          <tbody>
            { weather.map(cityData => this.renderWeather(cityData)) }
          </tbody>
        </table>
      </div>
    );
  };
}

// refactor using ES6
function mapStateToProps(state) {
  const { weather } = state;
  return { weather };
}

// exported connect version instead
export default connect(mapStateToProps)(WeatherList);