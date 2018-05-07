import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Button } from 'reactstrap';

import DoctorCard from '../components/cards/DoctorCard';
import ClinicDetailCard from '../components/cards/ClinicDetailCard';
import AppointmentModal from '../components/modals/AppointmentModal';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      klinik_id: this.props.match.params.id,
      klinik_data: {
        name: 'Klinik Sehat',
        phone: '085811348633',
        address: 'GDC Alamanda A3/3',
        doctors: [
          {
            specialist: 'gigi',
            name: 'Dr. Ali Kurniawan',
            phone: '085811348633',
            price: 'Rp 250,000',
            address: 'GDC Alamanda A3/3'
          },
          {
            specialist: 'gigi',
            name: 'Dr. Ali Kurniawan',
            phone: '085811348633',
            price: 'Rp 250,000',
            address: 'GDC Alamanda A3/3'
          },
          {
            specialist: 'gigi',
            name: 'Dr. Ali Kurniawan',
            phone: '085811348633',
            price: 'Rp 250,000',
            address: 'GDC Alamanda A3/3'
          },
          {
            specialist: 'gigi',
            name: 'Dr. Ali Kurniawan',
            phone: '085811348633',
            price: 'Rp 250,000',
            address: 'GDC Alamanda A3/3'
          },
          {
            specialist: 'gigi',
            name: 'Dr. Ali Kurniawan',
            phone: '085811348633',
            price: 'Rp 250,000',
            address: 'GDC Alamanda A3/3'
          },
          {
            specialist: 'gigi',
            name: 'Dr. Ali Kurniawan',
            phone: '085811348633',
            price: 'Rp 250,000',
            address: 'GDC Alamanda A3/3'
          },
        ]
      },
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <ClinicDetailCard data={this.state.klinik_data}/>
          </Col>
          <Col xs="9">
            <Jumbotron fluid style={{padding: 15}}>
              <h1>{this.state.klinik_data.name}</h1>
              <p>{this.state.klinik_data.address}</p>
              <hr />
              <h3>Find Doctor</h3>
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="text" name="find" id="examplePassword" placeholder="Find doctor" />
                </FormGroup>
                <Button color="primary">FIND</Button>
              </Form>
              <Row>
                {
                  this.state.klinik_data.doctors.map(data => {
                    return (
                      <Col>
                        <DoctorCard data={{
                          specialist: data.specialist,
                          name: data.name,
                          phone: data.phone,
                          price: data.price,
                          address: data.address
                        }}
                        toggle={this.toggle}
                      />
                    </Col>
                    )
                  })
                }
              </Row>
            </Jumbotron>
          </Col>
        </Row>

        <AppointmentModal
          toggle={this.toggle}
          modal={this.state.modal}
        />
      </Container>
    )
  }
}

export default Dashboard;
