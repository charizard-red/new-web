import React from "react";
import { Component } from "react";

import "../theme/poweredby.css";

import ReactJsLogo from "../assets/poweredby/reactjs.png";
import MongooseLogo from "../assets/poweredby/mongoose.jpg";
import MongooDBLogo from "../assets/poweredby/mongodb.png";
import BootstrapLogo from "../assets/poweredby/bootstrap.png";
import JsLogo from "../assets/poweredby/js.png";

class PoweredBy extends Component {
  render() {
    return (
      <div>
        <br />
        <h1 className="poweredbylabel">Powered by</h1>
        <div className="poweredbyflex">
          <div className="fixsizepoweredby">
            <a href="#">
              <img
                className="poweredbyiconsize poweredbycentral"
                src={ReactJsLogo}
              />
            </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="#">
              <img
                className="poweredbyiconsize poweredbycentral"
                src={MongoDBLogo}
              />
            </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="#">
              <img
                className="poweredbyiconsize poweredbycentral"
                src={MongooseLogo}
              />
            </a>
          </div>

          <div className="fixsizepoweredby">
            <img
              className="poweredbyiconsize poweredbycentral"
              src={BootstrapLogo}
            />
          </div>

          <div className="fixsizepoweredby">
            <img className="poweredbyiconsize poweredbycentral" src={JsLogo} />
          </div>

          <div className="fixsizepoweredby">
            <img className="poweredbyiconsize poweredbycentral" src={JsLogo} />
          </div>
        </div>
      </div>
    );
  }
}
export default PoweredBy;
