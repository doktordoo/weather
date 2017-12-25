import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import CountryReducer from './reducer_country';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  coutries: CountryReducer
});

export default rootReducer;
