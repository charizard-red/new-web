import React, { Component } from "react";
import moment from 'moment'
import axios from "axios";
import {
  Table,
  Button
} from "reactstrap";

class Dashboard extends Component {
  accept(id) {
    axios.put(process.env.REACT_APP_URL+'/orders/'+id).then(data => {
      alert('success')
    }).catch(err => console.log(err))
  }
  getTime(date) {
    return moment(date).fromNow()
  }
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>phone</th>
            <th>Doctor</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item, index) => (
            <tr>
              <th scope="row">
                {(item.accept === true) ? (
                  <b>Accepted</b>
                ) : (
                  <Button color="success" onClick={() => this.accept(item._id)}>
                    Accept
                  </Button>
                )}
              </th>
              <td>{item.user_id.username}</td>
              <td>{item.user_id.data.phone}</td>
              <td>{item.doctor_id.name}</td>
              <td>{this.getTime(item.time)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Dashboard;
