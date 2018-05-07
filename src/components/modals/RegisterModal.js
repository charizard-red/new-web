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

class RegisterModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      phone: '',
      gender: 'male',
      birth: '',
      address: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.register = this.register.bind(this)
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  register() {
    let toggle = this.props.toggle
    axios.post(process.env.REACT_APP_URL+'/auth/register',{
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        address: this.state.address,
        gender: this.state.gender,
        phone: this.state.phone,
        birth: this.state.birth
    }).then(data => {
      console.log(data);
      toggle()
    }).catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Register</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Your name" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Your E-Mail" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Your E-Mail" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  placeholder="Your Phone" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Gender</Label>
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
                <Label for="exampleDate">Birth</Label>
                <Input
                  type="date"
                  name="birth"
                  value={this.state.birth}
                  onChange={this.handleChange}
                  placeholder="date placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Address</Label>
                <Input
                  type="textarea"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  placeholder="Your address" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.toggle}>Cancel</Button>{' '}
            <Button color="success" onClick={this.register}>Register</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;
