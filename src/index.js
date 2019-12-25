import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';

import './index.css';
import App from './container/App';
import {searchMonsters} from './reducers'
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import {createLogger} from 'redux-logger'

import './fonts/PermanentMarker-Regular.ttf'

const logger=createLogger();

const store=createStore(searchMonsters, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
