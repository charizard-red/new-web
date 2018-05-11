import React from 'react';
import {Component} from 'react';
import '../theme/poweredby.css';
import ReactJsLogo from '../assets/poweredby/reactjs.png';
import MongooseLogo from '../assets/poweredby/mongoose.png';
import BootstrapLogo from '../assets/poweredby/bootstrap.png';
import JsLogo from '../assets/poweredby/javascript.png';
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
            <a href="https://reactjs.org/" ><img className="poweredbyiconsize" src={ReactJsLogo} alt="reactjs" title="reactjs"/> </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="https://www.javascript.com/" ><img className="poweredbyiconsize" src={JsLogo} alt="javascript" title="javascript"/> </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="https://getbootstrap.com/" ><img className="poweredbyiconsize" src={BootstrapLogo} alt="bootstrap" title="bootstrap"/></a>
          </div>

          <div className="fixsizepoweredby">
            <a href="https://www.mongodb.com/" ><img className="poweredbyiconsize"  src={MongodbLogo} alt="mongodb" title="mongodb"/></a>
          </div>

          <div className="fixsizepoweredby">
            <a href="http://mongoosejs.com/" ><img className="poweredbyiconsize" src={MongooseLogo} alt="mongoose" title="mongoose"/></a>
          </div>

        </div>

        <div className="poweredbyflex2">
          <div className="fixsizepoweredby">
            <a href="https://github.com/" ><img className="poweredbyiconsize" src={GithubLogo} alt="github" title="github"/> </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="https://www.netlify.com/" ><img className="poweredbyiconsize" src={NetlifyLogo} alt="netlify" title="netlify"/> </a>
          </div>

          <div className="fixsizepoweredby">
            <a href="https://mlab.com/" ><img className="poweredbyiconsize" src={MlabLogo} alt="mlab" title="mlab"/></a>
          </div>

          <div className="fixsizepoweredby">
            <a href="https://www.filestack.com/" ><img className="poweredbyiconsize"  src={FilestackLogo} alt="filestack" title="filestack"/></a>
          </div>

        </div>

      </div>
    );
  }
}
export default PoweredBy;
