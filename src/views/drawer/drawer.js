import React, {Component} from 'react';
import {connect} from "react-redux";
import {Drawer, Menu, MenuItem} from "material-ui";
import {drawerStateChanged} from "../../actions/drawer-actions";
import {withRouter} from "react-router-dom";

class AppDrawer extends Component {
    render() {
        const {drawer, drawerStateChanged, history: {push}} = this.props;

        return (
            <Drawer open={drawer} docked={false} onRequestChange={drawerStateChanged}>
                <Menu>
                    <MenuItem primaryText="Home" onClick={() => {
                        drawerStateChanged();
                        return push('/');
                    }}/>
                    <MenuItem primaryText="Hubs" onClick={() => {
                        drawerStateChanged();
                        return push('/hubs');
                    }}/>
                </Menu>
            </Drawer>
        )
    }
}

const mapStateToProps = ({drawer}) => ({drawer});

export default withRouter(connect(mapStateToProps, {drawerStateChanged})(AppDrawer));