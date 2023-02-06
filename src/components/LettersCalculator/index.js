import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeText = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <div className="card-container">
            <div className="content-container">
              <h1 className="heading">Calculate the Letters you enter</h1>
              <label htmlFor="Enter the phrase" className="para">
                Enter the phrase
              </label>
              <input
                type="text"
                id="Enter the phrase"
                placeholder="Enter the phrase"
                className="search-input"
                onChange={this.onChangeText}
              />

              <p className="para2">No.of letters: {count}</p>
            </div>

            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
