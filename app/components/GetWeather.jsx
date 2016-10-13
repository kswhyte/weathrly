const React = require('react')
const ReactDOM = require('react-dom')
let $ = require('jquery');

class GetWeather extends React.Component {
  constructor() {
    super()
    this.city = {location: }
  }
  locationSubmitted(e) {
    e.preventDefault()
    this.serverRequest = $.get(this.props.source + this.city.location, function(cityWeather) {
      this.setCity({
        cityInfo: cityWeather
      })
    }.bind(this))
  }
  render() {
    return(
      <div>
        <input id='location-input' placeholder='Location'
          value={this.city.location}
          onChange={(e) => this.setCity({location: e.target.value}) } />
        <button id='submit-button'
          onClick={(e) => this.locationSubmitted(e)} >Submit Location</button>
      </div>
    )
  }
}

//     return (
//       <div>
//         <div>
//           <input placeholder='Location'
//             value={this.state.location}
//             onChange={(e) => this.setState({location: e.target.value}) } />
//           <input type='submit'
//             onClick={(e) => this.locationAccepted(e)} />
//         </div>
//       </div>


ReactDOM.render(<Main source='https://weatherly-api.herokuapp.com/api/weather/' />, document.getElementById('application'))

module.exports = GetWeather
