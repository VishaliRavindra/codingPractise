import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div className="card-container">
            <h1 className="heading">SPEEDOMETER</h1>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
              alt="speedometer"
            />
            <p className="para">Speed is {speed}mph</p>
            <p className="para2">Min Limit is 0mph, Max Limit is 200mph</p>
            <div>
              <button
                className="button-accelerate"
                type="button"
                onClick={this.onAccelerate}
              >
                Accelerate
              </button>
              <button
                className="button-apply-break"
                type="button"
                onClick={this.onBreak}
              >
                Apply Break
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
