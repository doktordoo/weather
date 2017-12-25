import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart"
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  renderWeather(row) {
    const name = row.city.name;
    const temps = row.list.map(weather => (weather.main.temp - 273.15)); // convert Kelvin to Celsius
    const pressures = row.list.map(weather => weather.main.pressure);
    const humidities = row.list.map(weather => weather.main.humidity);
    const { lat, lon } = row.city.coord; // coord.lat, coord.lon
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="°C"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    );
  }
  render() {
      return (
          <table className="table table-hover">
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature (°C)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity (%)</th>
              </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
          </table>
      );
  }
}

//function kelvinToCelsius({tempKelvin}) {
//  if (! tempKelvin) {
//    return null;
//  }
//  return (tempKelvin - 273.15);
//}

// jos sovelluksen tila muuttuu haetaan kirjalista palvelimelta, tätä funktiota kutsutaan..
// päivittää sovelluksen tilan (props.weather)
function mapStateToProps({ weather }) {
    // Whatever is returned will show up as props
    // inside of WeatherList
    // connects redux and container(weather_list)
    console.log( weather);
    return { weather }; // {weather} == { weather : weather}
}

// we are exporting the connect version of WeatherList
export default connect(mapStateToProps)(WeatherList);
