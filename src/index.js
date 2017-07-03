import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.css'
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from "./reducers/index";
import thunk from 'redux-thunk';
import {Provider} from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
