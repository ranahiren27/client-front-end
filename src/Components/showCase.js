/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./showCase.css";
import {logo} from './logo.jpg';
// import OwlCarousel from "react-owl-carousel";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

class ShowCase extends React.Component {
  render() {
    return (
      <div className="carousel" style={{background:"url('https://robbreportedit.files.wordpress.com/2019/11/host-guide-wine.jpg')", height:'800px', backgroundEepeat: 'no-repeat',
      backgroundSize: 'cover'}}>
        <h1 style={{textAlign:'center', paddingTop:'350px', color:'red', fontSize:'100px'}}>Welcome to wine shop</h1>
      </div>
    );
  }
}

export default ShowCase;
