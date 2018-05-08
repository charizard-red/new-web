import React, { Component } from 'react';
import axios from 'axios'
import ReactFilestack from 'filestack-react'
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
    this.handleFileChange = this.handleFileChange.bind(this)
    this.uploadSuccess = this.uploadSuccess.bind(this)
    this.state = {
      title: "",
      phone: "",
      address: "",
      city: "depok",
      postal_code: ""
    }
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleFileChange(e){
    this.setState({
      [e.target.name]: e.target.files[0]
    })
  }
  uploadSuccess(data) {
    console.log(data.filesUploaded[0])
    let toggle = this.props.toggle
    axios.post(process.env.REACT_APP_URL+'/clinics', {
      photo: data.filesUploaded[0].url,
      title: this.state.title,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      postal_code: this.state.postal_code,
    }, {
      headers: {
        "Authorization": "Bearer " + window.localStorage.token
      }
    }).then(data => {
      console.log(data);
      toggle()
    }).catch(err => console.log(err))
  }
  render(){
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Create Clinic</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Title</Label>
                <Input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  placeholder="Insert name of your clinic" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  placeholder="Phone" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Address</Label>
                <Input
                  type="textarea"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="select">City</Label>
                <Input type="select" name="city" value={this.state.city} onChange={this.handleChange} id="select">
                  <option value="depok">DEPOK</option>
                  <option value="bogor">BOGOR</option>
                  <option value="bekasi">BEKASI</option>
                  <option value="tanggerang">TANGERANG</option>
                  <option value="jakarta pusat">JAKARTA PUSAT</option>
                  <option value="jakarta selatan">JAKARTA SELATAN</option>
                  <option value="jakarta utara">JAKARTA UTARA</option>
                  <option value="jakarta timur">JAKARTA TIMUR</option>
                  <option value="jakarta barat">JAKARTA BARAT</option>
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
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.toggle}>Cancel</Button>{' '}
            <ReactFilestack
              apikey="Au1xZ8DZ6TuCW4NtwiEbQz"
              buttonText="Next"
              option={{ maxFiles: 1, accept: 'image/*' }}
              buttonClass="btn btn-success"
              onSuccess={this.uploadSuccess} />
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EdituserModal;
