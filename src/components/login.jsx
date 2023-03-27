import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    onClick={this.props.onClick}
                    icon={faUser}
                    type="fa-solid"
                    color="#000000"
                />
                {/* <h1>Login Form {faUser} </h1> */}
                <input type="text" name="Name" />
                <br />
                <input type="text" name="Password" /> <br />
                <button className="btn btn-primary">Submit</button>
            </React.Fragment>
        );
    }
}

export default Login;
