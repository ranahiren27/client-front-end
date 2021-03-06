import React from "react";
import "./App.css";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShowCase from "./Components/showCase";
import ProdcutsByType from "./Components/productsByType";
import ProdcutsBySubType from "./Components/productsBySubType";
import Footer from "./Components/footer";
import Modal from "react-responsive-modal";
import Login from './Components/login';
import CheckOut from './Components/checkOut';
import SingUp from './Components/signUp';

const lookup = {
  empty: [],
  wine: [
    { id: "white", name: "White" },
    { id: "red", name: "Red" },
    { id: "rosé", name: "Rosé" },
    { id: "sparkling", name: "Sparkling" },
    { id: "dessert", name: "Dessert" }
  ],
  rum: [
    { id: "dark", name: "Dark" },
    { id: "flavored", name: "Flavored" },
    { id: "gold", name: "Gold" },
    { id: "light", name: "Light" },
    { id: "overproof", name: "Overproof" },
    { id: "premium", name: "Premium" },
    { id: "spiced", name: "Spiced" }
  ],
  whisky: [
    {
      id: "american",
      name: "American"
    },
    {
      id: "ausralian",
      name: "Ausralian"
    },
    {
      id: "canadian",
      name: "Canadian"
    },
    {
      id: "danish",
      name: "Danish"
    },
    {
      id: "english",
      name: "English"
    },
    {
      id: "finnish",
      name: "Finnish"
    },
    {
      id: "georgia",
      name: "Georgia"
    },
    {
      id: "german",
      name: "German"
    },
    {
      id: "indian",
      name: "Indian"
    },
    {
      id: "irish",
      name: "Irish"
    },
    {
      id: "mexican",
      name: "Mexican"
    },
    {
      id: "japanese",
      name: "Japanese"
    },
    {
      id: "scotch",
      name: "Scotch"
    },
    {
      id: "swedish",
      name: "Swedish"
    },
    {
      id: "taiwanese",
      name: "Taiwanese"
    },
    {
      id: "welsh",
      name: "Welsh"
    }
  ],
  vodka: [
    {
      id: "plain",
      name: "Plain"
    },
    {
      id: "fruit",
      name: "Fruit"
    },
    {
      id: "herbal",
      name: "Herbal"
    },
    {
      id: "flavored",
      name: "Flavored"
    }
  ],
  beer: [
    {
      id: "boza",
      name: "Boza"
    },
    {
      id: "cauim",
      name: "Cauim"
    },
    {
      id: "chhaang",
      name: "Chhaang"
    },
    {
      id: "chicha",
      name: "Chicha"
    },
    {
      id: "gruit",
      name: "Gruit"
    },
    {
      id: "kvass",
      name: "Kvass"
    },
    {
      id: "oshikundu",
      name: "Oshikundu"
    },
    {
      id: "pulque",
      name: "Pulque"
    },
    {
      id: "sahti",
      name: "Sahti"
    },
    {
      id: "sato",
      name: "Sato"
    }
  ],
  brandy: [
    {
      id: "cognac",
      name: "Cognac"
    },
    {
      id: "armagnac",
      name: "Armagnac"
    },
    {
      id: "calvados",
      name: "Calvados"
    },
    {
      id: "spanish",
      name: "Spanish"
    },
    {
      id: "obstler",
      name: "Obstler"
    },
    {
      id: "pisco",
      name: "Pisco"
    },
    {
      id: "armenian",
      name: "Armenian"
    },
    {
      id: "cypriot",
      name: "Cypriot"
    },
    {
      id: "pomace",
      name: "Pomace"
    }
  ]
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      signup: false,
      logedIn: localStorage.getItem('user-login') === null ? false : true
    };
  }

  // getLocalStore = () => {
  //   const userLocalData = localStorage.getItem('user-login');
  //   console.log(userLocalData);
  //   if (userLocalData !== null) {
  //     this.setState({ store: JSON.parse(userLocalData) });
  //     return JSON.parse(userLocalData);
  //     this.setState({logedin: true})
  //   }
  //   return null;
  // }

  onOpenLoginModal = () => {
    this.setState({ login: true });
  };

  onCloseLoginModal = () => {
    this.setState({ login: false });
  };
  onOpenSignUpModal = () => {
    // console.log('open')
    this.setState({ signup: true });
  };

  onCloseSignUpModal = () => {
    this.setState({ signup: false });
  };
  logout = () => {
    localStorage.clear();
    window.location.reload();
  }
  render() {
    const localUserData = JSON.parse(localStorage.getItem('user-login'));
    let logedin;
    if (localUserData !== null) {
      logedin = localUserData.login;
    } else {
      logedin = false;
    }
    let notLogedIn = !logedin;
    return (
      <div className="App">
        <Router>
          <div className="w3-bar w3-red w3-xlarge" style={{ zIndex: '1' }}>
            <Link to="/" className="w3-bar-item w3-button w3-red" >
              <img src='http://localhost:3000/logo.png' alt="Company logo" style={{ height: '40px', width: '80px', margin: '10px' }} />
            </Link>
            <div className="w3-dropdown-hover" style={{ padding: "10px" }}>
              <Link to="/products/wine" className="w3-button">
                Wine
              </Link>
              <div className="w3-dropdown-content w3-bar-block w3-card-4">
                {lookup["wine"].map(item => (
                  <Link
                    to={`/products/wine/${item.id}`}
                    className="w3-bar-item w3-button"
                    key={item.id}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w3-dropdown-hover" style={{ padding: "10px" }}>
              <Link to="/products/rum" className="w3-button">
                Rum
              </Link>
              <div className="w3-dropdown-content w3-bar-block w3-card-4">
                {lookup["rum"].map(item => (
                  <Link
                    to={`/products/rum/${item.id}`}
                    className="w3-bar-item w3-button"
                    key={item.id}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w3-dropdown-hover" style={{ padding: "10px" }}>
              <Link to="/products/whisky" className="w3-button">
                Whisky
              </Link>
              <div className="w3-dropdown-content w3-bar-block w3-card-4">
                {lookup["whisky"].map(item => (
                  <Link
                    to={`/products/whisky/${item.id}`}
                    className="w3-bar-item w3-button"
                    key={item.id}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w3-dropdown-hover" style={{ padding: "10px" }}>
              <Link to="/products/vodka" className="w3-button">
                Vodka
              </Link>
              <div className="w3-dropdown-content w3-bar-block w3-card-4">
                {lookup["vodka"].map(item => (
                  <Link
                    to={`/products/vodka/${item.id}`}
                    className="w3-bar-item w3-button"
                    key={item.id}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w3-dropdown-hover" style={{ padding: "10px" }}>
              <Link to="/products/beer" className="w3-button">
                Beer
              </Link>
              <div className="w3-dropdown-content w3-bar-block w3-card-4">
                {lookup["beer"].map(item => (
                  <Link
                    to={`/products/beer/${item.id}`}
                    className="w3-bar-item w3-button"
                    key={item.id}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* <div className="w3-bar-item w3-button w3-red" style={{padding:"18px"}}>
            See All Products
          </div> */}
            {(logedin &&
              <div>
                <Link
                  to=""
                  className="w3-bar-item w3-button w3-red w3-right"
                  style={{ padding: "18px" }}
                  onClick={this.logout}
                  refresh="true"
                >
                  Logout
            </Link>
                <Link
                  to="/checkout"
                  className="w3-bar-item w3-button w3-red w3-right"
                  style={{ padding: "18px" }}
                >
                  Welcome {localUserData.data.name} CheckOut from here
                </Link>
              </div>)}
            {(notLogedIn &&
              <div>
                <Link
                  to="#"
                  className="w3-bar-item w3-button w3-red w3-right"
                  style={{ padding: "18px" }}
                  onClick={this.onOpenLoginModal}
                >
                  Login
            </Link>
                <Link
                  to="#"
                  className="w3-bar-item w3-button w3-red w3-right"
                  style={{ padding: "18px" }}
                  onClick={this.onOpenSignUpModal}
                >
                  SignUp
            </Link>
              </div>)}
          </div>
          <div className="main">
            <Switch>
              <Route path="/" exact>
                <ShowCase />
              </Route>
              <Route
                path="/products/:type/:sub_type"
                render={props => <ProdcutsBySubType {...props} />}
              />
              <Route
                path="/products/:type"
                exact
                render={props => <ProdcutsByType {...props} />}
              />
              <Route path="/checkout" exact>
                <CheckOut />
              </Route>
              </Switch>
            <Footer />
          </div>
          <Modal
            open={this.state.login}
            onClose={this.onCloseLoginModal}
            center
          >
            <Login />
          </Modal>
          <Modal
            open={this.state.signup}
            onClose={this.onCloseSignUpModal}
            center
          >
            <SingUp />
          </Modal>
        </Router>
      </div>
    );

  }
}

export default App;
