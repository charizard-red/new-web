import React from 'react';
import {Component} from 'react';
import {CardFooter} from 'reactstrap';
import '../theme/footer.css'
import Aliface from '../assets/profiles/aliface.png';
import Fadhilface from '../assets/profiles/fadhilface.png';
import Danuface from '../assets/profiles/danuface.jpeg';
import Kiendoanface from '../assets/profiles/kiendoan.jpeg';
import Najibface from '../assets/profiles/najib.jpg';
import Deiface from '../assets/profiles/dei.jpeg';

class Footer extends Component {
  render(){
    return(
      <div>
        <CardFooter >
          <h1 className="bigprofilelabel">Our Team</h1>
          <br/>
          <div className="flexposision">
            <div className="fixsizeprofile">
              <label className="label1">Rahman Fadhil</label>
              <img className="imageteam" src={Fadhilface} alt="" />
              <label className="label2">Team Red Leader</label>
              <label className="label3">Fullstack</label>
            </div>

            <div className="fixsizeprofile">
              <label className="label1">Ali Kurniawan</label>
              <img className="imageteam" src={Aliface} alt="" />
              <label className="label21">Team Red</label>
              <label className="label31">Frontend</label>
            </div>

            <div className="fixsizeprofile">
              <label className="label11">Herdanu Y</label>
              <img className="imageteam" src={Danuface} alt="" />
              <label className="label21">Team Red</label>
              <label className="label31">Fullstack</label>
            </div>

            <div className="fixsizeprofile">
              <label className="label11">Kien Doan</label>
              <img className="imageteam" src={Kiendoanface} alt="" />
              <label className="label21">Team Red</label>
              <label className="label31">Frontend</label>
            </div>

            <div className="fixsizeprofile">
              <label className="label11">M Najib</label>
              <img className="imageteam" src={Najibface} alt="" />
              <label className="label21">Team Red</label>
              <label className="label31">Frontend</label>
            </div>

            <div className="fixsizeprofile">
              <label className="label11">Dei Gratia</label>
              <img className="imageteam" src={Deiface} alt="" />
              <label className="label21">Team Red</label>
              <label className="label31">Backend</label>
            </div>

          </div>

        </CardFooter>
      </div>

    );
  }
}

export default Footer;
