import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Contact from './Contact';
import Cv from './Cv';
import App from './App';
import './index.css';

const rootElement = document.getElementById("root");

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/cv" component={Cv} />
            <Route path="/Contact" component={Contact} />
        </div>
    </Router>
);

ReactDOM.render(routing, rootElement);
