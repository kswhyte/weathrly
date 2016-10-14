import React, { Component } from 'react'
import { render } from 'react-dom'
const $ = require('jquery')
// import axios from 'axios'

export default class DisplayWeather extends React.Component {
  constructor() {
    super()
    this.state = {
      source: 'https://weatherly-api.herokuapp.com/api/weather/',
      location: '',
      weather: []
      // maxTemp: '',
      // minTemp: ''
    }
  }

  locationSubmitted() {
    $.get(this.state.source + this.state.location).then(results => {
        this.setState({
          weather: results
          // maxTemp: results[0].temp.high,
          // minTemp: results[0].temp.low
      })
    })
  }

  //create function that maps through array or object and returns different attributes from the weather array
  //return a 'render' of lis with temp, etc.
  //or use lodash 

  // componentDidMount() {
  // }

  render() {
    return(
      <div>
        <input id='location-input' placeholder='Location'
          value={this.state.location}
          onChange={(e) => this.setState({location: e.target.value}) } />
        <button id='submit-button'
          onClick={() => this.locationSubmitted()} >Submit Location</button>
      </div>
    )
  }

}


// module.exports = DisplayWeather





// class MyComponent extends React.Component {
//   render() {
//     return <div className={this.props.className}/>;
//   }
// }

// React 0.14 introduced a new syntax for defining components, as functions of props:
//
// const MyComponent = props => (
//   <div className={props.className}/>
// );
