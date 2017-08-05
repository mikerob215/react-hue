import React, {Component} from 'react';
import {connect} from "react-redux";
import {connectToHub, fetchHubs} from "../actions/hubs";
import {Link} from "react-router-dom";
import * as R from 'ramda';

class HubPicker extends Component {
    constructor(props) {
        super(props);
        this.renderHubList = this.renderHubList.bind(this);
        this.renderUseLink = this.renderUseLink.bind(this);
    }

    renderHubList(hubs) {
        return Object.keys(hubs).map(key => {
            const hub = hubs[key];
            return (
                <tr key={key}>
                <td>{hub.id}</td>
                    <td>{hub.internalipaddress}</td>
                <td>
                    <button className="waves-effect waves-light btn"
                            onClick={() => this.props.connect(hub)}
                            disabled={hub.username}>
                        Connect
                    </button>
                </td>
                <td>
                    {this.renderUseLink(hub)}
                </td>
                </tr>
            )
        })
    };

    renderUseLink(hub) {
        return R.ifElse(R.isNil,
            R.always(<span>Must connect</span>),
            R.always(<Link to={`/hubs/${hub.id}`}>Use Hub</Link>)
        )(hub.username)
    }

    componentWillMount() {
        this.props.getHubs();
    }

    render() {
        const {hubs} = this.props;

        if (!hubs) {
            return (
                <div className="row">
                    <div className="col s12">
                        <div className="progress">
                            <div className="indeterminate"></div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <table className="striped">
                <thead>
                <tr>
                    <td>ID:</td>
                    <td>IP:</td>
                    <td>Action:</td>
                    <td>Use:</td>
                </tr>
                </thead>
                <tbody>
                {this.renderHubList(hubs)}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({hubs}) => ({hubs});

const mapDispatchToProps = dispatch => ({
    getHubs: () => dispatch(fetchHubs()),
    connect: hub => dispatch(connectToHub(hub))
});

export default connect(mapStateToProps, mapDispatchToProps)(HubPicker);