import React, { Component } from 'react';
import axios from 'axios'
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
import { Provider } from '../context/UserContext';

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

  componentWillMount() {
    axios.get(process.env.REACT_APP_URL+'/auth', {
      headers: {
        "Authorization": "Bearer "+window.localStorage.token
      }
    }).then(data => {
      console.log(data);
      this.setState({
        user_data: data.data
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <Container>
        <Provider>
          {
            (window.localStorage.token) ? (
              <div>
                <Row>
                  <Col xs="3">
                    {
                      (this.state.user_data) ? (
                        <UserCard data={{
                          name: this.state.user_data.username,
                          email: this.state.user_data.email,
                          phone: this.state.user_data.data.phone,
                          gender: this.state.user_data.data.gender,
                          address: this.state.user_data.data.address,
                          birth: this.state.user_data.data.birth,
                        }}
                        toggle={this.toggle}
                        toggleEdit={this.toggleEdit}
                      />
                      ) : (
                        <div></div>
                      )
                    }
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
              </div>
            ) : (
              <h1>You are not logged in</h1>
            )
          }
        </Provider>
      </Container>
    )
  }
}

export default Dashboard;
