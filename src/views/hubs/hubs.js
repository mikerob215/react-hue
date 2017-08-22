import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CircularProgress,
    RaisedButton,
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui';
import {connect} from 'react-redux';
import {fetchHubs} from '../../actions/hubs-actions';

class Hubs extends Component {
  componentWillMount() {
    const { hubs, fetchHubs } = this.props;
    if (hubs.status !== 'INITIAL') return;
    fetchHubs();
  }

  render() {
    const { hubs } = this.props;

    if (hubs.status !== 'SUCCESSFUL') {
      return (
        <CircularProgress size={80} thickness={5} />
      );
    }

    return (
      <Card>
        <CardHeader title="Hubs" subtitle="Pick your hub from the list below" />
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>IP</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Action</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              hubs.hubs.map(hub =>
                (<TableRow key={hub.id}>
                  <TableRowColumn>{hub.id}</TableRowColumn>
                  <TableRowColumn>{hub.internalipaddress}</TableRowColumn>
                  <TableRowColumn>Employed</TableRowColumn>
                  <TableRowColumn>
                    <RaisedButton primary label="Connect" />
                  </TableRowColumn>
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

export default connect(mapStateToProps, { fetchHubs })(Hubs);
