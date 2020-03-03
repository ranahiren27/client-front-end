/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./showCase.css";
import { logo } from './logo.jpg';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class ShowCase extends React.Component {

  render() {
    return (
      // <div className="carousel" style={{background:"url('https://robbreportedit.files.wordpress.com/2019/11/host-guide-wine.jpg')", height:'800px', backgroundEepeat: 'no-repeat',
      // backgroundSize: 'cover'}}>
      //      , height:'800px', width:'400px'
      //   <h1 style={{textAlign:'center', paddingTop:'350px', color:'red', fontSize:'100px'}}>Welcome to wine shop</h1>
      // </div>
      <div style={{ textAlign: 'center', display: 'block', margin: 'auto' }}>
        <OwlCarousel
          items={1}
          margin={10}
          autoplay={true}
          style={{ zIndex: '-1' }}>

          <div className="item">
            <img src='https://www.totalwine.com/media/sys_master/cmsmedia/h60/h15/12307704283166.jpg' />
          </div>
          <div className="item">
            <img src='https://www.totalwine.com/media/sys_master/cmsmedia/h94/h65/12344957632542.jpg' />
          </div>
          <div className="item">
            <img src='https://www.totalwine.com/media/sys_master/cmsmedia/h69/h0e/12345169248286.jpg' />
          </div>
          <div className="item">
            <img src='https://www.totalwine.com/media/sys_master/cmsmedia/hcb/h99/11832552882206.jpg' />
          </div>
        </OwlCarousel>
      </div >
    );
  }
}

export default ShowCase;
