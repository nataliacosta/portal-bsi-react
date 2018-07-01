import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import "../node_modules/jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './bsi.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/bsi"/>)}/>
                <Route path='/:page?/:sub?/:sub2?' component={App} />
            </Switch>
        </BrowserRouter>
    ), document.getElementById('root'));
registerServiceWorker();