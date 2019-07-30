import React, { Component } from 'react';
import './App.css';
import './Style.css';
import SideBar from "./sidebar";
import Cv from './Cv';
import Start from './Start'
import Contact from './Contact';
import {closeCurrentWindow} from "./Script";
import { HashRouter as Router, Route, Link  } from 'react-router-dom';


class App extends Component {

  render() {
          return (

                <Router>
                        <SideBar />
                        <Route  path="/start" component={Start} />
                        <Route  path="/cv" component={Cv} />
                        <Route  path="/Contact" component={Contact} />
                </Router>
          );
   }
}

export default App;
