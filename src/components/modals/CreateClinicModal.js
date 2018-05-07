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
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Create Clinic</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  placeholder="Insert name of your clinic" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Phone</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  placeholder="Insert name of your clinic" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  onChange={this.handleChange}
                  id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Address</Label>
                <Input
                  type="textarea"
                  name="address"
                  onChange={this.handleChange}
                  id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="select">City</Label>
                <Input type="select" name="city" onChange={this.handleChange} id="select">
                  <option value="depok">DEPOK</option>
                  <option value="bogor">BOGOR</option>
                  <option value="bekasi">BEKASI</option>
                  <option value="tanggerang">TANGERANG</option>
                  <option value="pusat">JAKARTA PUSAT</option>
                  <option value="selatan">JAKARTA SELATAN</option>
                  <option value="utara">JAKARTA UTARA</option>
                  <option value="timur">JAKARTA TIMUR</option>
                  <option value="barat">JAKARTA BARAT</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Postal Code</Label>
                <Input
                  type="text"
                  name="postal_code"
                  onChange={this.handleChange}
                  placeholder="Insert your postal code" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Photo</Label>
                <Input
                  type="file"
                  name="photo"
                  onChange={this.handleChange}
                  id="exampleFile" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.toggle}>Cancel</Button>{' '}
            <Button color="success" onClick={this.props.toggle}>Create</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EdituserModal;
