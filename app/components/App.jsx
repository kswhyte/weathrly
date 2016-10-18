import React, { Component } from 'react'
import { render } from 'react-dom'
import WeatherForecast from './WeatherForecast'

export default class App extends React.Component {
  render () {
    return (
      <div className='weatherDisplay'>
        <WeatherForecast />
      </div>
    )
  }
}
