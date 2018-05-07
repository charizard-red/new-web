import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Jumbotron } from 'reactstrap';

import UserCard from '../components/cards/UserCard';
import ClinicCard from '../components/cards/ClinicCard';

import CreateClinicModal from '../components/modals/CreateClinicModal'
import EdituserModal from '../components/modals/EdituserModal'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalEdit: false,
      clinic_data: [
        {
          name: 'Klinik Sehat',
          phone: '085811348633',
          city: 'depok',
          address: 'GDC Alamanda A3/3'
        },
        {
          name: 'Klinik Sehat',
          phone: '085811348633',
          city: 'depok',
          address: 'GDC Alamanda A3/3'
        },
        {
          name: 'Klinik Sehat',
          phone: '085811348633',
          city: 'depok',
          address: 'GDC Alamanda A3/3'
        },
        {
          name: 'Klinik Sehat',
          phone: '085811348633',
          city: 'depok',
          address: 'GDC Alamanda A3/3'
        },
        {
          name: 'Klinik Sehat',
          phone: '085811348633',
          city: 'depok',
          address: 'GDC Alamanda A3/3'
        },
        {
          name: 'Klinik Sehat',
          phone: '085811348633',
          city: 'depok',
          address: 'GDC Alamanda A3/3'
        }
      ]
    };

    this.toggle = this.toggle.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleEdit() {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <UserCard data={{
              name: 'User Name',
              email: 'rhmnfadhil@gmail.com',
              phone: '085811348633',
              gender: 'MALE',
              address: 'GDC Sektor alamanda blok A3/3',
              birth: '14/1/2004',
            }}
            toggle={this.toggle}
            toggleEdit={this.toggleEdit}
            />
          </Col>
          <Col xs="9">
            <Jumbotron fluid style={{padding: 15}}>
              <h1>Welcome, User Name!</h1>
              <hr />
              <h3>Find Clinic</h3>
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="text" name="password" id="examplePassword" placeholder="Cari klinik" />
                </FormGroup>
                <FormGroup>
                  <Input type="select" name="selectMulti" id="exampleSelectMulti">
                    <option>SEMUA</option>
                    <option>DEPOK</option>
                    <option>BOGOR</option>
                    <option>BEKASI</option>
                    <option>TANGERANG</option>
                    <option>JAKARTA PUSAT</option>
                    <option>JAKARTA SELATAN</option>
                    <option>JAKARTA UTARA</option>
                    <option>JAKARTA TIMUR</option>
                    <option>JAKARTA BARAT</option>
                  </Input>
                </FormGroup>
              </Form>
              <Row>
                {
                  this.state.clinic_data.map((data, index) => {
                    return (
                      <Col>
                        <ClinicCard data={{
                          index: index,
                          name: data.name,
                          phone: data.phone,
                          city: data.city,
                          address: data.address
                        }}/>
                      </Col>
                    )
                  })
                }
              </Row>
            </Jumbotron>
          </Col>
        </Row>

        <CreateClinicModal
          toggle={this.toggle}
          modal={this.state.modal}
        />

        <EdituserModal
          toggle={this.toggleEdit}
          modal={this.state.modalEdit}
        />
      </Container>
    )
  }
}

export default Dashboard;
