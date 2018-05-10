import React from "react";
import { Component } from "react";

import "../theme/poweredby.css";

import ReactJsLogo from "../assets/poweredby/reactjs.png";
import MongooseLogo from "../assets/poweredby/mongoose.jpg";
import MongoDBLogo from "../assets/poweredby/mongodb.png";
import BootstrapLogo from "../assets/poweredby/bootstrap.png";
import ExpressLogo from "../assets/poweredby/express.png";
import JavaScriptLogo from "../assets/poweredby/javascript.png";

class PoweredBy extends Component {
  render() {
    return (
      <div>
        <br />
        <h1 className="poweredbylabel">Powered by</h1>

        <div className="poweredbyflex">
          <div className="fixsizepoweredby">
            <a href="https://javascript.com">
              <img
                className="poweredbyiconsize poweredbycentral"
                src={JavaScriptLogo}
                alt="JavaScript"
              />
            </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="https://reactjs.org">
              <img
                className="poweredbyiconsize poweredbycentral"
                src={ReactJsLogo}
                alt="React"
              />
            </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="https://getbootstrap.com">
              <img
                className="poweredbyiconsize poweredbycentral"
                src={BootstrapLogo}
                alt="Bootstrap"
              />
            </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="https://expressjs.com">
              <img
                className="poweredbyiconsize poweredbycentral"
                src={ExpressLogo}
                alt="Express"
              />
            </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="https://mongodb.com">
              <img
                className="poweredbyiconsize poweredbycentral"
                src={MongoDBLogo}
                alt="MongoDB"
              />
            </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="http://mongoosejs.com">
              <img
                className="poweredbyiconsize poweredbycentral"
                src={MongooseLogo}
                alt="Mongoose"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default PoweredBy;
