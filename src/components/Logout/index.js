import {Component} from 'react'
import Home from '../Home'
import './index.css'

class Logout extends Component {
  state = {isLoggedOut: 0}

  onLoggedOut = () => {
    this.setState({isLoggedOut: 1})
  }

  render() {
    const {isLoggedOut} = this.state
    console.log(isLoggedOut)
    return (
      <div className="container">
        {isLoggedOut === 1 ? (
          <Home />
        ) : (
          <div className="login-container">
            <h1 className="heading">Welcome User</h1>
            <button className="button" type="button" onClick={this.onLoggedOut}>
              LogOut
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Logout
