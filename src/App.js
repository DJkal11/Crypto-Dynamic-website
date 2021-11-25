
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Cryptobank from './components/Cryptobank';
import Welcome from './components/Welcome';
import Exchange from './components/Exchange';
import { useState } from 'react';


function App() {

  const [ border1, setBorder1 ] = useState(true);
  const [ border2, setBorder2 ] = useState(false);
  const [ border3, setBorder3 ] = useState(false);

  function handleClickWelcome() {
    setBorder1(true);
    setBorder2(false);
    setBorder3(false);
  }

  function handleClickCryptobank() {
    setBorder1(false);
    setBorder2(true);
    setBorder3(false);
  }

  function handleClickExchange() {
    setBorder1(false);
    setBorder2(false);
    setBorder3(true);
  }
  


  return (
   <Router>
     <div className="grid grid-cols-2">
        <nav className="h-screen w-60 border-r-2 border-gray-300">
          <ul>
            <li className="mb-20 p-7" ><b>Crypto</b>.io</li>
            <li onClick={handleClickWelcome} id="nav-item-1" className={border1 ? 'border-on font-bold text-gray-400 p-5 pl-7' : 'border-off font-bold text-gray-400 p-5 pl-7'}>
              <Link to="/">Welcome</Link>
            </li>
            <li onClick={handleClickCryptobank} id="nav-item-2" className={border2 ? "border-on font-bold text-gray-400 p-5 pl-7" : "border-off font-bold text-gray-400 p-5 pl-7" }>
              <Link to="/Cryptobank">Cryptobank</Link>
            </li>
            <li onClick={handleClickExchange} id="nav-item-3" className={border3 ? "border-on font-bold text-gray-400 p-5 pl-7" : "border-off font-bold text-gray-400 p-5 pl-7"}>
              <Link to="/Exchange">Exchange</Link>
            </li>
          </ul>
        </nav>

        
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          
          <Route path="/Cryptobank" element={<Cryptobank/>}/>
        
          <Route path="/Exchange" element={<Exchange/>}/>
           
        </Routes>
      </div>

   </Router>
    
  );
}

export default App;
