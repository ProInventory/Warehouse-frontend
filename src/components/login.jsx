import React, { Component } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import bgPattern from "./images/bg-pattern2.jpg";

const Container = styled.div`
    body {
        background-color: #2c3338;
        margin: 0;
        padding: 0;
        font-family: "Helvetica Neue";
        height: 100vh;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        height: 500px;
        background: #e8e8e8;
        background-image: url(${bgPattern});
        background-size: cover;
        background-position: center;
        border-radius: 25px;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease-in-out;
    }

    .center:hover {
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);
    }

    .center form {
        padding: 160px 105px;
        box-sizing: border-box;
    }

    form .txt_field {
        position: relative;
        margin: 15px 0;
    }

    .btn.btn-primary {
        position: relative;
        margin: 8px 40px;
        background-color: purple;
        height: 40px;
        width: 110px;
        border-radius: 5.5px;
        border-color: transparent;
    }

    .btn.btn-primary:hover {
        background-color: #b19cd8;
        border-color: transparent;
    }

    .texts {
        position: relative;
        margin: 0px 65px;
        font-size: 14px;
    }

    input[name="Name"] {
        width: 220px;
        height: 35px;
        position: relative;
        margin: 0px -15px;
        border-radius: 5px;
        border-color: transparent;
        text-align: center;
    }
    input[name="Name"]:focus,
    input[name="Name"]:active {
        outline: none;
    }

    input[name="Password"]:focus,
    input[name="Password"]:active {
        outline: none;
    }

    input[name="Password"] {
        width: 220px;
        height: 35px;
        position: relative;
        margin: 0px -15px;
        border-radius: 5px;
        border-color: transparent;
        font-size: 30px;
        text-align: center;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }
    background-color: #fff;
    padding: 20px;
`;

class Login extends Component {
    handleLogin = (e) => {
        e.preventDefault();
        toast.success("Login Successful");
    };

    render() {
        return (
            <React.Fragment>
                <Container>
                    <div className="center">
                        <form>
                            <div className="txt_field">
                                <div className="texts">
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
                </Container>
            </React.Fragment>
        );
    }
}

export default Login;
