import React, { Component } from 'react';
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
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
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
                  onChange={this.handleChange}
                  placeholder="Your name" />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                  placeholder="Your E-Mail" />
              </FormGroup>
              <FormGroup>
                <Label>Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  onChange={this.handleChange}
                  placeholder="Your Phone" />
              </FormGroup>
              <FormGroup>
                <Label>Gender</Label>
                <Input
                  type="select"
                  name="gender"
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
                  onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label>Address</Label>
                <Input
                  type="textarea"
                  placeholder="Your address"
                  name="address"
                  onChange={this.handleChange} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.toggle}>Cancel</Button>{' '}
            <Button color="success" onClick={this.props.toggle}>Update</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EdituserModal;
