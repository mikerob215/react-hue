import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Storage from './lib/storage/storage';
import Hue from './lib/hue/hue';

injectTapEventPlugin();

// eslint-disable-next-line no-undef
window.Storage = Storage;
// eslint-disable-next-line no-undef
window.Hue = Hue;
// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
