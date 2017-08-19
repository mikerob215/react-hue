import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./views/home/home";
import AppBar from "react-toolbox/lib/app_bar/AppBar";

class App extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    adsf
                </AppBar>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
