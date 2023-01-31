import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous State Value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div className="card-container">
            <h1 className="heading">
              The Button has been clicked <br />
              <span className="zero">{count}</span> times
            </h1>
            <p className="Para">Click the button to increase the Count!</p>
            <button className="button" onClick={this.onIncrement} type="button">
              Click Me!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
