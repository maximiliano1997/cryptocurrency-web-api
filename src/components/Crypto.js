import React from "react";
import { useState, useEffect } from 'react';
import "./crypto.css";
const globalUrl = 'https://api.coingecko.com/api/v3/global';
const newsUrl = 'https://api.coinstats.app/public/v1/news?skip=0&limit=20';


export const Crypto = ({ coinss }) => {
  // const {data} = globalData;
  // const {active_cryptocurrencies, markets, ongoing_icos, ended_icos, market_cap_change_percentage_24h_usd, market_cap_percentage} = data;


  const [globalData, setGlobalData] = useState([])
  const [dominance, setDominance] = useState([])

  const [news, setNews] = useState([])

  useEffect(() => {
    getGlobalApiFetched()
    getNewsApiFetched()
  }, [])
  const getGlobalApiFetched = async () => {
    const response = await fetch(`${globalUrl}`);
    const global = await response.json();
    let genders = Object.values(global);
    console.log(genders[0].market_cap_percentage)

    setGlobalData(genders[0])
    setDominance(genders[0].market_cap_percentage)
    // global.map(item => {
    // 	setGlobalData(item)
    // })
  }
  const getNewsApiFetched = async () => {
    const response = await fetch(`${newsUrl}`);
    const newsData = await response.json();
    let noticias = Object.values(newsData);
    console.log(noticias[0])

    setNews(noticias[0])
  }

  console.log(coinss)
  // console.log(globalData)

  return (
    <>
      <div className="header-container">


        <div className="add">
          <img src="https://mms.businesswire.com/media/20191022005451/en/751392/23/crypto_cards.jpg" alt="add" className="add-img" />
        </div>

        <div className="news">
          <h3>Latest News</h3>
          <div className="news-container">

            {news.map((items, index) => {
              return (
                <p className="news-title" key={index}>{items.title}</p>
              )
            })}

          </div>
        </div>
        <div className="global"> <h3>Global Crypto Market</h3>
          <div className="global-container">
            <div className="gc-th">
              <p>Total Cryptos: </p>
              <p>Exchanges:</p>
              <p>Market Cap:</p>
              <p>Ongoing Icos: </p>
              <p>Ended Icos:</p>
              <p>Change 24h:</p>
              <p>Dominance:</p>
            </div>
            <div className="gc-td">
              <p>{globalData.active_cryptocurrencies}</p>
              <p>{globalData.markets}</p>
              <p>$1,171,752,291,688</p>
              <p>{globalData.ongoing_icos}</p>
              <p>{globalData.ended_icos}</p>
              <p>{Math.round(globalData.market_cap_change_percentage_24h_usd)}%</p>
              <p>BTC: {Math.round(dominance.btc)}% ETH: {Math.round(dominance.eth)}%</p>

            </div>
          </div>
        </div>
        <div className="adds">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/94cef393027317.5e5a54c836e3c.gif" alt="add" className="add-imgs" />
        </div>
      </div>
      <table>
        <caption>
          Today's Cryptocurrency Prices & Data
          <p>The global crypto market cap is <span>$1.17T</span>, a <span>{Math.round(globalData.market_cap_change_percentage_24h_usd)}%</span> change over the last day</p>
        </caption>
        <thead>
          <tr>
            <th>°</th>
            <th>LOGO</th>
            <th>SYMBOL</th>
            <th>NAME</th>
            <th>CHANGE 24H</th>
            <th>PRICE</th>
            <th>MARKET CAP.</th>
            <th>VOLUME 24H</th>
            <th>CIRCULATING SUPPLY</th>
            <th>TOTAL SUPPLY</th>
          </tr>
        </thead>
        <tbody>
          {coinss.map(items => {
            // const {}
            return (
              <tr className="coinsData" key={items.id}>
                <td>{items.market_cap_rank}</td>
                <td><img src={items.image} alt="coinlogo" className="iconUrl" /></td>
                <td>{(items.symbol.toUpperCase())}</td>
                <td>{items.name}</td>
                <td>
                  {Math.round(items.price_change_percentage_24h)},0 %
                </td>
                <td>$ {new Intl.NumberFormat().format(items.current_price)}</td>
                <td>$ {new Intl.NumberFormat().format(items.market_cap).toString()}</td>
                <td>
                  ${new Intl.NumberFormat().format(items.market_cap_change_24h)}
                </td>
                <td>
                  {new Intl.NumberFormat().format(items.circulating_supply)} <img src={items.image} alt="coinlogo2" className="iconUrl2" />
                  {(items.symbol).toUpperCase()}
                </td>
                <td>
                  {new Intl.NumberFormat().format(items.total_supply)} <img src={items.image} alt="coinlogo2" className="iconUrl2" />
                  {(items.symbol).toUpperCase()}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
};


// export default Crypto;
