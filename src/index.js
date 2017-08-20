import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Storage from "./lib/storage/storage";

injectTapEventPlugin();

window.Storage = Storage;

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
