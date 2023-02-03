import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickIncrement = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="even-odd-bg-container">
          <div className="even-odd-container">
            <h1 className="title">
              Count <span>{count}</span>
            </h1>
            {count % 2 === 0 ? (
              <p className="description">Count is Even</p>
            ) : (
              <p className="description">Count is Odd</p>
            )}

            <button
              type="button"
              className="button"
              onClick={this.onClickIncrement}
            >
              Increment
            </button>
            <p className="desc">*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
