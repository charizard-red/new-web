import React, { Component } from 'react';
import axios from 'axios';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter } from 'reactstrap';

class EdituserModal extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.update = this.update.bind(this)
    this.state = {
      name: "",
      email: "",
      phone: "",
      gender: "male",
      birth: '',
      address: ""
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  update() {
    axios({
      url: process.env.REACT_APP_URL+'/auth/login/complete',
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + window.localStorage.token
      },
      data: {
        username: this.state.name,
        email: this.state.email,
        gender: this.state.gender,
        phone: this.state.phone,
        birth: this.state.birth,
        address: this.state.address
      }
    }).then(data => {
      console.log(data)
    }).catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Edit Data</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Your name" />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Your E-Mail" />
              </FormGroup>
              <FormGroup>
                <Label>Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  placeholder="Your Phone" />
              </FormGroup>
              <FormGroup>
                <Label>Gender</Label>
                <Input
                  type="select"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.handleChange}>
                  <option value="male">MALE</option>
                  <option value="female">FEMALE</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Birth</Label>
                <Input
                  type="date"
                  name="birth"
                  value={this.state.birth}
                  onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label>Address</Label>
                <Input
                  type="textarea"
                  placeholder="Your address"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.toggle}>Cancel</Button>{' '}
            <Button color="success" onClick={this.update}>Update</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EdituserModal;
