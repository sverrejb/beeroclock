import React, { Component } from 'react';
import moment from 'moment-timezone';
import { cityData } from './cities'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {citiesWhereItIsFiveoclock: []};
  }

  componentWillMount(){
    var cities = []
    for(var timezone in cityData){
      
      const candidate = moment().tz(timezone);
      const localTime = candidate.get('hours');
      if(localTime === 17){
        cities.push(...cityData[timezone])
      }
      
    }
    this.setState({
      citiesWhereItIsFiveoclock: cities,
    });
    
  }

  render() {
    const cities = this.state.citiesWhereItIsFiveoclock;
    const city = cities[Math.floor(Math.random()*cities.length)]
    return (
      <div className="App">
        <h1>It's five o'clock in {city.name} ...</h1>
        <a href={`https://www.google.no/maps/place/${city.latitude},${city.longitude}`}>{city.latitude},{city.longitude}</a>
      </div>
    );
  }
}

export default App;
