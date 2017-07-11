import React, {Component} from 'react';
import HubPicker from './containers/hub-picker';
import {Route, Switch} from "react-router-dom";
import Nav from "./components/nav";
import LightPanel from './containers/light-panel'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Nav/>
                <Switch>
                    <Route path="/hubs" exact component={HubPicker}/>
                    <Route path="/hubs/:id" component={LightPanel}/>
                    <Route component={() => <p>wtf</p>}/>
                </Switch>
            </div>
        )
    }
}
