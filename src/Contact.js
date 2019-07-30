import React, { Component } from 'react';
import './Style.css';
import {closeCurrentWindow} from "./Script";




class Contact extends Component {
  render() {

    return (
        <div >
          <div id="container">

              <h2 className="titleTop" >Contact</h2>
              <button onClick={closeCurrentWindow}>Fermer</button>
          <div>

              <div className="contactPage" >


                  <h1>Informations utiles</h1>
                  <ul>
                      <li>Gérald DUVEAU</li>
                      <li>16 rue Paul Véssiere 34130 Lansargues</li>
                      <li> 06 13 06 02 37</li>
                      <li><a href="mailto:geraldduveau@gmail.com">geraldduveau@gmail.com</a></li>

                      <li><a href="http://gerald-duveau.fr">gerald-duveau.fr</a></li>
                  </ul>
              </div>

</div>


          </div>
      </div>
    );
  }
}

export default Contact;
