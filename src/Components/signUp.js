import React from 'react';
import './login.css';
import Axios from 'axios';

const lookup = {
    'e': [],
    'gujarat': [
        { id: 'baroda', name: 'Baroda' },
        { id: 'anand', name: 'Anand' },
        { id: 'ahmdabad', name: 'Ahmdabad' }
    ],
    'maharastra': [
        { id: 'mumbai', name: 'Mumbai' },
        { id: 'pune', name: 'Pune' },
        { id: 'nashik', name: 'Nashik' }
    ]
}

class SingUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            state: 'e'
        }
    }
    getSubType = ({ target: { value } }) => {
        this.setState({ state: value });
        // this.changeHandler();
    };


    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    formSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: this.state.name,
            phone_no: this.state.phone_no,
            email: this.state.email,
            password: this.state.password,
            state: this.state.state,
            city: this.state.city,
            pin_code: this.state.pin_code
        }

        Axios.post('http://localhost:3000/v1/users/register/', data)
            .then(res => {
                if (res.data.message !== undefined) {
                    this.setState({ userRegister: true })
                    this.setState({ error: false })
                }

                if (res.data.error !== undefined) {
                    this.setState({ error: true })
                    this.setState({errMsg:res.data.error})
                    this.setState({ userRegister: false })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const cities = lookup[this.state.state]
        return (
            <div>
                <form
                    className="modal-content animate"
                    method="post"
                    onSubmit={this.formSubmit}
                >
                    <div className="container">

                        <input
                            className="w3-input w3-border w3-light-grey"
                            type="text"
                            placeholder="Enter your name..."
                            name="name"
                            required=""
                            onChange={this.changeHandler}
                            value={this.state.name}
                        />
                        <br />
                        <div className="w3-row-padding">
                            <div className="w3-half">
                                <input
                                    className="w3-input w3-border w3-light-grey"
                                    type="number"
                                    name="phone_no"
                                    placeholder="Enter phone number..."
                                    required=""
                                    onChange={this.changeHandler}
                                    value={this.state.phone_no}
                                />
                            </div>
                            <div className="w3-half">
                                <input
                                    className="w3-input w3-border w3-light-grey"
                                    type="email"
                                    name="email"
                                    placeholder="Enter email..."
                                    onChange={this.changeHandler}
                                    value={this.state.email}
                                />
                            </div>
                        </div>
                        <br />
                        <input
                            className="w3-input w3-border w3-light-grey"
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            required=""
                            onChange={this.changeHandler}
                            value={this.state.password}
                        />
                        <br />
                        <div className="w3-row-padding">
                            <div className="w3-third">
                                <select
                                    className="w3-select"
                                    name="state"
                                    onChange={this.getSubType}
                                    value={this.state.state}
                                    required
                                >
                                    <option value="e" disabled selected>
                                        State{" "}
                                    </option>{" "}
                                    <option value="gujarat"> Gujarat </option>{" "}
                                    <option value="maharastra"> Maharastra </option>{" "}
                                </select>{" "}
                            </div>
                            <div className="w3-third">
                                <select
                                    className="w3-select"
                                    name="city"
                                    onChange={this.changeHandler}
                                    value={this.state.city}
                                    required
                                >
                                    <option value="" disabled selected>
                                        City{" "}
                                    </option>{" "}
                                    {cities.map(city => (
                                        <option key={city.id} value={city.id}>
                                            {" "}
                                            {city.name}{" "}
                                        </option>
                                    ))}{" "}
                                </select>
                            </div>
                            <div className="w3-third">
                                <input
                                    className="w3-input w3-border w3-light-grey"
                                    type="number"
                                    name="pin_code"
                                    placeholder="Enter pin code..."
                                    onChange={this.changeHandler}
                                    value={this.state.pin_code} />
                            </div>
                        </div>
                        <br />
                        {
                        this.state.userRegister &&
                        <div style={{color:'green'}}>You are resisted successfully!!</div>    
                        }
                        {
                        this.state.error &&
                        <div style={{color:'red'}}>{this.state.errMsg}</div>    
                        }
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SingUp;