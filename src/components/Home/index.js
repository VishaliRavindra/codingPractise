import {Component} from 'react'
import Login from '../Login'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onLoggedIn = () => {
    this.setState({isLoggedIn: true})
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        {isLoggedIn ? (
          <Login />
        ) : (
          <div className="login-container">
            <h1 className="heading">Please Login</h1>
            <button className="button" type="button" onClick={this.onLoggedIn}>
              Login
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Home
