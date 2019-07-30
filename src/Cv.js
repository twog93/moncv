import React, { Component } from 'react';
// eslint-disable-next-line
import Script from './Script.js';
import './App.css';
import './Style.css';
import {closeCurrentWindow} from "./Script";
import {getDateNow} from "./Script";
let dateNow = getDateNow();
class Cv extends Component {
    render() {

        return (
            <div>

                <div id="container">
                    <h2 className="titleTop" >Gérald DUVEAU CV</h2>
                    <button onClick={closeCurrentWindow}>Fermer</button>
                    <div>
                        <img alt="gérald DUVEAU" className="imgTop" src={process.env.PUBLIC_URL + "assets/gerald.jpg" }/>
                        <p>Le  {dateNow}</p>
                        <p>Enter "help" for more information.</p>
                    </div>
                    <output></output>
                    <div id="input-line" className="input-line">
                        <div className="prompt"></div>
                        <div><input className="cmdline" autoFocus/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cv;
