import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  };

  handleChangeEmail = (e) => {
    const email = e.target.value;
    this.setState({ email }, this.updateSubmitButtonState);
  };

  handleChangePassword = (e) => {
    const password = e.target.value;
    this.setState({ password }, this.updateSubmitButtonState);
  };

  updateSubmitButtonState = () => {
    const { email, password } = this.state;
    const enableSubmit = email.trim() !== "" && password.trim() !== "";
    this.setState({ enableSubmit });
  };


  render() {
    return (
      <React.Fragment>
        <div className={css(styles["App-body"])}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              className={css(styles.input)}
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            <label htmlFor="password">Password:</label>
            <input
              className={css(styles.input)}
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <input type="submit" value="submit" disabled={!this.state.enableSubmit} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2rem",
    height: "45%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  input: {
    margin: "10px",
  },
});

export default Login;
