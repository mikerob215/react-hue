import React, {Component} from 'react';
import 'foundation-sites/dist/css/foundation-flex.css'
import './App.css';
import LightPanel from './components/light-panel';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {hueConfig} from "./actions/set-config";
import HubPicker from './containers/hub-picker';

class App extends Component {
    render() {
        if (!this.props.config) {
            return (
                <div className="row">
                    <div className="column small-4 center">
                        <HubPicker/>
                    </div>
                </div>
            )
        }

        return (
            <div className="row">
                <div className="column"><LightPanel lights={this.props.lights}/></div>
                <div className="column">Light Options</div>
            </div>
        );
    }
}

function mapStateToProps({lights, config}) {
    return {lights, config}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setConfig: hueConfig}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
