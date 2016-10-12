const React = require('react');
const ReactDOM = require('react-dom');
const LikesCounter = require('./LikesCounter')

class App extends React.Component {
  render () {
    return (
     <h1 id="greeting">Welcome to Weathrly</h1>
      // <h3 id="location-request">Enter a Location for Weathrly Conditions!</h3>
      // <input id="location-input" type="text"> */}
    )
  }
}

ReactDOM.render( <App />, document.getElementById('application'))

module.exports = App
