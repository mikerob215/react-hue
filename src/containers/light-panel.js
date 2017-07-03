import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchLights} from "../actions/lights";
import Light from "../components/light";
import {setActiveLight} from "../actions/active-light";

class LightPanel extends Component {
    constructor(props) {
        super(props);
        this.renderLights = this.renderLights.bind(this);
    }

    componentWillMount() {
        this.props.fetchLights(this.props.hub);
    }

    render() {
        return (
            <div className="row">
                <div className="column">
                    <ul className="vertical menu">
                        {this.renderLights()}
                    </ul>
                </div>
            </div>
        )
    }

    renderLights() {
        const {lights} = this.props;
        return Object.keys(lights).map(key => (
            <li key={lights[key].name}>
                <Light light={lights[key]} onLightSelect={light => this.props.setActiveLight(light)}/>
            </li>
        ))
    }

}

const mapStateToProps = ({lights, activeLight}) => ({lights, activeLight});

const mapDispatchToProps = dispatch => ({
    fetchLights: hub => dispatch(fetchLights(hub)),
    setActiveLight: light => dispatch(setActiveLight(light))
});

export default connect(mapStateToProps, mapDispatchToProps)(LightPanel);
