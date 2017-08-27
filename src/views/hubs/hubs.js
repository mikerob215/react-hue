import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CircularProgress,
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui';
import {connect} from 'react-redux';
import {fetchHubs} from '../../actions/hubs-actions';
import {withRouter} from 'react-router-dom';

class Hubs extends Component {
  componentWillMount() {
    const { fetchHubs } = this.props;
    fetchHubs();
  }

    render() {
        const { hubs, history: { push } } = this.props;

        if (hubs.status === 'LOADING' || hubs.status === 'INITIAL') return <CircularProgress size={80} thickness={5}/>;

        const hubsIds = Object.keys(hubs.hubs);
        const allHubs = hubsIds.map(id => hubs.hubs[id]);

        return (
            <Card>
                <CardHeader title="Hubs" subtitle="Pick your hub from the list below" />
                <Table onRowSelection={index => push(`/hubs/${allHubs[index].id}`)}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>IP</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {
                            hubsIds.map(id => (
                                <TableRow key={id}>
                                    <TableRowColumn>{hubs.hubs[id].id}</TableRowColumn>
                                    <TableRowColumn>{hubs.hubs[id].internalipaddress}</TableRowColumn>
                                    <TableRowColumn>New</TableRowColumn>
                                </TableRow>),
                            )
                        }
                    </TableBody>
                </Table>
            </Card>
        );
    }
}

const mapStateToProps = ({ hubs }) => ({ hubs });

export default withRouter(connect(mapStateToProps, { fetchHubs })(Hubs));
