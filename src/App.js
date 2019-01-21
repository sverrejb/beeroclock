import React, { Component } from 'react';
import moment from 'moment-timezone';
import { cityData } from './cities'
import './App.css';
import Gmap from './Map'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {citiesWhereItIsFiveoclock: [],
    currentCity: {}};
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
      currentCity: cities[Math.floor(Math.random()*cities.length)]
    });
    
  }

  refresh = () => {
    const cities = this.state.citiesWhereItIsFiveoclock;
    this.setState({
      currentCity: cities[Math.floor(Math.random()*cities.length)]
    })

  }

  render() {
    const city = this.state.currentCity;
    const latitude = parseFloat(city.latitude)
    const longitude = parseFloat(city.longitude)
    return (
      <div className="App">
      <div>
      <h1>It's five o'clock in {city.name} ...</h1>
        <br />
        <button onClick={this.refresh}>And other places</button>        
      </div>
    
      <Gmap center={{lat:latitude, lng:longitude}} />
      </div>
    );
  }
}

export default App;
