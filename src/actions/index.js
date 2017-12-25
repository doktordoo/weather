import axios from 'axios';

const API_KEY = 'eae0df3da6352287a2968e534adb7cbe';
const API_KEY2 = '0d6b65bfa9f9de68af8cb3a3c1507647';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=eae0df3da6352287a2968e534adb7cbe
// http://api.openweathermap.org/data/2.5/forecast?q=Helsinki,fi&appid=eae0df3da6352287a2968e534adb7cbe


export const FETCH_WEATHER = 'FETCH_WEATHER';

// fetchWeather is an action creator
// which returns object with type
// payload contains the request to api
export function fetchWeather(city, country) {
  const url = `${ROOT_URL}&q=${city},${country}`
  const request = axios.get(url);
  // console.log(request);

  // redux-promise checks that payload is promise and unwaraps the promise and makes the request..
  // it stops the action and once the request finishes it dispatches a new action of the same type
  // with the payload of the resolved request
  return {
      type: FETCH_WEATHER,
      payload: request
  };
}
