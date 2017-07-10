import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import HubPicker from './containers/hub-picker';
import {getActiveHub} from "./actions/hubs";
import {Route, Switch} from "react-router-dom";

class App extends Component {
    componentDidMount() {
        // this.props.getActiveHub();
    }

    render() {
        return (
            <div className="container">
                <Switch>
                    <Route path="/" exact component={HubPicker}/>
                    <Route path="/hubs/:username" component={props => {
                        const username = props.match.params.username;
                        console.log(this.props.hubs);
                        return <div>{username}</div>
                    }}/>
                    <Route path="/hubs" component={HubPicker}/>

                    <Route component={() => <p>wtf</p>}/>
                </Switch>
            </div>
        )
        // if (!this.props.activeHub) {
        //     return (
        //         <div className="row align-center">
        //             <div className="column small-6">
        //                 <HubPicker/>
        //             </div>
        //         </div>
        //     )
        // }
        //
        // return (
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col s3">
        //                     <LightPanel hub={this.props.activeHub}/>
        //                 </div>
        //                 <div className="col s9">
        //                     <LightOptions/>
        //                 </div>
        //             </div>
        //         </div>
        // );
    }
}

const mapStateToProps = ({lights, hubs}) => ({lights, hubs});

const mapDispatchToProps = (dispatch) => bindActionCreators({getActiveHub}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
