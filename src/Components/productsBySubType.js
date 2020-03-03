import React from "react";
import Axios from "axios";
import Product from "./product";
import { Spring } from "react-spring";
import "./product.css";
class ProdcutsByType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      type: "",
      sub_type: ""
    };
  }

  fetchProducts = (type, sub_type) => {
    Axios.get(`http://localhost:3000/v1/products/${type}/${sub_type}`)
      .then(data => {
        this.setState({ products: data.data.message });
      })
      .catch(err => console.log(err));
  };

  render() {
    let { type, sub_type } = this.props.match.params;
    if (type !== this.state.type || sub_type !== this.state.sub_type) {
      this.setState({
        type: this.props.match.params.type,
        sub_type: this.props.match.params.sub_type
      });
      this.fetchProducts(type, sub_type);
    }
    const products = this.state.products;
    console.log(products);
    if(products.length === 0){
      return(
        <div>
        <div className="gallary-container" style={{textAlign: 'center', margin: 'auto'}}>
            <h1>Sorry this product is not available now!!</h1>
        </div>
      </div>  
      )
    }
    return (
      <div>
        <div className="gallary-container">
          <div className="gallary">
            {products.map(prod => (
              <Product
                name={prod.name}
                type={prod.type}
                sub_type={prod.sub_type}
                price={prod.price}
                src={prod.img_path}
                key={prod._id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProdcutsByType;
