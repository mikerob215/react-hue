import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchHubs} from "../actions/getHubs";

class HubPicker extends Component {
    componentWillMount() {
        this.props.getHubs();
        this.renderHubList = this.renderHubList.bind(this);
    }

    render() {
        console.log(this.props);
        return (
            <table>
                <thead>
                <tr>
                    <td>ID:</td>
                    <td>IP:</td>
                </tr>
                </thead>
                <tbody>
                {this.renderHubList(this.props.hubs)}
                </tbody>
            </table>
        );
    }

    renderHubList(hubs) {
        return hubs.map(hub =>
            <tr key={hub.id}>
                <td>{hub.id}</td>
                <td>{hub.internalipaddress}</td>
            </tr>)
    }
}

const mapStateToProps = ({hubs}) => ({hubs});

const mapDispatchToProps = dispatch => ({
    getHubs: () => dispatch(fetchHubs())
});

export default connect(mapStateToProps, mapDispatchToProps)(HubPicker);