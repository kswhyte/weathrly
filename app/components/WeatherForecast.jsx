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
        <ul key={uniqueKey} className={this.configureTypeStyling(dayForecast) + this.configureTempStyling(dayForecast)}>
          <li>Date: {dayForecast.date}</li>
          <li className='summary'>Today will be: {dayForecast.weatherType.type.toUpperCase()}</li>
          <li className='summary'>Chance of Rain: {Math.round(dayForecast.weatherType.chance * 100) + '%'}</li>
          <li>High: {dayForecast.temp.high}</li>
          <li>Low: {dayForecast.temp.low}</li>
        </ul>
      )
    })
  }

  configureTypeStyling(dayForecast) {
    switch (dayForecast.weatherType.type) {
      case "sunny":
        return 'sunny-'
        break
      case "cloudy":
        return 'cloudy-'
        break
      case "windy":
        return 'windy-'
        break
      case "thunder storms":
        return 'thunderstorms-'
        break
      case "rain":
        return 'rain-'
        break
      default:
        return ''
    }
  }

  configureTempStyling(dayForecast) {
    if (dayForecast.temp.high >= 70) {
        return 'high'
    } else {
      return 'low'
    }
  }

  render() {
    let weatherInfo;

    if (this.state.weather.length > 0) {
      weatherInfo = this.renderEachDaysForecast(this.state.weather);
    }

    return(
      <div className='application-view'>
        <input id='location-input' placeholder='Location'
          value={this.state.location}
          onChange={(e) => this.setState({location: e.target.value}) } />
        <button id='submit-button'
          onClick={() => this.locationSubmitted()} >Submit Location</button>
        <h3 className='location-title'>{this.state.location.toUpperCase()}</h3>
        <section>{weatherInfo}</section>
      </div>
    )
  }

}
