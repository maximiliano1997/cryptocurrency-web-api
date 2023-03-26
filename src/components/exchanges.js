import React from "react";
import {useState, useEffect} from 'react';
import './exchanges.css'
const exchangesUrl = 'https://api.coingecko.com/api/v3/exchanges';

export const Exchanges = () => {

    const [exchanges, setExchanges] = useState([])

useEffect(() => {
	getExchangesApiFetched()
},[])

const getExchangesApiFetched = async () => {
	const response = await fetch(exchangesUrl);
	const exchanges = await response.json();
	setExchanges(exchanges)
}

console.log(exchanges)


    return (
        <>
        <div></div>
              <table>
        <caption>
          Top 100 Exchanges Worldwide
          <p>The global crypto market cap is <span>$1.17T</span>, a <span>}%</span> change over the last day</p>
        </caption>
        <thead>
        <tr>
          <th>°</th>
          <th></th>
          <th>NAME</th>
          <th className="th-exchanges-country">COUNTRY LOCATION</th>
          <th>24hs VOLUME</th>
          <th>Trust Score</th>
          <th>Year Established</th>
          <th>Official Page</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          {
            exchanges.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td><img src={item.image} alt="logo" className="exchanges-logo" /></td>
                  <td className="exchanges-name">{(item.name).toUpperCase()}</td>
                  <td className="exchanges-country">{item.country}</td>
                  <td className="volume_24h"> {new Intl.NumberFormat().format(item.trade_volume_24h_btc)}  <img src='https://cryptologos.cc/logos/bitcoin-btc-logo.png' alt="btc" className="btc-volume" /></td>
                  <td>{item.trust_score}</td>
                  <td>{item.year_established}</td>
                  <td><a href={item.url} className="exchanges-url">{item.name}.com</a></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
        </>
    )
}