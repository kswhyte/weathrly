const React = require('react')
const ReactDOM = require('react-dom')
const ActionButton = require('./ActionButton')

class LikesCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  addToLikesCount (num) {
debugger
    this.setState( {count: this.state.count += num } )
  }

  render () {
    return (
      <div className="LikesCounter">
        <h3>Likes: {this.state.count}</h3>
        <div className="ActionButtons">
          <ActionButton id="like" text="Like! (+1)" handleClick={this.addToLikesCount.bind(this, 1)} />
          <ActionButton id="dislike" text="Dislike! (-1)" handleClick={this.addToLikesCount.bind(this, -1)} />
        </div>
      </div>
    )
  }
}

module.exports = LikesCounter
