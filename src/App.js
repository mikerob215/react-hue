import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import React, {Component} from 'react';
import ReduxThunk from 'redux-thunk';
import './App.css';
import Home from './views/home/home';
import rootReducer from './reducers/index';
import AppNav from './views/nav/nav';
import AppDrawer from './views/drawer/drawer';
import Hubs from './views/hubs/hubs';
import Hub from './views/hubs/hub/hub';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

window.store = store;
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider>
            <div>
              <AppNav />
              <AppDrawer />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/hubs/:id" component={Hub} />
                <Route path="/hubs" component={Hubs} />
              </Switch>
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
