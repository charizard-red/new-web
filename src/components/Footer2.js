import React from 'react';
import {Component} from 'react';
import {CardFooter, Navbar} from 'reactstrap';
import '../theme/footer2.css';

class Footer2 extends Component {
  render(){
    return(
      <div>
        <Navbar color="primary" dark expand="md">
          <div className="flexfooter2 footer2size footer2color">
            <div>Temu Dokter</div>
            <div>We are TEAM RED</div>
            <div>@2018</div>
          </div>
        </Navbar>
      </div>
    )
  }
}
export default Footer2;
