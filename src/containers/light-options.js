import React, {Component} from 'react';
import {connect} from "react-redux";

class LightOptions extends Component {
    render() {
        const {activeLight} = this.props;
        if (!activeLight) {
            return <div>No light selected</div>
        }

        return (
            <div className="row">
                <div className="col s12">
                    on: {activeLight.state.on.toString()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({activeLight}) => ({activeLight});

export default connect(mapStateToProps)(LightOptions);