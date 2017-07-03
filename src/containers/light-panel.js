import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchLights} from "../actions/lights";

class LightPanel extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchLights(this.props.hub);
    }

    render() {
        return (
            <div className="row">
                <div className="column">
                    {Object.keys(this.props.lights).map(key => {
                        return <p key={this.props.lights[key].name}>{this.props.lights[key].name}</p>;
                    })}
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({lights}) => ({lights});

const mapDispatchToProps = dispatch => ({
    fetchLights: hub => dispatch(fetchLights(hub))
});

export default connect(mapStateToProps, mapDispatchToProps)(LightPanel);
