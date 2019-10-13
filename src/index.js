import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {applyMiddleware, createStore} from "redux";
import {createBrowserHistory} from 'history'
import thunk from 'react-thunk'
import {routerMiddleware}  from "connected-react-router";
import ConnectedRouter from "connected-react-router";

import createRootReducer from './Reducers'
import Provider from "react-redux/es/components/Provider";


/*const history = createBrowserHistory();
const middleWares = [thunk, routerMiddleware(history)];
const store = createStore(
    createRootReducer(history),
   applyMiddleware(...middleWares)
);

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter><App /></ConnectedRouter>
</Provider>, document.getElementById('root'));*/
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
