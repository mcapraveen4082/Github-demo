import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import store from "./store/index";

import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
