import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import React from 'react';
import './App.css';
import "./components/crypto.css";
import {Crypto} from './components/Crypto';
import {Exchanges} from './components/exchanges';
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false'


function App() { 


const [coinss, setCoinss] = useState([])

useEffect(() => {
	getApiFetched()
},[])

const getApiFetched = async () => {
	const response = await fetch(url);
	const coins = await response.json();
	setCoinss(coins)
}


const Navbar = () => {
	return (
		<nav>
			<div className="pageLogo"><img src="https://www.pngkey.com/png/full/665-6655219_crypto-logo-png.png" alt="" className="logo"/> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Ukraine.png/640px-Flag_of_Ukraine.png" alt="flagukrainer" className="flag" /></div>
			<ul>
				<li><Link to='/' className="navLink">  Cryptocurrency</Link></li>
				<li><Link to='/exchanges' className="navLink">  Exchanges</Link></li>
				<li>NFTs</li>
				<li>News</li>
			</ul>
		</nav>
	)
}



// console.log(dat.data.coins[0].symbol)

  return (
	<div className="App">
	<BrowserRouter>
	<Navbar/>
	<Routes>
	<Route path='/' element={<Crypto coinss={coinss}/>} />
	<Route path='/exchanges' element={<Exchanges />} />
      {/* <Crypto coinss={coinss}/>  */}
	</Routes>
	</BrowserRouter>
	</div> 
  );
}

export default App;
