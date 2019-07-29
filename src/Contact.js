import React, { Component } from 'react';

import SideBar from "./sidebar";
import gerald from './assets/gerald.jpg';
import './App.css';
import './Style.css';




class App extends Component {
  render() {

    return (
        <div>
            <SideBar />
          <div id="container">

              <h2 className="titleTop" >Gérald DUVEAU CV</h2>

          <div>
    <img alt="gérald DUVEAU" className="imgTop" src={gerald} />

    <p>Enter "help" for more information.</p>
</div>


          </div>
      </div>
    );
  }
}

export default App;
