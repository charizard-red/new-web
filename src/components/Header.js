import React, { Component } from "react";
import { NavLink as NavLinkRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  ButtonGroup
} from "reactstrap";

import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);
    this.state = {
      isOpen: false,
      loginForm: false,
      registerForm: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout() {
    window.localStorage.clear();
    // window.location.reload();
    this.props.history.push("/dashboard");
  }

  toggleLogin() {
    this.setState({
      loginForm: !this.state.loginForm
    });
  }

  toggleRegister() {
    this.setState({
      registerForm: !this.state.registerForm
    });
  }

  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">
            <img
              style={{ height: 40 }}
              src={require("../assets/temudokter-logo.png")}
              alt="Temu Dokter"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  tag={NavLinkRouter}
                  exact
                  to="/"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={NavLinkRouter}
                  to="/dashboard"
                  activeClassName="active"
                >
                  Profile
                </NavLink>
              </NavItem>
              {window.localStorage.token ? (
                <Button color="danger" onClick={this.logout}>
                  Log Out
                </Button>
              ) : (
                <ButtonGroup>
                  <Button color="success" onClick={this.toggleLogin}>
                    Log In
                  </Button>
                  <Button color="warning" onClick={this.toggleRegister}>
                    Register
                  </Button>
                </ButtonGroup>
              )}
            </Nav>
          </Collapse>
        </Navbar>

        <LoginModal toggle={this.toggleLogin} modal={this.state.loginForm} />
        <RegisterModal
          toggle={this.toggleRegister}
          modal={this.state.registerForm}
        />
      </div>
    );
  }
}

export default Header;
