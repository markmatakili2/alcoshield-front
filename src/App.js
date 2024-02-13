import React from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import './App.css';
import { useEffect, useState } from "react";
import logo from './uplogo.png';

function App() {


  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,

    })

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);

    }

  }, []);




  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </nav>
      </header>

      { }

      <div className="App">
        <h1>QR code scanner</h1>
        {scanResult
          ? <div>Success: <a href={"http://" + scanResult}>{scanResult}</a></div>
          : <div id="reader"></div>

        }
      </div>

    </div>
  )
}


export default App;