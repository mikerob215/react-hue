import React, {Component} from 'react';
import LightPanel from './containers/light-panel';
import LightOptions from './containers/light-options';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import HubPicker from './containers/hub-picker';
import {getActiveHub} from "./actions/hubs";

class App extends Component {
    componentWillMount() {
        this.props.getActiveHub();
    }

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
            <div className="container">
                <div className="row">
                    <div className="col s3">
                        <LightPanel hub={this.props.activeHub}/>
                    </div>
                    <div className="col s9">
                        <LightOptions/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({lights, config, activeHub}) => ({lights, config, activeHub});

const mapDispatchToProps = (dispatch) => bindActionCreators({getActiveHub}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
