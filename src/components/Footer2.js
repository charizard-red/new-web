import React from "react";
import { Component } from "react";
import { Navbar } from "reactstrap";
import "../theme/footer2.css";

import GithubWhiteLogo from '../assets/poweredby/githubwhite.png'

class Footer2 extends Component {
  render(){
    return(
      <div>
        <Navbar color="primary" dark expand="md">
          <div className="flexfooter2 footer2size footer2color">
            <div>Temu Dokter</div>
            <div>
              <a href="https://github.com/charizard-red/new-web"><img className="iconsize2" src={GithubWhiteLogo} alt="github" title="github"/></a>
            </div>
            <div>@2018</div>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Footer2;
