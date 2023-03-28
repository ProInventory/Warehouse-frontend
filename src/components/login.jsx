import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="center">
          <form method="post">
            <div class="txt_field">
              <div class="texts">
                <label>Username</label>
                <br></br>
              </div>
              <input type="text" name="Name" />
              <br />
            </div>
            <div class="txt_field">
              <div class="texts">
                <label>Password</label>
                <br></br>
              </div>
              <input type="text" name="Password" /> <br />
            </div>
            <button className="btn btn-primary">Log In</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
