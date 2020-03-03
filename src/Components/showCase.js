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
      <div className="carousel">
        <div id="slider">
          <div className="slides">
            <div className="slider">
              <div className="legend"></div>
              <div className="content">
                <div className="content-txt">
                  <h1>Lorem ipsum dolor</h1>
                  <h2>
                    Nam ultrices pellentesque facilisis. In semper tellus mollis
                    nisl pulvinar vitae vulputate lorem consequat. Fusce odio
                    tortor, pretium sit amet auctor ut, ultrices vel nibh.
                  </h2>
                </div>
              </div>
              <div className="image">
                <img src='https://robbreportedit.files.wordpress.com/2019/11/host-guide-wine.jpg' alt="animation image" />
              </div>
            </div>
          </div>
          <div className="switch">
            <ul>
              <li>
                <div className="on"></div>
              </li>
              <li>Welcome </li>
              <li>to </li>
              <li>wine shop</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCase;
