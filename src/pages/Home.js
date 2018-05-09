import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Hero />
        </Container>
        <br/>
        <Footer />
      </div>
    )
  }
}

export default Home;
