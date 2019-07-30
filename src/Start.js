import React, { Component } from 'react';
import './Style.css';
import {closeCurrentWindow} from "./Script";


class Start extends Component {

    constructor(props) {
        super(props);
        this.displayLogo = this.displayLogo.bind(this);
        this.state = { path: window.location.pathname,
            LogoList : [
                {
                    title : 'nodejs',
                    src : process.env.PUBLIC_URL + "/assets/nodejs.png",
                },
                {
                    title : 'react',
                    src : process.env.PUBLIC_URL +'/assets/react_logo.png',
                }, {title : 'electron',
                    src : process.env.PUBLIC_URL +'/assets/electronlogo.png',
                }
            ]

        };
    }
    displayLogo = () => {
        return this.state.LogoList.map(logo => <li  key={logo.title}><img  alt={logo.title} src={logo.src} /></li>);

    };
    render() {
        // if (actualPath !== "/Contact" || "/Contact") {
        return (
            <div>
                <div  id="container">
                    <button onClick={closeCurrentWindow}>Fermer</button>
                    <div className="ContainerRootPath" >
                        <h1  >Bienvenue sur mon Curriculuml Vitae</h1>
                        <p> Cliquer sur le menu pour voir les différentes rubriques</p>
                        <ul className="listLogo">{ this.displayLogo()}
                        </ul>
                    </div>

                </div>
            </div>
        );
        /* }else{
                return (

                    <div>
                     { actualPath}
                    </div>

                        );
           }*/

    }

}

export default Start;
