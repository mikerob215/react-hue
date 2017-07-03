import React, {Component} from 'react';
import {connect} from "react-redux";
import {connectToHub, fetchHubs} from "../actions/hubs";

class HubPicker extends Component {
    componentWillMount() {
        this.props.getHubs();
        this.renderHubList = this.renderHubList.bind(this);
    }

    render() {
        const {hubs} = this.props;

        if (hubs.length === 0) {
            return <p>No hubs located</p>
        }
        return (
            <table>
                <thead>
                <tr>
                    <td>ID:</td>
                    <td>IP:</td>
                    <td>Status:</td>
                    <td>Action:</td>
                </tr>
                </thead>
                <tbody>
                {this.renderHubList(hubs)}
                </tbody>
            </table>
        );
    }

    renderHubList(hubs) {
        return hubs.map(hub =>
            <tr key={hub.id}>
                <td>{hub.id}</td>
                <td>{hub.internalipaddress}</td>
                <td>{hub.status}</td>
                <td>
                    <button className="button"
                            onClick={() => this.props.connect(hub)}>
                        Connect
                    </button>
                </td>
            </tr>)
    }
}

const mapStateToProps = ({hubs}) => ({hubs});

const mapDispatchToProps = dispatch => ({
    getHubs: () => dispatch(fetchHubs()),
    connect: hub => dispatch(connectToHub(hub))
});

export default connect(mapStateToProps, mapDispatchToProps)(HubPicker);