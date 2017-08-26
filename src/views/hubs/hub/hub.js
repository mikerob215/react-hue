import React, {Component} from 'react';
import {CircularProgress, Dialog, FlatButton} from 'material-ui';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {connectToHub} from '../../../actions/hubs-actions';
import * as R from 'ramda';

class Hub extends Component {
    renderLinkDialog = () => {
        const { hub, history: { push } } = this.props;
        return (
            <Dialog
                title='Hub needs to be linked'
                open={R.equals('NEEDS_LINKING')(hub.status)}
                actions={[
                  <FlatButton
                      label="Connect"
                      onClick={() => connectToHub(hub)}
                  />,
                  <FlatButton
                      label="Cancel"
                      onClick={() => push('/hubs')}
                  />
                ]}
            >
              Press the link button on your hub, then press ok.
            </Dialog>
        )
    };

    componentWillMount() {
        const { connectToHub, match: { params: { id } }, hubs } = this.props;

        connectToHub(hubs.hubs[id]);
    }

    render() {
        const { hub } = this.props;

        return R.cond([
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
        ])(hub.status);
    }
}

const mapStateToProps = ({ hubs, hub }) => ({ hubs, hub });

export default withRouter(connect(mapStateToProps, { connectToHub })(Hub));
