import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isLightChanged: true}

  onClickLightMode = () => {
    const {isLightChanged} = this.state
    if (isLightChanged === true) {
      this.setState({isLightChanged: false})
    } else {
      this.setState({isLightChanged: true})
    }
  }

  render() {
    const {isLightChanged} = this.state

    return (
      <div className="bg-container">
        {isLightChanged ? (
          <div className="card-container">
            <h1 className="title-dark">Click To Change Mode</h1>

            <button
              className="button"
              type="button"
              onClick={this.onClickLightMode}
            >
              Light Mode
            </button>
          </div>
        ) : (
          <div className="card-container-sub">
            <h1 className="title-light">Click To Change Mode</h1>
            <button
              className="button"
              type="button"
              onClick={this.onClickLightMode}
            >
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
