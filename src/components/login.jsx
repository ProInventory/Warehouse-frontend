import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

class Login extends Component {
    handleLogin = (e) => {
        e.preventDefault();
        toast.success("Login Successful");
    };

    render() {
        return (
            <React.Fragment>
                <div class="center">
                    <form>
                        <div className="txt_field">
                            <div class="texts">
                                <label>Username</label>
                                <br></br>
                            </div>
                            <input type="text" name="Name" />
                            <br />
                        </div>
                        <div className="txt_field">
                            <div className="texts">
                                <label>Password</label>
                                <br></br>
                            </div>
                            <input type="password" name="Password" /> <br />
                        </div>
                        <button
                            onClick={this.handleLogin}
                            className="btn btn-primary"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;
