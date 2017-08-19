import React, {Component} from 'react';
import {connect} from "react-redux";
import {Drawer} from "material-ui";
import {drawerStateChanged} from "../../actions/drawer-actions";

class AppDrawer extends Component {
    render() {
        const {drawer, drawerStateChanged} = this.props;
        return (
            <Drawer open={drawer} docked={false} onRequestChange={drawerStateChanged}>
                ITS A DRAWER
            </Drawer>
        )
    }
}

const mapStateToProps = ({drawer}) => ({drawer});

export default connect(mapStateToProps, {drawerStateChanged})(AppDrawer);