import React, { Component } from 'react'
import { render } from 'react-dom'
const $ = require('jquery')

export default class WeatherForecast extends React.Component {
  constructor() {
    super()
    this.state = {
      source: 'https://weatherly-api.herokuapp.com/api/weather/',
      location: '',
      weather: []
    }
  }

  componentDidMount() {
    this.setState({location: localStorage.getItem('lastLocationSubmitted') || ''}, () => this.locationSubmitted() )
  }

  locationSubmitted() {
    if (this.state.location) {
      $.get(this.state.source + this.state.location).then(weatherInfo => {
          this.setState({weather: weatherInfo.slice(0, 7)})
        })
    }
    this.persistLastLocation()
  }

  persistLastLocation() {
    localStorage.setItem('lastLocationSubmitted', this.state.location)
  }

  renderEachDaysForecast(weatherInfo) {
    return weatherInfo.map(dayForecast => {
      let uniqueKey = dayForecast.location + dayForecast.date
      return(
        <ul key={uniqueKey} setClass={this.configureStyling()}>
          <li>Date: {dayForecast.date}</li>
          <li>Type: {dayForecast.weatherType.type}</li>
          <li>Chance: {dayForecast.weatherType.chance}</li>
          <li>TempHigh: {dayForecast.temp.high}</li>
          <li>TempLow: {dayForecast.temp.low}</li>
        </ul>
      )
    })
  }

  // configureStyling() {
  //   return(
  //   )
  // }
  //return a string for the classname

  render() {
    let weatherInfo;

    if (this.state.weather.length > 0) {
      weatherInfo = this.renderEachDaysForecast(this.state.weather);
    }

    return(
      <div>
        <input id='location-input' placeholder='Location'
          value={this.state.location}
          onChange={(e) => this.setState({location: e.target.value}) } />
        <button id='submit-button'
          onClick={() => this.locationSubmitted()} >Submit Location</button>
        <h3>{this.state.location}</h3>
        <section>{weatherInfo}</section>
      </div>
    )
  }

}


// module.exports = WeatherForecast

//create function that takes return parsed data as argument
//iterate though, parse through it and, for each render to html

//create function that maps through array or object and returns different attributes from the weather array
//return a 'render' of lis with temp, etc.
//or use lodash






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
