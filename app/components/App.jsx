const React = require('react');
const ReactDOM = require('react-dom');
const LocationInput = require('./LocationInput')
const SubmitButton = require('./SubmitButton')

class App extends React.Component {
  render () {
    return (
      <div>
        <h1 id="greeting">Welcome to Weathrly</h1>
        <h3 id="location-request">Enter a Location for Weathrly Conditions!</h3>
        <LocationInput />
        <SubmitButton />
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('application'))
// ReactDOM.render( <LocationInput />, document.getElementById('application'))


module.exports = App
