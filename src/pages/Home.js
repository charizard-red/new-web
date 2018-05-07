import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Hero from '../components/Hero';

class Home extends Component {
  render() {
    return (
      <Container>
        <Hero />
      </Container>
    )
  }
}

export default Home;
