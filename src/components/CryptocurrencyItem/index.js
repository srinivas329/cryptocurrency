// Write your JS code here
import './index.css'

const CryptoCurrencyItem = props => {
  const {currencyList} = props
  const {currencyLogo, currencyName, euroValue, usdValue, id} = currencyList
  console.log(id)
  return (
    <li className="table1">
      <div className="logo-name">
        <img src={currencyLogo} alt="currency_logo" className="logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro1">
        <p className="currency-name">{usdValue}</p>
        <p className="currency-name">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoCurrencyItem
