import axios from 'axios';
const API_KEY = "47ea6d165ae12c73e479c6c5dbb10868";
export const FETCH_WEATHER = 'FETCH_WEATHER'; 
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  console.log(url);

  const request = axios.get(url);
  console.log('request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
