import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './views/home/home';
import {MuiThemeProvider} from 'material-ui';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/index';
import AppNav from './views/nav/nav';
import AppDrawer from './views/drawer/drawer';
import Hubs from './views/hubs/hubs';
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
