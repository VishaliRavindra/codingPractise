import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameChange: false, isLastNameChange: false}

  onClickFirstName = () => {
    const {isFirstNameChange} = this.state
    if (isFirstNameChange === false) {
      this.setState({isFirstNameChange: true})
    } else {
      this.setState({isFirstNameChange: false})
    }
  }

  onClickLastName = () => {
    const {isLastNameChange} = this.state
    if (isLastNameChange === false) {
      this.setState({isLastNameChange: true})
    } else {
      this.setState({isLastNameChange: false})
    }
  }

  render() {
    const {isFirstNameChange, isLastNameChange} = this.state

    return (
      <div className="bg-container">
        <h1 className="title">Show/Hide</h1>
        <div className="first-last-name-container">
          <div className="name-container">
            {isFirstNameChange ? (
              <div className="btn-name-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickFirstName}
                >
                  Show/Hide Firstname
                </button>
                <div className="first-name-inside-container">
                  <p>Joe</p>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickFirstName}
                >
                  Show/Hide Firstname
                </button>

                <p></p>
              </div>
            )}
          </div>
          <div className="name-container">
            {isLastNameChange ? (
              <div className="btn-name-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickLastName}
                >
                  Show/Hide Lastname
                </button>
                <div className="first-name-inside-container">
                  <p>Jonas</p>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickLastName}
                >
                  Show/Hide Lastname
                </button>

                <p></p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
