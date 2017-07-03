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
        if (!this.props.activeHub) {
            return (
                <div className="row align-center">
                    <div className="column small-6">
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

const mapStateToProps = ({lights, config, activeHub}) => ({lights, config, activeHub});

const mapDispatchToProps = (dispatch) => bindActionCreators({setConfig: hueConfig}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
