import React, {Component} from 'react';
import {connect} from "react-redux";

class LightOptions extends Component {
    render() {
        const {activeLight} = this.props;
        if (!activeLight) {
            return <div>No light selected</div>
        }

        return (
            <div>{activeLight.state.on}</div>
        );
    }
}

const mapStateToProps = ({activeLight}) => ({activeLight});

export default connect(mapStateToProps)(LightOptions);