import React from 'react';
import {Component} from 'react';
import '../theme/poweredby.css';
import ReactJsLogo from '../assets/poweredby/reactjs.png';
import MongooseLogo from '../assets/poweredby/mongoose.png';
import BootstrapLogo from '../assets/poweredby/bootstrap.png';
import JsLogo from '../assets/poweredby/js.png';
import MongodbLogo from '../assets/poweredby/mongodb.png';
import GithubLogo from '../assets/poweredby/github.png';

import NetlifyLogo from '../assets/poweredby/netlify.png';
import MlabLogo from '../assets/poweredby/mlab.png';
import FilestackLogo from '../assets/poweredby/filestack.png';

class PoweredBy extends Component{
  render(){
    return(
      <div className="bgstyle">
        <hr/>
        <br/>
        <h1 className="poweredbylabel">Poweredby</h1>

        <div className="poweredbyflex">
          <div className="fixsizepoweredby">
            <a href="#" ><img className="poweredbyiconsize" src={ReactJsLogo} /> </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="#" ><img className="poweredbyiconsize" src={JsLogo} /> </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="#" ><img className="poweredbyiconsize" src={BootstrapLogo} /></a>
          </div>

          <div className="fixsizepoweredby">
            <a href="#" ><img className="poweredbyiconsize"  src={MongodbLogo} /></a>
          </div>

          <div className="fixsizepoweredby">
            <a href="#" ><img className="poweredbyiconsize" src={MongooseLogo} /></a>
          </div>

        </div>

        <div className="poweredbyflex2">
          <div className="fixsizepoweredby">
            <a href="#" ><img className="poweredbyiconsize" src={GithubLogo} /> </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="#" ><img className="poweredbyiconsize" src={NetlifyLogo} /> </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="#" ><img className="poweredbyiconsize" src={MlabLogo} /></a>
          </div>

          <div className="fixsizepoweredby">
            <a href="#" ><img className="poweredbyiconsize"  src={FilestackLogo} /></a>
          </div>



        </div>

      </div>

    )
  }
}
export default PoweredBy;
