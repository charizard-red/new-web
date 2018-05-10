import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  login() {
    let toggle = this.props.toggle;
    axios
      .post(process.env.REACT_APP_URL + "/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(data => {
        if (data.data.text === "error") {
          alert("Email and password not match");
        } else {
          console.log(data);
          window.localStorage.setItem("token", data.data.token);
          window.localStorage.setItem("user_id",  data.data.data._id);
          // window.location.reload();
          this.props.history.push("/dashboard");
          toggle();
        }
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Login</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Your Email"
                />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword" className="mr-sm-2">
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Your Password"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.toggle}>
              Cancel
            </Button>{" "}
            <Button color="success" onClick={this.login}>
              Log In
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withRouter(LoginModal);
