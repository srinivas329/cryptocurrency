// Write your JS code here
import CryptoCurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptoCurrenciesList = props => {
  const {currencyDetails} = props

  return (
    <div className="card-bg">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="image"
      />
      <div className="table">
        <p className="table-heading">Coin Type</p>
        <div className="usd-euro">
          <p className="table-heading">USD</p>
          <p className="table-heading">EURO</p>
        </div>
      </div>
      <ul className="table2">
        {currencyDetails.map(each => (
          <CryptoCurrencyItem currencyList={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default CryptoCurrenciesList
