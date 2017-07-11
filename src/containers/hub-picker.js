import React, {Component} from 'react';
import {connect} from "react-redux";
import {connectToHub, fetchHubs} from "../actions/hubs";
import {Link} from "react-router-dom";

class HubPicker extends Component {
    renderHubList = (hubs) => {
        return Object.keys(hubs).map(key => {
            const hub = hubs[key];
            return <tr key={key}>
                <td>{hub.id}</td>
                <td>{hub.ip}</td>
                <td>{hub.status}</td>
                <td>
                    <button className="button"
                            onClick={() => this.props.connect(hub)}
                            disabled={hub.username}>
                        Connect
                    </button>
                </td>
                <td>
                    <Link to={`/hubs/${hub.id}`}>Use Hub</Link>
                </td>
            </tr>;
        })
    };

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
            <table>
                <thead>
                <tr>
                    <td>ID:</td>
                    <td>IP:</td>
                    <td>Status:</td>
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