import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchLights} from "../actions/lights";
import Light from "../components/light";
import {setActiveLight} from "../actions/active-light";
import {getHub} from "../actions/hubs";

class LightPanel extends Component {
    constructor(props) {
        super(props);
        this.renderLights = this.renderLights.bind(this);
        const hub = getHub(this.props.match.params.id);
        this.props.fetchLights(hub);
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
        setActiveLight: light => dispatch(setActiveLight(light))
    });

export default connect(mapStateToProps, mapDispatchToProps)(LightPanel);