import React, { Component } from "react";
import moment from 'moment'
import axios from "axios";
import {
  Table,
  Button
} from "reactstrap";

class Dashboard extends Component {
  constructor() {
    super()
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
            <th>Clinic</th>
            <th>phone</th>
            <th>Doctor</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item, index) => (
            <tr>
              <th scope="row">
                {(item.accept == true) ? (
                  <b>Accepted</b>
                ) : (
                  <b>Not Accepted</b>
                )}
              </th>
              <td>{item.clinic_id.title}</td>
              <td>{item.clinic_id.phone}</td>
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