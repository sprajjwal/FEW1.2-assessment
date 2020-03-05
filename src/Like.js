import React, {Component} from 'react'

class Like extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numLikes: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(by) {
    this.setState({numLikes: this.state.numLikes + by})
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <button type="button" onClick={() => this.handleClick(1)}>UP</button>
          <button type="button" onClick={() => this.handleClick(-1)}>DOWN</button>
        </div>
      <p style={styles.right}>Like: {this.state.numLikes}</p>
      </div>
    )
  }
}

export default Like;

const styles = {
  container: {
    display: 'flex',
  },
  right: {
    color: 'white'
  },
  none: {
    display: 'none'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}