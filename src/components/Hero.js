import React from 'react';
import { Jumbotron, Button, Media } from 'reactstrap';

const Hero = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to Our Web</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <Media>
      <Media left href="#" style={{ marginRight: 20}}>
        <img src={require('../assets/doctor_icon.png')} />
      </Media>
      <Media body>
        <Media heading>
          Stay calm and make an appointment
        </Media>
        Temu Dokter app makes it easy to request an appointment with a doctor specialties and general doctor. Plus, the app delivers a daily dose of health news and practical advice you can use.
      </Media>
    </Media>
    </div>
  );
};

export default Hero;
