import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: true,
  }

  onClickButton = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === true) {
      this.setState({isSubscribe: false})
      console.log(isSubscribe)
    } else {
      this.setState({isSubscribe: true})
    }
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Welcome</h1>
        <p className="para">Thankyou! Happy Learning</p>
        {isSubscribe ? (
          <button className="button" type="button" onClick={this.onClickButton}>
            subscribe
          </button>
        ) : (
          <button className="button" type="button" onClick={this.onClickButton}>
            subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
