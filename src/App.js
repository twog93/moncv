import React, { Component } from 'react';
import Script from './Script.js';
import gerald from './assets/gerald.jpg';
import logoTop from './assets/badge.png';
import './App.css';
import './Style.css';
import {closeCurrentWindow} from "./Script";
let date = new Date();

class App extends Component {
  render() {
    return (

          <div id="container">
              <h2 className="" >Gérald DUVEAU CV</h2>
              <button onClick={closeCurrentWindow}>Fermer</button>
          <div>
    <img className="imgTop" src={gerald} />
    <p>Le {date.toLocaleString()}</p>
    <p>Enter "help" for more information.</p>
</div>
              <output></output>
              <div id="input-line" className="input-line">
                  <div className="prompt"></div>
                  <div><input className="cmdline" autoFocus/></div>
              </div>
          </div>

    );
  }
}

export default App;
