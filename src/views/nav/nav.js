import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppBar} from 'material-ui';
import {drawerStateChanged} from '../../actions/drawer-actions';

class AppNav extends Component {
    render() {
        return (
            <AppBar
                title="React Hue"
                onLeftIconButtonTouchTap={this.props.drawerStateChanged}
            />
        );
    }
}

const mapStateToProps = ({drawer}) => ({drawer});

export default connect(mapStateToProps, {drawerStateChanged})(AppNav);
