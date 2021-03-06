import React, {Component} from 'react';
import {CircularProgress, Dialog, FlatButton} from 'material-ui';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeHub, connectToHub} from '../../../actions/hubs-actions';
import * as R from 'ramda';

class Hub extends Component {

    componentWillMount() {
        const { connectToHub, match: { params: { id } }, hubs } = this.props;

        changeHub();
        connectToHub(hubs.hubs[id]);
    }

    renderLinkDialog = () => {
        const {
            hub,
            hubs,
            history: { push },
            connectToHub,
            match: {
                params: { id }
            }
        } = this.props;

        return (
            <div>
                <CircularProgress style={{ margin: '0 auto' }} />
                <Dialog
                    title='Hub needs to be linked'
                    open={'NEEDS_LINKING' === hub.status}
                    actions={[
                        <FlatButton
                            label="Connect"
                            onClick={() => connectToHub(hubs.hubs[id])}
                        />,
                        <FlatButton
                            label="Cancel"
                            onClick={() => push('/hubs')}
                        />
                    ]}
                >
                    Press the link button on your hub, then press ok.
                </Dialog>
            </div>
        )
    };

    renderViewForStatus = R.cond(
        [
            [
                R.equals('INITIAL'),
                R.always(null),
            ],
            [
                R.equals('LOADING'),
                R.always(<CircularProgress style={{ margin: '0 auto' }} />),
            ],
            [
                R.equals('NEEDS_LINKING'),
                this.renderLinkDialog,
            ],
            [
                R.equals('SUCCESSFUL'),
                R.always(<div>Its working</div>),
            ],
        ]
    );

    render() {
        const { hub } = this.props;

        return this.renderViewForStatus(hub.status);
    }
}

const mapStateToProps = ({ hubs, hub }) => ({ hubs, hub });

export default withRouter(connect(mapStateToProps, { connectToHub })(Hub));
