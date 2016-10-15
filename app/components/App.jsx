import React, { Component } from 'react'
import { render } from 'react-dom'
import WeatherForecast from './WeatherForecast'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1 id="greeting">Welcome to Weathrly</h1>
        <h3 id="location-request">Enter or Change your Location for Weathrly Conditions!</h3>
        <WeatherForecast />
      </div>
    )
  }
}
