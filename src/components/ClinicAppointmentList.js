import React, { Component } from "react";
import axios from "axios";
import {
  Table,
  Button
} from "reactstrap";

class Dashboard extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Created At</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Blah</td>
            <td>Blah</td>
            <td>Blah</td>
            <td>Blah</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Dashboard;
