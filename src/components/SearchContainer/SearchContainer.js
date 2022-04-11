import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import DetailView from "./DetailView/DetailView";
import Dashboard from "./Dashboard/Dashboard";
import axios from "axios";
import "./SearchContainer.css"


const SearchContainer = () => {

  const [inputValue, setInputValue] = useState("");
  const [coinData, setCoinData] = useState({});
  const isEmpty = Object.keys(coinData).length === 0;


  const searchCoin = async () => {
    const params = {
      params : {
        ticker: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false
      }
    }

    if(inputValue.length >= 3) {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${inputValue}`, params)
      setCoinData(res.data);
    }

    setInputValue("");
  }

  return (
    <div>
      <div className="input-search">
        <label>
          Search for a coin passing a coin name eg. bitcoin (3 chars minimum)
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </label>
        <button type="text" onClick={searchCoin}>Search</button>
      </div>
      <Switch>
        <Route exact path="/">
          <Dashboard coinData={coinData} isEmpty={isEmpty}/>
        </Route>      
        <Route exact path="/detail-view">
          <DetailView coinData={coinData} isEmpty={isEmpty}/>
        </Route>      
      </Switch>
    </div>
  );
}


export default SearchContainer;
