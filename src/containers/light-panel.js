import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchLights} from "../actions/lights";
import Light from "../components/light";
import {setActiveLight} from "../actions/active-light";

class LightPanel extends Component {
    constructor(props) {
        super(props);
        this.renderLights = this.renderLights.bind(this);
        this.props.fetchLights(this.props.hub);

    }

    componentDidMount() {
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
                light={lights[key]}
                onLightSelect={light => this.props.setActiveLight(light)}/>
        ))
    }

}

const mapStateToProps = ({lights, activeLight}) => ({lights, activeLight});

const mapDispatchToProps = dispatch =>
    ({
        fetchLights: hub => dispatch(fetchLights(hub)),
        setActiveLight: light => dispatch(setActiveLight(light))
    });

export default connect(mapStateToProps, mapDispatchToProps)(LightPanel);