import React, { Component } from "react";
import axios from "axios";
import {
  Table,
  Button,
  ButtonGroup
} from "reactstrap";

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      clinic_data: []
    }
    this.verifyClinic = this.verifyClinic.bind(this)
    this.deleteClinic = this.deleteClinic.bind(this)
  }
  async componentWillMount() {
    await axios
      .get(process.env.REACT_APP_URL + "/clinics/admin")
      .then(data => {
        console.log(data.data.data);
        this.setState({
          clinic_data: data.data.data
        });
      })
      .catch(error => console.log(error));
  }

  verifyClinic(id) {
    axios.post(process.env.REACT_APP_URL + "/clinics/" + id).then(data => {
      alert('success')
    }).catch(err => {
      console.log(err)
    })
  }

  deleteClinic(id) {
    axios.delete(process.env.REACT_APP_URL + "/clinics/" + id).then(data => {
      alert('success')
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Address</th>
            <th>City</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {this.state.clinic_data.map((item, index) => {
            if(item.verified){
              return <div/>
            } else {
              return (
                <tr>
                  <th scope="row">
                    <ButtonGroup>
                      <Button
                        color="success"
                        onClick={data => this.verifyClinic(item._id)}
                        >verify</Button>
                        <Button
                          color="danger"
                          onClick={data => this.deleteClinic(item._id)}
                          >delete</Button>
                        </ButtonGroup>
                    </th>
                    <td>{item.title}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.phone}</td>
                  </tr>
                )
            }
        })}
        </tbody>
      </Table>
    );
  }
}

export default Dashboard;
