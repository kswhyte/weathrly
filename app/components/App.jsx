import React, { Component } from 'react'
import { render } from 'react-dom'
// const $ = require('jquery')
// import axios from 'axios'


import DisplayWeather from './DisplayWeather'
// const DisplayWeather = require('./DisplayWeather')


// class App extends React.Component {
export default class App extends React.Component {
  // componentDidMount() {
  //   debugger
  //   let weather = axios.get('https://weatherly-api.herokuapp.com/api/weather/')
  // }
  render () {
    return (
      <div>
        <h1 id="greeting">Welcome to Weathrly</h1>
        <h3 id="location-request">Enter a Location for Weathrly Conditions!</h3>
        <DisplayWeather />
      </div>
    )
  }
}




module.exports = App
