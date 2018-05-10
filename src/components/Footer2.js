import React from "react";
import { Component } from "react";
import { CardFooter, Navbar } from "reactstrap";
import "../theme/footer2.css";

class Footer2 extends Component {
  render() {
    return (
      <footer className="footer">
        <Navbar color="primary" dark expand="md">
          <div className="flexfooter2 footer2size footer2color">
            <div />
            <div>Temu Dokter &copy; 2018 </div>
            <div />
          </div>
        </Navbar>
      </footer>
    );
  }
}
export default Footer2;
