import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Jumbotron
} from "reactstrap";

import UserCard from "../components/cards/UserCard";
import ClinicCard from "../components/cards/ClinicCard";
import { Provider } from "../context/UserContext";

import CreateClinicModal from "../components/modals/CreateClinicModal";
import EdituserModal from "../components/modals/EdituserModal";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalEdit: false,
      clinic_data: [],
      clinic_data_all: [],
      search_key: ""
    };
    this.toggle = this.toggle.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    //1.get name and value from jsx input tag
    var name = event.target.name;
    var value = event.target.value;

    //2.set input from user to state
    await this.setState({ [name]: value });

    if (this.state.search_key === "") {
      //3.if search key is empty string, then show all clinic data
      await this.setState({
        clinic_data: Object.assign(this.state.clinic_data_all)
      });
    } else {
      //4.if search key is not empty string, then show filtered clinic data

      //5.get all clinic data
      let clinic_data_all = Object.assign(this.state.clinic_data_all);

      //6.get search key
      // let search_key = Object.assign(this.state.search_key);

      //7.filter clinic_data and store to clinic_data_filtered var
      let clinic_data_filtered = clinic_data_all.filter(
        clinic =>
          clinic.title
            .toLowerCase()
            .search(this.state.search_key.toLowerCase()) !== -1
      );

      //8.set filtered clinic_data to state
      await this.setState({ clinic_data: clinic_data_filtered });
    }
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
    axios
      .get(process.env.REACT_APP_URL + "/auth", {
        headers: {
          Authorization: "Bearer " + window.localStorage.token
        }
      })
      .then(data => {
        console.log(data);
        this.setState({
          user_data: data.data
        });
      })
      .catch(err => console.log(err));
    axios
      .get(process.env.REACT_APP_URL + "/clinics")
      .then(data => {
        console.log(data.data.data);
        this.setState({
          clinic_data: data.data.data,
          clinic_data_all: data.data.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Container>
        <Provider>
          {window.localStorage.token ? (
            this.state.user_data ? (
              <div>
                <Row>
                  <Col xs="3">
                    <UserCard
                      data={{
                        name: this.state.user_data.username,
                        email: this.state.user_data.email,
                        phone: this.state.user_data.data.phone,
                        gender: this.state.user_data.data.gender,
                        address: this.state.user_data.data.address,
                        birth: this.state.user_data.data.birth
                      }}
                      toggle={this.toggle}
                      toggleEdit={this.toggleEdit}
                    />
                  </Col>
                  <Col xs="9">
                    <Jumbotron fluid style={{ padding: 15 }}>
                      <h1>Welcome, {this.state.user_data.username}!</h1>
                      <hr />
                      <h3>Find Clinic</h3>
                      <Form inline onSubmit={e => e.preventDefault()}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="search_key"
                            value={this.state.search_key}
                            onChange={this.handleChange}
                            id="examplePassword"
                            placeholder="Cari klinik"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Input
                            type="select"
                            name="selectMulti"
                            id="exampleSelectMulti"
                          >
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
                        {this.state.clinic_data.map((data, index) => {
                          return (
                            <Col>
                              <ClinicCard data={data} />
                            </Col>
                          );
                        })}
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
                  user_data={this.state.user_data}
                  modal={this.state.modalEdit}
                />
              </div>
            ) : (
              <h1>Wait...</h1>
            )
          ) : (
            <h1>You are not logged in</h1>
          )}
        </Provider>
      </Container>
    );
  }
}

export default Dashboard;
