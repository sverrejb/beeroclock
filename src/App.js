import React, { Component } from 'react';
import moment from 'moment-timezone';
import { cityData } from './cities'
import './App.css';


class App extends Component {

  componentDidMount(){
    console.log(moment().tz("America/Los_Angeles").format());
    
  }

  render() {
    return (
      <div className="App">
        <h1>foo</h1>
      </div>
    );
  }
}

export default App;
