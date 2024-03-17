// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onChangeRanomGenerator = () => {
    const newRandomNUmber = Math.ceil(Math.random() * 100)
    //console.log(newRandomNUmber)
    this.setState({randomNumber: newRandomNUmber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="app-card-container">
          <h1 className="title">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="btn"
            type="button"
            onClick={this.onChangeRanomGenerator}
          >
            Generate
          </button>
          <p className="btn-description">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
