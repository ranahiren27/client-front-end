import React from 'react';
import './login.css';
import Axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          error: "",
          login: false
        };
        this.formSubmit = this.formSubmit.bind(this);
      }
    
      changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        });
      };
      componentDidMount() {
        this.storeColector();
      }
    
      storeColector() {
        let store = JSON.parse(localStorage.getItem("admin-log"));
        if (store && store.login) {
          this.setState({ login: true, store: store });
        }
      }
    
      formSubmit(event) {
        event.preventDefault();
        Axios.post("http://localhost:3000/v1/users/login", this.state)
          .then(response => {
            if (response.data.message) {
              this.setState({ error: response.data.message });
            } else {
              // eslint-disable-next-line react/no-direct-mutation-state
              localStorage.setItem(
                "user-login",
                JSON.stringify({
                  login: true,
                  token: response.data.token,
                  data: response.data.data
                })
              );
              this.setState({ login: true });
              this.storeColector();
              window.location.reload(); 
            }
          })
          .catch(err => {
            console.log("error: " + err);
          });
      }
    render() {
        return (
            <div>
                <form className="modal-content animate" 
                      method="post"
                      onSubmit={this.formSubmit}
                      >
                    <div className="imgcontainer">
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>

                    <div className="container">
                        <label for="uname"><b>Email</b></label>
                        <input type="email"
                            name="email"
                            placeholder="Enter email id"
                            className="w3-input"
                            value={this.state.email}
                            onChange={this.changeHandler}
                            required
                            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" />

                        <label for="psw"><b>Password</b></label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="w3-input"
                            value={this.state.password}
                            onChange={this.changeHandler}
                            required
                        />

                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;