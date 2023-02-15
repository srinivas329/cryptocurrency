// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyDetails()
  }

  getCurrencyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      id: each.id,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
    }))

    this.setState({currencyData: updatedData, isLoading: false})
  }

  render() {
    const {currencyData, isLoading} = this.state

    return (
      <div className="bg-container">
        {isLoading ? (
          <Loader
            type="TailSpin"
            className="loader"
            color=" #00e7ff"
            width={30}
            height={30}
          />
        ) : (
          <CryptocurrenciesList currencyDetails={currencyData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
