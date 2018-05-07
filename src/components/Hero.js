import React from 'react';
import {
  Jumbotron,
  Button,
  Media,
  Collapse,
  CardBody,
  Card
} from 'reactstrap';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false
    };
  }

  toggle() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (<div>
      <Jumbotron>
        <h1 className="display-3">Welcome to Our Web</h1>
        {/* <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p> */}
        <hr className="my-2"/>
        <h2>Stay calm and make an appointment</h2>
        <p>Temu Dokter app makes it easy to request an appointment with a doctor specialties and general doctor.</p>
        {/*<p className="lead">
          <Button color="primary">Learn More</Button>
        </p>*/
        }
      </Jumbotron>
      <Media>
        <Media left="left" href="#" style={{
            marginRight: 20
          }}>
          <img src={require('../assets/clinic2.jpg')}/>
        </Media>
        <Media body="body">
          <div>
            <Media heading="heading">
              <h3>Who is it for?</h3>
            </Media>
            <p>Patient who need to medical checkup and want to minimize the time to wait. Temu Dokter provides fast and ontime clinical appointment.</p>
          </div>
        </Media>
      </Media>
      <hr/>

      <div>
        <span>
          <h2 onClick={this.toggle}>
            <Button color="primary" onClick={this.toggle} style={{
                marginRight: 10
              }}>+</Button>
            Apa yang Ada di Otak Pengidap Kecanduan Pornografi?
          </h2>
        </span>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody style={{
                textAlign: 'justify'
              }}>
              <img align="left" width="200px" style={{
                  marginRight: 10
                }} src="https://akcdn.detik.net.id/community/media/visual/2018/04/03/c0725f09-7828-470d-bcaa-714b6d90c003_169.jpeg?w=700&q=90"/>
              <b>Detik Health</b>, Jakarta - Kecanduan pornografi merupakan masalah kejiwaan yang serius. Meski begitu, pembahasan ilmiah seputar penyakit ini tidak terlalu banyak. Atas alasan itulah, peneliti dari University of Cambridge melakukan penelitian untuk melihat isi otak pasien kecanduan pornografi. Penelitian dilakukan dengan menganalisis hasil pemindaian otak melalui CT Scan kepada 19 orang pasien kecanduan pornografi. Hasil pemindaian menyebut pasien kecanduan pornografi memiliki aktivitas tidak biasa di bagian ventral striatum, dorsal anterior cingulate dan amygdala. Aktivitas pada area-area ini juga ditemukan pada pengidap kecanduan narkoba dan kecanduan judi. "Kita tahu bahwa kecanduan pornografi adalah adiksi. Namun adiksi yang bagaimana? Penelitian kami membuka isi otak pasien kecanduan pornografi dan melihat bagaimana pengaruh pornografi terhadap kebiasaan dan pola pikir," ungkap dr Valerie Voon dari University of Cambridge, dikutip dari BBC. Dalam penelitian yang dipublikasikan di jurnal PLoS One ini, ditemukan pula bahwa kecanduan pornografi memiliki sifat mirip dengan gangguan jiwa lainnya, yakni perilaku impulsif dan gangguan obsesif kompulsif (OCD). Peneliti juga mencatat bagaimana kecanduan seks memengaruhi kehidupan para pasien. Dua orang pasien mengaku harus kehilangan pekerjaan karena kedapatan menonton film porno di kantor. Empat orang lainnya mengaku kecanduan nonton film porno untuk memuaskan fetish dan menjauhkan diri dari narkoba. Meski begitu, peneliti mencatat bahwa kecanduan pornografi bisa ditangani dengan baik oleh psikolog maupun psikiater dengan terapi.
            </CardBody>
          </Card>
        </Collapse>
      </div>

      <div>
        <span>
          <h2 onClick={this.toggle}>
            <Button color="primary" onClick={this.toggle} style={{
                marginRight: 10
              }}>+</Button>
            Generasi Milenial Sadar Gaya Hidup Sehat karena Media Sosial
          </h2>
        </span>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody style={{
                textAlign: 'justify'
              }}>
              <img align="left" width="200px" style={{
                  marginRight: 10
                }} src="https://cdn1-a.production.images.static6.com/iduxhRMUbPprRNd5aERNQ5J4Ba0=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/liputan6-media-production/medias/2150165/original/081060100_1525406710-iStock-655439288.jpg"/>
              <b>Liputan6.com</b>, Jakarta Generasi milenial saat ini sudah mulai menyadari gaya hidup sehat. Menurut salah satu dari 12 finalis "The New L-Men of The Year 2018”, Nicolas Wilmy, mereka yang tinggal di kota besar sadar akan hal ini juga karena media sosial. "Generasi milenial yang gue lihat biasanya berhubungan dengan sesuatu yang viral atau media sosial. Alhamdulillah sih orang- orang di kota besar seperti Jakarta atau Bandung sudah mulai peduli dengan kesehatan," kata pria yang akrab disapa Nico ini ketika ditemui Health-Liputan6.com di kawasan Sudirman, Jakarta ditulis Jumat (4/5/2018).
            </CardBody>
          </Card>
        </Collapse>
      </div>

      <div>
        <span>
          <h2 onClick={this.toggle}>
            <Button color="primary" onClick={this.toggle} style={{
                marginRight: 10
              }}>+</Button>
            Belajar Cara Jalan untuk Perbaiki Masalah Tulang
          </h2>
        </span>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody style={{
                textAlign: 'justify'
              }}>
              <img align="left" width="200px" style={{
                  marginRight: 10
                }} src="https://akcdn.detik.net.id/community/media/visual/2018/05/06/d7f5cd89-dfb7-42de-afec-6c80d91d7988_169.jpeg?w=700&q=90"/>
              <b>Detik Health</b>Jakarta - Tahukah kamu ternyata ada banyak masalah yang disebabkan karena cara jalan yang salah? Sjiapin, seorang wanita pengidap skoliosis mengaku kondisinya jadi lebih baik setelah belajar teknik jalan kaki yang benar. Kini, wanita yang bekerja sebagai direktur keuangan dis alah satu perusahaan internasional ini sudah menjadi instruktur Miracle Walking. Miracle Walking adalah sebuah komunitas yang dibentuk untuk mengedukasi masyarakat tentang bagaimana cara berjalan yang benar. "Dulu panjang kaki kanan dan kiri saya itu beda 2 cm, puji syukur sekarang kaki saya sudah sama panjangnya", ujar Sjiapin saat ditemui di Stadion Gelora Bung Karno, Jakarta, Minggu (6/5/2018). "Karena saya sudah merasakan manfaatnya, saya berinisiatif untuk menjadi instruktur agar bisa mengedukasi kepada teman-teman," lanjutnya. Kepada detikHealth, ia mengaku sudah beberapa kali berobat pada dokter, namun dokter mengatakan bahwa skoliosis tidak bisa disembuhkan. Rupanya hanya dengan memperbaiki cara berjalan, wanita 42 tahun ini bisa memperbaiki kondisinya. Mulai sekarang, ada baiknya mulai memperbaiki cara berjalan. Sebab menurut Sjiapin, cara berjalan yang salah bisa menyebabkan terjadinya masalah pada kesehatan tulang.
            </CardBody>
          </Card>
        </Collapse>
      </div>

    </div>);
  }
};

export default Hero;
