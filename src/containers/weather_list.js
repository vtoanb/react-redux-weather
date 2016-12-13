import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const cityTemp = cityData.list.map(data => { return data.main.temp });
    const cityHumidity = cityData.list.map(data => { return data.main.humidity });

    return(
      <tr key={ cityName }>
        <td>{ cityName }</td>
        <td>
          <Chart data={cityTemp} color={'red'}/>
        </td>
        <td>
          <Chart data={cityHumidity} color="orange"/>
        </td>
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