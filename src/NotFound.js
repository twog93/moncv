import React, { Component } from 'react';
import SideBar from "./sidebar";

import './Style.css';

let actualPath = window.location.pathname;

class NotFound extends Component {
    render() {

        return (
            <div>
                <SideBar />
                <div id="container">
                    <h2 className="titleTop" >404</h2>
                    <h1>{actualPath}</h1>
                    <div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound
