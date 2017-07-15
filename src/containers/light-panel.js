import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchLights} from "../actions/lights";
import Light from "../components/light";
import {getHub} from "../actions/hubs";

class LightPanel extends Component {
    constructor(props) {
        super(props);
        const hub = getHub(this.props.match.params.id);
        this.props.fetchLights(hub);

        this.renderLights = this.renderLights.bind(this);
    }

    render() {
        return (
            <div className="row">
                <div className="col s-12">
                    <div className="collection">
                        {this.renderLights()}
                    </div>
                </div>
            </div>
        )
    }

    renderLights() {
        const {lights} = this.props;
        if (!lights) return null;
        return Object.keys(lights).map(key => (
            <Light
                lightId={key}
                key={key}
                light={lights[key]}/>
        ))
    }

}

const mapStateToProps = ({lights, hubs}) => ({lights});

const mapDispatchToProps = dispatch =>
    ({
        fetchLights: hub => dispatch(fetchLights(hub)),
    });

export default connect(mapStateToProps, mapDispatchToProps)(LightPanel);