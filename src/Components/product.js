/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
import React from "react";
import "./product.css";
import Modal from "react-responsive-modal";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    console.log(props.type);
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const path = this.props.src.split("/uploads/")[1];
    return (
      <div>
        <div className="product-card" onClick={this.onOpenModal}>
          <div>
            <div className="product-img">
              <img
                src={`http://localhost:3000/${path}`}
                style={{ width: "100%" }}
              />
            </div>
            <hr />
            <div className="product-name">
              {this.props.name}
                <div style={{float:'right', color:'red', fontSize: '25px'}}>$ {this.props.price}</div>
            </div>
            
            <div className="product-name" style={{float:'left', fontSize:'20px', padding:'10px', paddingLeft:'0px'}}>
              {this.props.type}
               ({this.props.sub_type})
            </div>
          </div>
          
        </div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <img
            src={`http://localhost:3000/${path}`}
            style={{ height: "100%", width: "100%" }}
          />
        </Modal>
      </div>
    );
  }
}

export default Product;
