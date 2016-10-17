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
          <li><img className={this.configureTypeStyling(dayForecast) + '-icon'} src={this.configureIconSource(dayForecast)} aria-label={this.configureAriaLabel(dayForecast)}/></li>
          <li>Date: {dayForecast.date}</li>
          <li className='summary'>Today will be: {dayForecast.weatherType.type.toUpperCase()}</li>
          <li className='summary'>Chance of Rain: {Math.round(dayForecast.weatherType.chance * 100) + '%'}</li>
          <li >High: {dayForecast.temp.high}</li>
          <li>Low: {dayForecast.temp.low}</li>
        </ul>
      )
    })
  }

  renderLocationErrorMsg() {
    return(
      <div>
        <h3>Sorry, there is NO DATA for that location.</h3>
        <h3>Please Choose out of our <span>4 Valid Locations:</span></h3>
        <ul>
          <li>Castle-Rock</li>
          <li>Denver</li>
          <li>San-Diego</li>
          <li>San-Francisco</li>
        </ul>
      </div>
    )
  }

  configureTypeStyling(dayForecast) {
    switch (dayForecast.weatherType.type) {
      case "sunny":
        return 'sunny'
        break
      case "cloudy":
        return 'cloudy'
        break
      case "windy":
        return 'windy'
        break
      case "thunder storms":
        return 'thunderstorms'
        break
      case "rain":
        return 'rain'
        break
      case "snow":
        return 'snow'
        break
      default:
        return ''
    }
  }

  configureTempStyling(dayForecast) {
    if (dayForecast.temp.high >= 70) {
        return '-high'
    } else {
      return '-low'
    }
  }

  configureIconSource(dayForecast) {
    switch (dayForecast.weatherType.type) {
      case "sunny":
        return '../images/svg/sunny.svg'
        break
      case "cloudy":
        return '../images/svg/cloudy.svg'
        break
      case "windy":
        return '../images/svg/wind.svg'
        break
      case "thunder storms":
        return '../images/svg/thunderstorm.svg'
        break
      case "rain":
        return '../images/svg/rain.svg'
        break
      case "snow":
        return '../images/svg/snowflake.svg'
        break
      default:
        return ''
    }
  }

  configureAriaLabel(dayForecast) {
    switch (dayForecast.weatherType.type) {
      case "sunny":
        return 'sun icon'
        break
      case "cloudy":
        return 'cloud icon'
        break
      case "windy":
        return 'wind icon'
        break
      case "thunder storms":
        return 'thunderstorm icon'
        break
      case "rain":
        return 'rain icon'
        break
      case "snow":
        return 'snow icon'
        break
      default:
        return ''
    }
  }

  render() {
    let weatherInfo;
    if (this.state.weather.length > 0) {
      weatherInfo = this.renderEachDaysForecast(this.state.weather);
    } else {
      weatherInfo = this.renderLocationErrorMsg()
    }
    return(
      <div>
        <section className='application-view'>
          <h1 id="greeting">Welcome to <span aria-label="weathrly">Weathrly</span></h1>
          <h3 id="location-request">Enter or Change your Location for Weathrly Conditions!</h3>
          <input aria-label="location input" id='location-input' placeholder='Location'
          value={this.state.location}
          onChange={(e) => this.setState({location: e.target.value}) } />
          <button aria-label="submit location button" id='submit-button'
          onClick={() => this.locationSubmitted()} >Submit Location</button>
          <h3 className='location-title'>{this.state.location.toUpperCase()}</h3>
        </section>
        <section className='weather-info'>{weatherInfo}</section>
      </div>
    )
  }
}
