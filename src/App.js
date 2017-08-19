import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./views/home/home";
import {MuiThemeProvider} from "material-ui";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./reducers/index";
import AppNav from './views/nav/nav'
import AppDrawer from './views/drawer/drawer';

const store = createStore(rootReducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <div>
                        <AppNav/>
                        <AppDrawer/>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                            </Switch>
                        </BrowserRouter>
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
