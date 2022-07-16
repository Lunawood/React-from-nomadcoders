import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [invest, setInvest] = useState(0);
  const [indexcoins, setIndexCoin] = useState(0);
  const onChangeValue = (event) => setInvest(event.target.value);
  const onChangeIndex = (event) => setIndexCoin(event.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
        <div>
          <div>
            <input type="text" onChange={onChangeValue} placeholder="Invest Your Money" />$
          </div>
          <div>
            <select onChange={onChangeIndex}>
              <option>
                Choose Your Bitcoin
              </option>
              {coins.map((coin, index) =>
                <option value={index + 1}>
                  {coin.name} ({coin.symbol}) = {coin.quotes.USD.price} USD
                </option>
              )}
            </select>
          </div>
          <div>{(invest && indexcoins) ? invest / coins[indexcoins - 1].quotes.USD.price : ""}</div>
        </div>
      }
    </div>
  );
}

export default App;
