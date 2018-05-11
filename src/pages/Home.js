import React, { Component } from "react";
import { Container } from "reactstrap";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import PoweredBy from "../components/PoweredBy";

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Hero />
        </Container>
        <br />
        <Footer />
        <PoweredBy />
      </div>
    );
  }
}

export default Home;
