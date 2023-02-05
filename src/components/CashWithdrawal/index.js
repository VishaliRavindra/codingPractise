import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amt: 2000}

  updateBalance = value => {
    this.setState(prevState => ({amt: prevState.amt - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amt} = this.state

    return (
      <div className="app-container">
        <div className="with-drawl-container">
          <div className="card1">
            <span className="image">
              <p className="image-heading">S</p>
            </span>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="card2">
            <p className="balance">Your Balance</p>
            <p className="balance-amt">{amt}</p>
          </div>
          <p className="withdraw-para">WithDraw</p>
          <p className="description">CHOOSE SUM (IN RUPEES)</p>
          <div>
            <ul className="denominations-list">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  updateBalance={this.updateBalance}
                  key={eachDenomination.id}
                  denominationDetails={eachDenomination}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
