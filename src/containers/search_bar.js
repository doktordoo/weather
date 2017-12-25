import React, { Component } from "react";
import Select from 'react-select-2';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

const options = [
  { value: 'de', label: 'Deutchland' },
  { value: 'gb', label: 'UK' },
  { value: 'fi', label: 'Suomi' },
  { value: 'se', label: 'Sweden' },
  { value: 'us', label: 'USA' }
]

class SearchBar extends Component {
  // alustetaan oletusarvoksi tyhjä hakuehto
  constructor(props) {
    super(props);
    this.state = {term: '', country: 'fi'};

    this.onInputChange = this.onInputChange.bind(this);
    this.onCountryChange = this.onCountryChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value, country: this.state.country});
    console.log(this.state);
  }

  onCountryChange(event) {
    this.setState({ term: this.state.term, country: event});
    console.log(this.state);
  }

  onFormSubmit(event)  {
    // enter tai submit ei lähetä formia palvelimelle...
    event.preventDefault();

    // we need to go and fetch weather stuff...
    this.props.fetchWeather(this.state.term, this.state.country);
    // lets clear the term after search...
    this.setState({ term: '', country: this.state.country});
  }

  render() {
    return (
        <form onSubmit={this.onFormSubmit} className="form-inline">
          <div className="form-group">
                <input
                     placeholder="Get a five day forecast for your favourite cities"
                     size="50"
                     className="form-control mb-3 mr-sm-2 mb-sm-0"
                     value={this.state.term}
                     onChange={this.onInputChange} />
          </div>
          <div className="form-group">
                <Select className="custom-select"
                   style={{width: `${(8*this.state.country.length) + 100}px`}}
                   autoFocus
                   options={options}
                   value={this.state.country}
                   searchable={true}
                   simpleValue
 					         clearable={false}
                   openOnClick={true}
                   onChange={this.onCountryChange}
                   />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
  }
}

// Anything returned from this function will end up as props
// on the SearchBar container.Returns the fetchWeather action creator...
function mapDispatchToProps(dispatch) {
  // Whatever SearchBar is called , the result should be passed
  // to all reducers
  // passing object which contains fetchWeather
  return bindActionCreators({ fetchWeather }, dispatch);
}


// Promote SearchBar from a component to a container
// null, koska välitetään funktio menee toisena argumenttina...
// state 1. argumentti. (ny ei olla kiinnostuneita tilasta...)
export default connect(null, mapDispatchToProps)(SearchBar);
