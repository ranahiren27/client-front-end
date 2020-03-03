/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
import React from "react";
import "./product.css";
import Modal from "react-responsive-modal";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      store: null,
      logedIn: false
    };
    this.getStore()
  }

  getStore = () => {
    const localUserData = JSON.parse(localStorage.getItem('user-login'));
    console.log(localUserData);
    if (localUserData !== null) {
      this.setState({ store: localUserData.data })
      this.setState({ logedIn: localUserData.login });
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  addToCart = () => {
    if (this.state.logedIn === false) {
      alert('Plase login to add product in cart');
      return;
    }
    if (localStorage.getItem('kart') === null) {
      localStorage.setItem('kart', this.props.name.toString() + ',')
    } else {
      let data = localStorage.getItem('kart');
      localStorage.setItem('kart', data + this.props.toString());
    }
  }
  render() {
    const path = this.props.src.split("/uploads/")[1];
    const localUserData = JSON.parse(localStorage.getItem('user-login'));
    let logedin;
    if (localUserData !== null) {
      logedin = localUserData.login;
    } else {
      logedin = false;
    }
    let notLogedIn = !logedin;
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
            <hr />
            <div className="product-name">
              {this.props.name}
              <div style={{ float: 'right', color: 'red', fontSize: '25px', bottom: '0px' }}>$ {this.props.price}</div>
            </div>

            <div className="product-name" style={{ float: 'left', fontSize: '20px', padding: '10px', paddingLeft: '0px', bottom: '0px' }}>
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
          {(logedin &&
            <button onClick={this.addToCart}>
                <h1>Add to cart</h1>
          </button>
          )}
          {(notLogedIn &&
          <div>
            <button onClick={this.addToCart} disabled>
                <h1>Add to cart</h1>
            </button> 
            <div><h1>Please login to add product into cart</h1></div>
          </div>
          )}
        </Modal>
      </div>
    );
  }
}

export default Product;
