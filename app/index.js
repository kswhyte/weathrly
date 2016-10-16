import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

const $ = require('jquery')
require('./components/App')
require('../styles/reset.css')
require('../styles/styles.scss')

render( <App/>, document.getElementById('application'))
